import { getCountryMetadata } from "../countryMeta";

export const metadata = getCountryMetadata("canada");

export default function Layout({ children }) {
  return children;
}
