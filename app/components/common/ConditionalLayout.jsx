"use client";
import { usePathname } from "next/navigation";
import MainNavbar from "@/app/components/header/Navbar";
import Footer from "@/app/components/footer/Footer";

const HIDE_NAV_AND_FOOTER = ["/english-intake", "/english-proficiency"];
const HIDE_FOOTER_ONLY = ["/portfolio", "/portfolio-v2"];

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  const hideAll = HIDE_NAV_AND_FOOTER.some((route) => pathname.startsWith(route));
  const hideFooter = hideAll || HIDE_FOOTER_ONLY.some((route) => pathname.startsWith(route));

  return (
    <>
      {!hideAll && <MainNavbar />}
      <main>{children}</main>
      {!hideFooter && <Footer />}
    </>
  );
}
