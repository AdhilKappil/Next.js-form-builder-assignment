"use client";
import React from "react";
import { FormInputProps } from "../types/formTypes";

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  maxLength,
}) => {
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={name} className="font-medium text-gray-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        className={`border rounded-lg px-3 py-2 focus:outline-none ${
          error ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-400"
        }`}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FormInput;
