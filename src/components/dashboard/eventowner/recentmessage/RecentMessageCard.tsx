import { RecentMessage } from "./types";

interface Props {
  message: RecentMessage;
}

const RecentMessageCard = ({ message }: Props) => {
  return (
    <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md">
      <img
        src={message.avatar}
        alt={message.sender}
        className="w-10 h-10 rounded-full"
      />

      <div>
        <p className="font-medium">{message.sender}</p>
        <p className="text-xs text-gray-500">{message.message}</p>
      </div>

      {message.isUnread && (
        <span className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></span>
      )}
    </div>
  );
};

export default RecentMessageCard;
