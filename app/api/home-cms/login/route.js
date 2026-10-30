import { NextResponse } from "next/server";
import {
  HOME_CMS_COOKIE,
  checkHomeCmsPassword,
  homeCmsSessionValue,
} from "@/lib/homeCmsAuth";

export async function POST(req) {
  try {
    const body = await req.json();
    if (!checkHomeCmsPassword(body?.password)) {
      return NextResponse.json(
        { success: false, message: "Wrong password." },
        { status: 401 }
      );
    }
    const res = NextResponse.json({ success: true });
    res.cookies.set(HOME_CMS_COOKIE, homeCmsSessionValue(), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    return res;
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message || "Login failed" },
      { status: 500 }
    );
  }
}
