import React from 'react';
import { Bars3Icon, BellIcon } from '@heroicons/react/24/outline';

export default function Header({ setSidebarOpen }) {
  return (
    <header className="sticky top-0 z-10 flex-shrink-0 h-16 bg-white shadow">
      <div className="flex justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <button
            type="button"
            className="lg:hidden -ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="flex items-center">
          <button
            type="button"
            className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Profile dropdown */}
          <div className="ml-3 relative">
            <div className="flex items-center">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100">
                <span className="text-sm font-medium leading-none text-indigo-700">GP</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}