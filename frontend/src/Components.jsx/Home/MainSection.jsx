import { FaSearch } from "react-icons/fa";
import Navbar from "../SharedLayout/Navbar";

function MainSection() {
  return (
    <>
    <div className="relative w-full h-[80vh] flex flex-col items-center bg-gray-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-85 h-[80vh]"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/person-working-laptop-cafe-with-cup-coffee_14117-1193413.jpg')",
        }}
      />

      {/* Navbar */} 
       <div className="relative z-20 w-full">
        <Navbar />
      </div>

      {/* Main Content Section */}
      <div className="relative z-10 mt-[10vh] flex flex-col items-center">
        <button className="bg-green-400 text-white w-[40vh] md:w-[30vh] h-[5vh] font-bold rounded-[4px] shadow-lg">
          No.1 Job Hunting Website
        </button>

        <h1 className="text-gray-700 text-3xl md:text-8xl font-serif mt-[4vh] md:mt-[6vh] text-white ">
          Land Your <span className="text-red-400">Dream Job !!!</span>
        </h1>

        {/* Search Bar */}
        <div className="relative w-[70vw] md:w-[60vh] mt-[6vh] md:mt-[8vh]">
          <input
            type="text"
            placeholder="Search for jobs..."
            className="w-full h-[6vh] md:h-[8vh] pl-4 pr-12 rounded-[10px] shadow-xl bg-gray-200 text-black text-base md:text-lg focus:outline-none"
          />
          {/* Search Icon */}
          <FaSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-blue-500 text-xl md:text-2xl cursor-pointer" />
        </div>
      </div>
    </div>
          

    </>
  );
}

export default MainSection;
