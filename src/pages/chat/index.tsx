import { useEffect, useState } from "react";
import instance from "@/config/axios.config";
import Cookies from "js-cookie";
import { io } from "socket.io-client";
import { checkAuth } from "@/utils/auth/auth";
import Chat from "../../components/chat";
import Navbar from "../../components/layout/navbar";

const ChatPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState("")

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const token = Cookies.get("token");
        if (token) {
          const response = await instance.get("/auth");
          if (response.data) {
            setIsAuthenticated(true);
            setUser(response.data.data.firstName);
          }
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuthentication();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      const socket = io(); // Replace with your server URL

      // Socket event listeners and handlers
      socket.on("connect", () => {
        console.log("Socket connected");
      });

      
      return () => {
        socket.disconnect();
        socket.on("disconnect", () => {
          console.log("Socket disconnected");
        });
      };
    }
  }, [isAuthenticated]);

  return isAuthenticated ? (
    <>
      <div className="grid grid-rows-[5rem_1fr] h-screen">
        <Navbar />
        <div className="flex overflow-hidden">
          {/* <ChatList /> */}
          <Chat user={user} />
        </div>
      </div>
    </>
  ) : (
    <div className="flex justify-center items-center h-screen">
      <div className="text-3xl font-bold">Please Login First</div>
    </div>
  );
};

export default ChatPage;
