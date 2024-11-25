import React from 'react';

interface ContainerTextProps {
  text: string;
  title: string;
  children?: React.ReactNode; // Ajout de children en tant que React.ReactNode
}

const ContainerText: React.FC<ContainerTextProps> = ({ text, title, children }) => {
  return (
    <div className="p-4 bg-[#323232] font-roboto w-[90%] lg:w-[80%] rounded-lg">
      <h2 className="text-4xl font-roboto font-semibold text-[#EAEAEA] text-left">
        {title}
      </h2>
      <div className="mt-5 text-xl font-roboto font-extralight text-white text-left">
        {text}
      </div>
      {children && <div className="mt-5 text-left">{children}</div>} {/* Affichage des enfants s'il y en a */}
    </div>
  );
};

export default ContainerText; 