import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <div
      style={{ background: "hsl(226, 25%, 17%)" }}
      className="p-3 rounded-lg shadow-lg flex items-center justify-between "
    >
      <Image src="/images/logo.svg" width={130} height={130} />
      <div
        className="p-3 rounded-md "
        style={{ background: "hsl(225, 23%, 24%)" }}
      >
        <Image src="/images/icon-sun.svg" width={20} height={20} />
      </div>
    </div>
  );
};

export default Header;
