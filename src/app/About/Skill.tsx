import Image from "next/image";

const Skill = ({
  name,
  image,
}: {
  name: string;
  image: string;
  imgName: string;
}) => {
  return (
    <div className="group relative flex flex-col items-center justify-center p-6  rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
      <div className="w-16 h-16 mb-4">
        <Image
          src={image}
          alt={name}
          width={64}
          height={64}
          className="w-full group-hover:scale-125 transition-all duration-200 h-full object-contain group-hover:animate-pulse"
        />
      </div>
      <div className="text-center text-lg font-semibold default:text-gray-800">
        {name}
      </div>
    </div>
  );
};

export default Skill;
