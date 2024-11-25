import { motion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react'; // Import useCallback
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';

interface HeaderProps {
  scrollToAbout: () => void;
  scrollToWork: () => void;
  scrollToPresta: () => void;
  scrollToContact: () => void;
  className: string;
}

export default function Header({
  scrollToAbout,
  scrollToWork,
  scrollToPresta,
  scrollToContact,
  className,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Use useCallback to memoize the handleScroll function
  const handleScroll = useCallback(() => {
    if (window.scrollY === 0) {
      // Always show header when at the top of the page
      setShowHeader(true);
    } else if (window.scrollY > lastScrollY) {
      // Scrolling down
      setShowHeader(false);
    } else {
      // Scrolling up
      setShowHeader(true);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]); // Add lastScrollY as a dependency

  useEffect(() => {
    setLastScrollY(window.scrollY); // Set initial scroll position
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]); // Add handleScroll as a dependency

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-10 bg-[#323232] h-24 flex items-center justify-between w-full px-4 transition-opacity duration-300 ${
        showHeader ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      <div
        className="flex items-center cursor-pointer text-left ml-4"
        onClick={scrollToTop}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-white font-bold text-xl">
            <Image
              src="/assets/logo.png"
              alt="logo Akrenov"
              width={100} // specify the width of the image
              height={100}
              className="w-24 h-auto"
            />
          </div>
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
        {['QUI SOMMES NOUS ?', 'PORTFOLIO', 'NOS PRESTATIONS', 'CONTACT'].map(
          (item, index) => (
            <motion.div
            key={item}
            className="relative cursor-pointer w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#FCD807] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"
            onClick={
              item === 'QUI SOMMES NOUS ?'
                ? scrollToAbout
                : item === 'PORTFOLIO'
                ? scrollToWork
                : item === 'NOS PRESTATIONS'
                ? scrollToPresta
                : scrollToContact
            }
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <span className="text-lg lg:text-2xl font-extralight opacity-50 text-[#D9D9D9] hover:opacity-100">
              {item}
            </span>
          </motion.div>
          )
        )}
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#323232] z-20 flex items-center justify-center">
          {/* Conteneur central gris (animé) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-4/5 max-w-md p-6 flex flex-col items-center"
          >
            {/* Liens du menu */}
            {[
              'QUI SOMMES NOUS ?',
              'PORTFOLIO',
              'NOS PRESTATIONS',
              'CONTACT',
            ].map((item, index) => (
              <motion.div
                key={item}
                className="text-center py-2 text-xl font-bold text-[#EAEAEA] hover:text-[#FCD807] cursor-pointer"
                onClick={() => {
                  toggleMenu();
                  if (item === 'QUI SOMMES NOUS ?') {
                    scrollToAbout();
                  } else if (item === 'PORTFOLIO') {
                    scrollToWork();
                  } else if (item === 'NOS PRESTATIONS') {
                    scrollToPresta();
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
            ))}
          </motion.div>

          <div
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-3xl text-[#EAEAEA] focus:outline-none"
          >
            <IoMdClose />
          </div>
        </div>
      )}
    </header>
  );
}
