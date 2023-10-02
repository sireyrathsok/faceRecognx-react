import React from "react";
import Tilt from "react-parallax-tilt";
import "./AppLogo.css";

const AppLogo = () => {
  return (
    <Tilt className=" Tilt h-32 w-32 rounded-sm shadow-md">
      <div>
        <img
          className=" w-28 h-28 pt-4 pl-4 "
          alt="logo"
          src={require("./brain.png")}
        />
      </div>
    </Tilt>
  );
};

export default AppLogo;
