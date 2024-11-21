import Image from 'next/image';
import React from 'react';

interface CardsForPrestaProps {
  imageSrc: string; 
  text: string;

}

const CardsForPresta: React.FC<CardsForPrestaProps> = ({ imageSrc, text = '' }) => {
  return (
    <div className="relative w-64 h-64 bg-gray-200 rounded-md overflow-hidden shadow-lg">
      <Image
        src={imageSrc}
        alt={text}
        layout="fill" // Remplit entièrement le conteneur parent
        objectFit="cover" // Adapte l'image au conteneur en conservant le ratio
        quality={80} // Optimise la qualité de l'image
        priority 
      />
      <div className="absolute top-2 left-2 bg-black bg-opacity-50  text-white font-roboto font-bold px-2 py-1 rounded">
        {text}
      </div>

      {/* Image optimisée avec next/image */}
    </div>
  );
};

export default CardsForPresta;