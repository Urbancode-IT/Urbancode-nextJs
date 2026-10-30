import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  getOrCreateHomeCmsContent,
  saveHomeCmsContent,
  toPublicHomeCms,
  getDefaultHomeCmsContent,
} from "@/lib/homeCmsDb";
import { HOME_CMS_COOKIE, isHomeCmsSession } from "@/lib/homeCmsAuth";

async function requireAdmin() {
  const jar = await cookies();
  return isHomeCmsSession(jar.get(HOME_CMS_COOKIE)?.value);
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const admin = searchParams.get("admin") === "1";
    const isAdmin = admin ? await requireAdmin() : false;

    if (admin && !isAdmin) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    let doc;
    try {
      doc = await getOrCreateHomeCmsContent();
    } catch (dbErr) {
      console.error("Home CMS DB read failed, using defaults:", dbErr);
      doc = getDefaultHomeCmsContent();
    }

    if (isAdmin) {
      return NextResponse.json({
        success: true,
        admin: true,
        data: {
          banners: doc.banners || [],
          trendingVideos: doc.trendingVideos || [],
          voiceVideos: doc.voiceVideos || [],
          updatedAt: doc.updatedAt || null,
        },
      });
    }

    return NextResponse.json({
      success: true,
      data: toPublicHomeCms(doc),
    });
  } catch (err) {
    console.error("GET /api/home-cms:", err);
    return NextResponse.json(
      { success: true, data: toPublicHomeCms(getDefaultHomeCmsContent()) },
      { status: 200 }
    );
  }
}

export async function PUT(req) {
  try {
    if (!(await requireAdmin())) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }
    const body = await req.json();
    const saved = await saveHomeCmsContent({
      banners: Array.isArray(body.banners) ? body.banners : [],
      trendingVideos: Array.isArray(body.trendingVideos) ? body.trendingVideos : [],
      voiceVideos: Array.isArray(body.voiceVideos) ? body.voiceVideos : [],
    });
    return NextResponse.json({
      success: true,
      data: {
        banners: saved.banners || [],
        trendingVideos: saved.trendingVideos || [],
        voiceVideos: saved.voiceVideos || [],
        updatedAt: saved.updatedAt || null,
      },
    });
  } catch (err) {
    console.error("PUT /api/home-cms:", err);
    return NextResponse.json(
      { success: false, message: err.message || "Save failed" },
      { status: 500 }
    );
  }
}
