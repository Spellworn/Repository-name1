import styles from "../modulesCss/AddTask.module.css";
import { useCallback, useState } from "react";

export const AddTask = (props) => {
  const [text, setText] = useState("");
  const onClick = useCallback(
    (event) => {
      event.preventDefault();
      props.addNewTask(text);
      setText("");
    },
    [text],
  );

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
        value={text}
      />
      <button className={styles.buttonAdd} type="submit" onClick={onClick}>
        Добавит
      </button>
    </form>
  );
};
