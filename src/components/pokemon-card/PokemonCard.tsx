import Image from "next/image";
import { features } from "process";
import React from "react";

interface PokemonCard {
  features: string[];
  name: string;
  number: string;
}

export default function PokemonCard({ features, name, number }: PokemonCard) {
  return (
    <div className="relative z-10 bg-gradient-to-br from-white/50 hover:from-30% backdrop-filter-none backdrop-blur-lg  pb-2 border rounded-xl text-center">
      <Image
        src={`/images/pokemon-cards/${number}.png`}
        alt="pokemon 001"
        width={0}
        height={0}
        sizes="100vw"
        className=" w-[80%] h-max mx-auto"
      />
      <div className="fcc space-x-2 mb-[0.5em] ">
        <p className="font-semibold">{name}</p>
        <p className="text-gray-500 font-medium">#0{number}</p>
      </div>

      <div className="fcc space-x-2">
        {features &&
          features?.map((i: string, j: number) => {
            return (
              <p
                key={j}
                className="font-semibold uppercase text-xs rounded-full px-4  py-1 border border-[#00000040]"
              >
                {i}
              </p>
            );
          })}
      </div>
    </div>
  );
}
