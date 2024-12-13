import { useState } from "react";
import axios from "axios";


function Login() {
   const [logindata, setLoginData] = useState({
    email: "",
    password: "",
    role: "",
   });

   const [message, setMessage] = useState("");
    const handleChange = (e) =>{
      const {name, value} = e.target;
      setLoginData({
        ...logindata,
      });
    };

    const data = new logindata();
    data.append("email", )

  return (
    <div className="relative flex flex-col items-center justify-center w-[80vw] max-w-[40vh] h-auto bg-white p-8 rounded-lg shadow-2xl border border-gray-200">
      {/* Title */}
      <h2 className="text-4xl text-blue-600 text-center font-bold mb-6">
        Login
      </h2>
      
      {/* Form */}
      <form className="w-full">
        {/* Email Input */}
        <div className="mb-5">
          <label htmlFor="email" className="block text-lg text-gray-700 mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-5">
          <label htmlFor="password" className="block text-lg text-gray-700 mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Role Selection */}
        <div className="mb-5">
          <label htmlFor="role" className="block text-lg text-gray-700 mb-2">
            Role:
          </label>
          <select
            id="role"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="applicant">Applicant</option>
            <option value="recruiter">Recruiter</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-md transition-all duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
