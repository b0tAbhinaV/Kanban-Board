import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import DisplayOptions from './components/DisplayOptions';
import { fetchTickets } from './utils/api';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(() => localStorage.getItem('grouping') || 'status');
  const [sorting, setSorting] = useState(() => localStorage.getItem('sorting') || 'priority');

  useEffect(() => {
    fetchTickets().then((data) => {
      setTickets(data.tickets);
      setUsers(data.users);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('grouping', grouping);
  }, [grouping]);

  useEffect(() => {
    localStorage.setItem('sorting', sorting);
  }, [sorting]);

  const clearAllDoneStates = () => {
    // Remove all "done-status" keys from localStorage
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith('done-status-')) {
        localStorage.removeItem(key);
      }
    });
    // Force re-render by refreshing the page
    window.location.reload();
  };

  return (
    <div className="app">
      <header>
        <h1>Kanban Board</h1>
      </header>
      <div className="controls">
        <DisplayOptions
          grouping={grouping}
          onGroupingChange={setGrouping}
          sorting={sorting}
          onSortingChange={setSorting}
        />
        <button className="clear-all-button" onClick={clearAllDoneStates}>
          Clear All Done States
        </button>
      </div>
      <KanbanBoard tickets={tickets} users={users} grouping={grouping} sorting={sorting} />
    </div>
  );
}

export default App;
