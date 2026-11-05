import { getCountryMetadata } from "../countryMeta";

export const metadata = getCountryMetadata("ireland");

export default function Layout({ children }) {
  return children;
}
