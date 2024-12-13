import { useState } from "react";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    profilePhoto: null,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    // Prepare form data
    const data = new FormData();
    data.append("fullname", formData.name);
    data.append("email", formData.email);
    data.append("phoneNumber", formData.phone);
    data.append("password", formData.password);
    data.append("cpassword", formData.confirmPassword);
    if (formData.profilePhoto) {
      data.append("profilePhoto", formData.profilePhoto);
    }

    try {
      // Send POST request to the backend
      const response = await axios.post("http://localhost:3001/register/signup", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        setMessage("User registered successfully!");
      } else {
        setMessage(response.data.message || "Signup failed");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <>
      <div className="relative flex flex-col items-center justify-center w-[50vh] h-auto bg-white p-8 rounded-lg shadow-2xl border border-gray-200">
        <h2 className="text-4xl text-blue-600 text-center font-bold mb-6">
          Sign up
        </h2>

        {message && (
          <div className="mb-4 text-center text-red-500 font-bold">{message}</div>
        )}

        <form className="w-full" onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-5">
            <label className="block text-lg text-gray-700 mb-2">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-5">
            <label className="block text-lg text-gray-700 mb-2">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-5">
            <label className="block text-lg text-gray-700 mb-2">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="mb-5">
            <label className="block text-lg text-gray-700 mb-2">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <div className="mb-5">
            <label className="block text-lg text-gray-700 mb-2">Phone Number:</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your Number"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="mb-5">
            <label className="block text-lg text-gray-700 mb-2">Profile Picture:</label>
            <input
              type="file"
              name="profilePhoto"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              accept="image/*"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-md transition-all duration-300"
          >
            Sign up
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
