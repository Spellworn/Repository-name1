import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

export const useData = () => {
  const [data, setData] = useState();

  const url = "https://dummyjson.com/todos";

  async function getData() {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getData().then((response) => {
      setData(response.todos);
    });
  }, []);

  const addNewTask = (text) => {
    setData((prev) => [
      ...prev,
      { id: nanoid(), todo: text, completed: false },
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
