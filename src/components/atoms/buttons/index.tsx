import React from "react";
import Router from "next/router";

interface HeroButtonProps {
  message: string;
  link?: string;
  className?: string;
}

const HeroButton = ({ message, link, className }: HeroButtonProps) => {
  const handleClick = () => {
    if (link) {
      Router.push(link);
    }
  };

  return (
    <button
      className={`px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8 + ${className}`}
      onClick={handleClick}
    >
      {message}
    </button>
  );
};

export default HeroButton;
