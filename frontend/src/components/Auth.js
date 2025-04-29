import React, { useState } from "react";
import axios from "axios";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail]   = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const endpoint = isLogin ? "login" : "register";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/${endpoint}`,
        { email, password }
      );
      setMsg(res.data.token ? "Login successful!" : res.data.message);
      if (res.data.token) localStorage.setItem("token", res.data.token);
    } catch (err) {
      setMsg(err.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email" placeholder="Email"
          value={email} onChange={e => setEmail(e.target.value)}
          required style={{ width:"100%", padding:8, margin:"8px 0" }}
        />
        <input
          type="password" placeholder="Password"
          value={password} onChange={e => setPassword(e.target.value)}
          required style={{ width:"100%", padding:8, margin:"8px 0" }}
        />
        <button type="submit" style={{ padding:8, width:"100%" }}>
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
      <p>{msg}</p>
      <button
        onClick={() => { setIsLogin(!isLogin); setMsg(""); }}
        style={{ marginTop: 12, background: "none", border: "none", color: "blue", cursor: "pointer" }}
      >
        {isLogin ? "Need an account? Register" : "Have an account? Login"}
      </button>
    </div>
  );
};

export default Auth;
