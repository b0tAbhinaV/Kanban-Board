import React from 'react';

function GroupSelector({ grouping, onChange }) {
  return (
    <select value={grouping} onChange={(e) => onChange(e.target.value)}>
      <option value="status">Group by Status</option>
      <option value="user">Group by User</option>
      <option value="priority">Group by Priority</option>
    </select>
  );
}

export default GroupSelector;
