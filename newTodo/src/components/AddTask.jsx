import styles from "../modulesCss/AddTask.module.css";

export const AddTask = () => {
  return (
    <form className={styles.container}>
      <h2 className={styles.title}>
        <label htmlFor="new-todo">Че нада сделать?</label>
      </h2>
      <input
        type="text"
        autoComplete="off"
        id="new-todo"
        className={styles.inputTodo}
      />
      <button className={styles.buttonAdd} type="submit">
        Добавит
      </button>
    </form>
  );
};
