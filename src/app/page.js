import { FiPlayCircle } from "react-icons/fi";
import Image from "next/image";
import Box from "./components/Box";
import { FaCheck } from "react-icons/fa6";
import Slider from "./components/Slider";
import { FaArrowRight, FaPodcast, FaRocket, FaSearch } from "react-icons/fa";
import { BiCheckShield } from "react-icons/bi";
import { IoRocketOutline } from "react-icons/io5";
import { CgScreen } from "react-icons/cg";
import { GiSettingsKnobs } from "react-icons/gi";
import MapSection from "./components/MapSection";

export default function Home() {
  return (
    <div>
      <div className="sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 mb-32">
          <div className="flex flex-col justify-center items-start">
            <div className="font-bold text-7xl text-[#0F172A] mb-4">
              Collectible Sneakers
            </div>
            <p className="font-normal text-lg mb-4">
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
              suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
              ultrices amet.
            </p>
            <div className="flex gap-4">
              <button className="border-[#78350F] border-2 rounded-lg p-2">
                <p className="text-[#78350F] font-medium text-xl px-2">
                  Sign up now
                </p>
              </button>
              <button className="flex items-center justify-center gap-2">
                <FiPlayCircle className="text-[#78350F]" />
                <p className="font-medium text-base text-[#78350F]">
                  Watch Demo
                </p>
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative w-full h-96">
              <Image
                src="/images/col.png"
                alt="Collectible Sneakers"
                layout="intrinsic"
                objectFit="contain"
                width={486}
                height={423}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 justify-items-center md:justify-items-start mb-10">
          <div className="w-full flex flex-col items-center md:items-start justify-center">
            <div className="relative">
              <Image
                src="/images/icon.png"
                alt="Icon"
                layout="intrinsic"
                objectFit="contain"
                width={60}
                height={60}
              />
              <Image
                src="/images/trophy.png"
                alt="Trophy"
                layout="intrinsic"
                objectFit="contain"
                width={64}
                height={64}
                className="absolute left-[-25px] top-[2px]"
              />
            </div>
            <p className="text-[#0F172A] font-semibold text-xl mt-4 text-center md:text-left">
              Nibh viverra
            </p>
            <p className="text-[#0F172A] font-normal text-lg mt-2 text-center md:text-left">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.
            </p>
          </div>

          <div className="w-full flex flex-col items-center md:items-start justify-center">
            <div className="relative">
              <Image
                src="/images/icon1.png"
                alt="Icon1"
                layout="intrinsic"
                objectFit="contain"
                width={53}
                height={53}
              />
              <Image
                src="/images/tunnel.png"
                alt="Tunnel"
                layout="intrinsic"
                objectFit="contain"
                width={64}
                height={64}
                className="absolute left-[-20px] top-[18px]"
              />
            </div>
            <p className="text-[#0F172A] font-semibold text-xl mt-4 text-center md:text-left">
              Cursus amet
            </p>
            <p className="text-[#0F172A] font-normal text-lg mt-2 text-center md:text-left">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.
            </p>
          </div>

          <div className="w-full flex flex-col items-center md:items-start justify-center">
            <div className="relative">
              <Image
                src="/images/icon3.png"
                alt="Icon3"
                layout="intrinsic"
                objectFit="contain"
                width={45}
                height={45}
              />
              <Image
                src="/images/tv.png"
                alt="Tv"
                layout="intrinsic"
                objectFit="contain"
                width={64}
                height={64}
                className="absolute left-[-30px] top-[10px]"
              />
            </div>
            <p className="text-[#0F172A] font-semibold text-xl mt-4 text-center md:text-left">
              Ipsum fermentum
            </p>
            <p className="text-[#0F172A] font-normal text-lg mt-2 text-center md:text-left">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full bg-[#0F172A] items-center justify-between sm:px-8 md:px-12 lg:px-16">
        <p className="font-extrabold text-white text-[32px] sm:text-[56px] mt-10 mb-1 sm:mb-20">
          The best of the best
        </p>
        <button className="border-2 rounded-lg border-[#FFFFFF] hover:bg-[#9b9595] text-white px-6 py-5 mt-10  w-[233px] h-[64px] font-bold text-2xl mb-20 flex items-center">
          Sign up now
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 justify-items-center bg-[#0F172A] sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col items-start">
          <Box
            imageSrc="/images/image.png"
            title="Title"
            description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
            buttonLabel="Buy Now"
          />
        </div>
        <div className="flex flex-col items-start">
          <Box
            imageSrc="/images/image1.png"
            title="Title"
            description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
            buttonLabel="Buy Now"
          />
        </div>
        <div className="flex flex-col items-start">
          <Box
            imageSrc="/images/image2.png"
            title="Title"
            description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
            buttonLabel="Buy Now"
          />
        </div>
      </div>
      <div className="bg-[#FFFBEB] min-h-screen py-20 sm:py-40">
        <div className="container mx-auto rounded-[30px] bg-white p-6 sm:p-20 shadow-[0px_0px_10px_0px_#00000012] shadow-[0px_20px_25px_-5px_#0000001A] max-w-[1280px] h-auto sm:h-[486px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-20">
            <div>
              <p className="font-bold text-[24px] sm:text-[56px] mb-4 text-center sm:text-left">
                Why join us
              </p>
              <div className="mb-4">
                <ol className="list-decimal text-base sm:text-lg text-[#0F172A] space-y-2 sm:space-y-4">
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-[#15803D] mt-1" />
                    Est et in pharetra magna adipiscing ornare aliquam.
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-[#15803D] mt-1" />
                    Tellus arcu sed consequat ac velit ut eu blandit.
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-[#15803D] mt-1" />
                    Ullamcorper ornare in et egestas dolor orci.
                  </li>
                </ol>
              </div>
              <button className="text-[#78350F] rounded-lg border-2 border-[#78350F] font-medium text-lg sm:text-xl p-3 sm:p-4 h-12 sm:h-14 w-36 sm:w-44 mx-auto sm:mx-0 block sm:inline-block">
                Sign up now
              </button>
            </div>

            <div className="bg-white shadow-[0px_0px_15px_0px_rgba(0,0,0,0.07)] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] rounded-[20px] overflow-hidden">
              <div className="flex space-x-2 px-2 pt-4">
                <div className="w-[10px] h-[10px] rounded-full bg-[#E11D48]"></div>
                <div className="w-[10px] h-[10px] rounded-full bg-[#FBBF24]"></div>
                <div className="w-[10px] h-[10px] rounded-full bg-[#22C55E]"></div>
              </div>
              <div className="flex justify-center p-4">
                <Image
                  src="/images/video.png"
                  alt="Video"
                  layout="intrinsic"
                  objectFit="contain"
                  width={520}
                  height={309}
                  className="rounded-b-[20px] w-full sm:w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <Slider />
      </div>

      <div className="bg-[#FFFBEB] min-h-screen px-4 sm:px-8 md:px-12 lg:px-16 text-center sm:text-left sm:mx-auto">
        <div className="font-bold text-[#0F172A] text-[32px] sm:text-[56px]">
          Grow your collection
        </div>
        <div className="text-base sm:text-lg text-[#0F172A] mb-6 sm:mb-10">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-12 space-y-10 sm:space-y-0">
          {/* Butonların olduğu div */}
          <div className="flex flex-col space-y-2 sm:space-y-4">
            <button className="flex items-center gap-2 bg-white py-2 px-4 rounded-lg shadow-[0px_0px_4px_0px_#00000012] hover:shadow-[0px_4px_6px_-1px_#0000001A] text-[#0F172A] font-medium text-xl">
              <FaSearch /> Bibendum tellus <FaArrowRight />
            </button>
            <button className="flex items-center gap-2 py-2 px-4 rounded-lg font-medium text-xl">
              <BiCheckShield /> Cras eget
            </button>
            <button className="flex items-center gap-2 py-2 px-4 rounded-lg font-medium text-xl">
              <IoRocketOutline /> Dolor pharetra
            </button>
            <button className="flex items-center gap-2 py-2 px-4 rounded-lg font-medium text-xl">
              <CgScreen /> Amet, fringilla
            </button>
            <button className="flex items-center gap-2 py-2 px-4 rounded-lg font-medium text-xl">
              <FaPodcast /> Amet nibh
            </button>
            <button className="flex items-center gap-2 py-2 px-4 rounded-lg font-medium text-xl">
              <GiSettingsKnobs /> Sed velit
            </button>
          </div>

          {/* Resimlerin olduğu div */}
          <div className="relative flex flex-col items-center space-y-4">
            {/* Image 3 Div */}
            <div className="relative bg-white shadow-[0px_0px_15px_0px_rgba(0,0,0,0.07)] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] rounded-[20px] overflow-hidden z-10">
              <div className="flex space-x-2 px-2 pt-4">
                <div className="w-[10px] h-[10px] rounded-full bg-[#E11D48]"></div>
                <div className="w-[10px] h-[10px] rounded-full bg-[#FBBF24]"></div>
                <div className="w-[10px] h-[10px] rounded-full bg-[#22C55E]"></div>
              </div>
              <div className="flex justify-center p-4">
                <Image
                  src="/images/image3.png"
                  alt="Image3"
                  layout="intrinsic"
                  objectFit="contain"
                  width={520}
                  height={309}
                  className="rounded-b-[20px] w-full sm:w-auto"
                />
              </div>
            </div>

            {/* Image 4 Div */}
            <div className="absolute top-32 left-24 bg-white shadow-[0px_0px_15px_0px_rgba(0,0,0,0.07)] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] rounded-[20px] overflow-hidden z-20">
              <div className="flex space-x-2 px-2 pt-4">
                <div className="w-[10px] h-[10px] rounded-full bg-[#E11D48]"></div>
                <div className="w-[10px] h-[10px] rounded-full bg-[#FBBF24]"></div>
                <div className="w-[10px] h-[10px] rounded-full bg-[#22C55E]"></div>
              </div>
              <div className="flex justify-center p-4">
                <Image
                  src="/images/image4.png"
                  alt="Image4"
                  layout="intrinsic"
                  objectFit="contain"
                  width={520}
                  height={309}
                  className="rounded-b-[20px] w-full sm:w-auto"
                />
              </div>
            </div>

            {/* Image 5 */}
            <Image
              src="/images/image5.png"
              alt="Image5"
              layout="intrinsic"
              objectFit="contain"
              width={256}
              height={286}
              className="absolute top-48 rounded-b-[20px] w-full sm:w-auto z-30"
              style={{ left: "32rem" }}
            />
          </div>
        </div>
      </div>
      <div>
        <MapSection />
      </div>
    </div>
  );
}
