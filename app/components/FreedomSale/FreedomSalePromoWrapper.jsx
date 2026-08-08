'use client';

import dynamic from 'next/dynamic';

const FreedomSalePromo = dynamic(() => import('./FreedomSalePromo'), {
  ssr: false,
});

export default function FreedomSalePromoWrapper() {
  return <FreedomSalePromo />;
}
