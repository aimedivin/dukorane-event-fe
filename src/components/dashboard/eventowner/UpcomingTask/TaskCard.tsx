
import { TaskItem } from "./Types";

interface Props {
  task: TaskItem;
}

const TaskCard = ({ task }: Props) => {
  const priorityStyles = {
    High: {
      bg: "bg-red-50",
      label: "bg-red-100 text-red-600",
      border: "border-l-4 border-red-500",
    },
    Medium: {
      bg: "bg-yellow-50",
      label: "bg-yellow-100 text-yellow-700",
      border: "border-l-4 border-yellow-500",
    },
    Low: {
      bg: "bg-green-50",
      label: "bg-green-100 text-green-700",
      border: "border-l-4 border-green-500",
    },
  };

  const style = priorityStyles[task.priority];

  return (
    <div
      className={`p-5  shadow-sm ${style.bg} ${style.border}`}
    >
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold">{task.title}</h3>
        <span className={`text-xs px-3 py-1 rounded-full ${style.label}`}>
          {task.priority}
        </span>
      </div>

      <p className="text-sm text-gray-600 mt-2">{task.description}</p>

      <p className="text-xs text-gray-500 mt-4">
        Due: {task.dueDate}
      </p>
    </div>
  );
};

export default TaskCard;
