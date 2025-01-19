/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAboutData } from "@/utils/About";
import Image from "next/image";

const page = async () => {
  const { data } = await getAboutData();

  return (
    <section>
      <div className="max-w-7xl mt-10 p-5">
        <div className="relative">
          <h1 className="text-[80px] md:text-[120px] font-bold text-slate-100/10 absolute md:-top-8 left-0 select-none">
            SKILLS
          </h1>

          {/* Main heading */}
          <h2 className="text-4xl font-bold relative mb-16 pt-12">
            MY <span className="text-amber-500">SKILL</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-8 gap-4 mb-10">
          {data[0]?.skills.map((data: any, index: number) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg p-5 transition-all duration-300 transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="group relative flex flex-col items-center justify-center p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ">
                <div className="w-16 h-16 mb-4">
                  <Image
                    src={data.icon}
                    alt={data.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain animate-bounce-slow transition-all duration-1000"
                  />
                </div>
                <div className="text-center text-lg font-semibold default:text-gray-800">
                  {data.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
