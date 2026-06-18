import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function FilterStudent({ filterMajor, setFilterMajor }) {
  const { theme } = useContext(ThemeContext);

  const inputStyle = {
    backgroundColor: theme === 'dark' ? '#3e3e46' : '#ffffff',
    color: theme === 'dark' ? '#ffffff' : '#000000',
    border: `1px solid ${theme === 'dark' ? '#555' : '#ccc'}`,
    padding: '0.5rem',
    borderRadius: '4px'
  };

  return (
    <div>
      <label style={{ marginRight: '0.5rem' }}>Major Filter:</label>
      <select
        value={filterMajor}
        onChange={(e) => setFilterMajor(e.target.value)}
        style={inputStyle}
      >
        <option value="All Majors">All Majors</option>
        <option value="Information Technology">Information Technology</option>
        <option value="Business Administration">Business Administration</option>
        <option value="Marketing">Marketing</option>
        <option value="Software Engineering">Software Engineering</option>
      </select>
    </div>
  );
}
