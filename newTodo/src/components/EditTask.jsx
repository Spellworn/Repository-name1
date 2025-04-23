import styles from "../modulesCss/EditTask.module.css";
import { EditInput } from "./EditInput.jsx";

export const EditTask = (props) => {
  // const edit = () => {
  //   let text = prompt("Че хоч поменят");
  //   if (text === null || text === "") {
  //     props.editTask(props.name, props.id);
  //   } else {
  //     props.editTask(text, props.id);
  //   }
  // };

  return (
    <div>
      <button
        className={styles.buttonEdit}
        type="button"
        onClick={props.toggleEdit}
      >
        Редактироват
      </button>
      {props.isEdit && (
        <EditInput
          editTask={props.editTask}
          id={props.id}
          key={props.id}
          setIsEdit={props.setIsEdit}
        />
      )}
    </div>
  );
};
