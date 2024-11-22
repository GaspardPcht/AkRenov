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
        fill // Remplace layout="fill"
        style={{ objectFit: 'cover' }} // Remplace objectFit="cover"
        quality={80}
        priority
        sizes="(max-width: 768px) 100vw, 50vw" // Exemple de tailles pour les petits et grands écrans
      />
      <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white font-roboto font-bold px-2 py-1 rounded">
        {text}
      </div>
    </div>
  );
};

export default CardsForPresta;