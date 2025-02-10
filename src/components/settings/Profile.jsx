import { User } from "lucide-react";
import SettingSection from "./SettingSection";

const Profile = () => {
  return (
    <SettingSection icon={User} title={"Profile Settings"}>
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row items-center mb-8">
        <img
          src="https://randomuser.me/api/portraits/men/3.jpg"
          alt="Profile"
          className="rounded-full w-24 h-24 object-cover mr-6"
        />

        <div>
          <h3 className="text-xl font-semibold text-gray-100">Jaimin Rathod</h3>
          <p className="text-gray-400">jaiminconnect@gmail.com</p>
          <p className="text-gray-400">+1 234 567 890</p>
        </div>
      </div>

      {/* Edit Profile Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <h4 className="text-lg font-semibold text-gray-100 mb-4">Edit Profile</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="text-gray-400 block mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Jaimin Rathod"
              className="w-full p-2 bg-gray-700 rounded text-gray-100"
            />
          </div>

          <div>
            <label className="text-gray-400 block mb-1">Email</label>
            <input
              type="email"
              placeholder="jaiminconnect@gmail.com"
              className="w-full p-2 bg-gray-700 rounded text-gray-100"
            />
          </div>

          <div>
            <label className="text-gray-400 block mb-1">Phone</label>
            <input
              type="tel"
              placeholder="+1 234 567 890"
              className="w-full p-2 bg-gray-700 rounded text-gray-100"
            />
          </div>

          <div>
            <label className="text-gray-400 block mb-1">City</label>
            <input
              type="text"
              placeholder="City"
              className="w-full p-2 bg-gray-700 rounded text-gray-100"
            />
          </div>

          <div>
            <label className="text-gray-400 block mb-1">State</label>
            <input
              type="text"
              placeholder="State"
              className="w-full p-2 bg-gray-700 rounded text-gray-100"
            />
          </div>

          <div>
            <label className="text-gray-400 block mb-1">Country</label>
            <input
              type="text"
              placeholder="Country"
              className="w-full p-2 bg-gray-700 rounded text-gray-100"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="text-gray-400 block mb-1">Profile Image</label>
          <input
            type="file"
            className="w-full bg-gray-700 rounded text-gray-100 p-2"
          />
        </div>

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 mt-6">
          Save Changes
        </button>
      </div>

     

      {/* Login History Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h4 className="text-lg font-semibold text-gray-100 mb-4">Login History</h4>

        <table className="w-full text-left text-gray-400">
          <thead>
            <tr>
              <th className="pb-2">Date</th>
              <th className="pb-2">Time</th>
              <th className="pb-2">IP Address</th>
              <th className="pb-2">Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">2025-01-25</td>
              <td className="py-2">12:34 PM</td>
              <td className="py-2">192.168.1.1</td>
              <td className="py-2">New York, USA</td>
            </tr>
            <tr>
              <td className="py-2">2025-01-24</td>
              <td className="py-2">09:15 AM</td>
              <td className="py-2">192.168.1.2</td>
              <td className="py-2">Los Angeles, USA</td>
            </tr>
          </tbody>
        </table>
      </div>
    </SettingSection>
  );
};

export default Profile;
