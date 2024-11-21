import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faRupeeSign,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function RecentJobs() {
  return (
    <>
      <div>
        <h1 className="text-2xl md:text-4xl font-bold font-serif p-6">
          Recent Jobs Available
        </h1>
      </div>

      {/* Job Details Card */}
      <div className="w-[50vh] md:w-[200vh] bg-gray-100 text-black shadow-lg rounded-[1vh] mx-6 mr-12 pb-6">
        {/* Time Badge */}
        <button className="w-[13vh] h-[4vh] bg-yellow-300 text-black shadow-lg rounded-[1vh] ml-[12vh] my-6">
          10 min ago
        </button>

        {/* Job Information */}
        <div className="md:flex p-3 md:px-6">
          <div className="flex items-center">
            <img
              src="/logo.png"
              className="w-[4vh] md:w-[8vh] h-[8vh]"
              alt="Company Logo"
            />
            <div className="flex flex-col ml-4">
              <h2 className=" text-xl md:text-2xl font-bold font-serif">
                Frontend Developer
              </h2>
              <h2 className=" text-[15px] md:text-xl font-serif pt-2">
                Dhapasi, Kathmandu
              </h2>

              {/* Job Details */}
              <div className="md:flex space-x-2 md:space-x-4 md:pt-4">
                <p className="text-[15px] md:text-xl font-serif flex items-center">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="w-3 md:w-5 h-5 mr-2 text-red-500"
                  />
                  Full-Time
                </p>
                <p className="text-[15px] md:text-xl font-serif flex items-center">
                  <FontAwesomeIcon
                    icon={faRupeeSign}
                    className="w-3 md:w-5 h-5 md:mr-2 text-green-500"
                  />
                  20,000
                </p>
                <p className="text-[15px] md:text-xl font-serif flex items-center">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="w-3 md:w-5 h-5 md:mr-2 text-purple-500"
                  />
                  Kathmandu, Nepal
                </p>
              </div>
            </div>
          </div>

          <div className="md:ml-[90vh]">
            <Link to="/jobdetail">
              <button className="text-white bg-green-500 md:w-[15vh] h-9 md:h-11 p-2 font-bold font-serif mt-[2vh] md:mt-[7vh] mr-5">
                Job Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecentJobs;
