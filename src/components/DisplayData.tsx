"use client";
import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";

const DisplayData = () => {
  const { formData } = useContext(FormContext)!;

  if (!formData)
    return (
      <div className="text-gray-500 italic">
        No data submitted yet. Fill out the form and submit.
      </div>
    );

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md">
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
        Submitted Data
      </h2>
      <div className="space-y-2">
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Age:</strong> {formData.age}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
      </div>
    </div>
  );
};

export default DisplayData;
