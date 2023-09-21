import React from "react";
import "./InputlLink.css";

const InputLink = () => {
  return (
    <div className="  w-2/5 px-10 ">
      <p className=" text-white text-lg"> Roth, your current rank is...</p>
      <p className=" text-white text-xl"> #5</p>
      <p className=" my-4">
        This Magic Brain will dectect faces in your pictures. Giv it a try
      </p>
      <div className=" Tilt shadow-md  px-5 py-5">
        <input
          type="text"
          placeholder="Input link here..."
          className=" w-3/4 h-10 px-4 "
        />
        <button className=" w-1/4 h-10   bg-blue-500">Detect</button>
      </div>
    </div>
  );
};

export default InputLink;
