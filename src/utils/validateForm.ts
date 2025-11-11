import { FormData, ValidationErrors } from "../types/formTypes";

export const validateForm = (formValues: FormData): ValidationErrors => {
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

  return newErrors;
};
