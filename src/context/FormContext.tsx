"use client";
import React, { createContext, useState, ReactNode } from "react";
import { FormData } from "../types/formTypes";

interface FormContextType {
  formData: FormData | null;
  setFormData: React.Dispatch<React.SetStateAction<FormData | null>>;
}

export const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData | null>(null);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
