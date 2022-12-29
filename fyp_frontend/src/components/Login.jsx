import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:9002/user/login", user).then((res) => {
      // alert(res.data);
      // setLoginUser(res.data.user);
      navigate("/dashboard");
    });
  };

  return (
    <div
      className="bg-white rounded-lg items-center p-4 text-center w-100"
      style={{
        boxShadow: "0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)",
      }}
    >
      <h1>Login</h1>
      <input
        className="rounded-lg text-base mx-0 my-2 py-2 px-3 text-black"
        style={{ width: "92%", outline: "none" }}
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
      ></input>
      <input
        className="rounded-lg text-base mx-0 my-2 py-2 px-3 text-black"
        style={{ width: "92%", outline: "none" }}
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
      ></input>
      <div
        className="rounded-lg border-solid border cursor-pointer text-xl mx-0 my-2 p-2 text-white"
        style={{
          background: "#1877f2",
          borderColor: "#1877f2",
          outline: "none",
        }}
        onClick={login}
      >
        Login
      </div>
      <div>or</div>
      <div
        className="rounded-lg border-solid border cursor-pointer text-xl mx-0 my-2 p-2 text-white"
        style={{
          background: "#1877f2",
          borderColor: "#1877f2",
          outline: "none",
        }}
        onClick={() => navigate("/register")}
      >
        Register
      </div>
    </div>
  );
};

export default Login;
