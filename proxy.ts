import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE, getExpectedAuthToken } from "@/lib/auth";

export const config = {
  matcher: [
    "/((?!api/login|login|_next/static|_next/image|favicon.ico|fonts).*)",
  ],
};

export async function proxy(req: NextRequest) {
  const cookie = req.cookies.get(AUTH_COOKIE)?.value;
  const expected = await getExpectedAuthToken();

  if (cookie && cookie === expected) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/login", req.url);
  loginUrl.searchParams.set("from", req.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}
