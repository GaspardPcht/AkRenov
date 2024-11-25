'use client'
import React, { useRef, useState, useEffect } from 'react';
import Header from './components/Header';
import { SwipeCarousel } from './components/Carousel';
import ContactInfo from './components/ContactCards';
import About from './About/page';
import { IoIosArrowDropdown } from 'react-icons/io';
import Portfolio from './Portfolio/page';
import Prestation from './Prestations/page';
import Contact from './Contact/page';


let scrollTimeout: number;

export default function Home() {
  const sectionsRef = {
    QUISOMMESNOUS: useRef<HTMLDivElement>(null),
    PORTFOLIO: useRef<HTMLDivElement>(null),
    PRESTATIONS: useRef<HTMLDivElement>(null),
    CONTACT: useRef<HTMLDivElement>(null),
  };

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    const handleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = window.setTimeout(() => {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 50 && scrollPosition > lastScrollY) {
          setIsHeaderVisible(false);
        } else if (scrollPosition < lastScrollY) {
          setIsHeaderVisible(true);
        }

        setLastScrollY(scrollPosition);
      }, 50); // Délai pour limiter la fréquence de mise à jour
    };

    const handleTouchStart = () => {
      setIsHeaderVisible(true); // Toujours montrer le header au début du scroll
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, [lastScrollY]);

  return (
    <div>
      <div className="relative h-screen">
        <Header
          scrollToAbout={() => scrollToSection('QUISOMMESNOUS')}
          scrollToWork={() => scrollToSection('PORTFOLIO')}
          scrollToPresta={() => scrollToSection('PRESTATIONS')}
          scrollToContact={() => scrollToSection('CONTACT')}
          className={isHeaderVisible ? 'header-visible' : 'header-hidden'}
        />
        <main className="flex justify-center items-center mt-10 md:text-[14px] lg:text-xl pt-24 md:mb-3 lg:mb-0">
          <ContactInfo location="Plouescat" phone="06 71 11 89 46" email="contact@akrenov.fr" />
          <ContactInfo location="Louannec" phone="06 95 97 13 20​" email="contact@akrenov.fr" />
        </main>
        <section className="flex justify-center mb-10">
          <SwipeCarousel />
        </section>
        <button
          onClick={() => scrollToSection('QUISOMMESNOUS')}
          className="flex flex-col justify-center items-center absolute bottom-[5vh] right-[45%] md:right-[50%] transform -translate-x-1/2 cursor-pointer animate-bounce bg-transparent border-none hover:bg-transparent text-[#323232] md:hidden"
          aria-label="Scroll to About section"
        >
          <div className="text-5xl">
            <IoIosArrowDropdown />
          </div>
        </button>
      </div>

      {/* Sections */}
      <div ref={sectionsRef.QUISOMMESNOUS} className="bg-[#EAEAEA]">
        <About />
      </div>
      <div ref={sectionsRef.PORTFOLIO} className="bg-[#EAEAEA]">
        <Portfolio />
      </div>
      <div ref={sectionsRef.PRESTATIONS} className="bg-[#EAEAEA]">
        <Prestation />
      </div>
      <div ref={sectionsRef.CONTACT} className="bg-[#EAEAEA]">
        <Contact />
      </div>
    </div>
  );
}
