"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/app/components/header/Navbar";
import Footer from "@/app/components/footer/Footer";

const HIDDEN_ROUTES = ["/english-intake"];

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  const hideNavFooter = HIDDEN_ROUTES.some((route) => pathname.startsWith(route));

  return (
    <>
      {!hideNavFooter && <Navbar />}
      <main>{children}</main>
      {!hideNavFooter && <Footer />}
    </>
  );
}