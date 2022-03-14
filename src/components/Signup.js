import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signup, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      setLoading(true);
      setError("");
      const user = await signup(email, password);
      console.log("Signed up succesfully!");
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
      console.log("user could not signup");
    }
  }, [user]);

  return (
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
      <button onClick={() => handleClick()}>Signup</button>
    </div>
  );
}

export default Signup;
