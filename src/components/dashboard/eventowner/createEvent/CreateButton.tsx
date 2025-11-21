"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog";

import CreateEventForm from "./CreateEventForm";

export default function CreateEventButton() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="flex gap-1 text-1xl items-center bg-primary-gradient text-white rounded-md p-2 mr-10 hover:opacity-90">
          <FaPlus />
          <span className="capitalize">create new event</span>
        </button>
      </DialogTrigger>

      <DialogContent >
        <CreateEventForm onClose={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
