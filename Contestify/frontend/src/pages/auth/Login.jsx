/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = async () => {
    // Frontend validation
    if (email === "") {
      setEmailError("Email is required");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Password must be more than 6 characters");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        { email, password },
        { withCredentials: true }
      );
      console.log(res);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
          />
          {emailError && <p className="text-red-700">{emailError}</p>}
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
            placeholder="Enter your password"
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
            }}
          />
          {passwordError && <p className="text-red-700">{passwordError}</p>}
        </div>

        <button
          onClick={handleLogin}
          className="mt-6 w-full bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
