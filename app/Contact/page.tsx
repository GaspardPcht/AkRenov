import Formulaire from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Header */}
      <div className="flex justify-center w-full py-4">
        <h1 className="text-2xl font-roboto md:text-3xl font-bold text-black">
          CONTACT
        </h1>
      </div>

        <Formulaire />

      <div className='text-black mt-1'>
        <p>© 2024 AkRenov. Tous droits réservés.</p>
      </div>
    </div>
  );
}
