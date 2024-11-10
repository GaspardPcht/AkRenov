"use client";
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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-black backdrop-blur-[2px] h-24 flex items-center justify-between w-full">
      <div
        className="flex items-center justify-start cursor-pointer text-left ml-10"
        onClick={scrollToTop}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image src="/assets/Logo AkRenov.png" alt="Logo AkRenov" width={150} height={150} />
        </motion.div>
      </div>

      {/* Navigation Links */}
      <div className="sm:flex gap-5 lg:gap-24 hidden md:flex items-center flex-1 font-poppins justify-end lg:mr-10 md:mr-4">
        {["QUI SOMMES NOUS ?", "NOS CHANTIERS", "CONTACT"].map((item, index) => (
          <motion.div
            key={item}
            className="relative cursor-pointer w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#FCD807] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"
            onClick={
              item === "QUI SOMMES NOUS ?"
                ? scrollToAbout
                : item === "NOS CHANTIERS"
                ? scrollToWork
                : scrollToContact
            }
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <span className="flex items-center justify-start font-poppins font-extrabold opacity-50 text-3xl text-[#EAEAEA] hover:opacity-100">
              {item}
            </span>
          </motion.div>
        ))}
      </div>
    </header>
  );
}