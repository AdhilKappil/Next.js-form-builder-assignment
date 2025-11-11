"use client";
import React from "react";
import Form from "../components/Form";
// import DisplayData from "@/components/DisplayData";
// import { FormProvider } from "@/context/FormContext";

export default function Home() {
  return (
    // <FormProvider>
      <main className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
        <div className="flex flex-col md:flex-row gap-8">
          <Form />
          {/* <DisplayData /> */}
        </div>
      </main>
    /* </FormProvider> */
  );
}
