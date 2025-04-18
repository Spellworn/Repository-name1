import styles from "../modulesCss/Task.module.css";
import { EditTask } from "./EditTask.jsx";

export const Task = (props) => {
  return (
    <li className={styles.liWrapper}>
      <input
        className={styles.checkbox}
        id={props.id}
        type="checkbox"
        defaultChecked={props.completed}
      />
      <label className={styles.textTodo} htmlFor={props.id}>
        {props.name}
      </label>
      <EditTask />
    </li>
  );
};
