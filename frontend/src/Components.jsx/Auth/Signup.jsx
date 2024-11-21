function Signup() {
    return (
      <>
        <div className="relative flex flex-col items-center justify-center w-[50vh] h-auto bg-white p-8 rounded-lg shadow-2xl border border-gray-200">
          {/* Title */}
          <h2 className="text-4xl text-blue-600 text-center font-bold mb-6">
            Sign up
          </h2>
          
          {/* Form */}
          <form className="w-full">
  
            {/* Name Input */}
            <div className="mb-5">
              <label className="block text-lg text-gray-700 mb-2">
                Name:
              </label>
              <input
                type="name"
                id="name"
                placeholder="Enter your Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            
            {/* Email Input */}
            <div className="mb-5">
              <label className="block text-lg text-gray-700 mb-2">
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
              <label className="block text-lg text-gray-700 mb-2">
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
  
            {/* Phone Number Input */}
            <div className="mb-5">
              <label className="block text-lg text-gray-700 mb-2">
                Phone Number:
              </label>
              <input
                type="phone"
                id="phone"
                placeholder="Enter your Number"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
             {/* Profile Picture Input */}
             <div className="mb-5">
              <label className="block text-lg text-gray-700 mb-2">
                Profile Picture:
              </label>
              <input
                type="file"
                id="profile-picture"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                accept="image/*"
              />
            </div>
  
            {/* Submit Button */}
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
  