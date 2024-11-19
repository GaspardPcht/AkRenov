import React, { Dispatch, SetStateAction, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const imgs = [
  '/assets/verandaFlou.png',
  '/assets/piscineFlou.png',
  '/assets/giteFlou.png',
  '/assets/cuisineFlou.png',
  '/assets/toiletteFlou.png',
];

const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: 'spring',
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const CarouselBeforeAfter = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  // Gestion du glissement manuel
  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex + 1 < imgs.length) {
      setImgIndex((prevIndex) => prevIndex + 1);
    } else if (x >= DRAG_BUFFER && imgIndex - 1 >= 0) {
      setImgIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Fonction pour naviguer avec les flèches
  const handlePrev = () => {
    if (imgIndex > 0) setImgIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    if (imgIndex < imgs.length - 1) setImgIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="relative overflow-hidden bg-[#EAEAEA] w-[90%] lg:mt-10">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`, // Défilement à 50% de largeur pour chaque image
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      {/* Flèches de navigation */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-3 bg-black/50 rounded-full text-white hover:bg-black transition"
      >
        &larr;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-black/50 rounded-full text-white hover:bg-black transition"
      >
        &rarr;
      </button>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <GradientEdges />
    </div>
  );
};

const Images = ({ imgIndex }: { imgIndex: number }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => (
        <motion.div
          key={idx}
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          animate={{
            scale: imgIndex === idx ? 1 : 0.95,
          }}
          transition={SPRING_OPTIONS}
          className="relative aspect-video w-[50%] h-[70vh] lg:h-[70vh] shrink-0 rounded-md bg-[#EAEAEA]"
        />
      ))}
    </>
  );
};

const Dots = ({
  imgIndex,
  setImgIndex,
}: {
  imgIndex: number;
  setImgIndex: Dispatch<SetStateAction<number>>;
}) => {
  const buttonCount = imgs.length;

  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {Array.from({ length: buttonCount }).map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              imgIndex === idx ? 'bg-neutral-50' : 'bg-neutral-500'
            }`}
          />
        );
      })}
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