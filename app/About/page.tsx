import React, { useState } from 'react';
import ContainerText from '../components/ContainerText';

export default function About() {
  const [selectedNumber, setSelectedNumber] = useState<number>(1);

  const handleNumberClick = (number: number) => {
    setSelectedNumber(number);
  };

  const renderContainerText = () => {
    switch (selectedNumber) {
      case 1:
        return (
          <ContainerText
            title="Akrénov, spécialiste de la rénovation en Bretagne"
            text={`
              Une construction, un agrandissement de votre espace de vie, une
              rénovation de maison ou d’appartement, un aménagement de vos
              espaces extérieurs (création d’une terrasse en bois, porte de
              garage, pose d’un portail ou d’une clôture de parcelle…), pour
              tous les chantiers intérieurs et extérieurs l’entreprise assure la
              bonne gestion de vos chantiers.

              Akrénov, spécialistes du sur-mesure et de la construction, nous
              avons fait de la rénovation maison notre expertise. Maîtres
              d’oeuvre et d’ouvrage, notre équipe bretonne mène à bien des
              chantiers de construction.
            `}
          />
        );
      case 2:
        return (
          <ContainerText
            title="Chez Akrénov Bretagne c’est un regroupement de corps de métiers du bâtiment"
            text="Pour répondre à l’ensemble des projets de construction et de rénovation pour tous types de maisons."
          >
            <ul className="list-disc pl-6 mt-3 text-lg">
              <li>Menuisier fabricant-poseur</li>
              <li>Spécialiste du sur-mesure et de la rénovation</li>
              <li>Plaquiste</li>
              <li>Charpentier</li>
              <li>Maçon</li>
              <li>Plombier</li>
              <li>Chauffagiste</li>
              <li>Electricien</li>
            </ul>
          </ContainerText>
        );
      case 3:
        return (
          <ContainerText
            title="L’équipe d’Akrénov intervient en Bretagne"
            text="L’équipe d’Akrénov intervient en Bretagne dans les communes du Finistère (29) et des Côtes d’Armor (22) pour vos menuiseries PVC et aluminium, la pose de vos portes, de vos volets ou vos fenêtres, ainsi que la pose de vos portails, de vos portes de garage, de vos stores ou encore vos escaliers. Vous l’avez compris, Akrénov va jusqu’au bout de ses services."
          />
        );
      default:
        return <ContainerText title="Sélectionnez un numéro" text="" />;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Header */}
      <div className="flex justify-center w-full py-4">
        <h1 className="text-2xl md:text-3xl md:mt-32 font-bold text-black">
          QUI SOMMES-NOUS ?
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center ">
        {/* Numbers */}
        <div className="flex flex-col md:absolute md:left-[14vw] top-[58%] justify-center md:transform md:-translate-y-[50%] md:-translate-x-[50%] md:pl-2 md:mr-40">
          <div className="flex sm:flex-row md:flex-col justify-center gap-4 text-4xl md:text-[64px] lg:text-[96px] font-medium font-roboto stroke-black stroke-1 md:gap-10 ">
            {[1, 2, 3].map((number) => (
              <button
                key={number}
                onClick={() => handleNumberClick(number)}
                className={`cursor-pointer hover:text-[#FCD807] ${
                  selectedNumber === number
                    ? 'text-[#FCD807] opacity-100'
                    : 'text-[#323232]'
                }`}
              >
                {number}
              </button>
            ))}
          </div>
        </div>

        {/* Rendered Content */}
        <div className="mt-6 md:mt-0 md:w-[60%] lg:w-full flex justify-center">
          {renderContainerText()}
        </div>
      </div>
    </div>
  );
}