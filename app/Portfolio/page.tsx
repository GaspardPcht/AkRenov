import React from 'react';
import { CarouselBeforeAfter } from '../components/CarouselBeforeAfter';

const Portfolio = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Header */}
      <div className="flex justify-center w-full">
        <h1 className="mt-10 py-10 text-2xl md:text-3xl font-roboto font-bold text-black">
          PORTFOLIO
        </h1>
      </div>
      <CarouselBeforeAfter />
    </div>
  );
};

export default Portfolio;
