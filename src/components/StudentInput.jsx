import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function StudentInput({ name, setName, age, setAge, major, setMajor, editingId, onSubmit, onCancel }) {
  const { theme } = useContext(ThemeContext);

  const cardStyle = {
    backgroundColor: theme === 'dark' ? '#2d2d34' : '#ffffff',
    border: `1px solid ${theme === 'dark' ? '#444' : '#dee2e6'}`,
    padding: '1.5rem',
    borderRadius: '8px',
    marginBottom: '2rem'
  };

  const inputStyle = {
    backgroundColor: theme === 'dark' ? '#3e3e46' : '#ffffff',
    color: theme === 'dark' ? '#ffffff' : '#000000',
    border: `1px solid ${theme === 'dark' ? '#555' : '#ccc'}`,
    padding: '0.5rem',
    borderRadius: '4px',
    marginRight: '0.5rem',
    marginBottom: '0.5rem'
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: theme === 'dark' ? '#6200ee' : '#007bff',
    color: '#ffffff',
    marginRight: '0.5rem',
    marginBottom: '0.5rem'
  };

  return (
    <div style={cardStyle}>
      <h2>{editingId ? 'Edit Student' : 'Add New Student'}</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="number"
          placeholder="Student Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={inputStyle}
          required
          min="1"
        />
        <select
          value={major}
          onChange={(e) => setMajor(e.target.value)}
          style={inputStyle}
        >
          <option value="Information Technology">Information Technology</option>
          <option value="Business Administration">Business Administration</option>
          <option value="Marketing">Marketing</option>
          <option value="Software Engineering">Software Engineering</option>
        </select>
        <button type="submit" style={buttonStyle}>
          {editingId ? 'Save Student' : 'Add Student'}
        </button>
        {editingId && (
          <button type="button" onClick={onCancel} style={{ ...buttonStyle, backgroundColor: '#6c757d' }}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}
