import { HeroImage } from "@/assets/Images";
import Logo from "@/assets/Logo";
import PokemonCard from "@/components/pokemon-card/PokemonCard";
import { PokemonData } from "@/utils/PokemonData";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-[3em] md:mt-[5em] space-y-[4em] md:space-y-[6em] lg:space-y-[8em] ">
       <Logo />
      <header className="fbc">
        <div className="md:w-[50%] xl:w-[40%]">
          <div className="">
            <h1 className="text-4xl xl:text-6xl font-semibold">
              Explore stats, connect trends and understand <br /> your Pokémon
            </h1>
            <p className="font-medium xl:text-lg mt-[0.5em] xl:mt-[1em]">
              Visually stunning and intuitive user interface that aims to
              provide a seamless and engaging experience for trainers and
              Pokémon enthusiasts.
            </p>
          </div>

          <div className="mt-[2em]">
            <Link href="/Dashboard">
            <button className="bg-[#006EB9] text-white rounded-lg py-2 xl:py-3 px-8 w-[50%] xl:w-[40%]">
              Explore
            </button>
            </Link>
          </div>
        </div>
        <HeroImage className="hidden md:block w-[70%] h-[400px] xl:h-[600px] ml-8" />
      </header>

      <section className="space-y-[1em] md:space-y-[2em]">
        <p className="text-xl font-bold text-center">Pokedex</p>

        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 ">
          {PokemonData.map((i, j) => {
            return (
              <PokemonCard
                features={i.feature}
                name={i.name}
                number={i.number}
                key={j}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
