import styles from "../modulesCss/EditTask.module.css";
import { useCallback, useState } from "react";

export const DeleteTask = (props) => {
  // const [del, setDel] = useState(props.id);
  // const onClick = useCallback(() => {
  //   props.deleteTask(props.id);
  //   setDel("");
  // }, [del]);

  console.log(props.id);
  return (
    <button
      id={props.id}
      className={styles.buttonDelete}
      type="button"
      onClick={() => props.deleteTask(props.id)}
    >
      Удалит
    </button>
  );
};
