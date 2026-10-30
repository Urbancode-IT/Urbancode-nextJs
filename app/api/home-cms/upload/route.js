import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { HOME_CMS_COOKIE, isHomeCmsSession } from "@/lib/homeCmsAuth";

const MAX_BYTES = 40 * 1024 * 1024; // 40MB
const ALLOWED = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "video/mp4",
  "video/webm",
  "video/quicktime",
]);

function safeName(name) {
  return String(name || "file")
    .replace(/[^a-zA-Z0-9._-]/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

export async function POST(req) {
  try {
    const jar = await cookies();
    if (!isHomeCmsSession(jar.get(HOME_CMS_COOKIE)?.value)) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const form = await req.formData();
    const file = form.get("file");
    if (!file || typeof file === "string") {
      return NextResponse.json(
        { success: false, message: "No file uploaded" },
        { status: 400 }
      );
    }

    if (file.size > MAX_BYTES) {
      return NextResponse.json(
        { success: false, message: "File too large (max 40MB)" },
        { status: 400 }
      );
    }

    const type = file.type || "application/octet-stream";
    if (!ALLOWED.has(type) && !/\.(jpe?g|png|webp|gif|mp4|webm|mov)$/i.test(file.name || "")) {
      return NextResponse.json(
        { success: false, message: "Unsupported file type" },
        { status: 400 }
      );
    }

    const dir = path.join(process.cwd(), "public", "uploads", "home-cms");
    await mkdir(dir, { recursive: true });

    const ext = path.extname(file.name || "") || (type.includes("video") ? ".mp4" : ".webp");
    const filename = `${Date.now()}-${safeName(path.basename(file.name || "upload", ext))}${ext}`;
    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(path.join(dir, filename), buffer);

    const url = `/uploads/home-cms/${filename}`;
    return NextResponse.json({ success: true, url, filename, type });
  } catch (err) {
    console.error("POST /api/home-cms/upload:", err);
    return NextResponse.json(
      { success: false, message: err.message || "Upload failed" },
      { status: 500 }
    );
  }
}
