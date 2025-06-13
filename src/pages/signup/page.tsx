//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Signin Page</title>

import React from "react";
import { SignUpForm } from "../../components/signUpForm";
import {
  SignSharedlayout,
  type SignPagesProp,
} from "../../layout/SignSharedlayout";

export const SignUpPage: React.FC = () => {
  const signUpProps: SignPagesProp = {
    children: <SignUpForm />,
    title: "Join Coders now !",
    message: "Already have an account?",
    link: "Login",
  };
  return <SignSharedlayout {...signUpProps} />;
};
