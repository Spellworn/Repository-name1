import styles from "../modulesCss/EditTask.module.css";

export const DeleteTask = (props) => {
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
