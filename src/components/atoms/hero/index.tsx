import React from "react";
import HeroButton from "../buttons/index";


const HomeHero = ({ heroTitle, heroSubtitle, heroText, heroButton1, heroButton2, className }: HomeHeroProps) => {
  return (
    <>
      <div className={`bg-white ${className}`}>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-500 tracking-wide uppercase">
              {heroSubtitle}
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              {heroTitle}
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              {heroText}
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <HeroButton message={heroButton1.text} link={heroButton1.link} className="text-white bg-blue-500 hover:bg-blue-600" />
                <HeroButton message={heroButton2} className="text-blue-500 bg-white hover:bg-gray-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
