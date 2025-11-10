

"use client";
interface AuthProviderProps {
  children: ReactNode;
}

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export  const AuthProvider = ({ children }: AuthProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
      
