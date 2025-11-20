import { useSession } from "next-auth/react";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const token =
        req.cookies.get("next-auth.session-token")?.value ??
        req.cookies.get("__Secure-next-auth.session-token")?.value;

    const path = req.nextUrl.pathname;

    if ((path.startsWith("/login") || path.startsWith("/signup")) && token) {
        console.log("User already logged in → redirecting to home");
        return NextResponse.redirect(new URL("/", req.url));
    }

    if (path.startsWith("/complete-profile") && !token) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    if (path.startsWith("/profile") && !token) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/login", "/signup", "/complete-profile", "/profile"],
};
