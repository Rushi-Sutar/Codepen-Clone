import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <div className="bg-[#373636] h-[50%] md:h-[75%] w-[90%] md:w-[65%] rounded-2xl">
        <div className="flex gap-1 m-4">
          <div className="h-4 w-4 bg-[#ED5424] rounded-full"></div>
          <div className="h-4 w-4 bg-[#F0C74C] rounded-full"></div>
          <div className="h-4 w-4 bg-[#47DC69] rounded-full"></div>
        </div>
          <div className="flex justify-center items-center h-[20%] md:h-[18%]">
            <h1 className="font-bold text-3xl md:text-5xl bg-gradient-to-b from-white to-[#b3b3b3] inline-block text-transparent bg-clip-text">Codepen-Clone</h1>
          </div>
          <div className="flex justify-center items-center h-[20%] md:h-[18%]">
            <h2 className="font-bold text-lg md:text-2xl bg-gradient-to-b from-white to-[#b3b3b3] inline-block text-transparent bg-clip-text">Create & Test Your Frontend Code Snippets</h2>
          </div>
          <div className="flex justify-evenly items-center h-[20%] md:h-[18%] w-[70%] mx-auto md:my-4">
            <img src="/html.png" alt="" className="w-12 md:w-16" />
            <img src="/css.png" alt="" className="w-14 md:w-16" />
            <img src="/js.png" alt="" className="w-12 md:w-16" />
              </div>
              <div className="flex justify-center items-center h-[20%] md:h-[18%]">
            <Link to={'/editor'} className="bg-[#178F1C] text-white px-5 py-2 md:px-8 md:py-3 rounded-md text-center font-bold text-sm">New Pen +</Link>
          </div>
        </div>
      </div>
  );
}

export default Hero;
