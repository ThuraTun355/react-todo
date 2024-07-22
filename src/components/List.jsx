import React, { useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const List = ({ id, job, isDone, changeIsDone, deleteTask, editTask }) => {
  const [isEdit, setIsEdit] = useState(false);

  const [text, setText] = useState(job);

  const handleCheckbox = () => {
    changeIsDone(id);
  };

  const handleDeleteBtn = () => {
    Swal.fire({
      title: "Are you sure to delete?",
      text: "You won't able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTask(id);
        toast.success("list deleted successfully");
      }
    });
  };

  const handleEditBtn = (event) => {
    setIsEdit(true);
  };

  const handleEditInput = (event) => {
    setText(event.target.value);
  };

  const handleEditKeyUp = (event) => {
    if (event.key === "Enter") {
      editTask(id, text);
      setIsEdit(false);
    }
  };

  const handleEditBlur = (event) => {
    editTask(id, text);
    setIsEdit(false);
  };

  return (
    <div className="border-2 sm:border-[3px] border-zinc-800 px-3 py-2 sm:px-4 sm:py-3 mb-3">
      <div className={`flex justify-between items-center ${isEdit && "gap-2"}`}>
        <div className=" flex justify-center items-center gap-3 ">
          <input
            onChange={handleCheckbox}
            disabled={isEdit}
            checked={isDone}
            type="checkbox"
            className=" size-3 sm:size-4   accent-zinc-800"
            id="check"
          />
          {isEdit ? (
            <input
              type="text"
              onBlur={handleEditBlur}
              onKeyUp={handleEditKeyUp}
              value={text}
              onChange={handleEditInput}
              className=" border-2 border-zinc-800 font-medium px-1 py-0.5 focus-visible:outline-none"
            />
          ) : (
            <label
              htmlFor=""
              className=" text-zinc-900 font-bold select-none text-base"
            >
              {job}
            </label>
          )}
        </div>
        <div className="  flex justify-center items-center gap-3">
          <button
            onClick={handleEditBtn}
            className="border-2 border-zinc-800 p-1 hover:bg-gray-100  duration-200  active:bg-gray-300 text-zinc-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.0}
              stroke="currentColor"
              className="size-4 sm:size-5 pointer-events-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </button>
          <button
            onClick={handleDeleteBtn}
            className={`border-2 border-zinc-800 p-1 hover:bg-gray-100 duration-200  active:bg-gray-300 text-zinc-800 ${
              isEdit && "hidden"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.0}
              stroke="currentColor"
              className="size-4 sm:size-5 pointer-events-none "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;
