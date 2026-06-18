import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import StudentManagement from './components/StudentManagement';

function App() {
  return (
    <ThemeProvider>
      <StudentManagement />
    </ThemeProvider>
  );
}

export default App;
