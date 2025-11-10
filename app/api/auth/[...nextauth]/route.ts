import { authOptions } from "@/lib/authOptions";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
const GOOGLE_CLIENT_ID = "91962012131-objuv2koldmce39am6u06irtmllhuvcj.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

const handler =NextAuth(authOptions)

export { handler as GET, handler as POST };
