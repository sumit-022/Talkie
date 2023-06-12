import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import Ecleoz from "../../../assets/logos/logo.png";
import router from "next/router";
import NotificationIcon from "../../../assets/svg/dashboard/notification.svg";
import { AuthContext } from "../../auth-context";
import Profile from "@/components/profile";
import { checkAuth } from "@/utils/auth/auth";

const Navbar = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const handleLogin = () => {
    router.push("/login");
  };
  return (
    <header className="drop-shadow-1 sticky top-0 z-[1000] flex w-full border-b-2 border-b-[#E7EDFC] bg-[#fafafa] shadow-sm h-[15vh]">
      <div className="shadow-2 flex flex-grow items-center justify-between px-4 py-2 md:px-6 2xl:px-5">
        <div className="center gap-2">
          <Image
            src={Ecleoz}
            alt=""
            width={60}
            height={60}
            className="rounded-full cursor-pointer"
            onClick={() => router.push("/")}
          />
          <h1 className="text-lg font-semibold">Talkie</h1>
        </div>

        <div className="flex items-center gap-3 text-primary-cool-grey sm:gap-4 md:gap-6 lg:gap-8">
          <Image className="cursor-pointer" src={NotificationIcon} alt="" />
          {/* <Setting /> */}
          <div className="rounded shadow-sm">
            {isAuthenticated ? (
              <Profile />
            ) : (
              <div className="flex gap-2">
                <button className="bg-blue-500 px-4 py-2 rounded text-white font-semibold" onClick={handleLogin}>Login</button>
                <button className="bg-blue-500 px-4 py-2 rounded text-white font-semibold">Register</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
