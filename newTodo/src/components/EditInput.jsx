import styles from "../modulesCss/AddTask.module.css";
import { useCallback, useState } from "react";

export const EditInput = (props) => {
  const [text, setText] = useState("");
  const onClick = useCallback(
    (event) => {
      event.preventDefault();
      props.editTask(text, props.id);
      props.setIsEdit(false);
      setText("");
    },
    [text],
  );

  return (
    <form>
      <input
        type="text"
        className={styles.inputTodo}
        onChange={(event) => setText(event.target.value)}
        value={text}
      />
      <button className={styles.buttonAdd} type="button" onClick={onClick}>
        Добавит
      </button>
      <button
        className={styles.buttonAdd}
        type="button"
        onClick={() => props.setIsEdit(false)}
      >
        Отмена
      </button>
    </form>
  );
};
