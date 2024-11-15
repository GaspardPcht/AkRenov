'use client';
import React, { useRef, useState, useEffect } from 'react';
import Header from './components/Header';
import { SwipeCarousel } from './components/Carousel';
import ContactInfo from './components/ContactCards';
import About from './About/page';
import { IoIosArrowDropdown } from 'react-icons/io';

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
        className={visibleSection === 'ABOUT' ? 'bg-[#EAEAEA]' : 'bg-[#EAEAEA]'}
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


