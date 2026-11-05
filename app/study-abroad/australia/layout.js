import { getCountryMetadata } from "../countryMeta";

export const metadata = getCountryMetadata("australia");

export default function Layout({ children }) {
  return children;
}
