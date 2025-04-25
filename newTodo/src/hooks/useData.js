import { useState } from "react";
import { nanoid } from "nanoid";
import { DATA } from "../data/todoData.js";

export const useData = () => {
  const [data, setData] = useState(DATA);

  const addNewTask = (text) => {
    setData((prev) => [
      ...prev,
      { id: nanoid(), name: text, completed: false },
    ]);
  };

  const deleteTask = (id) => {
    setData((prev) => prev.filter((element) => element.id !== id));
  };

  const updateTask = (text, id) => {
    setData((prev) =>
      prev.map((task) => {
        if (task.id === id && text !== null) {
          return { ...task, name: text };
        }
        if (task.id === id && text === null) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    );
  };

  const editTask = (text, id) => {
    updateTask(text, id);
  };
  const completeTask = (id) => {
    updateTask(null, id);
  };
  return { data, addNewTask, deleteTask, editTask, completeTask };
};
