import React from "react";
import empty from "../img/empty.svg";

const EmptyStage = ({ tasks }) => {
  return (
    <div
      className={`${
        tasks.length === 0 ? "flex" : "hidden"
      }  flex-col gap-3 justify-center items-center pt-5`}
    >
      <img src={empty} alt="empty-stage" className=" w-1/3 sm:w-[180px]" />
      <p className=" font-medium text-sm sm:text-lg font-sans">
        There is no list...
      </p>
    </div>
  );
};

export default EmptyStage;
