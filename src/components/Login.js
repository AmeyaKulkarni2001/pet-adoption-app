import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {login, user} = useContext(AuthContext);
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
    <div>
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      {error != "" && <div style={{ color: "red" }}>{error}</div>}
      <button
        onClick={() => handleClick()}>
          login
      </button>
      <div>
        Don't have an acount?
        <Link to="/signup">Sign Up here</Link>
      </div>
      
    </div>
  );
}

export default Login;
