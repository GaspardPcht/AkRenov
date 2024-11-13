'use client';
import React, { useRef } from 'react';
import Header from './components/Header';
import { SwipeCarousel } from './components/Carousel';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

export default function Home() {
  const sectionsRef = {
    ABOUT: useRef<HTMLDivElement>(null),
    WORK: useRef<HTMLDivElement>(null),
    CONTACT: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: keyof typeof sectionsRef) => {
    const ref = sectionsRef[section].current;
    if (ref) {
      window.scrollTo({
        top: ref.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      {/* Header with scroll functions */}
      <Header
        scrollToAbout={() => scrollToSection('ABOUT')}
        scrollToWork={() => scrollToSection('WORK')}
        scrollToContact={() => scrollToSection('CONTACT')}
      />

      {/* Main content */}
      <main>
        <section className="flex justify-center items-center mt-5 md:text-[14px] lg:text-xl pt-[96px]">
          {/* First section */}
          <div className="justify-center items-center hidden lg:flex md:w-1/2">
            <FaMapMarkerAlt color="black" />
            <p className="text-black mr-7 ml-1">Plouescat</p>
            <FaPhoneAlt color="black" />
            <p className="text-black mr-7 ml-1">06 71 11 89 46</p>
            <IoIosMail color="black" />
            <p className="text-black mr-7 ml-1">contact@akrenov.fr</p>
          </div>

          {/* Second section */}
          <div className="justify-center items-center hidden lg:flex md:w-1/2">
            <FaMapMarkerAlt color="black" />
            <p className="text-black mr-7 ml-1">Louannec</p>
            <FaPhoneAlt color="black" />
            <p className="text-black mr-7 ml-1">06 95 97 13 20​</p>
            <IoIosMail color="black" />
            <p className="text-black mr-7 ml-1">contact@akrenov.fr</p>
          </div>
        </section>

        {/* Swipe Carousel Section */}
        <section className="section-padding">
          <SwipeCarousel />
        </section>
      </main>
    </div>
  );
}