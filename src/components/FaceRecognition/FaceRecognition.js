import React from "react";

const FaceRecognition = ({ imgUrl }) => {
  return (
    <div className=" mt-5   bg-white">
      <img alt="Loading..." src={imgUrl} />
    </div>
  );
};

export default FaceRecognition;
