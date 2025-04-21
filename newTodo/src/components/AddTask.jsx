import styles from "../modulesCss/AddTask.module.css";
import { useCallback, useState } from "react";

export const AddTask = (props) => {
  const [text, setText] = useState("");
  const onClick = useCallback(() => props.addNewTask(text), [text]);

  return (
    <form className={styles.container}>
      <label className={styles.title} htmlFor="new-todo">
        Че нада сделать?
      </label>
      <input
        type="text"
        autoComplete="off"
        id="new-todo"
        className={styles.inputTodo}
        onChange={(event) => setText(event.target.value)}
      />
      <button className={styles.buttonAdd} type="button" onClick={onClick}>
        Добавит
      </button>
    </form>
  );
};
