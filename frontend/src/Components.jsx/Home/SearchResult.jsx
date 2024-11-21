function SearchResult() {
  return (
    <>
      <div>
        <h1 className="font-bold text-3xl text-center">Search Result(1)</h1>
      </div>
      <div className="w-[50vh] md:w-[50vh] bg-gray-100 text-black shadow-lg rounded-[1vh] mx-6 mr-12 pb-6">
      <button className="w-[13vh] h-[4vh] bg-yellow-300 text-black shadow-lg rounded-[1vh] ml-[3vh] my-6">
          10 min ago
        </button>
        {/* Job Information */}
        <div className="md:flex flex-col  p-3 md:px-6">
          <div className=" flex items-center">
            <img
              src="/logo.png"
              className="w-[4vh] md:w-[8vh] h-[8vh]"
              alt="Company Logo"
            />
            <h2 className="text-2xl font-bold">Company Name</h2>
          </div>

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
                Full-Time
              </p>
              <p className="text-[15px] md:text-xl font-serif flex items-center">
                20,000
              </p>
              <p className="text-[15px] md:text-xl font-serif flex items-center">
                Kathmandu, Nepal
              </p>
            </div>
          </div>
            <button className="text-white bg-green-500 md:w-[15vh] h-9 md:h-11 p-2 font-bold font-serif mt-[2vh] md:mt-[4vh] mr-5">
              Job Details
            </button>
            
          </div>
        </div>
    </>
  );
}

export default SearchResult;
