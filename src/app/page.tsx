import Image from "next/image";
import PrifileImg from "../assets/Untitled design.png";
import { ArrowRight, Minus } from "lucide-react";
import "animate.css";

export default function Home() {
  return (
    <div
      data-aos="fade-up"
      className="w-full  h-full flex items-start justify-start"
    >
      <div className="clipPath  "></div>
      <div className="flex  items-start justify-center w-max h-max absolute left-[5%] top-[12%] bg-black rounded-lg ">
        <Image
          width={450}
          height={600}
          alt="Profile Image"
          src={PrifileImg}
        ></Image>
      </div>
      <div className="w-full h-full flex flex-col items-start justify-center">
        <div className="flex item-start justify-start">
          <div className="h-12 flex items-center justify-center">
            <Minus className="text-2xl text-[#FFB400]" />
          </div>
          <div>
            <div className="flex items-center justify-start">
              {"I'm NahidulIslam Fahad.".split("").map((char, index) => (
                <h1
                  key={index}
                  className={`text-5xl  hover:animate-rubberBand animate-complete cursor-pointer font-extrabold text-[#FFB400] hover:animate__rubberBand animate__animated  animate__rubberBan inline-block ${
                    char === " " ? "w-2" : "" // Add spacing for spaces
                  }`}
                >
                  {`${char} `}
                </h1>
              ))}
            </div>
            <div className="flex items-center justify-start">
              {"Full stack Web developer".split("").map((char, index) => (
                <h1
                  key={index}
                  className={`text-2xl font-bold mt-2 cursor-pointer default:text-white  inline-block hover:animate-rubberBand animate-complete ${
                    char === " " ? "w-2" : "" // Add spacing for spaces
                  }`}
                >
                  {char}
                </h1>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-start justify-start w-[600px] ml-5 mt-4">
          {"I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me."
            .split(" ")
            .map((word, index) => (
              <h1
                key={index}
                className="text-base font-medium default:text-gray-200 inline-block mr-2 hover:animate-rubberBand animate-complete"
              >
                {word}
              </h1>
            ))}
        </div>

        <button
          className={`
        group relative flex items-center justify-between
        px-8 py-3 rounded-full
        bg-amber-500 hover:bg-amber-400
        text-white font-semibold
        transition-all duration-300
        shadow-[0_0_15px_rgba(251,191,36,0.3)]
        hover:shadow-[0_0_20px_rgba(251,191,36,0.5)]
        mt-4 ml-5
      `}
        >
          <span className="mr-4">MORE ABOUT ME</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
