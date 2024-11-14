'use client';
import React, { useRef, useState, useEffect } from 'react';
import Header from './components/Header';
import { SwipeCarousel } from './components/Carousel';
import ContactInfo from './components/ContactCards';
import About from './About/page';
import { IoIosArrowDropdown } from "react-icons/io";

type Section = 'ABOUT' | 'WORK' | 'CONTACT' | null;

export default function Home() {
  const sectionsRef = {
    ABOUT: useRef<HTMLDivElement>(null),
    WORK: useRef<HTMLDivElement>(null),
    CONTACT: useRef<HTMLDivElement>(null),
  };

  const [visibleSection, setVisibleSection] = useState<Section>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  const scrollToSection = (section: keyof typeof sectionsRef) => {
    const ref = sectionsRef[section].current;
    if (ref) {
      window.scrollTo({
        top: ref.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 4;

      let currentSection: Section = null;
      Object.entries(sectionsRef).forEach(([key, ref]) => {
        if (
          ref.current &&
          ref.current.offsetTop <= scrollPosition &&
          ref.current.offsetTop + ref.current.offsetHeight > scrollPosition
        ) {
          currentSection = key as Section;
        }
      });

      setVisibleSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appel initial pour définir la section visible

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClient]);

  return (
    <div>
      <div className="relative min-h-screen">
        {/* Main Text */}
        <div className="absolute left-[3vw] md:left-[3vw] lg:left-[2vw] top-[50%] transform -translate-y-1/2 -translate-x-1/2 pl-2">
          <span className="flex text-[64px] md:text-[96px] opacity-20 font-bold font-khula text-[#EAEAEA] stroke-black stroke-1 rotate-90">
            GASPARDPCHT
          </span>
        </div>

        {/* Always Rendered Header */}
        {isClient && (
          <Header
            scrollToAbout={() => scrollToSection('ABOUT')}
            scrollToWork={() => scrollToSection('WORK')}
            scrollToContact={() => scrollToSection('CONTACT')}
          />
        )}

        {/* Main Content */}
        <main className="flex justify-center items-center mt-10 md:text-[14px] lg:text-xl pt-[96px] md:mb-3 lg:mb-0">
          <ContactInfo
            location="Plouescat"
            phone="06 71 11 89 46"
            email="contact@akrenov.fr"
          />
          <ContactInfo
            location="Louannec"
            phone="06 95 97 13 20​"
            email="contact@akrenov.fr"
          />
        </main>

        {/* Swipe Carousel Section */}
        <section className="flex justify-center mb-10">
          <SwipeCarousel />
        </section>

        {/* Scroll to About Button */}
        <button
          onClick={() => scrollToSection('ABOUT')}
          className="flex flex-col justify-center items-center absolute bottom-[5vh] right-[45%] md:right-[50%] transform -translate-x-1/2 cursor-pointer animate-bounce bg-transparent border-none hover:bg-transparent text-[#323232] md:hidden"
          aria-label="Scroll to About section"
        >
          <div className="text-5xl">
            <IoIosArrowDropdown />
          </div>
        </button>
      </div>

      {/* About Section */}
      <div
        ref={sectionsRef.ABOUT}
        className={visibleSection === 'ABOUT' ? 'bg-gray-100' : ''}
      >
        <About />
      </div>

      {/* Work Section */}
      {/* <div ref={sectionsRef.WORK} className="md:mt-0">
        <Work />
      </div> */}

      {/* Contact Section */}
      {/* <div ref={sectionsRef.CONTACT}>
        <Contact />
      </div> */}
    </div>
  );
}
