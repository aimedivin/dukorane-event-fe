import { ReactNode } from "react";

interface DashboardCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  bgColor?: string;
}

export const DashboardCard = ({ icon, label, value, bgColor }: DashboardCardProps) => {
  return (
    <div className="flex items-center p-4 bg-white border border-gray-300 rounded-lg shadow-md space-x-4">
      <div className={`p-3 rounded-md ${bgColor || "bg-gray-200"} text-white`}>
        {icon}
      </div>
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
};
