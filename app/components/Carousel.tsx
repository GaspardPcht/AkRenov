import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const imgs = [
  "/assets/piscine_after.png",
  "/assets/piscine.png",
  "/assets/Veranda_after.png",
  "/assets/Veranda2.png",
  "/assets/extension_after.png",
  "/assets/extension.png",
  "/assets/cuisine_2.png",
  "/assets/cuisine_3.png",
  "/assets/plafond_4.png",
  "/assets/salle_de_bain_1.png",
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  // Effet pour le défilement automatique
  useEffect(() => {
    const intervalRef = setInterval(() => {
      setImgIndex((prevIndex) => {
        if (prevIndex + 2 >= imgs.length) {
          return 0; // Revenir au début si on est à la fin
        }
        return prevIndex + 2; // Défilement par 2 images à la fois
      });
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef); // Nettoyage
  }, []);

  // Gestion du drag (glissement manuel)
  const onDragEnd = () => {
    const x = dragX.get();

    // On vérifie si l'on a assez glissé pour passer à la prochaine paire d'images
    if (x <= -DRAG_BUFFER && imgIndex + 2 < imgs.length) {
      setImgIndex((prevIndex) => prevIndex + 2);
    } else if (x >= DRAG_BUFFER && imgIndex - 2 >= 0) {
      setImgIndex((prevIndex) => prevIndex - 2);
    }
  };

  return (
    <div className="relative overflow-hidden bg-[#EAEAEA] lg:mt-10">
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

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <GradientEdges />
    </div>
  );
};

const Images = ({ imgIndex }: { imgIndex: number }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex <= idx && idx < imgIndex + 2 ? 0.95 : 1, // Échelle de l'image active et suivante
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-[100%] h-[70vh] lg:h-[70vh] shrink-0 rounded-md bg-[#EAEAEA] "
          />
        );
      })}
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
  // Calculer combien de boutons on doit afficher en fonction du nombre d'images
  const buttonCount = Math.ceil(imgs.length / 2); // Une paire d'images par bouton

  const handleDotClick = (index: number) => {
    setImgIndex(index * 2); // Calculer l'index du premier élément de la paire
  };

  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {Array.from({ length: buttonCount }).map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)} // On passe à la paire suivante
            className={`h-3 w-3 rounded-full transition-colors ${
              imgIndex / 2 === idx ? "bg-neutral-50" : "bg-neutral-500"
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
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] " />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px]" />
    </>
  );
};