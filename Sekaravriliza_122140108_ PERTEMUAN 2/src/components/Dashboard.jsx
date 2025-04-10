import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import logoItera from '../assets/logo-itera.png';
const courseList = [
  "Pemrograman Web",
  "Socio Informatika",
  "Manajemen Basis Data",
  "Sistem Tertanam",
  "Pengembangan Aplikasi Mobile",
  "Sistem Informasi Lanjut",
  "Infomatika retriveral",
];

const Dashboard = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const now = new Date();
    tasks.forEach(task => {
      if (task.deadline) {
        const diff = new Date(task.deadline) - now;
        if (diff > 0 && diff <= 60000) {
          setTimeout(() => {
            alert(`⏰ Reminder: Deadline untuk "${task.title}" hampir tiba!`);
          }, diff);
        }
      }
    });
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);
  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));
  const handleSort = () => setSortAsc(!sortAsc);

  const filteredTasks = tasks
    .filter(task =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (task.course && task.course.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      const dateA = new Date(a.deadline);
      const dateB = new Date(b.deadline);
      return sortAsc ? dateA - dateB : dateB - dateA;
    });

  return (
    <div>
      <header
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1.5rem 2rem',
    backgroundColor: '#2c3e50',
    color: '#fff',
    flexWrap: 'wrap',
  }}
>
  {/* Logo */}
  <img src={logoItera} alt="Logo ITERA" style={{ height: '70px' }} />

  {/* Judul di Tengah */}
  <h1
    style={{
      flex: 1,
      textAlign: 'center',
      fontSize: '2.5rem',
      fontFamily: "'Poppins', sans-serif",
      margin: 0,
      color: '#ecf0f1',
      letterSpacing: '1px',
    }}
  >
    TugaSin
  </h1>

  {/* Search Bar */}
  <input
    type="text"
    placeholder="Cari tugas..."
    value={searchQuery}
    onChange={e => setSearchQuery(e.target.value)}
    style={{
      padding: '0.6rem 1rem',
      borderRadius: '8px',
      fontSize: '1rem',
      border: 'none',
      width: '250px',
    }}
  />
</header>

      <TaskForm addTask={addTask} courseOptions={courseList} />

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Judul</th>
              <th>Mata Kuliah</th>
              <th onClick={handleSort} style={{ cursor: 'pointer' }}>
                Deadline {sortAsc ? '↑' : '↓'}
              </th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.course}</td>
                <td>{task.deadline ? new Date(task.deadline).toLocaleString() : '-'}</td>
                <td>
                  <button
                    onClick={() => deleteTask(task.id)}
                    style={{ backgroundColor: '#e74c3c', color: '#fff', padding: '0.5rem 1rem', borderRadius: '6px' }}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer style={{ textAlign: 'center', marginTop: '2rem', padding: '1rem' }}>
        &copy; {new Date().getFullYear()} Dashboard Mahasiswa | Dibuat Untuk Tugas Praktikum | Oleh.skravrlza
      </footer>
    </div>
  );
};

export default Dashboard;
