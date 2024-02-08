import React from "react";
import { FaStarOfLife } from "react-icons/fa";

const InputField = ({
  label,
  onChange,
  name,
  value,
  type,
  required = false
}) => {
  return (
    <div className="input-container w-full text-base flex items-start justify-start flex-col gap-1.5 font-semibold">
      <label className="flex items-center justify-start gap-2">
        {label}
        {required && <FaStarOfLife fontSize="8px" color="#aa0000"/>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        className="w-full h-10 bg-[#fff] border-2 pl-4 rounded-md focus-visible:outline-[#4f46e5] text-sm"
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputField;
