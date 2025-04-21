import { Task } from "./Task.jsx";
import styles from "../modulesCss/App.module.css";

export const TaskList = (props) => {
  return (
    <ul className={styles.taskWrapper}>
      {props?.tasks?.map((task) => (
        <Task
          id={task.id}
          name={task.name}
          completed={task.completed}
          key={task.id}
        />
      ))}
    </ul>
  );
};
