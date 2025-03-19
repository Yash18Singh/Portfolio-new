"use client";
import React from 'react';
import Header from "./components/Header";
import { usePathname } from 'next/navigation';

// Background Mapping
const backgroundMap = {
  '/tech-stacks': 'linear-gradient(to right, #94f9f1, #aba9fd, #fdb4a0)',
  '/projects': 'linear-gradient(to right, #fdb4a0, #fbf493, #c8fda3)',
  '/contact': 'linear-gradient(to right, #c8fda3, #a8f7dd, #8dc8ff)',
};

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const background = backgroundMap[pathname] || 'linear-gradient(to right, #8ac8fc, #e792f5, #94f9f1)';

  return (
    <div style={{ background }}>
      <Header />
      {children}
    </div>
  );
}
