import React from "react";

function Input({ placeholder, label, value, type, name, onChangeHandler }) {
  return (
    <div>
      <label className="leading-loose">{label}</label>
      <input
        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-white bg-gray-600"
        placeholder={placeholder}
        value={value}
        name={name}
        type={type}
        onChange={(e) => {
          onChangeHandler(e);
        }}
      />
    </div>
  );
}

export default Input;
