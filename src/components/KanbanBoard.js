import React from 'react';
import Card from './Card';

function KanbanBoard({ tickets, users, grouping, sorting }) {
  if (!Array.isArray(tickets)) {
    return <div>No tickets available.</div>;
  }

  // Group tickets based on the selected grouping option
  const groupTickets = (tickets, grouping) => {
    if (grouping === 'user') {
      // Map userId to user names
      const userMap = users.reduce((map, user) => {
        map[user.id] = user.name;
        return map;
      }, {});
      return tickets.reduce((acc, ticket) => {
        const group = userMap[ticket.userId] || 'Unassigned';
        if (!acc[group]) acc[group] = [];
        acc[group].push(ticket);
        return acc;
      }, {});
    }

    return tickets.reduce((acc, ticket) => {
      const group = ticket[grouping] || 'Unassigned';
      if (!acc[group]) acc[group] = [];
      acc[group].push(ticket);
      return acc;
    }, {});
  };

  // Sort tickets based on the selected sorting option
  const sortTickets = (tickets, sorting) => {
    return [...tickets].sort((a, b) => {
      if (sorting === 'priority') return b.priority - a.priority;
      if (sorting === 'title') return a.title.localeCompare(b.title);
      return 0;
    });
  };

  const groupedTickets = groupTickets(sortTickets(tickets, sorting), grouping);

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group) => (
        <div key={group} className="kanban-column">
          <h2>{group}</h2>
          {groupedTickets[group].map((ticket) => (
            <Card key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;
