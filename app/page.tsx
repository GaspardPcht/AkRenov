'use client';
import React from 'react';
import Header from './components/Header';
import { useRef } from 'react';
import { SwipeCarousel } from './components/Carousel';

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
        behavior: "smooth",
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

      {/* Ajoute un padding-top pour compenser la hauteur du header */}
      <div style={{ paddingTop: '96px' }}>
        <SwipeCarousel />
      </div>

      {/* Sections avec des refs */}
      <div ref={sectionsRef.ABOUT} style={{ height: '100vh', backgroundColor: '#f0f0f0' }}>
        <h2>About Section</h2>
      </div>
      
      <div ref={sectionsRef.WORK} style={{ height: '100vh', backgroundColor: '#e0e0e0' }}>
        <h2>Work Section</h2>
      </div>
      
      <div ref={sectionsRef.CONTACT} style={{ height: '100vh', backgroundColor: '#d0d0d0' }}>
        <h2>Contact Section</h2>
      </div>
    </div>
  );
}