import React from "react";

function Navbar() {
  return (
    <>
      <nav className="bg-black p-4 h-14">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-[#ddd] text-xl font-bold">CodePen Clone</span>
          </div>
        </div>
      </nav>
      <div className="bg-gray-800 h-[1px]"></div>
    </>
  );
}

export default Navbar;
