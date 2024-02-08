import React from "react";

const Button = ({ onClick, title, type=null }) => {
  return (
    <div className="button-container w-full h-10 text-[#fff] text-base font-semibold">
      <button
        className="w-full h-full bg-[#4f46e5] hover:bg-[#0075ff] rounded-md"
        onClick={onClick}
        type={type}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
