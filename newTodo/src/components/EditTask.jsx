import styles from "../modulesCss/EditTask.module.css";

export const EditTask = (props) => {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.buttonEdit} type="button">
        Редактироват
      </button>
      <button className={styles.buttonDelete} type="button">
        Удалит
      </button>
    </div>
  );
};
