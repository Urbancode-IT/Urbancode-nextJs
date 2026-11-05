import { getCountryMetadata } from "../countryMeta";

export const metadata = getCountryMetadata("germany");

export default function Layout({ children }) {
  return children;
}
