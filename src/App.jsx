import React, { useState } from "react";
import Heading from "./components/Heading";
import CreateForm from "./components/CreateForm";
import Status from "./components/Status";
import ListGroup from "./components/ListGroup";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [tasks, setTask] = useState([]);

  const addTask = (newJob) => {
    const newTask = {
      id: Date.now(),
      job: newJob,
      isDone: false,
    };
    setTask([...tasks, newTask]);
  };

  const editTask = (id, updateTask) => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, job: updateTask } : { ...task }
      )
    );
  };

  const changeIsDone = (id) => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : { ...task }
      )
    );
  };

  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className=" max-w-[500px] p-4 sm:p-8 sm:mx-auto  bg-zinc-50 rounded-lg sm:rounded-xl shadow-xl border-2 border-zinc-900">
      <Heading />
      <CreateForm addTask={addTask} />
      <Status tasks={tasks} />
      <ListGroup
        tasks={tasks}
        changeIsDone={changeIsDone}
        editTask={editTask}
        deleteTask={deleteTask}
      />
      <Toaster position="button-right" />
    </div>
  );
};

export default App;
