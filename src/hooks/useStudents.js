import { useState, useEffect, useReducer, useMemo, useCallback } from 'react';
import { studentReducer } from './studentReducer';
import { initialStudents } from '../data/initialStudents';

export function useStudents() {
  const [students, dispatch] = useReducer(studentReducer, null);
  
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [major, setMajor] = useState('Software Engineering');
  
  const [editingId, setEditingId] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filterMajor, setFilterMajor] = useState('All Majors');

  useEffect(() => {
    const localData = localStorage.getItem('students');
    let loadedData = initialStudents;
    if (localData) {
      const parsed = JSON.parse(localData);
      if (parsed.length > 0) {
        loadedData = parsed;
      }
    }
    dispatch({ type: 'LOAD_STUDENTS', payload: loadedData });
  }, []);

  useEffect(() => {
    if (students !== null) {
      localStorage.setItem('students', JSON.stringify(students));
    }
  }, [students]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!name.trim() || !age || !major) return;
    
    if (editingId) {
      dispatch({
        type: 'UPDATE_STUDENT',
        payload: { id: editingId, name: name.trim(), age: String(age), major }
      });
      setEditingId(null);
    } else {
      const ids = (students || []).map(s => parseInt(s.id, 10)).filter(id => !isNaN(id));
      const maxId = ids.length > 0 ? Math.max(...ids) : 0;
      const newId = String(maxId > 0 ? maxId + 1 : 1);

      dispatch({
        type: 'ADD_STUDENT',
        payload: { id: newId, name: name.trim(), age: String(age), major }
      });
    }
    
    setName('');
    setAge('');
    setMajor('Software Engineering');
  }, [name, age, major, editingId, students]);

  const handleEdit = useCallback((student) => {
    setName(student.name);
    setAge(student.age);
    setMajor(student.major);
    setEditingId(student.id);
  }, []);

  const handleDelete = useCallback((id) => {
    dispatch({ type: 'DELETE_STUDENT', payload: id });
    if (editingId === id) {
      setEditingId(null);
      setName('');
      setAge('');
      setMajor('Software Engineering');
    }
  }, [editingId]);

  const handleCancel = useCallback(() => {
    setEditingId(null);
    setName('');
    setAge('');
    setMajor('Software Engineering');
  }, []);

  const filteredStudents = useMemo(() => {
    if (students === null) return [];
    return students.filter((student) => {
      const matchesName = student.name.toLowerCase().includes(searchKeyword.toLowerCase());
      const matchesMajor = filterMajor === 'All Majors' || student.major === filterMajor;
      return matchesName && matchesMajor;
    });
  }, [students, searchKeyword, filterMajor]);

  return {
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
  };
}
