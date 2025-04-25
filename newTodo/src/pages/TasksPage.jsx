import styles from "../modulesCss/App.module.css";
import { AddTask } from "../components/AddTask.jsx";
import { SortTask } from "../components/SortTask.jsx";
import { TaskList } from "../components/TaskList.jsx";
import { useData } from "../hooks/useData.js";
import { useFilter } from "../hooks/useFilter.js";

export const TasksPage = () => {
  const { addNewTask, completeTask, editTask, deleteTask, data } = useData();
  const [setFilter, filteredTask] = useFilter(data);

  // TODO: вынести в общую функцию (43-51; 54-62) ✅(СДЕЛАЛ, НО БУБТА ЕСТЬ МНЕНИЕ, ЧТО КОСТЫЛЬ ПРИСУТСТВУЕТ)
  // TODO: перенести логику таска в хук (разделить на два хука, один редактирование, другой фильтр(12-27) ✅ (Сделана, на удивелня)
  // TODO: убрать кнопку редактировать при эдите, стилька навалить на эдит, кнопка отмена рабоба
  // TODO: поменять иконку приложения в табе в браузере ✅

  console.log(filteredTask);

  return (
    <section>
      <h1 className={styles.title}>Домашнее задание слушаем</h1>
      <AddTask addNewTask={addNewTask} />
      <SortTask setFilter={setFilter} />
      <h3 className={styles.title2}>
        {filteredTask === undefined && "Падажи"}
        {filteredTask !== undefined && filteredTask.length} задания осталос
      </h3>

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
