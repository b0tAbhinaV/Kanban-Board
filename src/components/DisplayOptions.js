import React, { useState } from 'react';
import './DisplayOptions.css';

function DisplayOptions({ grouping, onGroupingChange, sorting, onSortingChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Tracks the main "Display Options" menu
  const [isGroupingOpen, setIsGroupingOpen] = useState(false); // Tracks the "Grouping" submenu
  const [isOrderingOpen, setIsOrderingOpen] = useState(false); // Tracks the "Ordering" submenu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsGroupingOpen(false);
    setIsOrderingOpen(false);
  };

  return (
    <div className="display-options-container">
      {/* Main Display Options button */}
      <button className="display-options-button" onClick={toggleMenu}>
        Display Options
      </button>

      {/* Dropdown for Display Options */}
      {isMenuOpen && (
        <div className="dropdown-menu">
          {/* Grouping Button */}
          <button
            className="dropdown-item"
            onClick={() => {
              setIsGroupingOpen(!isGroupingOpen);
              setIsOrderingOpen(false); // Close the Ordering submenu
            }}
          >
            Grouping
          </button>
          {isGroupingOpen && (
            <div className="submenu">
              <button onClick={() => onGroupingChange('status')}>Group by Status</button>
              <button onClick={() => onGroupingChange('user')}>Group by User</button>
              <button onClick={() => onGroupingChange('priority')}>Group by Priority</button>
            </div>
          )}

          {/* Ordering Button */}
          <button
            className="dropdown-item"
            onClick={() => {
              setIsOrderingOpen(!isOrderingOpen);
              setIsGroupingOpen(false); // Close the Grouping submenu
            }}
          >
            Ordering
          </button>
          {isOrderingOpen && (
            <div className="submenu">
              <button onClick={() => onSortingChange('title')}>Sort by Title</button>
              <button onClick={() => onSortingChange('priority')}>Sort by Priority</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default DisplayOptions;
