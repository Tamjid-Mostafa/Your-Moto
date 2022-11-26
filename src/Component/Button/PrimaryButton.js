import React from "react";

const PrimaryButton = ({ children, classes }) => {
  return (
    <button
      className={`py-3 px-3 rounded-lg text-center transition bg-gradient-to-br from-yellow-500 to-orange-400 hover:to-yellow-600 md:px-8 text-white ${classes}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
