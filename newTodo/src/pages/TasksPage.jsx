import styles from "../modulesCss/App.module.css";
import { AddTask } from "../components/AddTask.jsx";
import { SortTask } from "../components/SortTask.jsx";
import { DATA } from "../data/todoData.js";
import { TaskList } from "../components/TaskList.jsx";
import { useState } from "react";
import { nanoid } from "nanoid";

export const TasksPage = () => {
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

  return (
    <section>
      <h1 className={styles.title}>Домашнее задание слушаем</h1>
      <AddTask addNewTask={addNewTask} />
      <SortTask />
      <h3 className={styles.title2}>{data.length} задания осталос</h3>

      <TaskList tasks={data} deleteTask={deleteTask} />
    </section>
  );
};
