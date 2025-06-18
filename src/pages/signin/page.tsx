//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Signin Page</title>

import React from "react";
import {
  SignSharedlayout,
  type SignPagesProp,
} from "../../layout/SignSharedlayout";
import { SignInForm } from "../../components/Authentication/SignInForm";

export const SignInPage: React.FC = () => {
  const signInProps: SignPagesProp = {
    children: <SignInForm />,
    title: "Join Coders now !",
    message: "New to code CLA?",
    link: "Sign Up",
    path: "/signup",
  };
  return <SignSharedlayout {...signInProps} />;
};
