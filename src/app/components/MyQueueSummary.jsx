'use client';
export default function MyQueueSummary({ queueIds = [], tickets = [], onRemove, onClear}) {
    const queuedTickets = queueIds.map(id => tickets.find(t => t.id === id)).filter(Boolean);
    return (
        <div className="border rounded p-2 max-w-xs">
            <div className="flex justify-between items-center">
                <strong>My Queue</strong>
                <span>({queuedTickets.length})</span>
            </div>
            <ul className="mt-2 space-y-1 text-sm">
                {queuedTickets.length === 0 && <li classname="text-gray-500">No tickets selected</li>}
                [queuedTickets.map(t => (
                    <li key={t.id} className="flex justify-between">
                        <span>{t.title}</span>
                        <button onClick={() => onRemove(t.id)} className="text-red-500 text-xs">Remove</button>
                    </li>
                ))]
            </ul>
            {queuedTickets.length > 0 && (
                <div className="mt-2">
                    <button onClick={onClear className="text-sm px-2 py-1 bg-gray-200 rounded">Clear Queue</button>}
                    </div>
            )}
        </div>
    );
}