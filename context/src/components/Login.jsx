import React, { useContext, useState } from "react";
import UserContext from "../contextapi/UserContext";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name, password });
  };
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const { setUser } = useContext(UserContext);
  return (
    <>
      <h2>LOGIN</h2>
      <input
        className="bg-teal-400 m-3"
        type="text"
        placeholder="username"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <input
        className="bg-teal-400 m-3"
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="px-3 py-2 bg-cyan-400 rounded-md m-3"
      >
        Submit
      </button>
    </>
  );
};

export default Login;
