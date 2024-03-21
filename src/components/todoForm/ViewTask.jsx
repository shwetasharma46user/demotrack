import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ViewTask() {
  const [formData, setFormData] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [taskName, setTaskName] = useState("");
  const [assigneeName, setAssigneeName] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    // Retrieve form formData from local storage
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      // Parse stored string back into an object
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
    console.log("print dataId with updatedTasks", dataId, updatedTasks, formData);
    localStorage.removeItem("formData");
    setShowAlert(false);
  };

  const handleDelete = (dataId) => {
    setShowAlert(true);
    setDeleteId(dataId);
    console.log("setDeleteId", dataId);
  };
  
  const confirmDelete = () => {
    deleteTask(deleteId);
    console.log("deleteId", deleteId);
  };

  const cancelDelete = () => {
    // Close the alert without performing deletion
    setShowAlert(false);
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
          <div className="">
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
                {formData &&
                  formData.map((data) => (
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
                              className="flex items-center justify-center gap-1 cursor-pointer"
                              onClick={saveEditedValue}
                            >
                              <i className="fa-solid fa-save"></i>
                              Save
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
                            <div className="relative flex items-center justify-center gap-3">
                              <div
                                className="cursor-pointer"
                                onClick={() =>
                                  startEditingTask(
                                    data.id,
                                    data.task,
                                    data.assignee,
                                    data.priority
                                  )
                                }
                              >
                                <i className="mr-1 fa-solid fa-pen"></i>
                                Edit
                              </div>
                              <div
                                onClick={() => handleDelete(data.id)}
                                className="relative cursor-pointer "
                              >
                                <i className="mr-1 fa-solid fa-trash"></i>
                                Delete
                              </div>
                              
                              {showAlert && deleteId === data.id && (
                                <div className="absolute p-4 rounded min-w-[250px] min-h-[50px] text-right bg-black/50 top-5 left-0 z-10 mb-5">
                                  <p>Are you sure you want to delete?</p>
                                  <button className="px-3 py-1 mt-3 ml-2 text-xs font-bold text-black rounded bg-white/90" onClick={confirmDelete}>Yes</button>
                                  <button className="px-3 py-1 mt-3 ml-2 text-xs font-bold text-black rounded bg-white/90" onClick={cancelDelete}>No</button>
                                </div>
                              )}
                            </div>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewTask;
