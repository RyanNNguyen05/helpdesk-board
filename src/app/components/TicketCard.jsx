'use client';
export default function TicketCard({ ticket, onAddToQueue, isQueued }) {
    return (
        <div className="border rounded p-3 felx justify-between items-start">
            <div>
                <h3 className="font-semibold">{ticket.title}</h3>
                <p className="text-sm text-gray-600">{ticket.description}</p>
                <div className="text-xs mt-2 space-x-3">
                    <span>priority: <strong>{ticket.priority}</strong></span>
                    <span>Status: <strong>{ticket.status}</strong></span>
                    <span>Asignee: <strong>{ticket.asignee}</strong></span>
                    <span>Updated: <strong>{new Date(ticket.updatedAt).toLocaleString()}</strong></span>
                </div>
                </div>
                <div className="flex flex-col items-end">
                    <button 
                    onClick={() => onAddToQueue(ticket.id)}
                    disabled={isQueued}
                    className="px-3 py-1 rounded bg-blue-500 disabled:opacity-40 text-whote"
                    >
                        {isQueued ? 'In My Queue' : 'Add to My Queue'}
                    </button>
                    {isQueued && <p className="text-xs text-gray-500 mt-2">Already queued</p>}
            </div>
        </div>
    );
}