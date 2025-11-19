"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface DashboardData {
  activeEvents: number;
  bookedProviders: number;
  pendingTasks: number;
  budgetUsed: number; // percentage
}

interface DashboardContextProps {
  data: DashboardData;
  refreshData: () => void;
}

const DashboardContext = createContext<DashboardContextProps | undefined>(undefined);

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<DashboardData>({
    activeEvents: 0,
    bookedProviders: 0,
    pendingTasks: 0,
    budgetUsed: 0,
  });

  const refreshData = () => {
    // Here you can fetch real data from API
    setData({
      activeEvents: 3,
      bookedProviders: 12,
      pendingTasks: 8,
      budgetUsed: 68,
    });
  };

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <DashboardContext.Provider value={{ data, refreshData }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) throw new Error("useDashboard must be used within DashboardProvider");
  return context;
};
