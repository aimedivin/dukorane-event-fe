
import RecentMessageCard from "./RecentMessageCard";
import { mockRecentMessages } from "./types";

const RecentMessages = () => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Recent Messages</h2>

      <div className="space-y-3">
        {mockRecentMessages.map((msg) => (
          <RecentMessageCard key={msg.id} message={msg} />
        ))}
      </div>
    </div>
  );
};

export default RecentMessages;
