/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import TicketCard from './TicketCard'; // Assuming you have a TicketCard component

const KanbanBoard = ({ tickets, users, groupBy, sortOrder }) => {
  const groupedTickets = () => {
    if (groupBy === 'status') {
      return tickets.reduce((acc, ticket) => {
        const status = ticket.status;
        acc[status] = acc[status] || [];
        acc[status].push(ticket);
        return acc;
      }, {});
    } else if (groupBy === 'user') {
      return tickets.reduce((acc, ticket) => {
        const user = users.find((user) => user.id === ticket.userId);
        const userName = user ? user.name : 'Unknown User';
        acc[userName] = acc[userName] || [];
        acc[userName].push(ticket);
        return acc;
      }, {});
    } else if (groupBy === 'priority') {
      return tickets.reduce((acc, ticket) => {
        const priorityLevel = ticket.priority;
        acc[priorityLevel] = acc[priorityLevel] || [];
        acc[priorityLevel].push(ticket);
        return acc;
      }, {});
    }
  };

  const sortTickets = (ticketGroup) => {
    if (sortOrder === 'priority') {
      return ticketGroup.sort((a, b) => b.priority - a.priority);
    } else if (sortOrder === 'title') {
      return ticketGroup.sort((a, b) => a.title.localeCompare(b.title));
    }
    return ticketGroup;
  };

  const ticketGroups = groupedTickets();

  return (
    <div className="kanban-board">
      {/* Render your group and ticket display here */}
      {Object.keys(ticketGroups).map((group) => (
        <div key={group} className="ticket-group">
          <h2>{group}</h2>
          <div className="ticket-group-items">
            {sortTickets(ticketGroups[group]).map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// Default export for the KanbanBoard component
export default KanbanBoard;
