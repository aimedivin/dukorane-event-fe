import { EventItem } from "./types";
import { FaUsers, FaMapMarkerAlt } from "react-icons/fa";

interface Props {
  item: EventItem;
}

const CurrentEventCard = ({ item }: Props) => {
  /**
   * Determine status based on progress
   */
  const progressStatus =
    item.progress < 50
      ? "Planning"
      : item.progress === 100
      ? "Completed"
      : "On Track";

  const statusColor =
    item.progress < 50
      ? "bg-yellow-100 text-yellow-700"
      : item.progress === 100
      ? "bg-gray-100 text-gray-700"
      : "bg-blue-100 text-blue-700";

  const progressColor =
    item.progress < 50
      ? "bg-yellow-400"
      : item.progress === 100
      ? "bg-gray-500"
      : "bg-blue-600";

  const progressTextColor =
    item.progress < 50
      ? "text-yellow-600"
      : item.progress === 100
      ? "text-gray-600"
      : "text-blue-600";

  return (
    <div className="border rounded-lg p-3 bg-white shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-500">{item.date}</p>
        </div>

        <span className={`text-xs px-3 py-1 rounded-full ${statusColor}`}>
          {progressStatus}
        </span>
      </div>

      <div className="flex gap-4 text-sm text-gray-600 mt-3">
        <span className="flex items-center gap-1">
          <FaUsers /> {item.guests} guests
        </span>

        <span className="flex items-center gap-1">
          <FaMapMarkerAlt /> {item.location}
        </span>
      </div>

      <div className="mt-3">
        <p className="text-xs text-gray-500">Progress</p>

        <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
          <div
            className={`h-2 rounded-full ${progressColor}`}
            style={{ width: `${item.progress}%` }}
          ></div>
        </div>

        <p className="text-xs text-right mt-1">{item.progress}%</p>
      </div>
    </div>
  );
};

export default CurrentEventCard;
