# 🧩 Form Builder Assignment

A React + Next.js form component that validates user inputs and displays the submitted data on the same page.

---

## 🚀 Tech Stack

- Next.js 
- TypeScript  
- Tailwind CSS  
- Context API for global state management  
- Custom validation logic (no third-party form libraries)

---

## 📋 Features

- Four input fields — Name, Age, Email, and Phone Number  
- Custom validation with clear, inline error messages  
- Context-based data management for global state  
- Reset button clears both form and displayed data  
- Displays submitted data beside the form after successful submission  
- Responsive and clean UI with Tailwind CSS  
- Reusable input component (DRY code structure)

---

## 🧠 Folder Structure

src/  
 ├── app/ → page.tsx (main entry)  
 ├── components/ → Form.tsx, FormInput.tsx, DisplayData.tsx  
 ├── context/ → FormContext.tsx  
 ├── utils/ → validateForm.ts  
 ├── types/ → formTypes.ts  
 └── styles/ → globals.css  

---

## ⚙️ How to Clone and Use

1. Go to your GitHub profile and fork or copy the repository link.  
2. Open your terminal and navigate to the folder where you want to store the project.  
3. Type the command:   
   `https://github.com/AdhilKappil/Next.js-form-builder-assignment.git`
4. Once the cloning is complete, go inside the folder using:  
   `cd form-builder-assignment`  
5. Install all required dependencies by running:  
   `npm install`  
6. Start the project with:  
   `npm run dev`  
7. Open your browser and go to **http://localhost:3000** to view the form.  
8. Fill out the form and submit it — the submitted data will appear beside the form.  
9. Use the reset button to clear both the form inputs and displayed data. 

---

### 🏁 Notes

- No external form libraries such as Formik, React Hook Form, or Yup are used.  
- All validations are implemented manually for better understanding.  
- Project follows clean code standards and TypeScript best practices.
