import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto py-6  flex justify-between font-['satoshi'] border-b border-gray-700">
      <div className="flex items-center">
        <img
        src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
        alt="logo"
      />
      <div className="links flex gap-10 ml-20">
        {["Home", "Work", "Culture","","News"].map((elem, idx) => (
          <a key={idx} href="#" className="flex items-center gap-2">
            {elem.length === 0 ? <span className="w-px h-5 bg-zinc-400 "></span>: <a/>}
            {idx === 1 && (
              <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_#4ade80]"></span>
            )}

            <span>{elem}</span>
          </a>
        ))}
      </div>
      </div>
      <Button/>
    </div>
  );
};

export default Navbar;
