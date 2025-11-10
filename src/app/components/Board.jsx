'use client';
import { useEffect, useMemo, useState, useRef } from 'react';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import SearchBox from './SearchBox';
import TicketList from './TicketList';
import MyQueueSummary from './MyQueueSummary';
import StatusMessage from './StatusMessage';
import { priorityOrder, statusOrder } from '../lib/severity';

const STATUS_VALUES = ['All','Open','In Progress','On Hold','Resolved'];
const PRIORITY_VALUES = ['All','Low','Medium','High','Critical'];

export default function Board() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({ status: 'All', priority: 'All' });
  const [search, setSearch] = useState('');
  const [queue, setQueue] = useState({}); 
  const intervalRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('/api/tickets');
        if (!res.ok) throw new Error('Network response not ok');
        const data = await res.json();
        if (!cancelled) {
          setTickets(data);
        }
      } catch (err) {
        setError(err.message || 'Failed to load');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    function randomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

    function pickRandomTicketAndUpdate() {
      setTickets(prev => {
        if (!prev || prev.length === 0) return prev;
        const idx = Math.floor(Math.random() * prev.length);
        const ticket = prev[idx];
        const newTicket = { ...ticket };
        if (Math.random() < 0.6) {
          const statusFlow = {
            'Open': ['In Progress','On Hold'],
            'In Progress': ['On Hold','Resolved'],
            'On Hold': ['In Progress','Resolved'],
            'Resolved': ['Resolved']
          };
          const choices = statusFlow[newTicket.status] || ['Open'];
          newTicket.status = choices[Math.floor(Math.random() * choices.length)];
        } else {
          const priorities = ['Low','Medium','High','Critical'];
          const curIdx = priorities.indexOf(newTicket.priority);
          const change = Math.random() < 0.5 ? -1 : 1;
          let newIdx = Math.max(0, Math.min(priorities.length - 1, curIdx + change));
          newTicket.priority = priorities[newIdx];
        }
        newTicket.updatedAt = new Date().toISOString();
        const copy = [...prev];
        copy[idx] = newTicket;
        return copy;
      });
    }

    intervalRef.current = setInterval(() => {
      pickRandomTicketAndUpdate();
    }, randomInt(6000, 10000));

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const visibleTickets = useMemo(() => {
    const s = search.trim().toLowerCase();
    return tickets.filter(t => {
      if (filters.status !== 'All' && t.status !== filters.status) return false;
      if (filters.priority !== 'All' && t.priority !== filters.priority) return false;
      if (s) {
        const hay = (t.title + ' ' + t.description).toLowerCase();
        if (!hay.includes(s)) return false;
      }
      return true;
    });
  }, [tickets, filters, search]);

  function handleAddToQueue(id) {
    setQueue(prev => ({ ...prev, [id]: true }));
  }
  function handleRemoveFromQueue(id) {
    setQueue(prev => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  }
  function handleClearQueue() {
    setQueue({});
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-3 items-center">
        <StatusFilter value={filters.status} onChange={v => setFilters(f => ({...f, status: v}))} options={STATUS_VALUES}/>
        <PriorityFilter value={filters.priority} onChange={v => setFilters(f => ({...f, priority: v}))} options={PRIORITY_VALUES}/>
        <SearchBox value={search} onChange={setSearch} />
        <div className="ml-auto">
          <MyQueueSummary
            queueIds={Object.keys(queue)}
            tickets={tickets}
            onRemove={handleRemoveFromQueue}
            onClear={handleClearQueue}
          />
        </div>
      </div>

      <StatusMessage loading={loading} error={error} isEmpty={!loading && visibleTickets.length === 0} />
      <TicketList tickets={visibleTickets} onAddToQueue={handleAddToQueue} queueMap={queue} />
    </div>
  );
}