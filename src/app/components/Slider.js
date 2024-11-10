"use client";
import { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Zoomer",
    title: "Helen Journey",
    comment: "Lorem ipsum dolor sit amet...",
  },
  {
    name: "SHELLS",
    title: "Helen Johns",
    comment: "Aliquet ridiculus mi porta habitant vulputate...",
  },
  {
    name: "ArtVenue",
    title: "David Check",
    comment: "A augue egestas sed pharetra habitasse mauris...",
  },
  {
    name: "NextCustomer",
    title: "John Doe",
    comment: "Morbi nisl vivamus enim quis...",
  },
  {
    name: "Zoomer",
    title: "Helen Journey",
    comment: "Lorem ipsum dolor sit amet...",
  },
  {
    name: "SHELLS",
    title: "Helen Johns",
    comment: "Aliquet ridiculus mi porta habitant vulputate...",
  },
  {
    name: "ArtVenue",
    title: "David Check",
    comment: "A augue egestas sed pharetra habitasse mauris...",
  },
  {
    name: "NextCustomer",
    title: "John Doe",
    comment: "Morbi nisl vivamus enim quis...",
  },
];

const Slider = () => {
  const sliderRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 300; // Sağa kaydır
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 300; // Sola kaydır
    }
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX); // Başlangıç noktasını kaydet
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const moveX = e.touches[0].clientX;
    const diff = startX - moveX;

    if (sliderRef.current) {
      sliderRef.current.scrollLeft += diff; // Kaydırma işlemini yap
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false); // Dokunma sona erdiğinde kaydırma işlemini sonlandır
  };

  // Fare ile kaydırma için ekleme (mouse events)
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX); // Başlangıç noktasını kaydet
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const moveX = e.clientX;
    const diff = startX - moveX;

    if (sliderRef.current) {
      sliderRef.current.scrollLeft += diff; // Kaydırma işlemini yap
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false); // Fareyi bıraktığında kaydırma işlemini sonlandır
  };

  return (
    <div className="relative w-full py-8 bg-[#FFFBEB]">
      <div className="flex flex-col md:flex-row w-full items-center justify-between space-x-4 mb-6 sm:px-8 md:px-12 lg:px-16">
        <h2 className="font-bold text-[#0F172A] sm:text-[56px] text-[32px]">Because they love us</h2>
        <div className="flex gap-2 items-center">
          {/* Sol Ok Butonu (Mobilde Gizli) */}
          <button
            onClick={handlePrev}
            className="w-12 h-12 p-2 rounded-full border-[#78350F] border-2 text-white shadow-md flex items-center justify-center md:block hidden"
          >
            <FaArrowLeft className="text-[#78350F]" />
          </button>
          {/* Sağ Ok Butonu (Mobilde Gizli) */}
          <button
            onClick={handleNext}
            className="w-12 h-12 p-2 rounded-full border-[#78350F] border-2 text-white shadow-md flex items-center justify-center md:block hidden"
          >
            <FaArrowRight className="text-[#78350F]" />
          </button>
        </div>
      </div>

      {/* Slider Kartları */}
      <div className="px-4 md:px-8">
      <div
        ref={sliderRef}
        className="flex space-x-4 overflow-x-hidden scroll-smooth bg-[#FDE68A] h-[420px] px-6 py-8"
        onTouchStart={handleTouchStart} // Dokunma başlarsa
        onTouchMove={handleTouchMove} // Dokunma hareketi yapılırsa
        onTouchEnd={handleTouchEnd} // Dokunma bitince
        onMouseDown={handleMouseDown} // Fareyle başlatmak için
        onMouseMove={handleMouseMove} // Fare hareketi ile kaydırma
        onMouseUp={handleMouseUp} // Fareyi bırakınca kaydırmayı durdur
        onMouseLeave={handleMouseUp} // Fareyi dışarıya çıkarsa kaydırmayı durdur
      >
        {testimonials.map((testimonial, index) => (
          <div key={`${testimonial.name}-${index}`}>
            <div className="w-[350px] h-[400px] p-6 bg-white rounded-lg shadow-md">
              <div className="font-semibold text-lg mb-2">{testimonial.name}</div>
              <div className="text-gray-600 mb-4">{testimonial.comment}</div>
              <div className="text-sm text-gray-500">{testimonial.title}</div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Slider;
