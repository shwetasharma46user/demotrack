import React, { useState } from "react";

function FormTodo() {
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
    setInputValues({
      task: "",
      assignee: "",
      priority: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const startEditingTask = (dataId, dataTask, dataAssignee, dataPriority) => {
    setEditingId(dataId);
    setTaskName(dataTask);
    setAssigneeName(dataAssignee);
    setTaskPriority(dataPriority);
  };

  const saveEditedValue = () => {
    const updatedTasks = formData.map(data =>
      data.id === editingId
        ? {
            ...data,
            task: taskName,
            assignee: assigneeName,
            priority: taskPriority,
          }
        : data
    );
    setFormData(updatedTasks);
    setEditingId(null);
  };

  const deleteTask = (dataId) => {
    const updatedTasks = formData.filter((data) => data.id !== dataId);
    setFormData(updatedTasks);
  };

  const statusOfTask = (dataId) => {
    const updatedTasks = formData.map((data) =>
      data.id === dataId ? { ...data, completed: !data.completed } : data
    );
    setFormData(updatedTasks);
  };

  return (
    <div className="h-screen overflow-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {/* <Header /> */}
      <section className="flex flex-col items-start justify-start py-16 text-white">
        <div className="w-1/3 h-auto p-6 mx-auto mt-4 text-black bg-white border rounded">
          <form onSubmit={handleSubmit}>
            <div className="p-2 text-left">
              <label htmlFor="assignee" className="text-sm font-bold">Name</label>
              <input
                onChange={handleInputChange}
                value={inputValues.assignee}
                name="assignee" id="assignee"
                type="text"
                placeholder="Enter Assignee Name"
                className="w-full p-2 mt-1 text-sm border rounded focus:outline-none focus:ring focus:ring-violet-500"
              />
            </div>
            <div className="p-2 text-left">
              <label htmlFor="task" className="text-sm font-bold">Task</label>
              <input
                onChange={handleInputChange}
                value={inputValues.task}
                name="task" id="task"
                type="text"
                placeholder="Enter Task"
                className="w-full p-2 mt-1 text-sm border rounded focus:outline-none focus:ring focus:ring-violet-500"
              />
            </div>
            <div className="p-2 text-left">
              <label htmlFor="priority" className="text-sm font-bold">Set Priority</label>
              <select
                onChange={handleInputChange}
                defaultValue={inputValues.priority}
                name="priority" id="priority"
                className="w-full p-2 mt-1 text-sm capitalize border rounded focus:outline-none focus:ring focus:ring-violet-500"
              >
                <option value="high">High</option>
                <option value="mid">Mid</option>
                <option value="low">Low</option>
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
        <div className="w-3/4 mx-auto my-6">
          <table className="min-w-full">
            <thead className="border-b bg-slate-50 border-slate-200">
              <tr>
                <th className="px-6 py-3 text-sm font-medium text-left text-slate-900">
                  Assignee Name
                </th>
                <th className="px-6 py-3 text-sm font-medium text-left text-slate-900">
                  Task Name
                </th>
                <th className="px-6 py-3 text-sm font-medium text-left text-slate-900">
                  Priority Name
                </th>
                <th className="px-6 py-3 text-sm font-medium text-left text-slate-900">
                  Status
                </th>
                <th className="px-6 py-3 text-sm font-medium text-left text-slate-900">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="border-b bg-slate-50 border-slate-200">
              {formData.map(data => (
                <tr key={data.id}>
                  {editingId === data.id ? 
                    <>
                      <td className="px-6 py-3 text-sm font-medium text-left text-slate-900">
                        <input
                          type="text"
                          value={assigneeName}
                          onChange={(e) => setAssigneeName(e.target.value)}
                          name="assignee"
                        />
                      </td>
                      <td className="px-6 py-3 text-sm font-medium text-left text-slate-900">
                        <input
                          type="text"
                          value={taskName}
                          onChange={(e) => setTaskName(e.target.value)}
                          name="task"
                        />
                      </td>
                      <td className="px-6 py-3 text-sm font-medium text-left text-slate-900">
                        <select
                          className="w-48 p-2 capitalize border rounded-lg outline-0"
                          name="priority"
                          defaultValue={taskPriority}
                          onChange={(e) => setTaskPriority(e.target.value)}
                          required
                        >
                          <option value="high">High</option>
                          <option value="mid">Mid</option>
                          <option value="low">Low</option>
                        </select>
                      </td>
                      <td className="w-56 py-2">
                        <label className="flex items-center gap-2 cursor-pointer select-none">
                          <div className="relative flex items-center gap-2">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={data.completed}
                              onChange={() => statusOfTask(data.id)}
                              name="status"
                            />
                            <div className="h-8 bg-gray-100 rounded-full shadow-lg w-14 peer-checked:bg-gray-200"></div>
                            <div className="absolute w-6 h-6 transition bg-yellow-500 rounded-full top-1 left-1 peer-checked:translate-x-full peer-checked:bg-green-500"></div>
                            <span className="text-sm font-bold text-yellow-500 peer-checked:text-green-500">
                              {data.completed ? "completed" : "In processing"}
                            </span>
                          </div>
                        </label>
                      </td>
                      <td className="px-6 py-3 text-sm font-medium text-left text-slate-900">
                        <div
                          className="flex items-center justify-center gap-3"
                          onClick={saveEditedValue}
                        >
                          <i className="cursor-pointer fa-solid fa-save"></i>
                        </div>
                      </td>
                    </> :
                    <>
                      <td className="px-6 py-3 text-sm font-medium text-left text-slate-900">
                        {data.assignee}
                      </td>
                      <td className="px-6 py-3 text-sm font-medium text-left text-slate-900">
                        {data.task}
                      </td>
                      <td className="px-6 py-3 text-sm font-medium text-left capitalize text-slate-900">
                        {data.priority}
                      </td>
                      <td className="w-56 py-2">
                        <label className="flex items-center gap-2 select-none">
                          <div className="relative flex items-center gap-2">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={data.completed}
                              readOnly
                              name="status"
                            />
                            <div className="h-8 bg-gray-100 rounded-full shadow-lg w-14 peer-checked:bg-gray-200"></div>
                            <div className="absolute w-6 h-6 transition bg-yellow-500 rounded-full top-1 left-1 peer-checked:translate-x-full peer-checked:bg-green-500"></div>
                            <span className="text-sm font-bold text-yellow-500 peer-checked:text-green-500">
                              {data.completed ? "completed" : "In processing"}
                            </span>
                          </div>
                        </label>
                      </td>
                      <td className="px-6 py-3 text-sm font-medium text-left text-slate-900">
                        <div className="flex items-center justify-center gap-3">
                          <div
                            onClick={() =>
                              startEditingTask(
                                data.id,
                                data.task,
                                data.assignee,
                                data.priority
                              )
                            }
                            className="cursor-pointer "
                          >
                            <i className="cursor-pointer fa-solid fa-pen"></i>
                          </div>
                          <div
                            onClick={() => deleteTask(data.id)}
                            className="cursor-pointer"
                          >
                            <i className="cursor-pointer fa-solid fa-trash"></i>
                          </div>
                        </div>
                      </td>
                    </>
                  }
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default FormTodo;
