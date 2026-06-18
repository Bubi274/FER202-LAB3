import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useStudents } from '../hooks/useStudents';
import StudentInput from './StudentInput';
import StudentList from './StudentList';
import SearchStudent from './SearchStudent';
import FilterStudent from './FilterStudent';

export default function StudentManagement() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const {
    name,
    setName,
    age,
    setAge,
    major,
    setMajor,
    editingId,
    searchKeyword,
    setSearchKeyword,
    filterMajor,
    setFilterMajor,
    filteredStudents,
    handleSubmit,
    handleEdit,
    handleDelete,
    handleCancel
  } = useStudents();

  const containerStyle = {
    backgroundColor: theme === 'dark' ? '#1e1e24' : '#f8f9fa',
    color: theme === 'dark' ? '#f8f9fa' : '#1e1e24',
    minHeight: '100vh',
    padding: '2rem',
    fontFamily: 'sans-serif',
    textAlign: 'left'
  };

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

  return (
    <div style={containerStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Student Management</h1>
        <button style={buttonStyle} onClick={toggleTheme}>
          {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>

      <StudentInput
        name={name}
        setName={setName}
        age={age}
        setAge={setAge}
        major={major}
        setMajor={setMajor}
        editingId={editingId}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />

      <div style={cardStyle}>
        <h2>Search & Filter</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <SearchStudent
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
          />
          <FilterStudent
            filterMajor={filterMajor}
            setFilterMajor={setFilterMajor}
          />
        </div>
      </div>

      <StudentList
        students={filteredStudents}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
