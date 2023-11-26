// middleware.js

import { NextResponse } from "next/server";
export async function middleware(request) {
  let userCookieId = request.cookies.get("ecom_user")?.value;
  const user =
    userCookieId &&
    JSON.parse(userCookieId)?.token &&
    JSON.parse(userCookieId)?.email
      ? true
      : false;

  if (!user) {
    return NextResponse.redirect(
      new URL(`/user/login?next=${request?.nextUrl?.pathname}`, request.url)
    );
  }
}
export const config = {
  matcher: ["/dashboard/:path*","/services/:path*"],
};
