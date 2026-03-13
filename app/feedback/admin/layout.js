import '@/app/feedback/admin/admin-globals.css';

export const metadata = {
    title: 'UC Feedback Admin',
    description: 'Admin portal for Urbancode Feedback System',
};

export default function AdminLayout({ children }) {
    return (
        <div className="admin-wrapper-global">
            {children}
        </div>
    );
}
