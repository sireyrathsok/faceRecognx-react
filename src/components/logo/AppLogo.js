import React from "react";
import Tilt from "react-parallax-tilt";
import "./AppLogo.css";

const AppLogo = () => {
  return (
    <Tilt className=" Tilt h-36 w-36 mt-2   shadow-md">
      <div>
        <img
          className=" w-32 h-32 pt-5 pl-4 "
          alt="logo"
          src={require("./brain.png")}
        />
      </div>
    </Tilt>
  );
};

export default AppLogo;
