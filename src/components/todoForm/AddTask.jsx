import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function AddTask() {
  const [formData, setFormData] = useState([]);
  const [inputValues, setInputValues] = useState({
    task: "",
    assignee: "",
    priority: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [taskName, setTaskName] = useState("");
  const [assigneeName, setAssigneeName] = useState("");
  const [taskPriority, setTaskPriority] = useState("");

  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      id: Date.now(),
      task: inputValues.task,
      assignee: inputValues.assignee,
      priority: inputValues.priority,
      completed: false,
    };
    console.log("ID", newData.id);
    setFormData([...formData, newData]);
    // setFormData(formData => [...formData, newData])
    localStorage.setItem('formData', JSON.stringify(inputValues) )
    
    console.log("JSON Value", JSON.stringify(inputValues));
    console.log("JSON formData", JSON.stringify(formData));
    console.log("JSON newData", JSON.stringify(newData));
    setInputValues({
      task: "",
      assignee: "",
      priority: "",
    });
    navigate('/ViewTask')
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  return (
    <>
      <div className="h-screen overflow-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <section className="flex flex-col items-start justify-start py-16">
          <div className="w-1/3 h-auto p-6 mx-auto mt-4 text-white border shadow-xl border-white/80 bg-black/40">
            <form onSubmit={handleSubmit}>
              <div className="p-2 text-left">
                <label htmlFor="assignee" className="text-sm font-bold">
                  Name
                </label>
                <input
                  onChange={handleInputChange}
                  value={inputValues.assignee}
                  name="assignee"
                  id="assignee"
                  type="text"
                  required
                  placeholder="Enter Assignee Name"
                  className="w-full p-2 mt-1 text-sm bg-transparent border rounded border-white/40 focus:outline-none focus:ring focus:ring-violet-500"
                />
              </div>
              <div className="p-2 text-left">
                <label htmlFor="task" className="text-sm font-bold">
                  Task
                </label>
                <input
                  onChange={handleInputChange}
                  value={inputValues.task}
                  name="task"
                  id="task"
                  type="text"
                  required
                  placeholder="Enter Task"
                  className="w-full p-2 mt-1 text-sm bg-transparent border rounded border-white/40 focus:outline-none focus:ring focus:ring-violet-500"
                />
              </div>
              <div className="p-2 text-left">
                <label htmlFor="priority" className="text-sm font-bold">
                  Set Priority
                </label>
                <select
                  onChange={handleInputChange}
                  defaultValue={inputValues.priority}
                  name="priority"
                  id="priority"
                  required
                  className="w-full p-2 mt-1 text-sm capitalize bg-transparent border rounded border-white/40 focus:outline-none focus:ring focus:ring-violet-500"
                >
                  <option value="high" className="text-black bg-transparent">
                    High
                  </option>
                  <option value="mid" className="text-black bg-transparent">
                    Mid
                  </option>
                  <option value="low" className="text-black bg-transparent">
                    Low
                  </option>
                </select>
              </div>
              <div className="p-2 mt-4">
                <button
                  type="submit"
                  className="w-full px-8 py-3 text-sm text-white bg-purple-500 rounded shadow hover:bg-indigo-500 "
                >
                  Add Task Here...
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default AddTask;
