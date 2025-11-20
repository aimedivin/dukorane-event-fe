
const RecentMessages = () => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Recent Messages</h2>

      <div className="flex items-center gap-3">
        <img
          src="/images/user.png"
          alt="user"
          className="w-10 h-10 rounded-full"
        />

        <div>
          <p className="font-medium">Elite Catering</p>
          <p className="text-xs text-gray-500">Menu options ready for review</p>
        </div>

        <span className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></span>
      </div>
    </div>
  );
};

export default RecentMessages;
