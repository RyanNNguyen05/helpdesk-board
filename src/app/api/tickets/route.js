export async function GET() {
  const tickets = [
    { id: 't-1001', title: 'Cannot connect to VPN', description: 'User reports intermittent VPN connectivity errors.', priority: 'High', status: 'Open', assignee: 'Unassigned', updatedAt: '2025-10-31T14:05:00Z' },
    { id: 't-1002', title: 'Email not syncing', description: 'Mobile email not syncing new messages.', priority: 'Medium', status: 'In Progress', assignee: 'J. Patel', updatedAt: '2025-10-31T08:30:00Z' },
    { id: 't-1003', title: 'Password reset', description: 'User locked out of account.', priority: 'Low', status: 'Resolved', assignee: 'A. Chen', updatedAt: '2025-11-01T12:10:00Z' },
    { id: 't-1004', title: 'Printer jam', description: 'Main office printer keeps jamming with error E13.', priority: 'Low', status: 'Open', assignee: 'Unassigned', updatedAt: '2025-11-02T09:00:00Z' },
    { id: 't-1005', title: 'Software install request', description: 'Request to install IDE for dev workstation.', priority: 'Medium', status: 'On Hold', assignee: 'M. Rivera', updatedAt: '2025-11-03T10:20:00Z' },
    { id: 't-1006', title: 'Slow laptop', description: 'Laptop boot takes >5 minutes.', priority: 'High', status: 'In Progress', assignee: 'S. Lopez', updatedAt: '2025-11-04T14:40:00Z' },
    { id: 't-1007', title: 'Network drops', description: 'Intermittent network drops on floor 3.', priority: 'Critical', status: 'Open', assignee: 'Unassigned', updatedAt: '2025-11-05T07:55:00Z' },
    { id: 't-1008', title: 'Access request', description: 'Need access to internal wiki.', priority: 'Low', status: 'Resolved', assignee: 'B. Nguyen', updatedAt: '2025-11-05T16:05:00Z' },
    { id: 't-1009', title: 'Browser crash', description: 'Chrome crashes when opening dev tools.', priority: 'Medium', status: 'Open', assignee: 'Unassigned', updatedAt: '2025-11-06T11:14:00Z' },
    { id: 't-1010', title: 'Two-factor trouble', description: 'MFA code not received via SMS.', priority: 'High', status: 'In Progress', assignee: 'K. Johnson', updatedAt: '2025-11-06T18:22:00Z' },
    { id: 't-1011', title: 'Calendar invites missing', description: 'Joined meetings but invites not visible.', priority: 'Medium', status: 'On Hold', assignee: 'Unassigned', updatedAt: '2025-11-07T09:30:00Z' },
    { id: 't-1012', title: 'VPN slow for remote', description: 'Remote user sees 1 Mbps speeds.', priority: 'High', status: 'Open', assignee: 'C. Smith', updatedAt: '2025-11-07T13:50:00Z' },
    { id: 't-1013', title: 'Critical DB alert', description: 'Database replication lag critical.', priority: 'Critical', status: 'In Progress', assignee: 'DB Team', updatedAt: '2025-11-08T02:10:00Z' },
    { id: 't-1014', title: 'Monitor flicker', description: 'External monitor flickers intermittently.', priority: 'Low', status: 'Open', assignee: 'Unassigned', updatedAt: '2025-11-08T09:45:00Z' },
  ];
  return Response.json(tickets);
}