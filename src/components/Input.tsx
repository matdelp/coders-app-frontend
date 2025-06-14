import React from "react";
import { useFormContext } from "react-hook-form";

type InputProps = {
  type: "text" | "password" | "email" | "number";
  id: string;
  placeholder: string;
};

export const Input: React.FC<InputProps> = ({ type, id, placeholder }) => {
  const { register } = useFormContext();
  return (
    <input
      className="p-2 bg-background-500 rounded-md text-main-100 w-full"
      type={type}
      id={id}
      placeholder={placeholder}
      {...register(id, { required: { value: true, message: "required" } })}
    />
  );
};
