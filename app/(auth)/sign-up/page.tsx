"use client";

interface AuthCredentials {
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string;
}

import AuthForm from "@/components/AuthForm";
import { signUp } from "@/lib/actions/auth";
import { signUpSchema } from "@/lib/validations";
import React from "react";

const Page = () => (
    <AuthForm
        type="SIGN_UP"
        schema={signUpSchema}
        defaultValues={{ username: "", firstName: "", lastName: "" ,email: "", password: ""}}
        onSubmit={signUp}
    />
);

export default Page;