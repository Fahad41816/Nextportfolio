import { Download } from "lucide-react";
import Skill from "./Skill";

const skillS = [
  {
    icon: "https://i.ibb.co.com/qCJKJjf/js.png",
    name: "JavaScript",
    imageName: "",
  },
  {
    icon: "https://i.ibb.co.com/2NYm8Sg/typescript.png",
    name: "TypeScript",
    imageName: "typescript",
  },
  {
    icon: "https://i.ibb.co.com/SQDMQ29/React.png",
    name: "React",
    imageName: "",
  },
  {
    icon: "https://i.ibb.co.com/r70t5Vp/Redux.png",
    name: "Redux",
    imageName: "Redux",
  },
  {
    icon: "https://i.ibb.co.com/858Gh9f/Next-js.png",
    name: "Next.js",
    imageName: "Next js",
  },
  {
    icon: "https://i.ibb.co.com/zsSJK96/Tailwind-CSS.png",
    name: "Tailwind CSS",
    imageName: "Tailwind",
  },
  {
    icon: "https://i.ibb.co.com/R21PPZ4/Bootstrap.png",
    name: "Bootstrap",
    imageName: "",
  },
  {
    icon: "https://i.ibb.co.com/cyjwTpw/Express.png",
    name: "Express",
    imageName: "Express",
  },
  {
    icon: "https://i.ibb.co.com/mSgNhGQ/MongoDB.png",
    name: "MongoDB",
    imageName: "MongoDB",
  },
  {
    icon: "https://i.ibb.co.com/wQJnC3N/Mongoose-js.png",
    name: "Mongoose",
    imageName: "Mongoose",
  },
  {
    icon: "https://i.ibb.co.com/0syjJWm/MySQL.png",
    name: "MySQL",
    imageName: "MySQL",
  },
  {
    icon: "https://i.ibb.co.com/W3vQ5jt/Node-js.png",
    name: "Node.js",
    imageName: "Node js",
  },
  {
    icon: "https://i.ibb.co.com/ZBFgDBz/Postgres-SQL.png",
    name: "PostgreSQL",
    imageName: "PostgresSQL",
  },
  {
    icon: "https://i.ibb.co.com/0QTg0rP/prism.png",
    name: "Prism",
    imageName: "prism",
  },
  {
    icon: "https://i.ibb.co.com/XkZtqwN/Firebase.png",
    name: "Firebase",
    imageName: "Firebase",
  },
  {
    icon: "https://i.ibb.co.com/Y2f6nsx/AWS.png",
    name: "AWS",
    imageName: "",
  },
];

interface StatBoxProps {
  number: string;
  label: string;
}

function StatBox({ number, label }: StatBoxProps) {
  return (
    <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
      <div className="flex flex-col">
        <span className="text-4xl font-bold text-amber-500 mb-2">{number}</span>
        <span className="text-gray-400 text-sm uppercase tracking-wider">
          {label}
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
    <div className="mb-4">
      <span className="text-gray-400">{label}: </span>
      <span className={highlight ? "text-green-500" : "default:text-white"}>
        {value}
      </span>
    </div>
  );
}

export function AboutSection() {
  return (
    <div className="max-w-7xl min-h-screen default:bg-gray-950  p-8">
      {/* Background text */}
      <div className="relative">
        <h1 className="text-[120px] font-bold text-gray-800/20 absolute -top-8 left-0 select-none">
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
          <div className="grid md:grid-cols-2 gap-x-12">
            <div>
              <InfoRow label="First Name" value="Nahidul Islam" />
              <InfoRow label="Age" value="23 Years" />
              <InfoRow label="Freelance" value="Available" highlight={true} />
              <InfoRow label="Phone" value="01731321879" />
            </div>
            <div>
              <InfoRow label="Last Name" value="Fahad" />
              <InfoRow label="Nationality" value="Bangladesh" />
              <InfoRow label="Address" value="Agrabad.Ctg" />
              <InfoRow label="Email" value="nahidulislamfahad6@gmail.com" />
              <InfoRow label="Languages" value="English, Bangla, Hindi" />
            </div>
          </div>

          <button className="mt-8 bg-amber-500 text-gray-900 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-amber-400 transition-colors">
            <span>DOWNLOAD CV</span>
            <Download className="w-5 h-5" />
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <StatBox number="2+" label="YEARS OF EXPERIENCE" />
          <StatBox number="25+" label="COMPLETED PROJECTS" />
          {/* <StatBox number="81+" label="HAPPY CUSTOMERS" /> */}
          <StatBox number="2+" label="AWARDS WON" />
        </div>
      </div>

      <div className="mt-10">
        <div className="relative">
          <h1 className="text-[120px] font-bold text-gray-800/20 absolute -top-8 left-0 select-none">
            SKILLS
          </h1>

          {/* Main heading */}
          <h2 className="text-4xl font-bold relative mb-16 pt-12 ">
            MY <span className="text-amber-500">SKILL</span>
          </h2>
        </div>
        <div className="grid grid-cols-8 gap-4">
          {skillS.map((data, index) => (
            <Skill
              key={index}
              image={data.icon}
              imgName={data.imageName}
              name={data.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
