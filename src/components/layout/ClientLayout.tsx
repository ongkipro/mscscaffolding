'use client';

import React, { useState } from 'react';
import Navbar from './Navbar';
import MobileDrawer from './MobileDrawer';
import MobileBottomBar from './MobileBottomBar';
import Footer from './Footer';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-orange-500 selection:text-white">
      <Navbar onOpenDrawer={() => setDrawerOpen(true)} />
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <main className="flex-1">{children}</main>
      <MobileBottomBar />
      <Footer />
    </div>
  );
}
