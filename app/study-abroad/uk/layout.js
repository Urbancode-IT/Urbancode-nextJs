import { getCountryMetadata } from "../countryMeta";

export const metadata = getCountryMetadata("uk");

export default function Layout({ children }) {
  return children;
}
