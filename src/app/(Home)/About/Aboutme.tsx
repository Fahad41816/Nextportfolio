import { Download } from "lucide-react";

import Image from "next/image";
import ProfileImage from "../../../assets/Untitled design.png";
import Link from "next/link";
import { getAboutData } from "@/utils/About";

interface StatBoxProps {
  number: string;
  label: string;
}

function StatBox({ number, label }: StatBoxProps) {
  return (
    <div className="max-w-7xl p-6  rounded-lg border-2 border-gray-200">
      <div className="flex flex-col">
        <span className="text-4xl font-bold text-amber-500 mb-2">{number}</span>
        <span className="text-gray-400 text-lg font-semibold uppercase tracking-wider">
          -{label}
        </span>
      </div>
    </div>
  );
}

interface InfoRowProps {
  label: string;
  value: string;
  highlight?: boolean;
}

function InfoRow({ label, value, highlight = false }: InfoRowProps) {
  return (
    <div className="w-full   mb-4 flex flex-col md:flex-row">
      <span className="text-gray-400">{label}: </span>
      <span
        className={`${highlight ? "text-green-500" : "default:text-white"}`}
      >
        {value}
      </span>
    </div>
  );
}

export async function AboutSection() {
  const { data } = await getAboutData();

  return (
    <div
      data-aos="fade-down"
      className="max-w-7xl min-h-screen p-1 md:p-8 mb-10"
    >
      {/* Background text */}
      <div className="relative">
        <h1 className="text-[80px] md:text-[120px] font-bold text-gray-800/20 absolute md:-top-8 left-0 select-none">
          RESUME
        </h1>

        {/* Main heading */}
        <h2 className="text-4xl font-bold relative mb-16 pt-12 ">
          ABOUT <span className="text-amber-500">ME</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-[1.5fr,1fr] gap-12">
        {/* Personal Info Section */}
        <div>
          <h3 className="text-xl font-semibold mb-8">PERSONAL INFOS</h3>

          <div className="relative w-60 h-72 mx-auto mb-5 md:hidden">
            <div className="absolute inset-0 rounded-full bg-black blur-md opacity-20" />
            <div className="relative w-full h-full rounded-full border-2 border-[#FFB400] overflow-hidden">
              <Image
                src={ProfileImage}
                alt="Profile"
                fill
                className="object-fill"
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-2 ">
            <div>
              <InfoRow
                label="First Name"
                value={data[0]?.personalInfo.firstName}
              />
              <InfoRow label="Age" value={data[0]?.personalInfo.age} />
              <InfoRow
                label="Nationality"
                value={data[0]?.personalInfo.nationality}
              />
              <InfoRow label="Phone" value={data[0]?.personalInfo.phone} />
            </div>
            <div>
              <InfoRow
                label="Last Name"
                value={data[0]?.personalInfo.lastName}
              />
              <InfoRow label="Address" value={data[0]?.personalInfo.address} />
              <InfoRow
                label="Languages"
                value={data[0]?.personalInfo.languages}
              />
            </div>
          </div>

          <div className="grid-flow-row-dense">
            <InfoRow label="Email" value={data[0]?.personalInfo.email} />
          </div>

          <Link
            href={
              "https://drive.google.com/uc?export=download&id=1uhRuXK7sWHHHcQNVFHnCQVS0dEY52AfW"
            }
            download="Fahad_Resume.pdf"
          >
            <button className="mt-8 bg-amber-500 text-gray-900 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-amber-400 transition-colors">
              {" "}
              <span>DOWNLOAD CV</span>
              <Download className="w-5 h-5" />
            </button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <StatBox
            number={data[0]?.stats.experience}
            label="YEARS OF EXPERIENCE"
          />
          <StatBox
            number={data[0]?.stats.projects}
            label="COMPLETED PROJECTS"
          />
          {/* <StatBox number="81+" label="HAPPY CUSTOMERS" /> */}
          <StatBox number="2+" label="AWARDS WON" />
        </div>
      </div>
    </div>
  );
}
