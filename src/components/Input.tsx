import React from "react";
import { useFormContext } from "react-hook-form";

type InputProps = {
  type: "text" | "password" | "email" | "number";
  id: string;
  placeholder: string;
};

export const Input: React.FC<InputProps> = ({ type, id, placeholder }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const validationRules = {
    required: { value: true, message: "This field is required" },
    ...(type === "email" && {
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Invalid email address",
      },
    }),
    ...(type === "password" && {
      pattern: {
        value:
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,}$/,
        message:
          "Password must contain at least 8 characters, one uppercase, one lowercase, one digit and a special character",
      },
    }),
    ...(type === "text" && {
      minLength: {
        value: 2,
        message: "Name must contain at least 2 characters",
      },
    }),
  };
  return (
    <>
      <input
        className="p-2 bg-background-500 rounded-md text-main-100 w-full"
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(id, validationRules)}
      />
      <p>{errors[id]?.message as string}</p>
    </>
  );
};
