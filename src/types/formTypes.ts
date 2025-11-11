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
