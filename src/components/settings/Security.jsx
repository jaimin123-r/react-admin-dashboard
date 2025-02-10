import { Lock } from "lucide-react";
import SettingSection from "./SettingSection";
import ToggleSwitch from "./ToggleSwitch";
import { useState } from "react";

const Security = () => {
	const [twoFactor, setTwoFactor] = useState(false);

	return (
		<SettingSection icon={Lock} title={"Security"}> <br />
			 {/* Password Management Section */}
			 <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <h4 className="text-lg font-semibold text-gray-100 mb-4">Password Management</h4>

        <div className="mb-4">
          <label className="text-gray-400 block mb-1">Current Password</label>
          <input
            type="password"
            placeholder="Enter current password"
            className="w-full p-2 bg-gray-700 border-gray-950 rounded-lg text-gray-100"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-400 block mb-1">New Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            className="w-full p-2 bg-gray-700 border-gray-950 rounded-lg text-gray-100"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-400 block mb-1">Confirm New Password</label>
          <input
            type="password"
            placeholder="Confirm new password"
            className="w-full p-2 bg-gray-700 border-gray-950 rounded-lg text-gray-100"
          />
        </div>

        <button className="bg-green-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200">
          Change Password
        </button>
      </div>
		</SettingSection>
	);
};
export default Security;
