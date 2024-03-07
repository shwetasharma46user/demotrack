import React, { useEffect, useState } from "react";
import Header from "../Header";
import Heading from "../shared/Heading";
import { useNavigate } from "react-router-dom";

function TodoList() {
  const [formData, setFormData] = useState([]);
  const [inputValues, setInputValues] = useState({
      assignee: '',
      task: '',
      priority:'',
  });
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null); // Track the id of the task being edited
  const [editTaskName, setEditTaskName] = useState(''); // Track the edited task name
  const [editAssigneeName, setEditAssigneeName] = useState('');
  const [editTaskPriority, setEditTaskPriority] = useState('')
  const [editData, setEditData] = useState('')
  const [isOpened, setIsOpened] = React.useState(false)
  // const [selectValues, setSelectValues] = useState([
  //   "High",
  //   "Moderate",
  //   "Low",
  // ]);
    
  // console.log("Edit data task assignee name:", editData.assignee)
  // console.log("Edit task name:", editData.task)
  // console.log("Edit task priority:", editData.priority)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      id: Date.now(),
      assignee: inputValues.assignee,
      task: inputValues.task,
      priority:inputValues.priority,
      completed: false,
    };

    console.log("check priority",inputValues.priority)
    console.log("check task after submit value ", inputValues.task )
    
    setFormData([...formData, newData]);
    setInputValues({
      assignee: '',
      task: '',
      priority:'Choose Priority'
    });

    console.log("check priority",inputValues.priority)
    
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name,value)
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  console.log("check state",inputValues)
  
  const navigate = useNavigate()
  //const Add = selectValues.map(Add => Add)
  // const handleSelectChange = (e) => {
  //   console.log((selectValues[e.target.value]))
  //   setSelectValues({
  //     ...selectValues,
  //     [name]: value,
  //   });
  // };

  // // Load tasks from local storage on component mount
  // useEffect(() => {
  //   const storedTasks = JSON.parse(localStorage.getItem('formData'));
  //   if (storedTasks) {
  //     setTasks(storedTasks);
  //   }
  // }, []);

  // // Save tasks to local storage whenever tasks state changes
  // useEffect(() => {
  //   localStorage.setItem('formData', JSON.stringify(formData));
  // }, [formData]);
  
  const startEditingTask = (dataId, dataName, dataAssignee, dataPriority) => {
    setEditingTaskId(dataId);
    setEditTaskName(dataName);
    setEditAssigneeName(dataAssignee);
    setEditTaskPriority(dataPriority);

    console.log("startEditingTask check task Id", dataId)
    console.log("startEditingTask check task Name", dataName)
  };

  const saveEditedTask = () => {
    console.log("gorm DataTasks :", formData)
    const updatedTasks = formData.map(data =>
      data.id === editingTaskId ? { ...data, task: editTaskName, assignee: editAssigneeName, priority:editTaskPriority } : data
    );
    setFormData(updatedTasks);
    console.log("updatedTasks:", updatedTasks)
    console.log("updatedTasks formData:", formData)
    console.log("updatedTasks editTaskName:",)
    // console.log("Loop:", data.id === editingTaskId ? { ...data, task: editTaskName }: data)
    setEditingTaskId(null);
  };
  
  const deleteTask = (dataId) => {
    const updatedTasks = formData.filter(data =>
      data.id !== dataId    
    );
    setFormData(updatedTasks);
  };

  const toggleTaskCompletion = (dataId) => {
    const updatedTasks = formData.map(data =>
      data.id === dataId ? {...data, completed: !data.completed } : data
    );
    setFormData(updatedTasks)
    console.log("toggleTaskCompletion value:", updatedTasks)
  };
  
  return (
    <>
      <Header />
      <section id="porfolio" className="text-black py-14">
        <div className="px-3 mx-auto max-w-7xl">
          <Heading titleList={["todoTitle", "todoSubTitle"]} />
          <div className="w-full p-8 mx-auto border rounded-lg shadow-xl">
            <form onSubmit={handleSubmit} className="flex items-center justify-between w-full gap-4">
              <input
                type="text"
                placeholder="Assigned to"
                className="w-1/3 p-2 border rounded-lg outline-0"
                // value={editData ? editData.assignee: inputValues.assignee }
                onChange={handleInputChange}
                value={inputValues.assignee}
                id="assignee" name="assignee"
                required
              />
              <input
                type="text"
                placeholder="What do you need to do today?"
                className="w-2/3 p-2 border rounded-lg outline-0"
                // value={editData ? editData.task : inputValues.task}
                onChange={handleInputChange}
                value={inputValues.task}
                id="task" name="task"
                required
              />
              {/* <select className="w-56 p-2 border rounded-lg outline-0" onChange={e => handleSelectChange(e)} value={priority}>
                {Add.map((address, key) => <option value={key}>{address}</option>)}
              </select> */}
              {/* <select className="w-56 p-2 border rounded-lg outline-0" value={selectedPriority} onChange={e => setSelectedPriority(e.target.value)}> 
                <option value="high">High</option>
                <option value="moderate">Moderate</option>
                <option value="low">Low</option>
              </select> */}
              <select className="w-56 p-2 border rounded-lg outline-0" name="priority" defaultValue={inputValues.priority} onChange={handleInputChange}> 
               
                <option value="high">High</option>
                <option value="moderate">Moderate</option>
                <option value="low">Low</option>
              </select>
              <button
                type="submit"
                className="block px-6 py-3 text-sm font-bold text-white uppercase bg-gray-500 rounded hover:bg-gray-700 focus:bg-gray-700">
                Add
              </button>
              {/* {editData ? <button
                type="submit"
                className="block px-6 py-3 text-sm font-bold text-white uppercase bg-gray-500 rounded hover:bg-gray-700 focus:bg-gray-700"
                onClick={saveEditedTask}>
                 Edit
              </button> : 
              <button
                type="submit"
                className="block px-6 py-3 text-sm font-bold text-white uppercase bg-gray-500 rounded hover:bg-gray-700 focus:bg-gray-700">
                Add
              </button>} */}
            </form>
            {/* <form onSubmit={handleSubmit} className="flex items-center justify-between w-full gap-4">
              <input
                type="text"
                placeholder="Assigned to"
                className="w-1/3 p-2 border rounded-lg outline-0"
                value={editingTaskId}
                required
                id="assignee" name="assignee"
                onChange={(e) => setEditingTaskId(e.target.value)}
              />
              <input
                type="text"
                placeholder="What do you need to do today?"
                className="w-2/3 p-2 border rounded-lg outline-0"
                onChange={(e) => setEditTaskName(e.target.value)}
                value={editTaskName}
                id="task" name="task"
                required
              />
              <select className="w-56 p-2 border rounded-lg outline-0" name="priority" value={editTaskPriority} onChange={(e) => setEditTaskPriority(e.target.value)} required> 
                <option value="" selected disabled>Choose Priority</option>
                <option value="high">High</option>
                <option value="moderate">Moderate</option>
                <option value="low">Low</option>
              </select>
              <button
                type="submit"
                className="block px-6 py-3 text-sm font-bold text-white uppercase bg-gray-500 rounded hover:bg-gray-700 focus:bg-gray-700">
                onClick={saveEditedTask}
                Edit
              </button>
            </form> */}
            <div className="py-6">
              <table className="w-full text-base text-left table-auto">
                <thead>
                  <tr>
                    <th className="py-2">Assignee Name</th>
                    <th className="py-2">Task</th>
                    <th className="py-2">Priority</th>
                    <th className="py-2">Status</th>
                    <th className="py-2 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                {formData.map(data => (
                  console.log("addTask Task Id:", data.id),
                  console.log("addTask Task task:", data.task),
                  console.log("Check Task name:", data.name),
                  console.log("addTask Task name:", data),
                  console.log("addTask Task editing id:", editingTaskId),
                  console.log("addTask Task Condition:", editingTaskId === data.id),
                  console.log("show Task editTaskName value:", editTaskName),
                  <tr key={data.id}>
                    {editingTaskId === data.id ?
                    <>
                      {/* <td className="w-56 py-2 text-red-500" >{data.assignee}</td> */}
                      <td className="py-2 w-80">
                        <input className="px-2 border rounded" type="text" value={editAssigneeName}
                        onChange={(e) => setEditAssigneeName(e.target.value)}/>
                      </td>
                      {/* <td className="py-2">{isOpened ? data.assignee : editData.assignee }</td> */}
                      {/* <td className="py-2" >{data.task}</td> */}
                       <td className="py-2 w-80">
                        <input className="px-2 border rounded" type="text" value={editTaskName}
                        onChange={(e) => setEditTaskName(e.target.value)}/>
                      </td> 
                      {/* <td className="inline-block px-3 py-2 text-white capitalize bg-red-600 text-center rounded-md min-w-[124px]">
                      {data?.priority}
                      </td> */}
                      <td className="inline-block text-center capitalize rounded-md">
                        <select className="w-48 p-2 border rounded-lg outline-0" name="priority" defaultValue={editTaskPriority} 
                          onChange={(e) => setEditTaskPriority(e.target.value)} required> 
                          <option value="high">High</option>
                          <option value="moderate">Moderate</option>
                          <option value="low">Low</option>
                        </select>
                      </td>
                      <td className="w-56 py-2">
                        <label className="flex items-center gap-2 cursor-pointer select-none">
                          <div className="relative flex items-center gap-2">
                            <input type="checkbox" className="sr-only peer" checked={data.completed} onChange={() => toggleTaskCompletion(data.id)}/>
                            <div className="h-8 bg-gray-100 rounded-full shadow-lg w-14 peer-checked:bg-gray-200"></div>
                            <div className="absolute w-6 h-6 transition bg-yellow-500 rounded-full top-1 left-1 peer-checked:translate-x-full peer-checked:bg-green-500"></div>
                            <span className="text-sm font-bold text-yellow-500 peer-checked:text-green-500">{data.completed ? "completed" : "In processing"}</span>
                          </div>
                        </label>
                      </td>
                      <td className="py-2" >
                        <div className="flex items-center justify-center gap-3">
                          {/* <div onClick={() => startEditingTask(data.assignee, data.task, data.priority)}  className="cursor-pointer "><i className="cursor-pointer fa-solid fa-pen"></i></div> */}
                          <div onClick={saveEditedTask}  className="cursor-pointer "><i className="cursor-pointer fa-solid fa-save"></i></div>
                        </div>
                      </td>
                    </> :
                    <>
                    <td className="py-2 w-80">{data.assignee}</td>
                      {/* <td className="py-2">{isOpened ? data.assignee : editData.assignee }</td> */}
                      <td className="py-2 w-80">{data.task}</td>
                      <td className="w-48 inline-block px-3 py-2 text-white capitalize bg-gray-500 text-center rounded-md min-w-[124px]">
                      {data.priority}
                      </td>
                      <td className="w-56 py-2">
                        <label className="flex items-center gap-2 select-none">
                          <div className="relative flex items-center gap-2">
                            <input type="checkbox" className="sr-only peer" 
                            checked={data.completed} readOnly/>
                            <div className="h-8 bg-gray-100 rounded-full shadow-lg w-14 peer-checked:bg-gray-200"></div>
                            <div className="absolute w-6 h-6 transition bg-yellow-500 rounded-full top-1 left-1 peer-checked:translate-x-full peer-checked:bg-green-500"></div>
                            <span className="text-sm font-bold text-yellow-500 peer-checked:text-green-500">{data.completed ? "completed" : "In processing"}</span>
                          </div>
                        </label>
                      </td>
                      <td className="py-2" >
                        <div className="flex items-center justify-center gap-3">
                          {/* <div onClick={() => startEditingTask(data.assignee, data.task, data.priority)}  className="cursor-pointer "><i className="cursor-pointer fa-solid fa-pen"></i></div> */}
                          {/* <div onClick={() => setEditData(data)}  className="cursor-pointer "><i className="cursor-pointer fa-solid fa-pen"></i></div> */}
                          <div onClick={() => startEditingTask(data.id, data.task, data.assignee, data.priority)} className="cursor-pointer ">
                            <i className="cursor-pointer fa-solid fa-pen"></i>
                          </div>
                          <div onClick={() => deleteTask(data.id)} className="cursor-pointer ">
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
          </div>
        </div>
      </section>
    </>
  );
}
export default TodoList;
