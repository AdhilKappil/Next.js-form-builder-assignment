export interface FormData {
  name: string;
  age: string;
  email: string;
  phone: string;
}

export interface ValidationErrors {
  name?: string;
  age?: string;
  email?: string;
  phone?: string;
}


export interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  maxLength?: number;
}