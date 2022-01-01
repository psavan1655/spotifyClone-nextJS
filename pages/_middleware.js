import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  console.log(getToken({ req, secret: process.env.JWT_SECRET }));
  const token = getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl; //nextUrl is the url that the user is trying to access

  // Allow request id following in true
  if (pathname.includes("/api/auth") || token) {
    // if the user is trying to access the api/auth (login page) or if the user is signed in
    return NextResponse.next();
  }

  if (!token && pathname !== "/login") {
    // if the user is not signed in and is not trying to access the login page
    return NextResponse.redirect("/login");
  }
}
