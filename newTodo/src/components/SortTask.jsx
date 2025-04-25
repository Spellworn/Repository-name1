import styles from "../modulesCss/SortTask.module.css";

export const SortTask = (props) => {
  return (
    <div className={styles.buttonWrapper}>
      <button
        className={styles.buttonSort}
        type="button"
        onClick={() => props.setFilter("all")}
      >
        Все задания
      </button>
      <button
        className={styles.buttonSort}
        type="button"
        onClick={() => props.setFilter("completed")}
      >
        Выполненные
      </button>
      <button
        className={styles.buttonSort}
        type="button"
        onClick={() => props.setFilter("uncompleted")}
      >
        Еще нада сделат
      </button>
    </div>
  );
};
