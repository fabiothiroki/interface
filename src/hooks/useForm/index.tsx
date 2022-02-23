import { useState } from "react";

export function useForm(initialState: any) {
  const [form, setForm] = useState(initialState);

  const handleInputChange = (event: any) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  const clear = () => {
    setForm(initialState);
  };

  return [form, handleInputChange, clear];
}
