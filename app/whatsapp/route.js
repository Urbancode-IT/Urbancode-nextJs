import { NextResponse } from "next/server";

/**
 * WhatsApp Redirect Route
 * This provides a first-party internal URL (/whatsapp) for Google Ads and GTM tracking.
 * It redirects to the official WhatsApp API link.
 */
export async function GET() {
  const whatsappUrl = "https://wa.me/919878798797";
  return NextResponse.redirect(whatsappUrl);
}
