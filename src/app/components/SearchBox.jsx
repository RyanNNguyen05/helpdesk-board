'use client';
export default function SearchBox({ value, onChange}) {
    return (
        <label className="flex-1">
            <span className="sr-only">Search</span>
            <input
              value={value}
              onChange={e => onChange(e.target.value)}
              placeholder="Search title or description..."
              className="w-full border rounded p-2"
              />
        </label>
    );
}