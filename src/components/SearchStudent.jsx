import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function SearchStudent({ searchKeyword, setSearchKeyword }) {
  const { theme } = useContext(ThemeContext);

  const inputStyle = {
    backgroundColor: theme === 'dark' ? '#3e3e46' : '#ffffff',
    color: theme === 'dark' ? '#ffffff' : '#000000',
    border: `1px solid ${theme === 'dark' ? '#555' : '#ccc'}`,
    padding: '0.5rem',
    borderRadius: '4px',
    flex: 1,
    minWidth: '200px'
  };

  return (
    <input
      type="text"
      placeholder="Search students by name..."
      value={searchKeyword}
      onChange={(e) => setSearchKeyword(e.target.value)}
      style={inputStyle}
    />
  );
}
