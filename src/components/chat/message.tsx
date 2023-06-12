const Message = ({ message, mode, time }:Message) => {
  return (
    <div className={`${mode === "sender" ? "self-end" : "self-start"}`}>
      <p
        className={`${
          mode === "sender" ? "bg-[#eaeaea] text-black" : "bg-black text-white"
        } p-2 rounded-lg w-max m-4`}
      >
        {message}
      </p>
      <p className="text-xs text-gray-400">{time}</p>
    </div>
  );
};

export default Message;