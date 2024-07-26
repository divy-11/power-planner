import { useEffect, useState } from "react";
import { getToday } from "../utils/weekdays";
import "../styles/tasksToday.css";
const TasksToday = ({ taskList }) => {
  const [tasksToday, setTasksToday] = useState({
    health: [],
    wealth: [],
    knowledge: [],
  });

  const makeTaskList = () => {
    const today = getToday();
    console.log("today", today);
    const tasksToday = taskList.filter((task) =>
      task?.taskRepeatsOn?.includes(today)
    );
    const healthTasks = tasksToday.filter(
      (task) => task?.taskCategory == "health"
    );
    const wealthTasks = tasksToday.filter(
      (task) => task?.taskCategory == "wealth"
    );
    const knowledgeTasks = tasksToday.filter(
      (task) => task?.taskCategory == "knowledge"
    );

    console.log("tasksToday", tasksToday);
    console.log("healthTasks", healthTasks);
    console.log("wealthTasks", wealthTasks);

    setTasksToday({
      health: healthTasks,
      wealth: wealthTasks,
      knowledge: knowledgeTasks,
    });
  };

  useEffect(() => {
    console.log("taskList in useEffect", taskList);
    if (taskList.length > 0) makeTaskList();
  }, [taskList]);

  return (
    <div className="tasks-today text-left mt-16 ml-8">
      <h1 className="text-3xl font-bold text-center">FOCUS ON TODAY</h1>

      <h2 className="text-2xl font-bold">Health</h2>
      <div className="tasks">
        {tasksToday.health.map((task) => (
          <h4 className={task.isCompleted ? "completed" : ""}>
            {" "}
            <input type="checkbox" name="task" id="task" /> {task.taskName}
          </h4>
        ))}
      </div>
      <h2 className="text-2xl font-bold">Knowledge</h2>
      <div className="tasks">
        {tasksToday.wealth.map((task) => (
          <h4 className={task.isCompleted ? "completed" : ""}>
            {" "}
            <input type="checkbox" name="task" id="task" /> {task.taskName}
          </h4>
        ))}
      </div>

      <h2 className="text-2xl font-bold">Wealth</h2>
      <div className="tasks">
        {tasksToday.knowledge.map((task) => (
          <h4 className={task.isCompleted ? "completed" : ""}>
            {" "}
            <input
              type="checkbox"
              checked={task.isCompleted}
              name="task"
              id="task"
            />{" "}
            {task.taskName}
          </h4>
        ))}
      </div>
    </div>
  );
};

export default TasksToday;
