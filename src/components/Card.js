import React, { useState, useEffect } from 'react';
import './Card.css';

function Card({ ticket }) {
  // Retrieve the "done" status from localStorage or default to false
  const [isDone, setIsDone] = useState(() => {
    const savedStatus = localStorage.getItem(`done-status-${ticket.id}`);
    return savedStatus ? JSON.parse(savedStatus) : false;
  });

  // Save "done" status to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(`done-status-${ticket.id}`, JSON.stringify(isDone));
  }, [isDone, ticket.id]);

  const toggleDone = () => {
    setIsDone(!isDone);
  };

  const priorityLabels = ['No Priority', 'Low', 'Medium', 'High', 'Urgent'];

  return (
    <div className={`card ${isDone ? 'card-done' : ''}`}>
      <div className="card-header">
        <input
          type="checkbox"
          checked={isDone}
          onChange={toggleDone}
          className="card-checkbox"
        />
        <h3>{ticket.title}</h3>
      </div>
      <p>{ticket.description}</p>
      <p>Status: {ticket.status}</p>
      <p>Priority: {priorityLabels[ticket.priority]}</p>
    </div>
  );
}

export default Card;
