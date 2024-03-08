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
      <section className="flex flex-col items-start justify-start py-16">
        <div className="w-1/3 h-auto p-6 mx-auto mt-4 text-white border shadow-xl border-white/80 bg-black/40">
          <form onSubmit={handleSubmit}>
            <div className="p-2 text-left">
              <label htmlFor="assignee" className="text-sm font-bold">Name</label>
              <input
                onChange={handleInputChange}
                value={inputValues.assignee}
                name="assignee" id="assignee"
                type="text"
                required
                placeholder="Enter Assignee Name"
                className="w-full p-2 mt-1 text-sm bg-transparent border rounded border-white/40 focus:outline-none focus:ring focus:ring-violet-500"
              />
            </div>
            <div className="p-2 text-left">
              <label htmlFor="task" className="text-sm font-bold">Task</label>
              <input
                onChange={handleInputChange}
                value={inputValues.task}
                name="task" id="task"
                type="text"
                required
                placeholder="Enter Task"
                className="w-full p-2 mt-1 text-sm bg-transparent border rounded border-white/40 focus:outline-none focus:ring focus:ring-violet-500"
              />
            </div>
            <div className="p-2 text-left">
              <label htmlFor="priority" className="text-sm font-bold">Set Priority</label>
              <select
                onChange={handleInputChange}
                defaultValue={inputValues.priority}
                name="priority" id="priority"
                required
                className="w-full p-2 mt-1 text-sm capitalize bg-transparent border rounded border-white/40 focus:outline-none focus:ring focus:ring-violet-500"
              >
                <option value="high" className="text-black bg-transparent">High</option>
                <option value="mid" className="text-black bg-transparent">Mid</option>
                <option value="low" className="text-black bg-transparent">Low</option>
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
          <table className="min-w-full shadow-xl bg-black/40">
            <thead className="border border-slate-200">
              <tr>
                <th className="px-6 py-3 text-sm font-bold text-left text-white ">
                  Assignee Name
                </th>
                <th className="px-6 py-3 text-sm font-bold text-left text-white ">
                  Task Name
                </th>
                <th className="px-6 py-3 text-sm font-bold text-left text-white ">
                  Priority Name
                </th>
                <th className="px-6 py-3 text-sm font-bold text-left text-white ">
                  Status
                </th>
                <th className="px-6 py-3 text-sm font-bold text-center text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="border border-t-0 border-slate-200">
              {formData.map(data => (
                <tr key={data.id}>
                  {editingId === data.id ? 
                    <>
                      <td className="px-6 py-3 text-sm font-medium text-left text-white">
                        <input
                          type="text"
                          value={assigneeName}
                          onChange={(e) => setAssigneeName(e.target.value)}
                          name="assignee"
                          className="p-2 bg-transparent border rounded-lg focus:outline-none"
                        />
                      </td>
                      <td className="px-6 py-3 text-sm font-medium text-left text-white">
                        <input
                          type="text"
                          value={taskName}
                          onChange={(e) => setTaskName(e.target.value)}
                          name="task"
                          className="p-2 bg-transparent border rounded-lg focus:outline-none"
                        />
                      </td>
                      <td className="px-6 py-3 text-sm font-medium text-left text-white">
                        <select
                          className="w-40 p-2 capitalize bg-transparent border rounded-lg focus:outline-none outline-0"
                          name="priority"
                          defaultValue={taskPriority}
                          onChange={(e) => setTaskPriority(e.target.value)}
                          required
                        >
                          <option className="text-black bg-transparent" value="high">High</option>
                          <option className="text-black bg-transparent" value="mid">Mid</option>
                          <option className="text-black bg-transparent" value="low">Low</option>
                        </select>
                      </td>
                      <td className="py-3 pl-6">
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
                            <span className="text-sm text-yellow-300 peer-checked:text-green-300">
                              {data.completed ? "completed" : "In processing"}
                            </span>
                          </div>
                        </label>
                      </td>
                      <td className="px-6 py-3 text-sm font-medium text-white">
                        <div
                          className="flex items-center justify-center gap-3"
                          onClick={saveEditedValue}
                        >
                          <i className="cursor-pointer fa-solid fa-save"></i>
                        </div>
                      </td>
                    </> :
                    <>
                      <td className="px-6 py-3 text-sm font-medium text-left text-white">
                        <h6 className="p-2">{data.assignee}</h6>
                      </td>
                      <td className="px-6 py-3 text-sm font-medium text-left text-white">
                        <h6 className="p-2">{data.task}</h6>
                      </td>
                      <td className="px-6 py-3 text-sm font-medium text-left text-white capitalize">
                        <h6 className="p-2">{data.priority}</h6>
                      </td>
                      <td className="px-6 py-3">
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
                            <span className="text-sm font-bold text-yellow-300 peer-checked:text-green-300">
                              {data.completed ? "completed" : "In processing"}
                            </span>
                          </div>
                        </label>
                      </td>
                      <td className="px-6 py-3 text-sm font-medium text-white">
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
                          >
                            <i className="cursor-pointer fa-solid fa-pen"></i>
                          </div>
                          <div
                            onClick={() => deleteTask(data.id)}
                            className="cursor-pointer"
                          >
                            <i className="fa-solid fa-trash"></i>
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
