"use client";
import React, { useState, useContext } from "react";
import { FormData, ValidationErrors } from "../types/formTypes";
import { FormContext } from "../context/FormContext";

const Form = () => {
      const { setFormData } = useContext(FormContext)!;
    const [formValues, setFormValues] = useState<FormData>({
        name: "",
        age: "",
        email: "",
        phone: "",
    });
    const [errors, setErrors] = useState<ValidationErrors>({});

    const validate = (): boolean => {
        const newErrors: ValidationErrors = {};

        // ✅ Name validation
        if (!formValues.name.trim()) {
            newErrors.name = "Name is required";
        } else if (formValues.name.length < 2 || formValues.name.length >50) {
            newErrors.name = "Name must between 2 - 50 characters";
        }

        // ✅ Age validation
        if (!formValues.age.trim()) {
            newErrors.age = "Age is required";
        } else if (isNaN(Number(formValues.age))) {
            newErrors.age = "Age must be a number";
        } else if (Number(formValues.age) < 0) {
            newErrors.age = "Age cannot be negative";
        } else if (Number(formValues.age) > 120)
        newErrors.age = "Age must be less than 120";

        // ✅ Email validation
        if (!formValues.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
            newErrors.email = "Enter a valid email address";
        }

        // ✅ Phone validation
        if (!formValues.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^(?!.*(\d)\1{9})\d{10}$/.test(formValues.phone)) {
            newErrors.phone = "Enter a valid 10-digit phone number";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
              setFormData(formValues);
            setFormValues({ name: "", age: "", email: "", phone: "" });
            setErrors({});
        }
    };

    const handleReset = () => {
        setFormValues({ name: "", age: "", email: "", phone: "" });
        setFormData(null);
        setErrors({});
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="grid gap-2 p-5 w-100"
        >
            <h2 className="text-2xl font-semibold text-gray-700 text-center">
                Form Builder
            </h2>

            <div>
                <label className="block text-gray-600 font-medium">Name</label>
                <input
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    className="border p-2 w-full rounded-md focus:outline-none focus:ring"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div>
                <label className="block text-gray-600 font-medium">Age</label>
                <input
                    type="text"
                    name="age"
                    value={formValues.age}
                    onChange={handleChange}
                    className="border p-2 w-full rounded-md focus:outline-none focus:ring"
                />
                {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
            </div>

            <div>
                <label className="block text-gray-600 font-medium">Email</label>
                <input
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    className="border p-2 w-full rounded-md focus:outline-none focus:ring"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div>
                <label className="block text-gray-600 font-medium">Phone</label>
                <input
                    type="text"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleChange}
                    className="border p-2 w-full rounded-md focus:outline-none focus:ring"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            <div className="flex justify-between mt-4">
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                    Submit
                </button>
                <button
                    type="button"
                    onClick={handleReset}
                    className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
                >
                    Reset
                </button>
            </div>
        </form>
    );
};

export default Form;
