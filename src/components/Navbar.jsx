import React from "react";
import Button from "./Button";

const navItems = [
  { label: "Home" },
  { label: "Work", active: true },
  { label: "Culture" },
  { divider: true },
  { label: "News" }
];

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 flex justify-between items-center font-['satoshi'] border-b border-gray-700">
      
      {/* LEFT  */}
      <div className="flex items-center">
        
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="logo"
          className="h-8"
        />

          <div className="hidden md:flex gap-10 ml-20">
          {navItems.map((item, idx) => {
            
            if (item.divider) {
              return (
                <span 
                  key={idx} 
                  className="w-px h-5 bg-zinc-400"
                />
              );
            }

            return (
              <a 
                key={idx} 
                href="#" 
                className="flex items-center gap-2 text-sm hover:text-white transition"
              >
                {item.active && (
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_#4ade80]" />
                )}

                <span>{item.label}</span>
              </a>
            );
          })}
        </div>

      </div>

      {/* RIGHT SIDE */}
      <Button />

    </div>
  );
};

export default Navbar;