import React from "react";
import SampleChat from "../../assets/images/profile.jpg";
import Image from "next/image";


const Person = () => {
  return (
    <div className="h-20 bg-[#eaeaea] flex items-center p-4">
      <div className="ml-4">
        <h1 className="text-lg font-semibold">Chat Room</h1>
        <p className="text-sm">Online</p>
      </div>
    </div>
  );
};

export default Person;
