import styles from "../modulesCss/App.module.css";
import { AddTask } from "../components/AddTask.jsx";
import { SortTask } from "../components/SortTask.jsx";
import { DATA } from "../data/todoData.js";
import { TaskList } from "../components/TaskList.jsx";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { EditInput } from "../components/EditInput.jsx";

export const TasksPage = () => {
  const [data, setData] = useState(DATA);
  const [filter, setFilter] = useState("all");
  const [filteredTask, setFilteredTask] = useState(data);

  useEffect(() => {
    switch (filter) {
      case "completed":
        setFilteredTask(data.filter((task) => task.completed === true));
        break;
      case "uncompleted":
        setFilteredTask(data.filter((task) => task.completed === false));
        break;
      default:
        setFilteredTask(data);
        break;
    }
  }, [filter, data]);

  const addNewTask = (text) => {
    setData((prev) => [
      ...prev,
      { id: nanoid(), name: text, completed: false },
    ]);
  };

  const deleteTask = (id) => {
    setData((prev) => prev.filter((element) => element.id !== id));
  };
  // TODO: вынести в общую функцию (43-51; 54-62)
  // TODO: перенести логику таска в хук (разделить на два хука, один редактированием, другой фильтром(12-27)
  // TODO: убрать кнопку редактировать при эдите, стилька навалить на эдит, кнопка отмена рабоба
  // TODO: поменять иконку приложения в табе в браузере
  const editTask = (text, id) => {
    setData((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          return { ...task, name: text };
        }
        return task;
      }),
    );
  };

  const completeTask = (id) => {
    setData((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    );
  };

  console.log(data);

  return (
    <section>
      <h1 className={styles.title}>Домашнее задание слушаем</h1>
      <AddTask addNewTask={addNewTask} />
      <SortTask setFilter={setFilter} />
      <h3 className={styles.title2}>{filteredTask.length} задания осталос</h3>

      <TaskList
        tasks={filteredTask}
        deleteTask={deleteTask}
        editTask={editTask}
        completeTask={completeTask}
      />
      {/*<EditInput />*/}
    </section>
  );
};
