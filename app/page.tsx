'use client'
import React, { useRef, useState, useEffect } from 'react';
import Header from './components/Header';
import { SwipeCarousel } from './components/Carousel';
import ContactInfo from './components/ContactCards';
import About from './About/page';
import { IoIosArrowDropdown } from 'react-icons/io';
import Portfolio from './Portfolio/page';

type Section = 'QUI SOMMES NOUS ?' | 'PORTFOLIO' | 'CONTACT' | null;

export default function Home() {
  const sectionsRef = {
    QUISOMMESNOUS: useRef<HTMLDivElement>(null),
    PORTFOLIO: useRef<HTMLDivElement>(null),
    CONTACT: useRef<HTMLDivElement>(null),
  };

  const [visibleSection, setVisibleSection] = useState<Section>(null);
  const [isClient, setIsClient] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true); // Etat pour gérer la visibilité du header
  const [lastScrollY, setLastScrollY] = useState(0); // Pour suivre la dernière position de défilement

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
      const scrollPosition = window.scrollY;

      // Cache le header lorsque l'utilisateur descend
      if (scrollPosition > 50 && scrollPosition > lastScrollY) {
        setIsHeaderVisible(false);
      } else if (scrollPosition < lastScrollY) {
        setIsHeaderVisible(true); // Réaffiche le header lors du défilement vers le haut
      }

      // Détection de la section visible
      const visiblePosition = window.scrollY + window.innerHeight / 4;
      let currentSection: Section = null;
      Object.entries(sectionsRef).forEach(([key, ref]) => {
        if (
          ref.current &&
          ref.current.offsetTop <= visiblePosition &&
          ref.current.offsetTop + ref.current.offsetHeight > visiblePosition
        ) {
          currentSection = key as Section;
        }
      });

      setVisibleSection(currentSection);
      setLastScrollY(scrollPosition); // Mise à jour de la dernière position de défilement
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appel initial pour définir la section visible

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClient, lastScrollY]); // Ajout de lastScrollY comme dépendance

  return (
    <div>
      <div className="relative h-screen">
        {/* Header qui disparaît avec transition */}
        {isClient && (
          <Header
            scrollToAbout={() => scrollToSection('QUISOMMESNOUS')}
            scrollToWork={() => scrollToSection('PORTFOLIO')}
            scrollToContact={() => scrollToSection('CONTACT')}
            // Applique la classe conditionnelle en fonction de isHeaderVisible
            className={isHeaderVisible ? 'header-visible' : 'header-hidden'}
          />
        )}

        {/* Corps du contenu */}
        <main className="flex justify-center items-center mt-10 md:text-[14px] lg:text-xl pt-24 md:mb-3 lg:mb-0">
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

        {/* Carousel Section */}
        <section className="flex justify-center mb-10">
          <SwipeCarousel />
        </section>

        {/* Scroll to About Button */}
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
      <div
        ref={sectionsRef.QUISOMMESNOUS}
        className={visibleSection === 'QUI SOMMES NOUS ?' ? 'bg-[#EAEAEA]' : 'bg-[#EAEAEA]'}
      >
        <About />
      </div>
      <div
        ref={sectionsRef.PORTFOLIO}
        className={visibleSection === 'PORTFOLIO' ? 'bg-[#EAEAEA]' : 'bg-[#EAEAEA]'}
      >
        <Portfolio />
      </div>
    </div>
  );
}