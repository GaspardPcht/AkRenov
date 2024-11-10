import React from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";

const HoverDevCards = () => {
  return (
    <div className="p-4">
      <div className="flex justify-center w-full">
        <div className="grid gap-4 grid-cols-2 w-[50%]">
          <Card title="Plouescat" subtitle="06 71 11 89 46" text="akrenov@hotmail.com" button='Prenez rendez-vous' />
          <Card title="Louannec" subtitle="06 95 97 13 20​" text="contact@akrenov.fr" button='Prenez rendez-vous' />
          {/* Add more Card components as needed */}
        </div>
      </div>
    </div>
  );
};

interface CardType {
  title: string;
  subtitle: string;
  text: string;
  button : string
}

const Card = ({ title, subtitle, text, button }: CardType) => {
  return (
    <a
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-[#EAEAEA]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#d6c458] to-[#FCD807] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <div className="flex flex-col justify-between relative z-10">
        <h3 className="font-medium text-lg text-slate-950 group-hover:text-white duration-300">
          {title}
        </h3>
        <p className="text-slate-400 group-hover:text-white duration-300">
          {subtitle}
        </p>
        <p className="text-slate-500 group-hover:text-white duration-300">
          {text}
        </p>
        <div className="text-mg gap-1 flex items-center mb-10 group-hover:text-white duration-300 ">
          <p>{button}</p>
          <HiOutlineArrowSmRight size={20} />
        </div>
      </div>
    </a>
  );
};

export default HoverDevCards;