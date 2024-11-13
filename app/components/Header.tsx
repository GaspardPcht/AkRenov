"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface HeaderProps {
  readonly scrollToAbout: () => void;
  readonly scrollToWork: () => void;
  readonly scrollToContact: () => void;
}

export default function Header({
  scrollToAbout,
  scrollToWork,
  scrollToContact,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-[#323232] h-24 flex items-center justify-between w-full px-4">
      <div
        className="flex items-center cursor-pointer text-left ml-4"
        onClick={scrollToTop}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image src="/assets/logo.png" alt="Logo AkRenov" width={150} height={150} />
        </motion.div>
      </div>

      {/* Burger Icon for Mobile and Tablet */}
      <div className="lg:hidden flex items-center mr-4">
        <button onClick={toggleMenu} className="focus:outline-none">
          <span className="text-[#D9D9D9] text-3xl">&#9776;</span>
        </button>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex gap-3 lg:gap-10 items-center flex-1 font-poppins justify-end lg:mr-10 md:mr-4">
        {["QUI SOMMES NOUS ?", "NOS PRESTATIONS", "PORTFOLIO", "CONTACT"].map(
          (item, index) => (
            <motion.div
              key={item}
              className="relative cursor-pointer w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#FCD807] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"
              onClick={
                item === "QUI SOMMES NOUS ?"
                  ? scrollToAbout
                  : item === "NOS PRESTATIONS"
                  ? scrollToWork
                  : scrollToContact
              }
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <span className="text-lg lg:text-2xl font-extrabold opacity-50 text-[#D9D9D9] hover:opacity-100">
                {item}
              </span>
            </motion.div>
          )
        )}
      </div>

      {/* Mobile and Tablet Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#323232] flex flex-col items-center justify-center z-20">
          <button onClick={toggleMenu} className="absolute top-6 right-6 text-3xl text-[#D9D9D9]">
            &#10005;
          </button>
          {["QUI SOMMES NOUS ?", "NOS PRESTATIONS", "PORTFOLIO", "CONTACT"].map(
            (item, index) => (
              <motion.div
                key={item}
                className="text-center py-2 text-2xl font-bold text-[#D9D9D9] hover:text-[#FCD807] cursor-pointer"
                onClick={() => {
                  toggleMenu();
                  if (item === "QUI SOMMES NOUS ?") {
                    scrollToAbout();
                  } else if (item === "NOS PRESTATIONS") {
                    scrollToWork();
                  } else {
                    scrollToContact();
                  }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {item}
              </motion.div>
            )
          )}
        </div>
      )}
    </header>
  );
}