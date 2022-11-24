import React from "react";

const PrimaryButton = ({ children, classes }) => {
  return (
    <button
      className={`mx-auto py-3 px-6 rounded-lg text-center transition bg-gradient-to-br from-yellow-500 to-orange-400 hover:to-yellow-600 md:px-12 ${classes}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
