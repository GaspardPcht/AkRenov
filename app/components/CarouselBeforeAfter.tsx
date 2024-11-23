'use client'
import React, { Dispatch, SetStateAction, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const imgPairs = [
  ['/assets/extension_after.png', '/assets/extension.png'],
  ['/assets/piscine_after.png', '/assets/piscineFlou.png'],
  ['/assets/veranda_after.png', '/assets/Veranda2.png'],
];

const SPRING_OPTIONS = {
  type: 'spring',
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const CarouselBeforeAfter = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const handlePrev = () => {
    if (imgIndex > 0) {
      setImgIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (imgIndex < imgPairs.length - 1) {
      setImgIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="relative overflow-hidden bg-[#EAEAEA] w-[90%] lg:mt-10">
      <motion.div
        animate={{
          translateX: `-${imgIndex * 100}%`, // Défilement horizontal
        }}
        transition={SPRING_OPTIONS}
        className="flex flex-row cursor-grab items-center"
      >
        {imgPairs.map((pair, idx) => (
          <div
            key={idx}
            className="flex flex-col lg:flex-row w-full shrink-0 gap-4 justify-center items-center"
          >
            {pair.map((imgSrc, imgIdx) => (
              <motion.div
                key={imgIdx}
                style={{
                  backgroundImage: `url(${imgSrc})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={SPRING_OPTIONS}
                className="relative w-[80%] lg:w-[45%] lg:h-[70vh] h-[40vh] shrink-0 rounded-md"
              />
            ))}
          </div>
        ))}
      </motion.div>

      {/* Flèches de navigation */}
      <button
        onClick={handlePrev}
        className="absolute left-0 lg:top-1/2 top-[41vh] -translate-y-1/2 text-black hover:text-[#FCD807] transition"
      >
        <FaArrowAltCircleLeft size={35} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-[41vh] lg:top-1/2 -translate-y-1/2 text-black hover:text-[#FCD807] transition"
      >
        <FaArrowAltCircleRight size={35} />
      </button>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <GradientEdges />
    </div>
  );
};

const Dots = ({
  imgIndex,
  setImgIndex,
}: {
  imgIndex: number;
  setImgIndex: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {imgPairs.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setImgIndex(idx)}
          className={`h-3 w-3 rounded-full transition-colors ${
            imgIndex === idx ? 'bg-neutral-50' : 'bg-neutral-500'
          }`}
        />
      ))}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px]" />
    </>
  );
};