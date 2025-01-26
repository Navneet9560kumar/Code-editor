/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <h3>{ticket.title}</h3>
      <p>Status: {ticket.status}</p>
      <p>Priority: {getPriorityLabel(ticket.priority)}</p>
      <p>Assigned to: {getUserName(ticket.userId)}</p>
    </div>
  );
};

// Helper function to get priority label
const getPriorityLabel = (priority) => {
  switch (priority) {
    case 4:
      return "Urgent";
    case 3:
      return "High";
    case 2:
      return "Medium";
    case 1:
      return "Low";
    case 0:
      return "No Priority";
    default:
      return "Unknown";
  }
};

// Helper function to get user name
const getUserName = (userId) => {
  const users = {
    "usr-1": "Anoop Sharma",
    "usr-2": "Yogesh",
    "usr-3": "Shankar Kumar",
    "usr-4": "Ramesh",
    "usr-5": "Suresh",
  };
  return users[userId] || "Unknown User";
};

export default TicketCard;
