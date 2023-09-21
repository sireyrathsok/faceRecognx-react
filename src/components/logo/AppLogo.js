import React from "react";
import Tilt from "react-parallax-tilt";
import "./AppLogo.css";

const AppLogo = () => {
  return (
    <Tilt className=" Tilt h-44 w-44 mt-2   shadow-md">
      <div>
        <img
          className=" w-36 h-36 pt-6 pl-4 "
          alt="logo"
          src={require("./brain.png")}
        />
      </div>
    </Tilt>
  );
};

export default AppLogo;
