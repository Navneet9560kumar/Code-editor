/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import TicketCard from "./Components/TicketCard"; // Assume you have a TicketCard component

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState("status");
  const [sortOrder, setSortOrder] = useState("priority");

  // Fetch tickets and users from the provided API
  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((data) => {
        setTickets(data.tickets);
        setUsers(data.users);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Group tickets by status, user, or priority
  const groupedTickets = () => {
    if (groupBy === "status") {
      return tickets.reduce((acc, ticket) => {
        const status = ticket.status;
        acc[status] = acc[status] || [];
        acc[status].push(ticket);
        return acc;
      }, {});
    } else if (groupBy === "user") {
      return tickets.reduce((acc, ticket) => {
        const user = users.find((user) => user.id === ticket.userId);
        const userName = user ? user.name : "Unknown User";
        acc[userName] = acc[userName] || [];
        acc[userName].push(ticket);
        return acc;
      }, {});
    } else if (groupBy === "priority") {
      return tickets.reduce((acc, ticket) => {
        const priorityLevel = ticket.priority;
        acc[priorityLevel] = acc[priorityLevel] || [];
        acc[priorityLevel].push(ticket);
        return acc;
      }, {});
    }
  };

  // Sort tickets by priority or title
  const sortTickets = (ticketGroup) => {
    if (sortOrder === "priority") {
      return ticketGroup.sort((a, b) => b.priority - a.priority);
    } else if (sortOrder === "title") {
      return ticketGroup.sort((a, b) => a.title.localeCompare(b.title));
    }
    return ticketGroup;
  };

  const ticketGroups = groupedTickets();

  return (
    <div className="app-container">
      <h1>Kanban Board</h1>

      {/* Grouping and Sorting options */}
      <div className="controls">
        <button onClick={() => setGroupBy("status")}>Group by Status</button>
        <button onClick={() => setGroupBy("user")}>Group by User</button>
        <button onClick={() => setGroupBy("priority")}>
          Group by Priority
        </button>

        <button onClick={() => setSortOrder("priority")}>
          Sort by Priority
        </button>
        <button onClick={() => setSortOrder("title")}>Sort by Title</button>
      </div>

      {/* Kanban Board */}
      <div className="kanban-board">
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
    </div>
  );
};

export default App;
