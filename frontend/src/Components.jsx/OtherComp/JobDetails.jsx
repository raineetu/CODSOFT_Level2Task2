import UserDashboard from "./UserDashboard";

function JobDetails() {
    return (
      <>
        {/* Job Header Section */}
        <div className="flex">
          <div className="flex items-center m-6">
            <img
              src="/logo.png"
              className="w-[4vh] md:w-[8vh] h-[8vh]"
              alt="Company Logo"
            />
            <div className="flex flex-col ml-4">
              <h2 className="text-xl md:text-2xl font-bold font-serif">
                Frontend Developer
              </h2>
              <h2 className="text-[15px] md:text-xl font-serif pt-2">
                Dhapasi, Kathmandu
              </h2>
  
              {/* Job Tags */}
              <div className="flex md:flex space-x-2 md:space-x-4 md:pt-4">
                <button className="font-bold font-serif flex w-[12vh] h-[4vh] bg-gray-200 items-center pl-4 rounded-[1vh] shadow-lg">
                  Full-Time
                </button>
                <button className="font-bold font-serif flex w-[12vh] h-[4vh] bg-gray-200 items-center pl-4 rounded-[1vh] shadow-lg">
                  ₹20,000
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Job Description Section */}
        <div className="text-xl md:text-2xl font-bold font-serif mx-[8vh] md:mx-[13vh] mb-4 border-b-2 border-gray-500 pb-2">
          <h2>Job Description</h2>
        </div>
        <p className="mx-[8vh] md:mx-[13vh] mb-6 text-[15px] md:text-lg text-gray-700">
          We are looking for a skilled Frontend Developer to join our dynamic team. The ideal candidate will have experience in HTML, CSS, JavaScript, and React. You will be responsible for building user-friendly interfaces for our web applications.
        </p>
  
        {/* Job Details Section */}
        <div className="mx-[7vh] md:mx-[13vh] space-y-6 text-[15px] md:text-lg text-gray-700">
          {/* Posted Date */}
          <div className="flex items-center">
            <h3 className="font-bold mr-4">Posted:</h3>
            <p>November 10, 2024</p>
          </div>
  
          {/* Position */}
          <div className="flex items-center">
            <h3 className="font-bold mr-4">Position:</h3>
            <p>Frontend Developer</p>
          </div>
  
          {/* Requirements */}
          <div>
            <h3 className="font-bold mb-2">Requirements:</h3>
            <ul className="list-disc ml-8">
              <li>Proficient in HTML, CSS, and JavaScript</li>
              <li>Experience with React and responsive design</li>
              <li>Good understanding of RESTful APIs</li>
              <li>Excellent problem-solving skills</li>
            </ul>
          </div>
  
          {/* Experience */}
          <div className="flex items-center">
            <h3 className="font-bold mr-4">Experience:</h3>
            <p>1-3 years of experience in Frontend Development</p>
          </div>
  
          {/* Salary */}
          <div className="flex items-center">
            <h3 className="font-bold mr-4">Salary:</h3>
            <p>₹20,000 - ₹30,000 per month</p>
          </div>
  
          {/* Apply Button */}
          <div className="mt-8">
            <button className="bg-green-500 text-white p-3 rounded-lg font-bold hover:bg-green-600">
              Apply Now
            </button>
          </div>
        </div>
        <UserDashboard />
      </>
    );
  }
  
  export default JobDetails;
  