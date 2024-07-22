import React from "react";
import EmptyStage from "./EmptyStage";
import List from "./List";

const ListGroup = ({ tasks, changeIsDone, deleteTask, editTask }) => {
  return (
    <div className=" mt-5 ">
      <EmptyStage tasks={tasks} />
      {tasks.map(({ id, job, isDone }) => (
        <List
          id={id}
          editTask={editTask}
          key={id}
          job={job}
          isDone={isDone}
          deleteTask={deleteTask}
          changeIsDone={changeIsDone}
        />
      ))}
    </div>
  );
};

export default ListGroup;
