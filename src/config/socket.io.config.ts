import { io } from "socket.io-client";
import Cookies from "js-cookie";

const env = process.env.NEXT_PUBLIC_SOCKET_URL;
if (!env) throw new Error("NEXT_PUBLIC_BACKEND_BASE_URL is not defined");
const socket = io(env, {
  auth: {
    token: Cookies.get("token"),
  },
  transports: ["websocket"],
  autoConnect: false,
});

const initializeSocket = () => {
  if (socket.disconnected) {
    socket.connect();
  }
};

export { initializeSocket, socket };
