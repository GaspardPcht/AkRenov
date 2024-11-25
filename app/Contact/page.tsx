import Formulaire from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Header */}
      <div className="flex justify-center w-full">
        <h1 className="py-10 text-2xl md:text-3xl font-roboto font-bold text-black">
          CONTACT
        </h1>
      </div>

        <Formulaire />

      <div className='absolute text-black bottom-2 font-roboto font-semibold mt-4'>
        <p>© 2024 AkRenov. Tous droits réservés.</p>
      </div>
    </div>
  );
}
