import React, { useContext, useState } from "react";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { AuthContext } from "../auth-context";
import axios from "@/config/axios.config";
import { initializeSocket } from "../../config/socket.io.config";

const LoginForm = () => {
  const router = useRouter();
  const { setAuthenticated } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState<string | null>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post("/user/login", {
        email,
        password,
      });
      if (response.data) {
        document.cookie = `token=${response.data.data.token}`;
        initializeSocket();
        setAuthenticated(true);
        router.push("/");
      }
    } catch (error: unknown) {
      const err = error as AxiosError<any>;
      if (err?.response?.data) {
        setResponseMessage(err?.response?.data?.error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[75vh]">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-semibold">Login</h1>
        <p className="text-sm">Login to your account</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center gap-4 mt-4">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-80 h-12 rounded-lg p-2 border-b-2 focus-within:border-black outline-none"
            placeholder="Enter Email"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-80 h-12 rounded-lg p-2 border-b-2 focus-within:border-black outline-none"
            placeholder="Enter Password"
          />
          <button
            type="submit"
            className="w-80 h-12 rounded-lg bg-black text-white hover:bg-black/80"
          >
            Login
          </button>
        </div>
      </form>
      {responseMessage && (
        <div className="flex flex-col items-center justify-center gap-4 mt-4">
          <p>{responseMessage}</p>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
