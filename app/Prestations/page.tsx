import CardsForPresta from "../components/CardsForPresta";

export default function Prestation() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Header */}
      <div className="flex justify-center w-full py-4">
        <h1 className="text-2xl font-roboto md:text-3xl font-bold text-black">
          PRESTATIONS
        </h1>
      </div>

      {/* Grille des CardsForPresta */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-4">
        <CardsForPresta 
          imageSrc="/icons/Maçonnerie.png" 
          text="Maçonnerie"
        />
        <CardsForPresta 
          imageSrc="/icons/charpente.png" 
          text="Charpente"
        />
        <CardsForPresta 
          imageSrc="/icons/placo.png" 
          text="Cloison sèches"
        />
        <CardsForPresta 
          imageSrc="/icons/menuiserie.png" 
          text="Menuiserie"
        />
        <CardsForPresta 
          imageSrc="/icons/carrelage.png" 
          text="Aménagement Interieure"
        />
        <CardsForPresta 
          imageSrc="/icons/terrasses.png" 
          text="Exterieur"
        />
      </div>
      <div className="flex justify-center w-[80%] ">
      <p className="text-lg mt-6  md:text-2xl font-roboto font-light text-black">
      Pour tout autre demande n’hesitez pas à nous contacter !
        </p>
      </div>
    </div>
  );
}