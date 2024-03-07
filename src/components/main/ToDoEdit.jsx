import React, { useState, useEffect } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null); // Track the id of the task being edited
  const [editTaskName, setEditTaskName] = useState(''); // Track the edited task name

  // useEffect(() => {
  //   const storedTasks = JSON.parse(localStorage.getItem('tasks'));
  //   if (storedTasks) {
  //     setTasks(storedTasks);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('tasks', JSON.stringify(tasks));
  // }, [tasks]);

  const addTask = (taskName) => {
    if (taskName.trim() !== '') {
      const newTask = { id: Date.now(), name: taskName, completed: false };
      setTasks([...tasks, newTask]);
      console.log("addTask Task Check:", newTask)
    }
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const startEditingTask = (taskId, taskName) => {
    setEditingTaskId(taskId);
    setEditTaskName(taskName);
    console.log("task id", taskId)
    console.log("task id", taskName)
  };

  const saveEditedTask = () => {
    console.log("saveEditedTask tasks:", tasks)
    const updatedTasks = tasks.map(task =>
      task.id === editingTaskId ? { ...task, name: editTaskName } : task
    );
    setTasks(updatedTasks);
    setEditingTaskId(null);
    console.log("saveEditedTask updatedTasks::", updatedTasks)
    console.log("saveEditedTask:", editTaskName)
    
    console.log("saveEditedTask:", tasks)
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const taskName = e.target.task.value;
          console.log("Value before", e.target.task.value)
          addTask(taskName);
          e.target.task.value = '';
          console.log("Task name target value:", taskName)
          console.log("Value after", e.target.task.value)
        }}
        className='flex justify-center gap-3 my-2'
      >
        <input type="text" className='p-2 border' name="task" placeholder="Enter task" />
        <button type="submit" className='px-4 py-2 text-white bg-gray-500 rounded'>Add Task</button>
      </form>
      <ul>
        
        {tasks.map(task => (
          console.log("addTask Task Id:", task.id),
          console.log("addTask Task editing Id:", editingTaskId),
          console.log("addTask Task condition:", editingTaskId === task.id),
          console.log("addTask Task completed:", task.completed),
          console.log("task name:", task.name),
          <li key={task.id} className='flex justify-center gap-3'>
            {editingTaskId === task.id ? (
              <>            
                <input
                  type="text"
                  value={editTaskName}
                  onChange={(e) => setEditTaskName(e.target.value)}
                />
                <button onClick={saveEditedTask}>Save</button>
              </>
            ) : (
              <>
              
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                />
                <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                  {task.name}
                </span>
                <button onClick={() => startEditingTask(task.id, task.name)}>Edit</button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
