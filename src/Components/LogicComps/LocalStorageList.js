import { useEffect } from "react";

export const LocalStorageList = ({ tasks, setTasks }) => {
  // only run once the first time this component is rendered
  useEffect(() => {
    if (localStorage.getItem("taskData")) {
      setTasks(JSON.parse(localStorage.getItem("taskData")));
    }
  }, [setTasks]);

  // run every time our pet state changes
  useEffect(() => {
    localStorage.setItem("taskData", JSON.stringify(tasks));
  }, [tasks]);
};
