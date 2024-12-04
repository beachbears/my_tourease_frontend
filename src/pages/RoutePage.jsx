import React, { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleContainer = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="relative min-h-screen">
      {/* Button */}
      <button
        onClick={toggleContainer}
        className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        {isVisible ? "Hide Container" : "Show Container"}
      </button>
      <div class="flex justify-end">
 <button class="  bg-indigo-500 text-white h-12  w-12 p-1 rounded-full hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
  <span class="flex items-center justify-center text-white text-3xl font-bold">+</span>
</button>
 </div>

      {/* Conditional Container */}
      {isVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-60 flex items-center justify-center">
          <div className="bg-white p-6 w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12 xl:w-5/12 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold text-gray-800">New Container</h2>
            <p className="text-gray-600 mt-2">
              This is the container that appears when you click the button.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
