'use client';
import React, { useRef } from 'react';
import Header from './components/Header';
import { SwipeCarousel } from './components/Carousel';
import ContactInfo from './components/ContactCards';

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
        <section className="flex justify-center items-center mt-10 md:text-[14px] lg:text-xl pt-[96px] md:mb-3 lg:mb-0 ">
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
        </section>

        {/* Swipe Carousel Section */}
        <section className="flex justify-center ">
          <SwipeCarousel />
        </section>
      </main>
    </div>
  );
}
