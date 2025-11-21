
export type EventStatus = "On Track" | "Planning" | "Completed";

export interface EventItem {
  id: string;
  title: string;
  date: string;
  guests: number;
  location: string;
  progress: number;
  status: EventStatus;
}
export const mockEvents: EventItem[] = [
  {
    id: "1",
    title: "Annual Tech Conference",
    date: "2025-11-25",
    guests: 200,
    location: "Kigali Convention Center",
    progress: 70,
    status: "On Track",
  },
  {
    id: "2",
    title: "Wedding Expo 2025",
    date: "2025-12-05",
    guests: 150,
    location: "Musanze Event Hall",
    progress: 40,
    status: "Planning",
  },
  {
    id: "3",
    title: "Music Festival",
    date: "2025-12-12",
    guests: 500,
    location: "Nyamirambo Stadium",
    progress: 100,
    status: "Completed",
  },
];
