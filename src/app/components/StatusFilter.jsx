'use client';
export default function StatusFilter({ value, onChange, options = [] }) {
    return (
        <label className="flex flex-col">
            <span className="text-sm">Status</span>
            <select value={value} onChange={e => onChange(e.target.value)} className="border rounded p-1">
                {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
        </label>
    );
}