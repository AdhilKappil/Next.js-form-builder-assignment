"use client";
import React, { useState, useContext } from "react";
import { FormData, ValidationErrors } from "../types/formTypes";
import { FormContext } from "../context/FormContext";
import FormInput from "./FormInput";
import { validateForm } from "../utils/validateForm";

const Form = () => {
    const { setFormData } = useContext(FormContext)!;
    const [formValues, setFormValues] = useState<FormData>({
        name: "",
        age: "",
        email: "",
        phone: "",
    });
    const [errors, setErrors] = useState<ValidationErrors>({});


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors: ValidationErrors = validateForm(formValues);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setFormData(formValues);
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
            className="bg-white rounded-2xl p-5 w-full"
        >
            <h2 className="text-2xl font-semibold text-gray-700 text-center">
                Form Builder
            </h2>

            <FormInput
                label="Name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                error={errors.name}
                maxLength={50}
            />

            <FormInput
                label="Age"
                name="age"
                type="number"
                value={formValues.age}
                onChange={handleChange}
                error={errors.age}
            />

            <FormInput
                label="Email"
                name="email"
                type="email"
                value={formValues.email}
                onChange={handleChange}
                error={errors.email}
            />

            <FormInput
                label="Phone"
                name="phone"
                type="text"
                value={formValues.phone}
                onChange={handleChange}
                error={errors.phone}
                maxLength={10}
            />

            <div className="flex justify-between pt-4">
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                >
                    Submit
                </button>
                <button
                    type="button"
                    onClick={handleReset}
                    className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg transition"
                >
                    Reset
                </button>
            </div>
        </form>
    );
};

export default Form;
