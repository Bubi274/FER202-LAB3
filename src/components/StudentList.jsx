import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function StudentList({ students, onEdit, onDelete }) {
  const { theme } = useContext(ThemeContext);

  const cardStyle = {
    backgroundColor: theme === 'dark' ? '#2d2d34' : '#ffffff',
    border: `1px solid ${theme === 'dark' ? '#444' : '#dee2e6'}`,
    padding: '1.5rem',
    borderRadius: '8px',
    marginBottom: '2rem'
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

  const tableHeaderStyle = {
    borderBottom: `2px solid ${theme === 'dark' ? '#555' : '#ccc'}`,
    padding: '0.75rem',
    textAlign: 'left'
  };

  const tableCellStyle = {
    borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#eee'}`,
    padding: '0.75rem'
  };

  return (
    <div style={cardStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2>Student List</h2>
        <div>
          Total Students Shown: {students.length}
        </div>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>ID</th>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Age</th>
            <th style={tableHeaderStyle}>Major</th>
            <th style={tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td style={tableCellStyle}>{student.id}</td>
              <td style={tableCellStyle}>{student.name}</td>
              <td style={tableCellStyle}>{student.age}</td>
              <td style={tableCellStyle}>{student.major}</td>
              <td style={tableCellStyle}>
                <button
                  onClick={() => onEdit(student)}
                  style={{ ...buttonStyle, backgroundColor: '#ffc107', color: '#000' }}
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(student.id)}
                  style={{ ...buttonStyle, backgroundColor: '#dc3545' }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {students.length === 0 && (
            <tr>
              <td colSpan="5" style={{ ...tableCellStyle, textAlign: 'center' }}>
                No students found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
