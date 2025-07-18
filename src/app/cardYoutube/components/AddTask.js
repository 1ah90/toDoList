'use client';
import { CiSquarePlus } from 'react-icons/ci';
import Model from './Model';
import { useState } from 'react';
const AddTask = () => {
  const [open, setOpen] = useState(false); // pop add task

  return (
    <div>
      {/* add task after click add button  */}
      <div className="tooltip tooltip-left  w-full">
        <div className="tooltip-content">
          <div className="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">
            add Task!
          </div>
        </div>
        <button // add button task
          onClick={() => {
            !open && setOpen(true);
          }}
          className="btn btn-second hover:bg-amber-500 hover:text-second w-full text-softCreamy"
        >
          Add new task{' '}
          <CiSquarePlus
            title="add"
            size={19}
            className="text-mine  hover:text-second"
          />
        </button>{' '}
      </div>

      <Model openModel={open} setOpenModel={setOpen} />
    </div>
  );
};

export default AddTask;
