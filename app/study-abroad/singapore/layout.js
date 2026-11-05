import { getCountryMetadata } from "../countryMeta";

export const metadata = getCountryMetadata("singapore");

export default function Layout({ children }) {
  return children;
}
