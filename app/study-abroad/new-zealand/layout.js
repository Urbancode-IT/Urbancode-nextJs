import { getCountryMetadata } from "../countryMeta";

export const metadata = getCountryMetadata("new-zealand");

export default function Layout({ children }) {
  return children;
}
