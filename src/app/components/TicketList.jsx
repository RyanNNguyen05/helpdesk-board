'use client';
import TicketCard from '.TicketCard'
export default function TicketList({ tickets = [], onAddToQueue, queueMap = {} }) {
    return (
        <div className="grid gap-3">
            {tickets.map(ticket => (
                <TicketCard
                  key={ticket.id}
                  ticket={ticket}
                  onAddToQueue={onAddToQueue}
                  isQueued={!!queueMap[ticket.id]}
                  />
            ))}
        </div>
    );
}