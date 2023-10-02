import React from "react";
import "./InputlLink.css";
import FaceRecognition from "../FaceRecognition/FaceRecognition";

const InputLink = ({ onInputChange, onSubmitBtn, imgUrl }) => {
  return (
    <div className="w-full max-w-2xl">
      <p className=" text-white text-lg"> Roth, your current rank is...</p>
      <p className=" text-white text-xl"> #5</p>
      <p className=" my-4">
        This Magic Brain will dectect faces in your pictures. Giv it a try
      </p>
      <div className=" Tilt shadow-sm rounded-md">
        <div className=" shadow-md  px-5 py-5">
          <input
            type="text"
            placeholder="Input link here..."
            className=" w-3/4 h-10 px-4 rounded-sm "
            onChange={onInputChange}
          />
          <button
            onClick={onSubmitBtn}
            className=" w-1/4 h-10 cursor-pointer rounded-sm bg-blue-500 hover:text-white"
          >
            Detect
          </button>
        </div>
        <div className=" flex justify-center ">
          <FaceRecognition imgUrl={imgUrl} />
        </div>
      </div>
    </div>
  );
};

export default InputLink;
