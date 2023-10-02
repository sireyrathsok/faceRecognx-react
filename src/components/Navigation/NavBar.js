import React from "react";
import AppLogo from "./logo/AppLogo";

const NavBar = ({ switchRouteToSignIn }) => {
  return (
    <div className=" flex justify-between sticky top-0 z-50 mt-2">
      <AppLogo />
      <button
        onClick={switchRouteToSignIn}
        className=" bg-blue-500 hover:bg-blue-700 px-3 h-10 rounded-lg text-white py-2 mb-24"
      >
        Sign Out
      </button>
    </div>
  );
};

export default NavBar;
