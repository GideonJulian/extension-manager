import React from "react";
import Image from "next/image";
const Header = ({onToggleTheme, isLightMode }) => {
  return (
    <div
 
     className={`p-3 rounded-lg shadow-lg flex items-center justify-between transition-colors duration-300 ${
        isLightMode ? "bg-white" : "bg-[hsl(226,25%,17%)] text-white"
      }`}
    >
    
      <Image src="/images/logo.svg" width={130} height={130} />
      <button
        className="p-3 rounded-md "
        style={{ background: "hsl(225, 23%, 24%)" }}
        onClick={onToggleTheme }
      >
        <Image src="/images/icon-sun.svg" width={20} height={20}  />
      </button>
    </div>
  );
};

export default Header;
