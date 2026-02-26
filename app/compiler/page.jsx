'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the Compiler App to avoid SSR issues with react-router-dom
const CompilerApp = dynamic(() => import('./App'), { ssr: false });

export default function CompilerPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="compiler-wrapper">
      <CompilerApp />
    </div>
  );
}
