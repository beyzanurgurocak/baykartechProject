// components/Footer.js
import Link from "next/link";
import {
  GrFacebookOption,
  GrYoutube,
  GrTwitter,
  GrInstagram,
  GrLinkedin,
  GrApple,
} from "react-icons/gr";
import { FaGooglePlay } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-[#E2E8F0] py-10">
      <div className="container mx-auto px-5 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* İlk Sütun - Product */}
        <div>
          <h3 className="text-white text-lg font-medium mb-4">Product</h3>
          <ul>
            <li>
              <Link href="#" className="text-base py-2 block">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="text-base py-2 block">
                Overview
              </Link>
            </li>
            <li>
              <Link href="#" className="text-base py-2 block">
                Browse
              </Link>
            </li>
            <li>
              <Link href="#" className="text-base py-2 block">
                Accessibility
              </Link>
            </li>
            <li>
              <Link href="#" className="text-base py-2 block">
                Five
              </Link>
            </li>
          </ul>
        </div>

        {/* İkinci Sütun - Solutions */}
        <div>
          <h3 className="text-white text-lg font-medium mb-4">Solutions</h3>
          <ul>
            <li>
              <Link href="#" className="text-base py-2 block">
                Brainstorming
              </Link>
            </li>
            <li>
              <Link href="#" className="text-base py-2 block">
                Ideation
              </Link>
            </li>
            <li>
              <Link href="#" className="text-base py-2 block">
                Wireframing
              </Link>
            </li>
            <li>
              <Link href="#" className="text-base py-2 block">
                Research
              </Link>
            </li>
            <li>
              <Link href="#" className="text-base py-2 block">
                Design
              </Link>
            </li>
          </ul>
        </div>

        {/* Üçüncü Sütun - Support */}
        <div>
          <h3 className="text-white text-lg font-medium mb-4">Support</h3>
          <ul>
            <li>
              <Link href="#" className="text-base py-2 block">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-base py-2 block">
                Developers
              </Link>
            </li>
            <li>
              <Link href="#" className="text-base py-2 block">
                Documentation
              </Link>
            </li>
            <li>
              <Link href="#" className="text-base py-2 block">
                Integrations
              </Link>
            </li>
            <li>
              <Link href="#" className="text-base py-2 block">
                Reports
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-white text-lg font-medium mb-4">Get the App</h3>
          <div className="flex flex-col gap-4">
      {/* App Store Button */}
      <button className="flex items-center justify-center space-x-2 bg-black text-white w-[120px] h-[40px] border border-white rounded-lg">
        <GrApple className="text-xl" />
        <div className="text-left leading-none">
          <span className="block text-[10px]">Download on the</span>
          <span className="block text-sm font-semibold">App Store</span>
        </div>
      </button>
      {/* Google Play Button */}
      <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 border w-[135px] h-[40px] border-white rounded-lg">
        <FaGooglePlay className="text-2xl" />
        <div className="flex flex-col text-left">
          <span className="text-[8px] font-normal">GET IT ON</span>
          <span className="text-xs font-semibold">Google Play</span>
        </div>
      </button>
    </div>

          <h3 className="text-white text-lg font-medium mt-6 text-center md:text-left">Follow Us</h3>
          <div className="flex gap-4 mt-2 justify-center md:justify-start">
            <Link href="#">
              <GrYoutube className="w-6 h-6" />
            </Link>
            <Link href="#">
              <GrFacebookOption className="w-6 h-6" />
            </Link>
            <Link href="#">
              <GrTwitter className="w-6 h-6" />
            </Link>
            <Link href="#">
              <GrInstagram className="w-6 h-6" />
            </Link>
            <Link href="#">
              <GrLinkedin className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 px-5 md:px-20 text-sm flex flex-col md:flex-row justify-between items-center">
        <p className="mb-3 md:mb-0">Collers © 2023. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white">
            Terms
          </Link>
          <Link href="#" className="hover:text-white">
            Privacy
          </Link>
          <Link href="#" className="hover:text-white">
            Contact
          </Link>
          <Link href="#" className="hover:text-white flex items-center">
           <TbWorld className="size-6"/>
            EN
          </Link>
        </div>
      </div>
    </footer>
  );
}
