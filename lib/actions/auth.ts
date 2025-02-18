'use server';

interface AuthCredentials {
    username: string,
    email: string,
    password: string;
}

import { signIn } from "@/auth";


export const signInWithCredentials  = async (params: Pick<AuthCredentials, "email" | "password">,) => {
    const {email, password} = params;

    try{

        const result = await signIn('credentials', {
            email,password, redirect: false
        })

        if(result?.error){
            return{success:false, error: result.error}
        }

        return {success:true}
    }catch(error){
        console.error("Sign in Error: ",error)
        return {success:false, error:"Sign in error"}
    }
}

export const signUp = async (params: any) => {
    const {username,email, password} = params;


}