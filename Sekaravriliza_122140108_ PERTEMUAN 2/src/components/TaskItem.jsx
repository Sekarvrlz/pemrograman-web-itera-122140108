import React, { useState } from 'react';

const TaskItem = ({ task, deleteTask, updateTask }) => {
  const [isEditing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleUpdate = () => {
    updateTask({ ...task, title: newTitle });
    setEditing(false);
  };

  return (
    <div className="bg-white p-3 rounded shadow flex justify-between items-center">
      {isEditing ? (
        <input
          className="border p-1 rounded mr-2"
          value={newTitle}
          onChange={e => setNewTitle(e.target.value)}
        />
      ) : (
        <span>{task.title}</span>
      )}
      <div className="space-x-2">
        {isEditing ? (
          <button onClick={handleUpdate} className="text-green-600">Simpan</button>
        ) : (
          <button onClick={() => setEditing(true)} className="text-blue-600">Edit</button>
        )}
        <button onClick={() => deleteTask(task.id)} className="text-red-600">Hapus</button>
      </div>
    </div>
  );
};

export default TaskItem;
