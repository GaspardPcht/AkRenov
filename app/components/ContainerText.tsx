import React from 'react';

interface ButtonHoverProps {
  text: React.ReactNode; // Accepte du JSX ou une chaîne de caractères
}

const ContainerText: React.FC<ButtonHoverProps> = ({ text }) => {
  return (
    <div
      className="
        p-3 
        bg-[#323232] 
        text-1xl
        font-poppins 
        font-light 
        text-white 
        w-[90%] 
        lg:w-[70%] 
        mx-auto 
        my-4 
        rounded-lg 
        shadow-md"
    >
      {text}
    </div>
  );
};

export default ContainerText;