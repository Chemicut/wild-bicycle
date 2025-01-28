import React from "react";
import logo from "../../../assets/images/logo-horizontal.svg";

const Logo = () => {
  return (
    <div className="flex items-center">
      <img src={logo} alt="Wild Bicycle" className="w-56 h-auto" />
    </div>
  );
};

export default Logo;
