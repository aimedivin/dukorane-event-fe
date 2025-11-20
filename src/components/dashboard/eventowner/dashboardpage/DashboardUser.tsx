"use client";

import { useUser } from "@/hooks/useUser";
import { FaPlus } from "react-icons/fa";
import { DashboardCard } from "./DashboardCard";
import { FaCalendarAlt, FaUsers, FaClock, FaDollarSign } from "react-icons/fa";

const DashboardUser = () => {
  const { user } = useUser();

  const data = {
    activeEvents: 3,
    bookedProviders: 12,
    pendingTasks: 8,
    budgetUsed: 68,
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
      <div>
        <p className="text-2xl">Welcome back, {user?.name} </p>
        <span className="text-gray-400 text-xl">
          Let's make your dream event come to life
        </span>
      </div>
      <div>
        <div className="flex items-center align-middle">
          <button className="flex gap-1 text-1xl  items-center bg-primary-gradient text-white rounded-md p-2 mr-10 hover:opacity-90 ">
            <FaPlus />
            <span className="capitalize ">create new event</span>
          </button>
        </div>
        </div>
       
      </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 mt-8">
          <DashboardCard
            icon={<FaCalendarAlt />}
            label="Active Events"
            value={data.activeEvents}
            bgColor="bg-blue-400"
          />
          <DashboardCard
            icon={<FaUsers />}
            label="Booked Providers"
            value={data.bookedProviders}
            bgColor="bg-green-400"
          />
          <DashboardCard
            icon={<FaClock />}
            label="Pending Tasks"
            value={data.pendingTasks}
            bgColor="bg-yellow-300"
          />
          <DashboardCard
            icon={<FaDollarSign />}
            label="Budget Used"
            value={`${data.budgetUsed}%`}
            bgColor="bg-purple-400"
          />
        </div>
    </div>
  );
};

export default DashboardUser;
