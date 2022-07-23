import axios from "axios";
import React, { useState } from "react";

const LoginExample = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dataUser, setDataUser] = useState({});

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Form tidak boleh kosong");
      return;
    }

    const dataLogin = {
      email,
      password,
    };

    console.log("dataLogin: ", dataLogin);

    try {
      const login = await axios.post("/api/auth/login", dataLogin);
      console.log("success login: ", login.data);
    } catch (err) {
      console.log("error login: ", err);
    }
  };

  const handleLogout = async () => {
    try {
      const logout = await axios.post("/api/auth/logout", {});
      console.log("success logout: ", logout.data);
    } catch (err) {
      console.log("error logout: ", err);
    }
  };

  const handleGetUserInfo = async () => {
    try {
      const response = await axios.get("/api/user");
      setDataUser(response.data);
      console.log("user: ", response.data);
    } catch (err) {
      setDataUser(err.response.data);
      console.log("error get user: ", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center p-4">
      <div className="flex flex-col lg:flex-row space-x-0 space-y-4 lg:space-x-4 lg:space-y-0 max-w-screen-md mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-lg ">
          <div className="mb-4">
            <h2 className="text-gray-800 font-bold text-3xl">Welcome</h2>
            <p className="text-gray-600 text-sm">Login to continue!</p>
          </div>
          <label className="flex flex-col mb-2">
            <span className="text-gray-600 text-sm">Email</span>
            <input
              className="mt-1 border border-gray-400 rounded-xl px-2 py-2 focus:outline-red-400"
              type="email"
              placeholder="input email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="flex flex-col mb-2">
            <span className="text-gray-600 text-sm">Password</span>
            <input
              className="mt-1 border border-gray-400 rounded-xl px-2 py-2 focus:outline-red-400"
              type="password"
              placeholder="input password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            className="bg-red-400 flex flex-col items-center w-full mt-4 px-4 py-2 rounded-xl text-white hover:bg-gray-900 active:scale-95 transition transform duration-150 ease-in-out"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            className="bg-red-400 flex flex-col items-center w-full mt-4 px-4 py-2 rounded-xl text-white hover:bg-gray-900 active:scale-95 transition transform duration-150 ease-in-out"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="mb-4">
            <h2 className="text-gray-800 font-bold text-3xl">User Info</h2>
            <p className="text-gray-600 text-sm">
              User information and status!
            </p>
          </div>
          <button
            className="bg-red-400 flex flex-col items-center w-full mt-4 px-4 py-2 rounded-xl text-white hover:bg-gray-900 active:scale-95 transition transform duration-150 ease-in-out"
            onClick={handleGetUserInfo}
          >
            Get User
          </button>
          <div className="max-w-md overflow-auto">
            <pre>
              <code>{JSON.stringify(dataUser, null, 2)}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginExample;
