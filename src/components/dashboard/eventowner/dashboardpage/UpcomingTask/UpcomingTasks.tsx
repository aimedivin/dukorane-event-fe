"use client";

import TaskCard from "./TaskCard";
import  {TaskItem} from "./Types"

const mockTasks: TaskItem[] = [
  {
    id: "1",
    title: "Decorate wedding hall",
    description: "Set up flowers, tables, and lighting for wedding.",
    dueDate: "2025-12-01",
    priority: "High",
  },
  {
    id: "2",
    title: "Catering for corporate event",
    description: "Prepare menu and catering for 50 guests.",
    dueDate: "2025-12-05",
    priority: "Medium",
  },
  {
    id: "3",
    title: "Photography for conference",
    description: "Take photos and videos for the annual conference.",
    dueDate: "2025-12-10",
    priority: "Low",
  },
   {
    id: "3",
    title: "Photography for conference",
    description: "Take photos and videos for the annual conference.",
    dueDate: "2025-12-10",
    priority: "Low",
  },
];

const UpcomingTasks = () => {
  const displayedTasks = mockTasks.slice(0,3);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold">Upcoming Tasks</h2>
        <button className="text-primary text-sm hover:cursor-pointer">View All Tasks</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {displayedTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingTasks;
