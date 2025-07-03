"use server";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";

export async function signIn(email: string, password: string) {
    try {
        await auth.api.signInEmail({
            body: {
                email,
                password
            }
           
        })
       return {
        success: true,
        message: "Login successful"
       }
    } catch (error) {
        const e=error as Error
        return {
            success: false,
            message: e.message || "unkown error something went wrong"
        }
    }
  
}
export async function signUp(email: string, password: string, name: string) {
    try {

        await auth.api.signUpEmail({
            body: {
                email,
                password,
                name,
            }
        })
        return {
            success: true,
            message: "Signup successful"
        }
    } catch (error) {
        const e = error as Error
        return {
            success: false,
            message: e.message || "unkown error something went wrong"
        }
    }
}