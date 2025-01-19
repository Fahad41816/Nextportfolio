/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import PrifileImg from "../../../assets/Untitled design.png";
import { ArrowRight, AtSign, Github, Linkedin, Minus } from "lucide-react";
import "animate.css";
import Link from "next/link";
import { getProfileData } from "@/utils/profile";

export default async function Home() {
  const { data } = await getProfileData();

  return (
    <section className="w-full h-full">
      {/* large display  */}
      <div
        data-aos="fade-up"
        className="w-full  h-full md:flex hidden items-start justify-start "
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
                {data[0].name.split("").map((char: any, index: number) => (
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
                {data[0].title.split("").map((char: string, index: number) => (
                  <h1
                    key={index}
                    className={`text-2xl font-bold mt-2 cursor-pointer dark:text-white  inline-block hover:animate-rubberBand animate-complete ${
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
            {data[0].about.split(" ").map((word: string, index: number) => (
              <h1
                key={index}
                className="text-base font-medium default:text-gray-200 inline-block mr-2 hover:animate-rubberBand animate-complete"
              >
                {word}
              </h1>
            ))}
          </div>

          {/* account link  */}
          <div className="flex items-center justify-star gap-5 ml-5 mt-5">
            <div className="border-2 rounded-full p-1 hover:bg-slate-100 hover:dark:bg-[#111827] cursor-pointer">
              <Link href={"https://github.com/Fahad41816"} target="_blank">
                <Github />
              </Link>
            </div>
            {/* <div className="border-2 rounded-full p-1 hover:bg-slate-100 hover:dark:bg-[#111827] cursor-pointer">
            <Link href={"https://github.com/Fahad41816"} target="_blank"><Facebook /></Link>
            </div> */}
            <div className="border-2 rounded-full p-1 hover:bg-slate-100 hover:dark:bg-[#111827] cursor-pointer">
              <Link
                href={"https://www.linkedin.com/in/nifahad/"}
                target="_blank"
              >
                <Linkedin />
              </Link>
            </div>
            <div className="border-2 rounded-full p-1 hover:bg-slate-100 hover:dark:bg-[#111827] cursor-pointer">
              <Link
                href="mailto:nahidulislamfahad6@gmail.com?subject=Let's%20Connect&body=Hi%20Fahad,%20I%20would%20like%20to%20discuss%20something%20with%20you."
                rel="noopener noreferrer" // Improves security for external links
              >
                <AtSign />
              </Link>
            </div>
          </div>
          <Link href={"/About"}>
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
              {" "}
              <span className="mr-4">MORE ABOUT ME</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>

      {/* small display */}
      <div
        data-aos="fade-up"
        className="min-h-screen dark:bg-zinc-900 flex items-center justify-center p-4 md:hidden mb-20"
      >
        <div className="max-w-sm w-full space-y-6">
          {/* Profile Image */}
          <div className="relative w-60 h-72 mx-auto">
            <div className="absolute inset-0 rounded-full bg-black blur-md opacity-20" />
            <div className="relative w-full h-full rounded-full border-2 border-[#FFB400] overflow-hidden">
              <Image
                src={PrifileImg}
                alt="Profile"
                fill
                className="object-fill"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full   flex flex-col items-center justify-center text-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-[#FFB400] text-2xl font-bold tracking-wide  ">
                {data[0]?.name}
              </h1>
              <h2 className="dark:text-white text-xl font-medium">
                {data[0]?.title}
              </h2>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed ">
              {data[0]?.about}
            </p>
            <div className="flex items-center justify-star gap-5 ml-5 mt-5">
              <div className="border-2 rounded-full p-1 hover:bg-slate-100 hover:dark:bg-[#111827] cursor-pointer">
                <Link href={"https://github.com/Fahad41816"} target="_blank">
                  <Github />
                </Link>
              </div>
              {/* <div className="border-2 rounded-full p-1 hover:bg-slate-100 hover:dark:bg-[#111827] cursor-pointer">
            <Link href={"https://github.com/Fahad41816"} target="_blank"><Facebook /></Link>
            </div> */}
              <div className="border-2 rounded-full p-1 hover:bg-slate-100 hover:dark:bg-[#111827] cursor-pointer">
                <Link
                  href={"https://www.linkedin.com/in/nifahad/"}
                  target="_blank"
                >
                  <Linkedin />
                </Link>
              </div>
              <div className="border-2 rounded-full p-1 hover:bg-slate-100 hover:dark:bg-[#111827] cursor-pointer">
                <Link
                  href="mailto:nahidulislamfahad6@gmail.com?subject=Let's%20Connect&body=Hi%20Fahad,%20I%20would%20like%20to%20discuss%20something%20with%20you."
                  rel="noopener noreferrer" // Improves security for external links
                >
                  <AtSign />
                </Link>
              </div>
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
      </div>
    </section>
  );
}
