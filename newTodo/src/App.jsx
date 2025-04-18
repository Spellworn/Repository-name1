import styles from "./modulesCss/App.module.css";
import { AddTask } from "./components/AddTask.jsx";
import { SortTask } from "./components/SortTask.jsx";
import { Task } from "./components/Task.jsx";

function App(props) {
  const taskList = props.tasks?.map((task) => (
    <Task
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));

  return (
    <div>
      <h1 className={styles.title}>Домашнее задание слушаем</h1>
      <AddTask />
      <SortTask />
      <h3 className={styles.title2}>3 задания осталос</h3>
      <ul className={styles.taskWrapper}> {taskList} </ul>
    </div>
  );
}

export default App;
