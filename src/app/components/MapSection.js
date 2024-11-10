import Image from "next/image";

export default function MapSection() {
  return (
    <div className="relative w-full h-screen bg-[#813B20] flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center opacity-80">
        <Image
          src="/images/group.png"
          alt="Map Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="relative text-center text-white z-10 mt-10">
        <h1 className="text-6xl font-bold tracking-wide">11,658,467</h1>
        <p className="text-3xl font-semibold mt-2">Shoes Collected</p>
      </div>

      <div className="absolute top-[25%] left-[20%] flex flex-col items-center z-20 mt-10">
        <div>
          <Image
            src="/images/picture.png"
            alt=""
            width={256}
            height={200}
            className="rounded-t-md"
          />

          <div className="bg-[#E2E8F0] w-full p-4 rounded-b-md shadow-lg">
            <p className="text-sm text-gray-800 text-center">
              Emma Simpson collected one pair of Cool Shoes.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-[40%] left-[45%] w-5 h-5 bg-[#A3E635] rounded-full border-2 border-white z-10"></div>
      <div className="absolute top-[50%] left-[60%] w-5 h-5 bg-[#A3E635] rounded-full border-2 border-white z-10"></div>
      <div className="absolute top-[70%] left-[80%] w-5 h-5 bg-[#A3E635] rounded-full border-2 border-white z-10"></div>
    </div>
  );
}
