import React from "react";

const FaceRecognition = ({ imgUrl }) => {
  return (
    <div>
      <img alt="Loading..." src={imgUrl} />
    </div>
  );
};

export default FaceRecognition;
