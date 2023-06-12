import React, { useEffect, useState,useRef, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import router from "next/router";
import { AuthContext } from "./auth-context";
import profile from "../assets/svg/dashboard/profile-1.svg";
import { checkAuth } from "@/utils/auth/auth";

const Profile = () => {
  const [user, setUser] = useState<LoginData | null>(null);
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { setAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      const auth = await checkAuth();
      if (auth) {
        setUser(auth);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const showProfile = () => setShow(!show);
  const handleLogout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setAuthenticated(false);
  };
  return (
    <>
      <Image
        src={profile}
        alt=""
        width={42}
        height={42}
        className="rounded-full cursor-pointer"
        onClick={showProfile}
      />
      {show && (
        <div className="absolute right-3 mt-2 py-2 w-36 bg-white rounded-md shadow-xl z-20" ref={ref}>
          <p className="text-center border-b-2 p-2">
            Hello {user?.data?.firstName}!
          </p>
          <Link
            href="/profile"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Profile
          </Link>
          <Link
            href="/settings"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Settings
          </Link>
          <Link
            href="/login"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={handleLogout}
          >
            Logout
          </Link>
        </div>
      )}
    </>
  );
};

export default Profile;
