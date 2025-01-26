/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const GroupSelector = ({ onChange }) => {
  return (
    <div>
      <label htmlFor="group-selector">Group By: </label>
      <select id="group-selector" onChange={(e) => onChange(e.target.value)}>
        <option value="status">Status</option>
        <option value="user">User</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
};

export default GroupSelector;
