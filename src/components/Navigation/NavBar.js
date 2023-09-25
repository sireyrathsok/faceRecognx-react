import React from "react";
import AppLogo from "./logo/AppLogo";

const NavBar = ({ onSignOutClicked }) => {
  return (
    <div className=" flex justify-between">
      <AppLogo />
      <button
        onClick={onSignOutClicked}
        className=" bg-blue-500 hover:bg-blue-700 px-3 h-10 rounded-lg text-white py-2 mb-24"
      >
        Sign Out
      </button>
    </div>
  );
  // return(
  //   {
  //     if(logInSuccessful==="yes") (
  //       <div>
  //         <AppLogo />
  //         <button className=" bg-blue-500 hover:bg-blue-700 px-3 h-10 rounded-lg text-white py-2 mb-24">
  //           Sign Out
  //         </button>
  //       </div>
  //     ) : (
  //       <AppLogo />
  //     );
  //   }
  // )
};

export default NavBar;
