'use client';
import { usePathname } from 'next/navigation';
import Sidebar from '@/app/components/feedback-admin/Sidebar';
import './AdminLayout.css';

export default function AdminLayout({ children }) {
    const pathname = usePathname();

    // Check if it's the login page
    const isLoginPage = pathname === '/feedback/admin' || pathname === '/feedback/admin/';

    if (isLoginPage) {
        return <>{children}</>;
    }

    return (
        <div className="admin-layout">
            <Sidebar />
            <main className="admin-content">
                {children}
            </main>
        </div>
    );
}
