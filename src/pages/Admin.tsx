import React, { useState, useEffect } from 'react';
import { Button } from '../components/common/Button';
import { Trash2, Bell } from 'lucide-react';

interface Inquiry {
    id: number;
    contactPoint: string;
    message: string;
    date: string;
    status: string;
}

export function Admin() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState('');
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const [notification, setNotification] = useState<string | null>(null);

    useEffect(() => {
        // Load initial data
        const loadData = () => {
            const data = JSON.parse(localStorage.getItem('inquiries') || '[]');
            setInquiries(data);
        };
        loadData();

        // Simulate real-time notifications
        const interval = setInterval(() => {
            if (Math.random() > 0.7) {
                setNotification("New inquiry received from Global Partner!");
                setTimeout(() => setNotification(null), 3000);
            }
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'admin123') {
            setIsLoggedIn(true);
        } else {
            alert('Invalid Password (Try: admin123)');
        }
    };

    const handleDelete = (id: number) => {
        const updated = inquiries.filter(inq => inq.id !== id);
        setInquiries(updated);
        localStorage.setItem('inquiries', JSON.stringify(updated));
    };

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg w-96">
                    <h2 className="text-2xl font-bold mb-6 text-center text-BRAND-deepBlue">Admin Login</h2>
                    <input
                        type="password"
                        placeholder="Enter PIN (admin123)"
                        className="w-full px-4 py-3 border rounded-lg mb-4"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Button type="submit" className="w-full">Access Dashboard</Button>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            {/* Notification Toast */}
            {notification && (
                <div className="fixed top-4 right-4 bg-BRAND-teal text-white px-6 py-4 rounded-lg shadow-2xl flex items-center animate-bounce z-50">
                    <Bell className="w-6 h-6 mr-3" />
                    {notification}
                </div>
            )}

            <header className="bg-BRAND-deepBlue text-white py-4 px-6 flex justify-between items-center shadow-md">
                <h1 className="text-xl font-bold">AETERNO Admin Center</h1>
                <div className="flex items-center space-x-4">
                    <span className="text-sm bg-white/10 px-3 py-1 rounded-full">Status: Online</span>
                    <Button variant="ghost" className="text-white hover:text-red-400" onClick={() => setIsLoggedIn(false)}>Logout</Button>
                </div>
            </header>

            <main className="container mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-gray-500 text-sm font-semibold uppercase mb-2">Total Inquiries</h3>
                        <p className="text-4xl font-bold text-BRAND-deepBlue">{inquiries.length}</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-gray-500 text-sm font-semibold uppercase mb-2">Unread Messages</h3>
                        <p className="text-4xl font-bold text-BRAND-teal">{inquiries.filter(i => i.status === 'Unread').length}</p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                        <h2 className="font-bold text-lg">Inquiry List</h2>
                        <Button size="sm" variant="outline" onClick={() => window.location.reload()}>Refresh</Button>
                    </div>
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 text-gray-500 text-sm uppercase">
                            <tr>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Contact</th>
                                <th className="px-6 py-4">Message</th>
                                <th className="px-6 py-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {inquiries.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="px-6 py-8 text-center text-gray-400">No inquiries found.</td>
                                </tr>
                            ) : (
                                inquiries.map((inq) => (
                                    <tr key={inq.id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="px-6 py-4 text-sm text-gray-500">{inq.date}</td>
                                        <td className="px-6 py-4 font-medium">{inq.contactPoint}</td>
                                        <td className="px-6 py-4 text-gray-600 max-w-md">
                                            <p className="line-clamp-3 whitespace-pre-line text-sm leading-relaxed">
                                                {inq.message}
                                            </p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() => handleDelete(inq.id)}
                                                className="text-gray-400 hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
