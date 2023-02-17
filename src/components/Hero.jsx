import React from "react";
import { BsGlobe2 } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="h-[50vh] flex flex-col text-white bg-black justify-center items-center">
      <BsGlobe2 color="red" className="w-60 h-20 my-1 animate-pulse"/>
      <h5>The website build with the news Api</h5>
    </div>
  );
};

export default Hero;
