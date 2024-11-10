import Image from "next/image";
import { RiShoppingCartLine } from "react-icons/ri";

const Box = ({ imageSrc, title, description, buttonLabel }) => {
  return (
    <div>
      <div className="flex flex-col items-center bg-[#0F172A] rounded-[10px] p-0 shadow-[0px_25px_50px_-12px_#FFFFFF40] w-[395px] h-[450px] mx-1 my-2 mb-14">
        <div className="relative w-full h-[220px]">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-tl-[10px] rounded-tr-[10px]"
          />
        </div>
        <div className="m-4">
          <h3 className="font-semibold text-xl text-white mb-4 text-left w-full">
            {title}
          </h3>
          <p className="text-lg text-white mb-6 text-left w-full">
            {description}
          </p>
          <button className="flex  text-white px-6 py-2 border-2 rounded-lg hover:bg-[#9b9595] gap-2 items-center w-full justify-center">
            <RiShoppingCartLine/>
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Box;
