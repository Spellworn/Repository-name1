import styles from "../modulesCss/Task.module.css";
import { EditTask } from "./EditTask.jsx";
import { DeleteTask } from "./DeleteTask.jsx";
import { useState } from "react";

export const Task = (props) => {
  // const [del, setDel] = useState(props);
  //
  // const deleteTask = (id) => {
  //   setDel((prev) => prev.splice({ id: id }, 1));
  // };
  //
  // console.log(del.id);

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
      <div className={styles.buttonWrapper}>
        <EditTask />
        <DeleteTask deleteTask={props.deleteTask} id={props.id} />
      </div>
    </li>
  );
};
