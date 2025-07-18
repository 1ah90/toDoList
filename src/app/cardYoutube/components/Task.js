import { MdDeleteForever } from 'react-icons/md';
import { FaPencilAlt } from 'react-icons/fa';

function Task({ task, index, onDelete, onEdit }) {
  {
    return (
      <tr className="bg-second rounded-md " key={task.id}>
        <td className="text-center w-8  ">{index + 1}</td>
        <td className="flex  flex-col font-bold gap-2">
          {task.titleTask}{' '}
          <span className="font-light">{task.descrepTask}</span>
        </td>
        <td>
          <FaPencilAlt
            size="16"
            className="text-blue-500 cursor-pointer"
            onClick={() => {
              onEdit(task.id);
            }}
          />
        </td>
        <td>
          <MdDeleteForever
            size="16"
            className="text-error cursor-pointer"
            onClick={() => {
              onDelete(task.id);
            }}
          />
        </td>
      </tr>
    );
  }
}

export default Task;
