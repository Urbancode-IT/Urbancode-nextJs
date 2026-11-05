import { getCountryMetadata } from "../countryMeta";

export const metadata = getCountryMetadata("usa");

export default function Layout({ children }) {
  return children;
}
