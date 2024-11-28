const MessageSkeleton = () => {
  const skeletonMessages = Array(6).fill(null);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {skeletonMessages.map((_, index) => (
        <div
          key={index}
          className={`chat ${index % 2 === 0 ? "chat-start" : "chat-end"}`}
        >
          <div className="chat-image avatar">
            <div className="size-10 rounded-full">
              <div className="skeleton w-full h-full rounded-full" />
            </div>
          </div>

          <div className="chat-header mb-1">
            <div className="skeleton h-4 w-32" />
          </div>

          <div className="skeleton h-16 w-[200px]" />
        </div>
      ))}
    </div>
  );
};

export default MessageSkeleton;
