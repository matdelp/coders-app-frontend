import React from "react";

type InputProps = {
    type:"text" | "password" | "email" | "number",
    id: string
    placeholder: string
}

export const Input: React.FC<InputProps> = ({ type, id, placeholder }) => {
  return (
    <input
      className="p-2 bg-background-500 rounded-md text-main-100 w-full"
      type={type}
      id={id}
      placeholder={placeholder}
    />
  );
};
