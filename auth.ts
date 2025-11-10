import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";


export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),

    // Optional: Custom credential login (like OTP)
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     phone: { label: "Phone", type: "text" },
    //     otp: { label: "OTP", type: "text" },
    //   },
    //   async authorize(credentials) {
    //     // Implement your OTP verification logic here
    //     const user = { id: "1", name: "User", phone: credentials?.phone };  
    //     return user;
    //   }
    // }),
  ],

  session: {
    strategy: "jwt", // no DB — use JWT-based sessions
  },

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
};
export default authOptions;


