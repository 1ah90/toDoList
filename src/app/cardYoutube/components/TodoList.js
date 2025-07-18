import Task from './Task';
import { useContext, useState } from 'react';
import { TaskContext } from './contextTask';
import Model from './Model';
const ToDoList = () => {
  const [openModel, setOpenModel] = useState(false);

  const { task, setTask } = useContext(TaskContext); // tasks

  // delet function
  const handleDelete = (id) => {
    const updateTasks = task.filter((t) => t.id !== id);
    setTask(updateTasks);
    setOpenModel(true)
  };

  // Edit function
  const [EditTask, setEditTask] = useState({});
  const handleEdit = (id) => {
    const taskChose = task.find((t) => t.id === id);
    setEditTask(taskChose);
    console.log(taskChose);
  };

  return (
    <div className="overflow-x-auto rounded-md">
      <table className="table mt-4">
        {/* head */}
        <thead>
          <tr className="border-4 border-second">
            <th>Count</th>
            <th>Tasks</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="rounded-md mt-4 ">
          <tr>
            <td></td>
          </tr>
          {/* row 1 */}
          {task.map((t, i) => (
            <Task
              key={t.id}
              task={t}
              index={i}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </tbody>
      </table>
      {openModel && (
        <Model  openModel= {openModel} setOpenModel={setOpenModel} editTask={editTask} setEditTask={setEditTask}/>
      )}
    </div>
  );
};

export default ToDoList;
