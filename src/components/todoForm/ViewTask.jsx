import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ViewTask() {
  const [formData, setFormData] = useState(null);
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

  useEffect(() => {
    // Step 2: Retrieve form formData from local storage
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
      // Step 3: Parse stored string back into an object
      const parsedFormData = JSON.parse(storedFormData);
      setFormData(parsedFormData);
    }
  }, []);
  
  const startEditingTask = (dataId, dataTask, dataAssignee, dataPriority) => {
    setEditingId(dataId);
    setTaskName(dataTask);
    setAssigneeName(dataAssignee);
    setTaskPriority(dataPriority);
  };

  const saveEditedValue = () => {
    const updatedTasks = formData.map((data) =>
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

  const navigate = useNavigate();

  return (
    <>
      <div className="h-screen overflow-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="w-3/4 mx-auto my-6 py-14">
          <div className="text-right">
            <button
              type="submit"
              onClick={() => navigate("/AddTask")}
              className="px-8 py-3 my-4 text-sm font-bold text-white bg-purple-700 rounded shadow hover:bg-indigo-800"
            >
              Add Task
            </button>
          </div>
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
              {/* {formData.map((data) => (
                <tr key={data.id}>
                  {editingId === data.id ? (
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
                          <option
                            className="text-black bg-transparent"
                            value="high"
                          >
                            High
                          </option>
                          <option
                            className="text-black bg-transparent"
                            value="mid"
                          >
                            Mid
                          </option>
                          <option
                            className="text-black bg-transparent"
                            value="low"
                          >
                            Low
                          </option>
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
                    </>
                  ) : (
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
                  )}
                </tr>
              ))} */}
              <>
              {formData && (
                <tr>
                      <td className="px-6 py-3 text-sm font-medium text-left text-white">
                        <h6 className="p-2">{formData.assignee}</h6>
                      </td>
                      <td className="px-6 py-3 text-sm font-medium text-left text-white">
                        <h6 className="p-2">{formData.task}</h6>
                      </td>
                      <td className="px-6 py-3 text-sm font-medium text-left text-white capitalize">
                        <h6 className="p-2">{formData.priority}</h6>
                      </td>
                      <td className="px-6 py-3">
                        <label className="flex items-center gap-2 select-none">
                          <div className="relative flex items-center gap-2">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={formData.completed}
                              readOnly
                              name="status"
                            />
                            <div className="h-8 bg-gray-100 rounded-full shadow-lg w-14 peer-checked:bg-gray-200"></div>
                            <div className="absolute w-6 h-6 transition bg-yellow-500 rounded-full top-1 left-1 peer-checked:translate-x-full peer-checked:bg-green-500"></div>
                            <span className="text-sm font-bold text-yellow-300 peer-checked:text-green-300">
                              {formData.completed ? "completed" : "In processing"}
                            </span>
                          </div>
                        </label>
                      </td>
                      <td className="px-6 py-3 text-sm font-medium text-white">
                        <div className="flex items-center justify-center gap-3">
                          <div
                            onClick={() =>
                              startEditingTask(
                                formData.id,
                                formData.task,
                                formData.assignee,
                                formData.priority
                              )
                            }
                          >
                            <i className="cursor-pointer fa-solid fa-pen"></i>
                          </div>
                          <div
                            onClick={() => deleteTask(formData.id)}
                            className="cursor-pointer"
                          >
                            <i className="fa-solid fa-trash"></i>
                          </div>
                        </div>
                      </td>
                      </tr>
              )}
                    </>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ViewTask;
