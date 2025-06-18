import React from "react";
import { useForm } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import { Input } from "./Input";

export const ProfileForm: React.FC = () => {
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
          className="flex flex-col justify-center gap-5 w-full"
          action=""
          method="post"
        >
          <div className="flex flex-col items-start gap-1">
            <label htmlFor="firstName">First Name</label>
            <Input
              type="text"
              id="firstName"
              placeholder=""
              style="p-2 border border-gray-300 rounded-md text-gray-500 w-full dark:text-main-100 dark:bg-main-500"
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <label htmlFor="lastName">Last Name</label>
            <Input
              type="text"
              id="lastName"
              placeholder=""
              style="p-2 border border-gray-300 rounded-md text-gray-500 w-full dark:text-main-100 dark:bg-main-500"
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <label htmlFor="email">Email address</label>
            <input
              readOnly
              type="text"
              id="email"
              placeholder="email@domain.com"
              className="p-2 border border-gray-300 rounded-md text-gray-500 w-full dark:text-main-100 dark:bg-main-500"
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <label htmlFor="lastName">Tell us more about you</label>
            <textarea
              id="about"
              placeholder="About"
              className="p-2 border border-gray-300 rounded-md text-gray-500 w-full dark:text-main-100 dark:bg-main-500"
            />
          </div>
          <div className="flex justify-end">
            <button
              className="px-2 py-1 bg-blue-500 dark:bg-background-500 rounded-md text-main-100 w-fit cursor-pointer"
              type="submit"
              onClick={onSubmit}
            >
              Update
            </button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};
