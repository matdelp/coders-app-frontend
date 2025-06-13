import React from "react";

export const SignInForm: React.FC = () => {
  return (
    <>
      <form
        className="flex flex-col items-center justify-center gap-3 w-full"
        action=""
        method="post"
      >
        <input
          className="p-2 bg-background-500 rounded-md text-main-100 w-full"
          type="email"
          id="email"
          placeholder="Email"
        />
        <input
          className="p-2 bg-background-500 rounded-md text-main-100 w-full"
          type="password"
          id="password"
          placeholder="Password"
        />
        <button
          className="px-2 py-1 bg-blue-500 rounded-md text-main-100 w-full"
          type="submit"
        >
          Log In
        </button>
      </form>
    </>
  );
};
