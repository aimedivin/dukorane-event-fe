"use client";

import CurrentEvents from "@/components/dashboard/eventowner/dashboardpage/currentevent/CurrentEvent";
import DashboardUser from "@/components/dashboard/eventowner/dashboardpage/DashboardUser";
import QuickActions from "@/components/dashboard/eventowner/dashboardpage/quickAction/QuickAction";
import RecentMessages from "@/components/dashboard/eventowner/dashboardpage/recentmessage/RecentMessage";
import UpcomingTasks from "@/components/dashboard/eventowner/dashboardpage/UpcomingTask/UpcomingTasks";
import Footer from "@/components/home/Footer";

export default function OwnerPage() {
  return (
    <div>
      <main>
        {/* Hero section */}
        <div className="p-6">
          <DashboardUser />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 p-6">
          <div className="md:col-span-2 space-y-6">
            <CurrentEvents />
          </div>

          <div className="space-y-6">
            <QuickActions />
            <RecentMessages />
          </div>
        </div>
        <div className="space-y-6 mt-4 mb-4 p-6">
          <UpcomingTasks />
        </div>
      </main>
      <Footer />
    </div>
  );
}
