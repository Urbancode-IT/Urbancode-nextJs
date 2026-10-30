import { NextResponse } from "next/server";
import { HOME_CMS_COOKIE } from "@/lib/homeCmsAuth";

export async function POST() {
  const res = NextResponse.json({ success: true });
  res.cookies.set(HOME_CMS_COOKIE, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
  return res;
}
