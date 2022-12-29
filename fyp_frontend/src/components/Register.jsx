import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios.post("http://localhost:9002/user/register", user).then((res) => {
        console.log("console" + res.data.message);
        navigate("/login");
      });
    } else {
      alert("invlid input");
    }
  };

  return (
    <div
      className="bg-white rounded-lg items-center p-4 text-center w-100"
      style={{
        boxShadow: "0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)",
      }}
    >
      {console.log("User", user)}
      <h1>Register</h1>
      <input
        className="rounded-lg text-base mx-0 my-2 py-2 px-3 text-black"
        style={{ width: "92%", outline: "none" }}
        type="text"
        name="name"
        value={user.name}
        placeholder="Your Name"
        onChange={handleChange}
      ></input>
      <input
        className="rounded-lg text-base mx-0 my-2 py-2 px-3 text-black"
        style={{ width: "92%", outline: "none" }}
        type="text"
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={handleChange}
      ></input>
      <input
        className="rounded-lg text-base mx-0 my-2 py-2 px-3 text-black"
        style={{ width: "92%", outline: "none" }}
        type="password"
        name="password"
        value={user.password}
        placeholder="Your Password"
        onChange={handleChange}
      ></input>
      <input
        className="rounded-lg text-base mx-0 my-2 py-2 px-3 text-black"
        style={{ width: "92%", outline: "none" }}
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter Password"
        onChange={handleChange}
      ></input>
      <div
        className="rounded-lg border-solid border cursor-pointer text-xl mx-0 my-2 p-2 text-white"
        style={{
          background: "#1877f2",
          borderColor: "#1877f2",
          outline: "none",
        }}
        onClick={register}
      >
        Register
      </div>
      <div>or</div>
      <div
        className="rounded-lg border-solid border cursor-pointer text-xl mx-0 my-2 p-2 text-white"
        style={{
          background: "#1877f2",
          borderColor: "#1877f2",
          outline: "none",
        }}
        onClick={() => navigate("/login")}
      >
        Login
      </div>
    </div>
  );
};

export default Register;
