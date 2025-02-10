import { Moon, Sun, CircleUserRound } from "lucide-react";
import React, { useState } from "react";

const Header = ({ title }) => {
  const [isSunMode, setIsSunMode] = useState(true);

  const toggleMode = () => {
    setIsSunMode(!isSunMode);
  };
  return (
    <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-100">{title}</h1>
        <div className="flex items-center gap-2">
          {/* <button onClick={() => setMode(Mode === <Sun /> ? <Moon /> : <Sun />)}>{Mode}</button> */}
          <button
            onClick={toggleMode}
            className="flex items-center p-2 bg-gray-600 rounded-xl hover:bg-gray-300 transition"
          >
            {isSunMode ? (
              <Sun className="text-yellow-500 w-7 h-7" />
            ) : (
              <Moon className="text-blue-500 w-7 h-7" />
            )}
            {/* <span className="ml-2 text-gray-800">
              {isSunMode ? "Sun Mode" : "Moon Mode"}
            </span> */}
          </button>
          <button className="flex items-center p-2 bg-gray-600 rounded-xl hover:bg-gray-300 transition">
            <CircleUserRound className="text-slate-950 w-7 h-7 "/>
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
