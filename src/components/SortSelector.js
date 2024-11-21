import React from 'react';

function SortSelector({ sorting, onChange }) {
  return (
    <select value={sorting} onChange={(e) => onChange(e.target.value)}>
      <option value="priority">Sort by Priority</option>
      <option value="title">Sort by Title</option>
    </select>
  );
}

export default SortSelector;
