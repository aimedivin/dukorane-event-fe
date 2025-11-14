"use client";
import { Bell } from "lucide-react";

import React from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

// Hook to manage notifications
const useNotifications = () => {

  const [notifications, setNotifications] = React.useState([
    { id: 1, title: "New Event", message: "Event ABC was added", read: false },
    {
      id: 2,
      title: "Reminder",
      message: "You have an upcoming event",
      read: false,
    },
    { id: 3, title: "Update", message: "Event XYZ was updated", read: true },
  ]);

  const markAsRead = (id: number) =>
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );

  const markAllAsRead = () =>
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));

  const unreadCount = notifications.filter((n) => !n.read).length;

  return { notifications, markAsRead, markAllAsRead, unreadCount };
};

export default function NotificationDialog() {
  const { notifications, markAsRead, markAllAsRead, unreadCount } =
    useNotifications();

  return (
    <AlertDialog>
      <AlertDialogTrigger className="relative">
        <button
          className="text-gray-600 hover:text-primary p-2 rounded-full transition duration-300"
          aria-label="Notifications"
        >
          <Bell className="w-6 h-6 text-gray-600" />

          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-700 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </button>
      </AlertDialogTrigger>

      {/* Alert Dialog Content */}
      <AlertDialogContent className="w-96">
        <AlertDialogHeader>
          <AlertDialogTitle>Notifications</AlertDialogTitle>
          <AlertDialogDescription>
            You have {unreadCount} unread notification{unreadCount !== 1 && "s"}
            .
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="max-h-64 overflow-y-auto mt-4 space-y-2">
          {notifications.map((n) => (
            <div
              key={n.id}
              className={`p-2 rounded border ${
                n.read ? "bg-gray-100" : "bg-white font-semibold"
              }`}
            >
              <p>{n.title}</p>
              <p className="text-sm text-gray-600">{n.message}</p>
              {!n.read && (
                <button
                  onClick={() => markAsRead(n.id)}
                  className="text-blue-600 text-sm mt-1"
                >
                  Mark as read
                </button>
              )}
            </div>
          ))}
        </div>

        <AlertDialogFooter className="mt-4">
          <AlertDialogCancel>Close</AlertDialogCancel>
          {unreadCount > 0 && (
            <AlertDialogAction onClick={markAllAsRead}>
              Mark all read
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
