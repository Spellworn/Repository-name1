import { useEffect, useState } from "react";

export const useFilter = (props) => {
  const [filter, setFilter] = useState("all");
  const [filteredTask, setFilteredTask] = useState(props);

  useEffect(() => {
    switch (filter) {
      case "completed":
        setFilteredTask(props.filter((task) => task.completed === true));
        break;
      case "uncompleted":
        setFilteredTask(props.filter((task) => task.completed === false));
        break;
      default:
        setFilteredTask(props);
        break;
    }
  }, [filter, props]);
  return [setFilter, filteredTask];
};
