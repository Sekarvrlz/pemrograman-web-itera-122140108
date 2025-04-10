import React, { useState } from 'react';

const TaskForm = ({ addTask, courseOptions }) => {
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');
  const [course, setCourse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !course.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      deadline,
      course,
      createdAt: new Date().toISOString()
    };
    addTask(newTask);
    setTitle('');
    setDeadline('');
    setCourse('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Judul Tugas:
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Tambah tugas..."
        />
      </label>

      <label>
        Mata Kuliah:
        <select value={course} onChange={e => setCourse(e.target.value)}>
          <option value="">-- Pilih Mata Kuliah --</option>
          {courseOptions.map((course, index) => (
            <option key={index} value={course}>{course}</option>
          ))}
        </select>
      </label>

      <label>
        Deadline:
        <input
          type="datetime-local"
          value={deadline}
          onChange={e => setDeadline(e.target.value)}
        />
      </label>

      <button type="submit">Tambah</button>
    </form>
  );
};

export default TaskForm;