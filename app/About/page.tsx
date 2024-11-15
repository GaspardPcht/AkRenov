import React from 'react';
import ContainerText from '../components/ContainerText';

export default function About() {
  return (
    <div className="p-10">
      <div className="flex justify-center text-2xl md:text-3xl font-poppins font-bold text-black mb-6">
        <h1>QUI SOMMES-NOUS ?</h1>
      </div>

      {/* Image Section */}
      <div className="flex justify-center lg:justify-normal mb-6 relative  ">
        <img 
          src="/assets/piscine.png" 
          alt="Piscine rénovée par Akrénov" 
        />

        {/* Text container */}
        <div className="hidden absolute lg:flex mt-4 lg:mt-0 bottom-9 left-40">
          <ContainerText 
            text={
              <p>Akrénov, spécialiste de la rénovation en Bretagne. Une construction, un agrandissement de votre espace de vie, une rénovation de maison ou d’appartement, un aménagement de vos espaces extérieurs (création d’une terrasse en bois, porte de garage, pose d’un portail ou d’une clôture de parcelle…). Pour tous les chantiers intérieurs et extérieurs, l’entreprise assure la bonne gestion de vos chantiers. Akrénov, spécialistes du sur-mesure et de la construction, nous avons fait de la rénovation maison notre expertise. Maîtres d’oeuvre et d’ouvrage, notre équipe bretonne mène à bien des chantiers de construction.</p>
            }
          />
        </div>             </div>      {/* Text for mobile */}
      <div className="lg:hidden mt-4">
        <ContainerText 
          text={
            <p>Akrénov est une entreprise bretonne spécialisée dans la rénovation, la construction et l’aménagement d’espaces intérieurs et extérieurs (terrasses, portes de garage, clôtures). Experts du sur-mesure, nous assurons la gestion complète de vos chantiers en tant que maîtres d’œuvre et d’ouvrage.</p>
          }
        />
      </div>
      
      <div className="flex justify-center lg:justify-end mb-6 relative lg:right-32 mt-10 lg:mt-36 ">
        <img 
          src="/assets/veranda_after.png" 
          alt="Piscine rénovée par Akrénov" 
        />

        {/* Text container */}
        <div className="hidden absolute lg:flex mt-4 lg:mt-0 bottom-9 right-40">
          <ContainerText 
            text={
              <div>
                <p>Chez Akrénov Bretagne, c’est un regroupement de corps de métiers du bâtiment pour répondre à l’ensemble des projets de construction et de rénovation pour tous types de maisons :</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Plaquiste</li>
                  <li>Charpentier</li>
                  <li>Maçon</li>
                  <li>Plombier</li>
                  <li>Chauffagiste</li>
                  <li>Electricien</li>
                </ul>
              </div>
            }
          />
        </div>
      </div>

      {/* Text for mobile */}
      <div className="lg:hidden mt-4">
        <ContainerText 
          text={
            <div>
              <p>Chez Akrénov Bretagne, c’est un regroupement de corps de métiers du bâtiment pour répondre à l’ensemble des projets de construction et de rénovation pour tous types de maisons :</p>
              <ul className="list-disc list-inside mt-2">           
                <li>Plaquiste</li>
                <li>Charpentier</li>
                <li>Maçon</li>
                <li>Plombier</li>
                <li>Chauffagiste</li>
                <li>Electricien</li>
              </ul>
            </div>
          }
        />
      </div>
      <div className="flex justify-center lg:justify-normal mt-4 mb-6 lg:mt-36 relative  ">
        <img 
          src="/assets/cuisine_3.png" 
          alt="Piscine rénovée par Akrénov" 
         className='w-[90%] lg:w-[50%]'
        />

        {/* Text container */}
        <div className="hidden absolute lg:flex mt-4 lg:mt-0 bottom-9 left-40">
          <ContainerText 
            text={
              <p>Akrénov, spécialiste de la rénovation en Bretagne. Une construction, un agrandissement de votre espace de vie, une rénovation de maison ou d’appartement, un aménagement de vos espaces extérieurs (création d’une terrasse en bois, porte de garage, pose d’un portail ou d’une clôture de parcelle…). Pour tous les chantiers intérieurs et extérieurs, l’entreprise assure la bonne gestion de vos chantiers. Akrénov, spécialistes du sur-mesure et de la construction, nous avons fait de la rénovation maison notre expertise. Maîtres d’oeuvre et d’ouvrage, notre équipe bretonne mène à bien des chantiers de construction.</p>
            }
          />
        </div>
      </div>

      {/* Text for mobile */}
      <div className="lg:hidden mt-4">
        <ContainerText 
          text={
            <p>Akrénov est une entreprise bretonne spécialisée dans la rénovation, la construction et l’aménagement d’espaces intérieurs et extérieurs (terrasses, portes de garage, clôtures). Experts du sur-mesure, nous assurons la gestion complète de vos chantiers en tant que maîtres d’œuvre et d’ouvrage.</p>
          }
        />
      </div>
    </div>
  );
}