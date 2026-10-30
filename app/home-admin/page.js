import HomeAdminClient from "./HomeAdminClient";

export const metadata = {
  title: "Home CMS Admin | Urbancode",
  robots: { index: false, follow: false },
};

export default function HomeAdminPage() {
  return <HomeAdminClient />;
}
