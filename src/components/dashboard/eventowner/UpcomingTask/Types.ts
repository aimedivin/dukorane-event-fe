
export type TaskPriority = "High" | "Medium" | "Low";

export interface TaskItem {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: TaskPriority;
}
