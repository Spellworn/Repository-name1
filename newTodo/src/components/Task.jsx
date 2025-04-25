import styles from "../modulesCss/Task.module.css";
import { EditTask } from "./EditTask.jsx";
import { DeleteTask } from "./DeleteTask.jsx";
import { useState } from "react";

export const Task = (props) => {
  const [isEdit, setIsEdit] = useState(false);

  const toggleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  return (
    <li className={styles.liWrapper}>
      {!isEdit && (
        <>
          <input
            className={styles.checkbox}
            id={props.id}
            type="checkbox"
            defaultChecked={props.completed}
            onClick={() => props.completeTask(props.id, props.completed)}
          />
          <label className={styles.textTodo} htmlFor={props.id}>
            {props.name}
          </label>
        </>
      )}
      <div className={styles.buttonWrapper}>
        <EditTask
          editTask={props.editTask}
          id={props.id}
          name={props.name}
          isEdit={isEdit}
          toggleEdit={toggleEdit}
          setIsEdit={setIsEdit}
        />
        {!isEdit && <DeleteTask deleteTask={props.deleteTask} id={props.id} />}
      </div>
    </li>
  );
};
