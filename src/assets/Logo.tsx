import React from "react";

import { AngelHack, Pokemon } from "./Images";

export default function Logo() {
  return (
    <div className="fc">
      <Pokemon className="w-[100px] h-[60px] md:w-[150px] md:h-[80px] lg:w-[180px] lg:h-[100px] pr-2  " />
      <div className="w-[2px] h-[50px] bg-[#0000003d]"></div>
      <AngelHack className="w-[100px] h-[60px] md:w-[150px] md:h-[80px] lg:w-[180px] lg:h-[100px] " />
    </div>
  );
}
