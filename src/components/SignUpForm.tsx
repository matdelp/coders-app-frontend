import React from "react";
import { useForm } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import { Input } from "./Input";

export const SignUpForm: React.FC = () => {
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={(e) => e.preventDefault()}
          noValidate
          className="flex flex-col items-center justify-center gap-3 w-full"
          action=""
          method="post"
        >
          <Input type="text" id="firstName" placeholder="First Name" />
          <Input type="text" id="lastName" placeholder="Last Name" />
          <Input type="email" id="email" placeholder="Email" />
          <Input type="password" id="password" placeholder="Password" />
          <button
            className="px-2 py-1 bg-blue-500 rounded-md text-main-100 w-full"
            type="submit"
            onClick={onSubmit}
          >
            Sign Up
          </button>
        </form>
      </FormProvider>
    </>
  );
};
