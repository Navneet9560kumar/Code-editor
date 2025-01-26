/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// SortSelector.js
import React from 'react';

const SortSelector = ({ onChange }) => (
  <div className="sort-selector">
    <label>Sort By:</label>
    <select onChange={(e) => onChange(e.target.value)}>
      <option value="priority">Priority</option>
      <option value="title">Title</option>
    </select>
  </div>
);

export default SortSelector;
