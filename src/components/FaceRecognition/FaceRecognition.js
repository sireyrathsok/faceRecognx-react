import React from "react";

const FaceRecognition = ({ IMAGE_URL }) => {
  return (
    <div className=" mt-5   bg-white">
      <img alt="Loading..." src={IMAGE_URL} />
    </div>
  );
};

export default FaceRecognition;
