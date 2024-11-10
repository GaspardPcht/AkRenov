'use client';
import React from 'react';
import Header from './components/Header';
import { useRef } from 'react';
import { SwipeCarousel } from './components/Carousel';
import HoverDevCards from './components/HoverCards';

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
      <Header
        scrollToAbout={() => scrollToSection('ABOUT')}
        scrollToWork={() => scrollToSection('WORK')}
        scrollToContact={() => scrollToSection('CONTACT')}
      />
      <div style={{ paddingTop: '100px' }}>
        <HoverDevCards />
      </div>

      {/* Ajoute un padding-top pour compenser la hauteur du header */}
      <div style={{ paddingTop: '30px' }}>
        <SwipeCarousel />
      </div>
    </div>
  );
}
