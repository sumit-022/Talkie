import SeperatorLine from "@/components/atoms/divider";
import HomeHero from "@/components/atoms/hero";
import Navbar from "@/components/layout/navbar";
import React from "react";
import { AuthContext } from "../components/auth-context";

const HomePage = () => {
  const { isAuthenticated } = React.useContext(AuthContext);
  return (
    <div className="grid grid-rows-[80px 1fr] h-screen">
      <Navbar />
      <HomeHero
        heroTitle={"Chatting Made Simple"}
        heroSubtitle={"Talkie"}
        heroText={""}
        heroButton1={{
          text: `${isAuthenticated ? "Chat" : "Login"}`,
          link: `${isAuthenticated ? "/chat" : "/login"}`,
        }}
        heroButton2={"Learn More"}
        className=""
      />{" "}
    </div>
  );
};

export default HomePage;
