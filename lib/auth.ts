import { db } from "@/db/drizzle";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { schema } from "@/db/schema";
import { Resend } from "resend";
import ForgotPasswordEmail from "@/components/emails/reset-password";
const resend = new Resend(process.env.RESEND_API_KEY as string);
 
export const auth = betterAuth({
    socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        }, 
    },
    emailAndPassword: {  
        enabled: true,
        sendVerificationEmail: async ({ user, url }: { user: any, url: string }) => {
            await resend.emails.send({
             from: "hamzakayani4209@gmail.com",
             to: user.email,
             subject: "Verify your email address",
             react: ForgotPasswordEmail({
                 username: user.name,
                 userEmail: user.email,
                 resetUrl: url,
             }),
            });

           
         },
         
         sendResetPassword: async ({ user, url }: { user: any, url: string }) => {
            try{
            await resend.emails.send({
             from: 'onboarding@resend.dev',
             to: user.email as string,
             subject: "Reset your password",
             react: ForgotPasswordEmail({
                 username: user.name,
                 userEmail: user.email,
                 resetUrl: url,
             }),
            });
            }catch(error){
                console.error("Failed to send email to:", user.email, "Error:", error);
                throw error; // This will show up in your auth error
            }
           
            
             

            console.log("Email sent successfully"+user.email);
         },
     
    },

    database: drizzleAdapter(db, {
        provider: "pg",
        schema,
    }),
    plugins: [nextCookies()]
});