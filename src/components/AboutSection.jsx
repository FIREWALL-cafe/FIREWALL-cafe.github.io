import React from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../assets/icons/arrow_right_alt.svg";

function AboutSection() {
  return (
    <section className="flex overflow-hidden flex-col items-center pb-32 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-center items-center max-w-full w-[1080px]">
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[526px] max-md:max-w-full">
          <div className="chinese flex flex-col w-full text-5xl font-medium leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            <h2 className="text-black border-black max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              Would you know censorship if you saw it?
            </h2>
            <div className="text-red-600 border-red-600 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              你知道什么时候会看到审查制度吗?
            </div>
          </div>
          <p className="mt-10 text-2xl leading-9 text-black max-md:max-w-full">
            Lorem ipsum dolor sit amet. Sed inventore corrupti sit rerum animi
            ut voluptate laborum. Qui repellat voluptatum qui enim debitis ut
            dolore debitis vel dolorem exercitationem.
          </p>
          <Link to="/about">
            <button className="flex gap-1 justify-center items-center self-start px-4 mt-10 text-lg leading-snug text-center text-red-600 whitespace-nowrap bg-white rounded border border-red-600 border-solid min-h-[56px]">
              <span className="self-stretch my-auto">About</span>
              <img src={ArrowRight} alt="Arrow right" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            </button>
          </Link>
        </div>
        <div className="flex flex-col justify-center self-stretch my-auto min-w-[240px] w-[350px]">
          <div className="flex overflow-hidden flex-col justify-center max-w-full bg-white border-0 border-solid border-neutral-600 w-[350px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e83176e6557e094c9a96c30ff7a256382fae0efed95838ec46e2cf2aa7f9b23?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
              alt="Illustration 1"
              className="object-contain w-full bg-blend-multiply aspect-[2]"
            />
          </div>
          <div className="flex overflow-hidden flex-col justify-center mt-3.5 max-w-full border-0 border-solid bg-neutral-300 border-neutral-600 w-[350px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d779a3c08ab9ef95c88479c5d584ae09c1894d1955c171e157e8f5d8f762451?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
              alt="Illustration 2"
              className="object-contain w-full aspect-[1.99]"
            />
          </div>
          <div className="flex overflow-hidden flex-col justify-end mt-3.5 max-w-full border-0 border-solid bg-zinc-400 border-neutral-600 w-[350px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd4b5a393167f943c99213a8af57a03b7f5fe3bb6f673589b121453182d97475?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
              alt="Illustration 3"
              className="object-contain w-full aspect-[2]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;