import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import SampleChat from "../../assets/images/profile.jpg";
import Image from "next/image";

const users = [
  {
    name: "Ecleoz",
    status: "Online",
    image: SampleChat,
  },
  {
    name: "Ecleoz",
    status: "Online",
    image: SampleChat,
  },
  {
    name: "Ecleoz",
    status: "Online",
    image: SampleChat,
  },
];

const Sidebar = () => {
  const [openChatList, setOpenChatList] = useState(false);
  const handleClick = () => {
    setOpenChatList(!openChatList);
  };
  return (
    <aside
      className={`bg-[#eaeaea] max-h-[85vh] transition-all duration-175 ease-linear overflow-hidden ${
        openChatList ? "w-72" : "w-24"
      } text-gray-100 px-3`}
    >
      <div className="py-3 flex justify-end">
        <HiMenuAlt3
          size={26}
          className="cursor-pointer text-black"
          onClick={handleClick}
        />
      </div>
      <div className="overflow-y-auto">
        {openChatList && (
          <div className="center pb-10 pt-2">
            <div className="relative text-gray-600 focus-within:text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  className="p-1 focus:outline-none focus:shadow-outline"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="q"
                className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                placeholder="Search..."
              />
            </div>
          </div>
        )}
        <div className="flex flex-col gap-8">
          {users.map((user, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 text-black ${
                openChatList ? "justify-normal" : "justify-center"
              }`}
            >
              <Image
                src={user.image}
                alt=""
                width={40}
                height={40}
                className={`rounded-full ${
                  openChatList ? "w-12 h-12" : "w-10 h-10"
                }`}
              />
              {openChatList && (
                <div className="flex flex-col">
                  <h1 className="text-lg font-semibold">{user.name}</h1>
                  <p className="text-sm">{user.status}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
