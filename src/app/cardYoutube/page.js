'use client'
import AddTask from './components/AddTask';
import { TaskContext } from './components/contextTask';
import ToDoList from './components/TodoList';
import { useState } from 'react';
function Card() {
  const [task, setTask] = useState([]);

  return (
    <TaskContext.Provider value={{task , setTask}}>
      <div className=" text-center min-w-6/12 border-2 border-second p-4 rounded-md text-softCreamy relative">
        <h1 className="text-2xl font-bold mb-4">ToDo List App</h1>
        <AddTask />
        <ToDoList />
      </div>
    </TaskContext.Provider>
  );
}

export default Card;
