import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";
import "./Form.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      setLoading(true);
      setError("");
      await login(email, password);
      console.log("Logged in succesfully!");
    } catch (err) {
      console.log(err);
      setError(err.message);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    } else {
      console.log("user not logged in");
    }
  }, [user]);

  return (
    <div className="login-page">
      <div className="form">
        <div>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error != "" && <div style={{ color: "red" }}>{error}</div>}
          <button className="login-btn" onClick={() => handleClick()}>
            login
          </button>

          <div className="message">
            Don't have an account?
            <Link className="message signup" to="/signup">
              Sign Up Here
            </Link>
          </div>
          <div>
            <Link className="message fp" to="/forgotpassword">
              Forgot password
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
