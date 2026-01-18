'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import DashboardSidebar from '@/components/shared/DashboardSidebar';
import { Menu } from 'lucide-react';

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#1a1d23]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#17a2b7] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-[#1a1d23]">
      <DashboardSidebar 
        userRole={session.user.role}
        isMock={session.user.isMock}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <header className="lg:hidden bg-white dark:bg-[#24292d] border-b border-gray-200 dark:border-gray-700 p-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-700 dark:text-gray-300"
          >
            <Menu size={24} />
          </button>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
