import React, { useState } from "react";
import toast from "react-hot-toast";

const CreateForm = ({ addTask }) => {
  const [text, setText] = useState("");

  const handleAddBtn = () => {
    if (text.length > 0) {
      addTask(text);

      toast.success("list Added successfully");
      setText("");
    } else {
      toast.error("Please fill out");
    }
  };

  const handleTextInput = (e) => {
    setText(e.target.value);
  };
  return (
    <form action="#">
      <div className=" flex justify-start items-center border-[3px] border-zinc-900 mb-5">
        <input
          value={text}
          onChange={handleTextInput}
          type="text"
          className=" flex-grow bg-zinc-50 focus-visible:outline-none p-2.5 font-semibold text-base"
        />
        <button
          type="submit"
          onClick={handleAddBtn}
          className="bg-zinc-900 text-zinc-50 p-3 hover:bg-zinc-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.0}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default CreateForm;
