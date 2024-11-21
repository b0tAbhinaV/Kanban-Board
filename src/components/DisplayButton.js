import React, { useState } from 'react';
import './DisplayButton.css';

function DisplayButton({ grouping, onGroupingChange, sorting, onSortingChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleGroupingChange = (newGrouping) => {
    onGroupingChange(newGrouping);
    setIsOpen(false); // Close the menu after selection
  };

  const handleSortingChange = (newSorting) => {
    onSortingChange(newSorting);
    setIsOpen(false); // Close the menu after selection
  };

  return (
    <div className="display-button-container">
      <button className="display-button" onClick={() => setIsOpen(!isOpen)}>
        Display Options
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-section">
            <h4>Grouping</h4>
            <button onClick={() => handleGroupingChange('status')}>Group by Status</button>
            <button onClick={() => handleGroupingChange('user')}>Group by User</button>
            <button onClick={() => handleGroupingChange('priority')}>Group by Priority</button>
          </div>
          <div className="dropdown-section">
            <h4>Ordering</h4>
            <button onClick={() => handleSortingChange('title')}>Sort by Title</button>
            <button onClick={() => handleSortingChange('priority')}>Sort by Priority</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DisplayButton;
