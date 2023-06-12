import axios from "@/config/axios.config";
import { AxiosError } from "axios";
import React, { useState } from "react";
const RegisterForm = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState<string | null>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post("/user/register", {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      });

      if (response.status === 201) {
        setResponseMessage(response.data.message);
      }
    } catch (error: unknown) {
      setResponseMessage(
        (error as AxiosError<{ error: string }>).response?.data?.error
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[75vh]">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-semibold">Register</h1>
        <p className="text-sm">Register to your account</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center gap-4 mt-4">
          <div className="flex flex-row items-center justify-center gap-4">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(event) => setFirstname(event.target.value)}
              className="w-40 h-12 rounded-lg p-2 border-b-2 focus-within:border-black outline-none"
              placeholder="Enter First Name"
            />
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(event) => setLastname(event.target.value)}
              className="w-40 h-12 rounded-lg p-2 border-b-2 focus-within:border-black outline-none"
              placeholder="Enter Last Name"
            />
          </div>
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
          <div className="flex flex-row items-center justify-center gap-4">
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              className="w-80 h-12 rounded-lg p-2 border-b-2 focus-within:border-black outline-none"
              placeholder="Confirm Password"
            />
          </div>
          <button
            type="submit"
            className="w-80 h-12 rounded-lg bg-black text-white hover:bg-black/80"
          >
            Register
          </button>
        </div>
      </form>
      {responseMessage && (
        <div className="flex flex-col items-center justify-center gap-4 mt-4">
          <p className="text-sm">{responseMessage}</p>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
