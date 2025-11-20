"use client";

import CurrentEventCard from "./CurrentEventCard.";
import { mockEvents } from "./types";


const CurrentEvents = () => {
  const events = mockEvents.slice(0,2); // static data
  const loading = false; 

  return (
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Current Events</h2>
        <button className="text-primary text-sm hover:cursor-pointer">
          View All
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-4">
          {events.map((event) => (
            <CurrentEventCard key={event.id} item={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrentEvents;
