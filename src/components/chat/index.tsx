import React, { useEffect, useState, useRef } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { socket } from "@/config/socket.io.config";
import Person from "./person";
import { data } from "autoprefixer";

interface ChatProps {
  user: string;
}

interface Message {
  message: string;
  mode: "sender" | "receiver";
  sender: string;
  time: string;
}

const Chat = ({ user }: ChatProps) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>(() => {
    const storedMessages = localStorage.getItem("chatMessages");
    return storedMessages ? JSON.parse(storedMessages) : [];
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sendMessage = (messageText: string) => {
    if (messageText) {
      const newMessage: Message = {
        message: messageText,
        mode: "sender",
        sender: user,
        time: new Date().toLocaleTimeString(),
      };

      setMessages((prevMessages) => [...prevMessages, newMessage]);
      socket.emit("message", messageText);
    }
  };

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleMessage = (data: Message) => {
      const newMessage: Message = {
        ...data,
        message: data.message,
        mode: "receiver",
        sender: data.sender,
        time: new Date().toLocaleTimeString(),
      };
      

      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    socket.on("message", handleMessage);

    return () => {
      socket.off("message", handleMessage);
    };
  }, []);

  return (
    <div className="grid grid-rows-[80px_1fr_50px] w-full">
      <Person />
      <div className="flex-grow max-h-[85vh] w-full px-3 overflow-y-auto pb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${message.mode === "sender" ? "self-end" : "self-start"} py-2`}
          >
              <p className="text-xs text-black ml-1 text-left">
                {message.mode === "sender" ? "You" : message.sender}
              </p>
            <p
              className={`${
                message.mode === "sender" ? "bg-[#eaeaea] text-black" : "bg-black text-white"
              } p-2 rounded-lg w-max mb-3 mt-1`}
            >
              {message.message}
            </p>
            <p className="text-xs text-gray-400">{message.time}</p>
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>
      <div className="w-full center">
        <div className="fixed bottom-3 w-11/12 flex items-center">
          <input
            type="text"
            className="flex-grow bg-[#eaeaea] rounded-lg p-2 border-b-2 focus-within:border-black outline-none"
            placeholder="Enter Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyUpCapture={(e) => {
              if (e.key === "Enter") {
                sendMessage(message);
                setMessage("");
              }
            }}
          />
          <AiOutlineSend
            className="text-xl ml-2 cursor-pointer"
            onClick={() => {
              sendMessage(message);
              setMessage("");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
