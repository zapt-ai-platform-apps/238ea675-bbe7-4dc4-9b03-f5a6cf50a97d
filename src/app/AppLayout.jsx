import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/shared/components/Sidebar';
import Header from '@/shared/components/Header';
import ZaptBadge from '@/shared/components/ZaptBadge';

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      
      <div className="lg:pl-64">
        <Header setSidebarOpen={setSidebarOpen} />
        
        <main className="py-8 px-4 sm:px-6 lg:px-8">
          <Outlet />
        </main>
        
        <ZaptBadge />
      </div>
    </div>
  );
}