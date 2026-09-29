import LeadAdminClient from './LeadAdminClient';

export const metadata = {
  title: 'Lead sources',
  robots: { index: false, follow: false },
};

export default function LeadAdminPage() {
  return <LeadAdminClient />;
}
