import { useState, useContext , useEffect } from 'react';
import { TaskContext } from './contextTask';
import Toast from './Toast';

const Model = ({ openModel, setOpenModel ,editTask , setEditTask }) => {
  const [inputValue, setInputValue] = useState({
    titleTask: '',
    descrepTask: '',
  });
  
  useEffect(() => {
    if (editTask) {
      setInputValue({
        titleTask: editTask.titleTask,
        descrepTask: editTask.descrepTask,
      });
    }
  }, [editTask]);
  const { task, setTask } = useContext(TaskContext);
  const [showToast, setShowToast] = useState(false);
  const handlSubmit = () => {
    if (!inputValue.titleTask.trim()) return;
    setOpenModel(false);
    setInputValue({ titleTask: '', descrepTask: '' });
    setTask([...task, { ...inputValue, id: Date.now() }]);
    setShowToast(true);
  };
  return (
    <div>
      <dialog
        id="my_modal_3"
        className={`modal  ${openModel ? 'modal-open' : ''}`}
      >
        <div className="modal-box bg-mine border-second border-2">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              onClick={() => {
                setOpenModel(false);
              }}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <h1 className="m-2 textxl text-black">Your Task</h1>
          <div
            className={`${
              openModel ? 'block' : 'hidden'
            } p-5 bg-second rounded-md flex flex-col gap-3`}
          >
            <input
              value={inputValue.titleTask}
              onChange={(e) => {
                setInputValue({ ...inputValue, titleTask: e.target.value });
              }}
              className="bg-mine p-2 rounded-md"
              placeholder="Title task"
            />
            <input
              value={inputValue.descrepTask}
              onChange={(e) => {
                setInputValue({ ...inputValue, descrepTask: e.target.value });
              }}
              className="bg-mine p-2 rounded-md"
              placeholder="Descrep task"
            />
            <button onClick={handlSubmit} className="btn hover:bg-amber-500">
              Sumbit
            </button>
          </div>
        </div>
      </dialog>
      {showToast && (
        <Toast
          massage={'New Task Added.'}
          onClose={() => {
            setShowToast(false);
          }}
        />
      )}
    </div>
  );
};

export default Model;
