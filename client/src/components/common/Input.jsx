import React from "react";

const Input = ({
  value,
  onChange,
  placeholder,
  label,
  name,
  type = "text",
  disabled = false,
  className = "",
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-gray-700 font-medium mb-2">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          disabled ? "bg-gray-100" : ""
        } ${className}`}
      />
    </div>
  );
};

export default Input;
