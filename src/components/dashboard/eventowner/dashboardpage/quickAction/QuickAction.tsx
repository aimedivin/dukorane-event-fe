
import { FaSearch, FaCalendarAlt, FaFileInvoice } from "react-icons/fa";

const QuickActions = () => {
  const actions = [
    {
      title: "Find Providers",
      subtitle: "Browse verified vendors",
      icon: <FaSearch className="text-lg" />,
    },
    {
      title: "Schedule Meeting",
      subtitle: "Plan with providers",
      icon: <FaCalendarAlt className="text-lg" />,
    },
    {
      title: "View Quotes",
      subtitle: "Compare pricing",
      icon: <FaFileInvoice className="text-lg" />,
    },
  ];

  return (
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>

      <div className="space-y-4">
        {actions.map((a, i) => (
          <div key={i} className="flex items-center gap-3 cursor-pointer">
            <div className="p-3 bg-gray-100 rounded-full">{a.icon}</div>

            <div>
              <p className="font-medium">{a.title}</p>
              <p className="text-xs text-gray-500">{a.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
