'use client';

import dynamic from 'next/dynamic';

// Dynamically import the CMS component with no SSR
const CMS = dynamic(
  () => import('@/components/CMS'),
  { ssr: false }
);

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="mt-2 text-sm text-gray-600">
            Welcome to your admin panel. You can manage your content here.
          </p>
          
          <div className="mt-8">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <CMS />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
