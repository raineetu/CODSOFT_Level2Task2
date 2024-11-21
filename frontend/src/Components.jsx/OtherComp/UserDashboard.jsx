import { FaEnvelope, FaPhone, FaEdit } from "react-icons/fa";

function UserDashboard() {
  return (
    <>
      <div className="md:flex w-[65vh] md:w-[200vh] h-[80vh] m-6 border-2 rounded-[1vh] bg-gray-100">
        {/* left content */}
        <div className="p-6">
          <img
            src="/dream.png"
            className="rounded-full w-[20vh] h-[20vh] ring-4 ring-gray-300 object-cover object-center"
            alt="User Avatar"
          />
          <h1 className="text-2xl font-bold">Neetu Rai</h1>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <h2 className="text-xl">raineetu0070@gmail.com</h2>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <FaPhone />
            <h2 className="text-xl">846513254789</h2>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">Special Skills</h3>
            <ol className="list-disc ml-5 mt-2 pl-5 list-inside">
              <li>Frontend Development</li>
              <li>Backend Development</li>
              {/* Add more skills as needed */}
            </ol>
          </div>
          <button className="w-[13vh] h-[4vh] bg-green-400 flex m-2 p-2 rounded-[1vh] shadow-lg">
            <FaEdit /> Edit Profile
          </button>
        </div>

        {/* right content */}
        <div className="p-6 w-full bg-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-center">Applied Jobs</h2>

          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-300">
                <th className="border px-4 py-2">SN</th>
                <th className="border px-4 py-2">Position</th>
                <th className="border px-4 py-2">Company</th>
                <th className="border px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">Frontend Developer</td>
                <td className="border px-4 py-2">ABC Corp</td>
                <td className="border px-4 py-2">Applied</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2</td>
                <td className="border px-4 py-2">Backend Developer</td>
                <td className="border px-4 py-2">XYZ Ltd</td>
                <td className="border px-4 py-2">Interview Scheduled</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
