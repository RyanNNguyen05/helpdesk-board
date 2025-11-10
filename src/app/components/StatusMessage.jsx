'use client';
export default function StatusMessage({ loading, error, isEmpty }) {
    if (loading) return <div className="text-gray-600">Loading...</div>;
    if (error) return <div className="text-red-600">Unable to load tickets</div>;
    if (isEmoty) return <div className="text-gray-600">No tickets match your filter.</div>;
    return null;
}