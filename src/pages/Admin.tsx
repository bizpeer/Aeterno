import React, { useState, useEffect } from 'react';
import { Button } from '../components/common/Button';
import { Trash2, Bell, Package, Film, MessageSquare, Plus, Save, X, Upload, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Inquiry {
    id: string;
    contact_point: string;
    message: string;
    created_at: string;
    status: string;
}

interface Product {
    id: string;
    name: string;
    description: string;
    images: string[];
    details: any;
}

interface MediaAsset {
    id: string;
    type: 'video' | 'material';
    title: string;
    thumbnail_url: string;
    youtube_link: string;
    file_url?: string;
    order_index: number;
}

interface Announcement {
    id: string;
    title: string;
    content: string;
    thumbnail_url: string;
    file_url?: string;
    order_index: number;
    created_at: string;
}

interface CompanyInfo {
    id: number;
    address: string;
    phone: string;
    email: string;
}

export function Admin() {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return sessionStorage.getItem('isAdminLoggedIn') === 'true';
    });
    const [password, setPassword] = useState('');
    const [activeTab, setActiveTab] = useState<'inquiries' | 'products' | 'media' | 'announcements' | 'company'>('inquiries');

    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [mediaAssets, setMediaAssets] = useState<MediaAsset[]>([]);
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [companyInfo, setCompanyInfo] = useState<CompanyInfo>({ id: 1, address: '', phone: '', email: '' });
    const [notification, setNotification] = useState<string | null>(null);

    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [editingMedia, setEditingMedia] = useState<MediaAsset | null>(null);
    const [editingAnnouncement, setEditingAnnouncement] = useState<Announcement | null>(null);
    const [isUploading, setIsUploading] = useState(false);

    useEffect(() => {
        if (isLoggedIn) {
            loadInquiries();
            loadProducts();
            loadMediaAssets();
            loadAnnouncements();
            loadCompanyInfo();
        }
    }, [isLoggedIn]);

    const loadInquiries = async () => {
        const { data, error } = await supabase
            .from('inquiries')
            .select('*')
            .order('created_at', { ascending: false });
        if (error) {
            console.error('Error loading inquiries:', error);
            return;
        }
        if (data) setInquiries(data);
    };

    const loadProducts = async () => {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .order('created_at', { ascending: false });
        if (error) {
            console.error('Error loading products:', error);
            return;
        }
        if (data) setProducts(data);
    };

    const loadMediaAssets = async () => {
        const { data, error } = await supabase
            .from('media_assets')
            .select('*')
            .order('order_index', { ascending: true });
        if (error) {
            console.error('Error loading media assets:', error);
            return;
        }
        if (data) setMediaAssets(data);
    };

    const loadAnnouncements = async () => {
        const { data, error } = await supabase
            .from('announcements')
            .select('*')
            .order('created_at', { ascending: false });
        if (error) {
            console.error('Error loading announcements:', error);
            return;
        }
        if (data) setAnnouncements(data);
    };

    const loadCompanyInfo = async () => {
        try {
            const { data, error } = await supabase
                .from('company_info')
                .select('*')
                .single();

            if (error) throw error;
            if (data) setCompanyInfo(data);
        } catch (error) {
            console.error('Error loading company info:', error);
        }
    };

    const handleSaveCompanyInfo = async () => {
        try {
            const { error } = await supabase
                .from('company_info')
                .upsert(companyInfo);

            if (error) throw error;
            setNotification('Company info saved successfully');
            setTimeout(() => setNotification(null), 3000);
        } catch (error) {
            console.error('Error saving company info:', error);
            alert('Failed to save company info.');
        }
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'sang@4478') {
            setIsLoggedIn(true);
            sessionStorage.setItem('isAdminLoggedIn', 'true');
        } else {
            alert('Invalid Password');
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        sessionStorage.removeItem('isAdminLoggedIn');
    };

    const handleFileUpload = async (file: File, folder: string) => {
        try {
            setIsUploading(true);
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
            const filePath = `${folder}/${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('aeterno-assets')
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage
                .from('aeterno-assets')
                .getPublicUrl(filePath);

            return publicUrl;
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Error uploading file');
            return null;
        } finally {
            setIsUploading(false);
        }
    };

    const formatYoutubeLink = (link: string) => {
        if (!link) return '';
        if (link.startsWith('http')) return link;
        return `https://www.youtube.com/watch?v=${link}`;
    };

    const handleDeleteInquiry = async (id: string) => {
        if (!confirm('Are you sure you want to delete this inquiry?')) return;
        const { error } = await supabase.from('inquiries').delete().eq('id', id);
        if (!error) loadInquiries();
    };

    // Product Functions
    const handleSaveProduct = async () => {
        if (!editingProduct) return;

        const { error } = await supabase
            .from('products')
            .upsert({
                id: editingProduct.id || undefined,
                name: editingProduct.name,
                description: editingProduct.description,
                images: editingProduct.images,
                details: editingProduct.details
            });

        if (!error) {
            setNotification('Product saved successfully');
            setEditingProduct(null);
            loadProducts();
            setTimeout(() => setNotification(null), 3000);
        }
    };

    const handleDeleteProduct = async (id: string) => {
        if (!confirm('Are you sure you want to delete this product?')) return;
        const { error } = await supabase.from('products').delete().eq('id', id);
        if (!error) loadProducts();
    };

    // Media Functions
    const handleSaveMedia = async () => {
        if (!editingMedia) return;

        const { error } = await supabase
            .from('media_assets')
            .upsert({
                id: editingMedia.id || undefined,
                type: editingMedia.type,
                title: editingMedia.title,
                thumbnail_url: editingMedia.thumbnail_url,
                youtube_link: formatYoutubeLink(editingMedia.youtube_link),
                file_url: editingMedia.file_url,
                order_index: editingMedia.order_index
            });

        if (!error) {
            setNotification('Media asset saved successfully');
            setEditingMedia(null);
            loadMediaAssets();
            setTimeout(() => setNotification(null), 3000);
        }
    };

    const handleDeleteMedia = async (id: string) => {
        if (!confirm('Are you sure you want to delete this media asset?')) return;
        const { error } = await supabase.from('media_assets').delete().eq('id', id);
        if (!error) loadMediaAssets();
    };

    // Announcement Functions
    const handleSaveAnnouncement = async () => {
        if (!editingAnnouncement) return;

        const { error } = await supabase
            .from('announcements')
            .upsert({
                id: editingAnnouncement.id || undefined,
                title: editingAnnouncement.title,
                content: editingAnnouncement.content,
                thumbnail_url: editingAnnouncement.thumbnail_url,
                file_url: editingAnnouncement.file_url,
                order_index: editingAnnouncement.order_index
            });

        if (!error) {
            setNotification('Announcement saved successfully');
            setEditingAnnouncement(null);
            loadAnnouncements();
            setTimeout(() => setNotification(null), 3000);
        } else {
            console.error('Error saving announcement:', error);
            alert('Failed to save announcement');
        }
    };

    const handleDeleteAnnouncement = async (id: string) => {
        if (!confirm('Are you sure you want to delete this announcement?')) return;
        const { error } = await supabase.from('announcements').delete().eq('id', id);
        if (!error) loadAnnouncements();
    };

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg w-96">
                    <h2 className="text-2xl font-bold mb-6 text-center text-BRAND-deepBlue">Admin Login</h2>
                    <input
                        type="password"
                        placeholder="Enter PIN"
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
            {notification && (
                <div className="fixed top-4 right-4 bg-BRAND-teal text-white px-6 py-4 rounded-lg shadow-2xl flex items-center animate-bounce z-50">
                    <Bell className="w-6 h-6 mr-3" />
                    {notification}
                </div>
            )}

            <header className="bg-BRAND-deepBlue text-white py-4 px-6 flex justify-between items-center shadow-md">
                <div className="flex items-center space-x-6">
                    <h1 className="text-xl font-bold">AETERNO Admin</h1>
                    <nav className="flex space-x-2">
                        <button
                            onClick={() => setActiveTab('inquiries')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'inquiries' ? 'bg-white/20 text-white' : 'text-white/60 hover:text-white'}`}
                        >
                            <MessageSquare className="w-4 h-4 inline-block mr-2" /> Inquiries
                        </button>
                        <button
                            onClick={() => setActiveTab('products')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'products' ? 'bg-white/20 text-white' : 'text-white/60 hover:text-white'}`}
                        >
                            <Package className="w-4 h-4 inline-block mr-2" /> Products
                        </button>
                        <button
                            onClick={() => setActiveTab('media')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'media' ? 'bg-white/20 text-white' : 'text-white/60 hover:text-white'}`}
                        >
                            <Film className="w-4 h-4 inline-block mr-2" /> Media Center
                        </button>
                        <button
                            onClick={() => setActiveTab('announcements')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'announcements' ? 'bg-white/20 text-white' : 'text-white/60 hover:text-white'}`}
                        >
                            <Bell className="w-4 h-4 inline-block mr-2" /> Announcements
                        </button>
                        <button
                            onClick={() => setActiveTab('company')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'company' ? 'bg-white/20 text-white' : 'text-white/60 hover:text-white'}`}
                        >
                            <MessageSquare className="w-4 h-4 inline-block mr-2" /> Company Info
                        </button>
                    </nav>
                </div>
                <div className="flex items-center space-x-4">
                    <Button variant="ghost" className="text-white hover:text-red-400" onClick={handleLogout}>Logout</Button>
                </div>
            </header>

            <main className="container mx-auto px-6 py-10">
                {activeTab === 'inquiries' && (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                            <h2 className="font-bold text-lg">Inquiry List</h2>
                            <Button size="sm" variant="outline" onClick={loadInquiries}>Refresh</Button>
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
                                {inquiries.map((inq) => (
                                    <tr key={inq.id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="px-6 py-4 text-sm text-gray-500">{new Date(inq.created_at).toLocaleString()}</td>
                                        <td className="px-6 py-4 font-medium">{inq.contact_point}</td>
                                        <td className="px-6 py-4 text-gray-600 max-w-md">
                                            <p className="line-clamp-3 whitespace-pre-line text-sm leading-relaxed">{inq.message}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button onClick={() => handleDeleteInquiry(inq.id)} className="text-gray-400 hover:text-red-500">
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === 'products' && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold">Manage Products</h2>
                            <Button onClick={() => setEditingProduct({ id: '', name: '', description: '', images: ['', ''], details: { specs: '' } })}>
                                <Plus className="w-4 h-4 mr-2" /> Add Product
                            </Button>
                        </div>

                        {editingProduct && (
                            <div className="bg-white p-6 rounded-xl shadow-md border border-BRAND-teal/20">
                                <h3 className="text-lg font-bold mb-4">{editingProduct.id ? 'Edit Product' : 'New Product'}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Product Name"
                                        className="w-full p-2 border rounded"
                                        value={editingProduct.name}
                                        onChange={e => setEditingProduct({ ...editingProduct, name: e.target.value })}
                                    />
                                    <textarea
                                        placeholder="Description"
                                        className="w-full p-2 border rounded"
                                        value={editingProduct.description}
                                        onChange={e => setEditingProduct({ ...editingProduct, description: e.target.value })}
                                    />
                                    <div className="md:col-span-2 grid grid-cols-2 gap-4">
                                        {[0, 1].map(i => (
                                            <div key={i} className="flex flex-col space-y-2">
                                                {editingProduct.images[i] && (
                                                    <img src={editingProduct.images[i]} className="w-full h-24 object-cover rounded border" alt="" />
                                                )}
                                                <input
                                                    type="text"
                                                    placeholder={`Image URL ${i + 1}`}
                                                    className="w-full p-2 border rounded text-xs"
                                                    value={editingProduct.images[i] || ''}
                                                    onChange={e => {
                                                        const newImgs = [...editingProduct.images];
                                                        newImgs[i] = e.target.value;
                                                        setEditingProduct({ ...editingProduct, images: newImgs });
                                                    }}
                                                />
                                                <label className="flex items-center justify-center p-2 bg-gray-50 border border-dashed rounded cursor-pointer hover:bg-gray-100 transition-colors text-xs font-medium">
                                                    {isUploading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Upload className="w-4 h-4 text-gray-400 mr-2" />}
                                                    Upload Image {i + 1}
                                                    <input
                                                        type="file"
                                                        className="hidden"
                                                        accept="image/*"
                                                        onChange={async (e) => {
                                                            const file = e.target.files?.[0];
                                                            if (file) {
                                                                const url = await handleFileUpload(file, 'products');
                                                                if (url) {
                                                                    const newImgs = [...editingProduct.images];
                                                                    newImgs[i] = url;
                                                                    setEditingProduct({ ...editingProduct, images: newImgs });
                                                                }
                                                            }
                                                        }}
                                                    />
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-bold mb-2">Product Specification</label>
                                        <textarea
                                            placeholder="Enter product specification (e.g., pH: 7.2, Mineral Content: High...)"
                                            className="w-full p-2 border rounded h-32"
                                            value={editingProduct.details?.specs || ''}
                                            onChange={e => setEditingProduct({
                                                ...editingProduct,
                                                details: { ...editingProduct.details, specs: e.target.value }
                                            })}
                                        />
                                        <p className="text-[10px] text-gray-400 mt-1">Use new lines for each specification item.</p>
                                    </div>
                                </div>
                                <div className="mt-4 flex space-x-2">
                                    <Button onClick={handleSaveProduct}><Save className="w-4 h-4 mr-2" /> Save</Button>
                                    <Button variant="outline" onClick={() => setEditingProduct(null)}><X className="w-4 h-4 mr-2" /> Cancel</Button>
                                </div>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {products.map(product => (
                                <div key={product.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="aspect-square bg-gray-50 rounded-lg mb-4 overflow-hidden">
                                        {product.images[0] && <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />}
                                    </div>
                                    <h3 className="font-bold mb-1">{product.name}</h3>
                                    <p className="text-sm text-gray-500 line-clamp-2 mb-4">{product.description}</p>
                                    <div className="flex justify-between">
                                        <Button size="sm" variant="outline" onClick={() => setEditingProduct(product)}>Edit</Button>
                                        <button onClick={() => handleDeleteProduct(product.id)} className="text-red-400 hover:text-red-600"><Trash2 className="w-5 h-5" /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'media' && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold">Manage Media Center</h2>
                            <Button onClick={() => setEditingMedia({ id: '', type: 'video', title: '', thumbnail_url: '', youtube_link: '', order_index: mediaAssets.length })}>
                                <Plus className="w-4 h-4 mr-2" /> Add Media
                            </Button>
                        </div>

                        {editingMedia && (
                            <div className="bg-white p-6 rounded-xl shadow-md border border-BRAND-teal/20">
                                <h3 className="text-lg font-bold mb-4">{editingMedia.id ? 'Edit Media' : 'New Media'}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <select
                                        className="w-full p-2 border rounded"
                                        value={editingMedia.type}
                                        onChange={e => setEditingMedia({ ...editingMedia, type: e.target.value as any })}
                                    >
                                        <option value="video">Video</option>
                                        <option value="material">Material (PDF/Archive)</option>
                                    </select>
                                    <input
                                        type="text"
                                        placeholder="Title"
                                        className="w-full p-2 border rounded"
                                        value={editingMedia.title}
                                        onChange={e => setEditingMedia({ ...editingMedia, title: e.target.value })}
                                    />
                                    <div className="flex flex-col space-y-2">
                                        <label className="text-sm font-bold">Thumbnail Image</label>
                                        {editingMedia.thumbnail_url && (
                                            <div className="relative group w-full h-32 rounded border overflow-hidden">
                                                <img src={editingMedia.thumbnail_url} className="w-full h-full object-cover" alt="" />
                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                    <p className="text-white text-[10px] truncate px-2">{editingMedia.thumbnail_url}</p>
                                                </div>
                                            </div>
                                        )}
                                        <label className="flex items-center justify-center py-3 bg-gray-50 border border-dashed rounded cursor-pointer hover:bg-gray-100 transition-colors text-sm font-medium">
                                            {isUploading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Upload className="w-5 h-5 text-gray-400 mr-2" />}
                                            {editingMedia.thumbnail_url ? 'Change Thumbnail Image' : 'Upload Thumbnail Image'}
                                            <input
                                                type="file"
                                                className="hidden"
                                                accept="image/*"
                                                onChange={async (e) => {
                                                    const file = e.target.files?.[0];
                                                    if (file) {
                                                        const url = await handleFileUpload(file, 'media/thumbnails');
                                                        if (url) setEditingMedia({ ...editingMedia, thumbnail_url: url });
                                                    }
                                                }}
                                            />
                                        </label>
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <label className="text-sm font-bold">{editingMedia.type === 'video' ? 'YouTube Link' : 'Resource File (PDF)'}</label>
                                        {editingMedia.type === 'video' ? (
                                            <input
                                                type="text"
                                                placeholder="Paste YouTube Link or ID here"
                                                className="w-full p-2 border rounded"
                                                value={editingMedia.youtube_link}
                                                onChange={e => setEditingMedia({ ...editingMedia, youtube_link: e.target.value })}
                                            />
                                        ) : (
                                            <div className="flex flex-col space-y-2">
                                                <label className="flex items-center justify-center py-3 bg-gray-50 border border-dashed rounded cursor-pointer hover:bg-gray-100 transition-colors text-sm font-medium">
                                                    {isUploading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Upload className="w-5 h-5 text-gray-400 mr-2" />}
                                                    {editingMedia.file_url ? 'Replace PDF File' : 'Upload PDF File'}
                                                    <input
                                                        type="file"
                                                        className="hidden"
                                                        accept=".pdf,application/pdf"
                                                        onChange={async (e) => {
                                                            const file = e.target.files?.[0];
                                                            if (file) {
                                                                const url = await handleFileUpload(file, 'media/files');
                                                                if (url) setEditingMedia({ ...editingMedia, file_url: url });
                                                            }
                                                        }}
                                                    />
                                                </label>
                                                {editingMedia.file_url && (
                                                    <div className="p-2 bg-teal-50 rounded border border-teal-100 overflow-hidden">
                                                        <p className="text-[10px] text-BRAND-teal font-medium truncate">File URL: {editingMedia.file_url}</p>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="mt-4 flex space-x-2">
                                    <Button onClick={handleSaveMedia}><Save className="w-4 h-4 mr-2" /> Save</Button>
                                    <Button variant="outline" onClick={() => setEditingMedia(null)}><X className="w-4 h-4 mr-2" /> Cancel</Button>
                                </div>
                            </div>
                        )}

                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 text-gray-500 text-sm uppercase">
                                    <tr>
                                        <th className="px-6 py-4">Type</th>
                                        <th className="px-6 py-4">Title</th>
                                        <th className="px-6 py-4">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {mediaAssets.map((asset) => (
                                        <tr key={asset.id} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 rounded-full text-xs font-bold ${asset.type === 'video' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                                                    {asset.type.toUpperCase()}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 font-medium">{asset.title}</td>
                                            <td className="px-6 py-4 flex space-x-2">
                                                <Button size="sm" variant="ghost" onClick={() => setEditingMedia(asset)}>Edit</Button>
                                                <button onClick={() => handleDeleteMedia(asset.id)} className="text-gray-400 hover:text-red-500">
                                                    <Trash2 className="w-5 h-5" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === 'announcements' && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold">Manage Announcements</h2>
                            <Button onClick={() => setEditingAnnouncement({ id: '', title: '', content: '', thumbnail_url: '', file_url: '', order_index: 0, created_at: '' })}>
                                <Plus className="w-4 h-4 mr-2" /> Add Announcement
                            </Button>
                        </div>

                        {editingAnnouncement && (
                            <div className="bg-white p-6 rounded-xl shadow-md border border-BRAND-teal/20">
                                <h3 className="text-lg font-bold mb-4">{editingAnnouncement.id ? 'Edit Announcement' : 'New Announcement'}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Announcement Title"
                                        className="w-full p-2 border rounded md:col-span-2"
                                        value={editingAnnouncement.title}
                                        onChange={e => setEditingAnnouncement({ ...editingAnnouncement, title: e.target.value })}
                                    />
                                    <textarea
                                        placeholder="Main Content (recommended within 6 sentences)"
                                        className="w-full p-2 border rounded md:col-span-2 h-32"
                                        value={editingAnnouncement.content}
                                        onChange={e => setEditingAnnouncement({ ...editingAnnouncement, content: e.target.value })}
                                    />

                                    {/* Thumbnail Upload */}
                                    <div className="flex flex-col space-y-2">
                                        <label className="text-sm font-bold">Thumbnail Image</label>
                                        {editingAnnouncement.thumbnail_url && (
                                            <img src={editingAnnouncement.thumbnail_url} className="w-full h-32 object-cover rounded border" alt="" />
                                        )}
                                        <label className="flex items-center justify-center py-3 bg-gray-50 border border-dashed rounded cursor-pointer hover:bg-gray-100 transition-colors text-sm font-medium">
                                            {isUploading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Upload className="w-5 h-5 text-gray-400 mr-2" />}
                                            {editingAnnouncement.thumbnail_url ? 'Change Thumbnail' : 'Upload Thumbnail'}
                                            <input
                                                type="file"
                                                className="hidden"
                                                accept="image/*"
                                                onChange={async (e) => {
                                                    const file = e.target.files?.[0];
                                                    if (file) {
                                                        const url = await handleFileUpload(file, 'announcements/thumbnails');
                                                        if (url) setEditingAnnouncement({ ...editingAnnouncement, thumbnail_url: url });
                                                    }
                                                }}
                                            />
                                        </label>
                                    </div>

                                    {/* Link File Upload (PDF/Image) */}
                                    <div className="flex flex-col space-y-2">
                                        <label className="text-sm font-bold">Attachment (PDF or Details Image)</label>
                                        <label className="flex items-center justify-center py-3 bg-gray-50 border border-dashed rounded cursor-pointer hover:bg-gray-100 transition-colors text-sm font-medium">
                                            {isUploading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Upload className="w-5 h-5 text-gray-400 mr-2" />}
                                            {editingAnnouncement.file_url ? 'Replace Attachment' : 'Upload Attachment'}
                                            <input
                                                type="file"
                                                className="hidden"
                                                accept=".pdf,application/pdf,image/*"
                                                onChange={async (e) => {
                                                    const file = e.target.files?.[0];
                                                    if (file) {
                                                        const url = await handleFileUpload(file, 'announcements/files');
                                                        if (url) setEditingAnnouncement({ ...editingAnnouncement, file_url: url });
                                                    }
                                                }}
                                            />
                                        </label>
                                        {editingAnnouncement.file_url && (
                                            <div className="p-2 bg-teal-50 rounded border border-teal-100 overflow-hidden">
                                                <p className="text-[10px] text-BRAND-teal font-medium truncate">Attached: {editingAnnouncement.file_url}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="mt-4 flex space-x-2">
                                    <Button onClick={handleSaveAnnouncement}><Save className="w-4 h-4 mr-2" /> Save Announcement</Button>
                                    <Button variant="outline" onClick={() => setEditingAnnouncement(null)}><X className="w-4 h-4 mr-2" /> Cancel</Button>
                                </div>
                            </div>
                        )}

                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 text-gray-500 text-sm uppercase">
                                    <tr>
                                        <th className="px-6 py-4">Thumbnail</th>
                                        <th className="px-6 py-4">Title</th>
                                        <th className="px-6 py-4">Date</th>
                                        <th className="px-6 py-4">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {announcements.map((ann) => (
                                        <tr key={ann.id} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="w-16 h-10 bg-gray-100 rounded overflow-hidden">
                                                    {ann.thumbnail_url && <img src={ann.thumbnail_url} className="w-full h-full object-cover" alt="" />}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 font-medium">{ann.title}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{new Date(ann.created_at).toLocaleDateString()}</td>
                                            <td className="px-6 py-4 flex space-x-2">
                                                <Button size="sm" variant="ghost" onClick={() => setEditingAnnouncement(ann)}>Edit</Button>
                                                <button onClick={() => handleDeleteAnnouncement(ann.id)} className="text-gray-400 hover:text-red-500">
                                                    <Trash2 className="w-5 h-5" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    {announcements.length === 0 && (
                                        <tr>
                                            <td colSpan={4} className="px-6 py-12 text-center text-gray-400">
                                                No announcements found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {
                    activeTab === 'company' && (
                        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                            <h2 className="text-xl font-bold mb-6 text-BRAND-deepBlue">Company Information</h2>

                            <div className="space-y-6 max-w-2xl">
                                <div>
                                    <label className="block text-sm font-bold mb-2 text-gray-700">Address</label>
                                    <textarea
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-BRAND-deepBlue focus:ring-1 focus:ring-BRAND-deepBlue outline-none transition-colors h-24"
                                        value={companyInfo.address}
                                        onChange={(e) => setCompanyInfo({ ...companyInfo, address: e.target.value })}
                                    />
                                    <p className="text-xs text-gray-500 mt-1">Changing this address will automatically update the Google Map on the Contact page.</p>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold mb-2 text-gray-700">Phone</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-BRAND-deepBlue focus:ring-1 focus:ring-BRAND-deepBlue outline-none transition-colors"
                                        value={companyInfo.phone}
                                        onChange={(e) => setCompanyInfo({ ...companyInfo, phone: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold mb-2 text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-BRAND-deepBlue focus:ring-1 focus:ring-BRAND-deepBlue outline-none transition-colors"
                                        value={companyInfo.email}
                                        onChange={(e) => setCompanyInfo({ ...companyInfo, email: e.target.value })}
                                    />
                                </div>

                                <div className="pt-4">
                                    <Button onClick={handleSaveCompanyInfo} className="px-8">
                                        <Save className="w-4 h-4 mr-2" /> Save Changes
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </main >
        </div >
    );
}
