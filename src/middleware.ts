import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { GetCurrentUser } from "./utils/Auth";

const AuthRoute = ["/Login"]; // Public routes for login or registration
const UserRoute = ["/", "/About", "/Blogs", "/Contact", "/Portfolio"]; // Public user routes
const AdminRoute = [
  "/dashboard",
  "/dashboard/About",
  "/dashboard/Blogs",
  "/dashboard/Profile",
  "/dashboard/Projects",
]; // Admin-specific routes

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const user = await GetCurrentUser(); // Get current logged-in user

  // If no user is logged in
  if (!user) {
    // Allow access to authentication routes (login/registration)
    if (AuthRoute.includes(pathname)) {
      return NextResponse.next();
    }

    // Redirect to login for all other routes if not logged in
    if (AdminRoute.includes(pathname)) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    // Allow access to user routes (like home, about, etc.)
    if (UserRoute.includes(pathname)) {
      return NextResponse.next();
    }

    // If none of the conditions match, fallback to homepage
    return NextResponse.redirect(new URL("/", request.url));
  }

  // If a user is logged in
  if (user) {
    // Allow access to user routes for logged-in users
    if (UserRoute.includes(pathname)) {
      return NextResponse.next();
    }

    // Allow access to admin routes if the user is an admin
    if (AdminRoute.includes(pathname)) {
      return NextResponse.next();
    }

    if (AuthRoute.includes(pathname)) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    // If none of the routes match, redirect to the homepage
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/Login",
    "/registration",
    "/",
    "/about",
    "/contact",
    "/blogs",
    "/Blogs/blog/:path*",
    "/Portfolio",
    "/dashboard/:path*", // Match all dashboard paths
  ],
};
