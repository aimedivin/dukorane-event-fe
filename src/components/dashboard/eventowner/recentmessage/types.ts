// components/dashboard/recent-messages/types.ts
export interface RecentMessage {
  id: string;
  sender: string;
  message: string;
  avatar: string;
  isUnread: boolean;
}

export const mockRecentMessages: RecentMessage[] = [
  {
    id: "1",
    sender: "Elite Catering",
    message: "Menu options ready for review",
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    isUnread: true,
  },
  {
    id: "2",
    sender: "Royal Photography",
    message: "Photos from the last event uploaded",
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    isUnread: false,
  },
  {
    id: "3",
    sender: "King’s Events Decor",
    message: "New decoration proposals submitted",
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    isUnread: true,
  },
];
