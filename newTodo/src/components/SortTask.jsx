import styles from "../modulesCss/SortTask.module.css";

export const SortTask = () => {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.buttonSort} type="button">
        Все задания
      </button>
      <button className={styles.buttonSort} type="button">
        Выполненные
      </button>
      <button className={styles.buttonSort} type="button">
        Еще нада сделат
      </button>
    </div>
  );
};
