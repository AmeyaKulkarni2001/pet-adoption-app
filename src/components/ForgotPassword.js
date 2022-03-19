import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { forgot, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      setLoading(true);
      setError("");
      await forgot(email);
      console.log("Email sent succesfully!");
      navigate("/login");
    } catch (err) {
      console.log(err);
      setError(err.message);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
    setLoading(false);
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      {error != "" && <div style={{ color: "red" }}>{error}</div>}
      <button onClick={() => handleClick()}>send email</button>
      <div>
        Don't have an acount?
        <Link to="/signup">Sign Up here</Link>
      </div>
    </div>
  );
}

export default ForgotPassword;
