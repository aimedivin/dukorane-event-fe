"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

type CreateEventFormProps = {
  onClose: () => void;
};

export default function CreateEventForm({ onClose }: CreateEventFormProps) {
  const [form, setForm] = useState({
    name: "",
    type: "",
    location: "",
    datetime: "",
    budget: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your event has been created successfully!", {
      duration: 3000,
    });
    onClose();
    setForm({
      name: "",
      type: "",
      location: "",
      datetime: "",
      budget: "",
    });
  };

  return (
    <Card className=" max-w-lg mx-auto w-full">
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="text-primary text-xl">Create Event</CardTitle>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-2">
          <div className="space-y-2">
            <Label>Event Name</Label>
            <Input name="name" onChange={handleChange} value={form.name} />
          </div>

          <div className="space-y-2">
            <Label>Event Type</Label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="border rounded-md p-2 w-full"
            >
              <option value="">Select type</option>
              <option value="Wedding">Wedding</option>
              <option value="Graduation">Graduation</option>
              <option value="Birthday">Birthday</option>
              <option value="Conference">Conference</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label>Location</Label>
            <Input
              name="location"
              onChange={handleChange}
              value={form.location}
            />
          </div>

          <div className="space-y-2">
            <Label>Date & Time</Label>
            <Input
              type="datetime-local"
              name="datetime"
              onChange={handleChange}
              value={form.datetime}
            />
          </div>

          <div className="space-y-2">
            <Label>Budget Estimate (RWF)</Label>
            <Input
              type="number"
              name="budget"
              onChange={handleChange}
              value={form.budget}
            />
          </div>
        </CardContent>

        <CardFooter>
          <Button type="submit" className="w-full mt-3 bg-primary-gradient">
            Create Event
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
