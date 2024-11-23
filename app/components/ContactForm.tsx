import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  email: string;
  nom: string;
  prenom: string;
  numero: string;
  ville: string;
  message: string;
  agence: 'Plouescat' | 'Louannec';
}

const Formulaire: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    nom: '',
    prenom: '',
    numero: '',
    ville: '',
    message: '',
    agence: 'Plouescat',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Mapping des agences aux adresses e-mail
  const agencyEmails: Record<FormData['agence'], string> = {
    Plouescat: 'gaspardpauchet@gmail.com', // Remplace avec l'adresse e-mail de Plouescat
    Louannec: 'navislou@gmail.com',  // Remplace avec l'adresse e-mail de Louannec
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Récupérer l'e-mail correspondant à l'agence sélectionnée
    const agencyEmail = agencyEmails[formData.agence];

    try {
      const emailResponse = await emailjs.send(
        'service_az55mwb', // Remplace avec ton Service ID EmailJS
        'template_txqz3zn', // Remplace avec ton Template ID EmailJS
        {
          email: formData.email,
          nom: formData.nom,
          prenom: formData.prenom,
          numero: formData.numero,
          ville: formData.ville,
          message: formData.message,
          to_email: agencyEmail, // Passe l'adresse e-mail de l'agence ici
        },
        'a04RyuWoXUIMeDNPc' // Remplace avec ta clé publique EmailJS
      );

      if (emailResponse.status !== 200) {
        throw new Error('Erreur lors de l\'envoi de l\'email.');
      }

      alert(`Formulaire envoyé avec succès à l'agence ${formData.agence}`);
    } catch (err) {
      console.error('Erreur lors de l\'envoi du formulaire :', err);
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-[80%] lg:w-[50%] mx-auto p-6 bg-[#323232] rounded-lg shadow-md">
      {/* Liste déroulante pour choisir l'agence */}
      <div className="mb-4">
        <label htmlFor="agence" className="block text-sm font-medium text-[#EAEAEA]">Agence</label>
        <select
          id="agence"
          name="agence"
          value={formData.agence}
          onChange={handleChange}
          className="text-black mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FCD807]"
          required
        >
          <option value="Plouescat">Plouescat</option>
          <option value="Louannec">Louannec</option>
        </select>
      </div>

      {/* Champ email */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-[#EAEAEA]">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="text-black mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FCD807]"
          required
        />
      </div>

      {/* Champ nom */}
      <div className="mb-4">
        <label htmlFor="nom" className="block text-sm font-medium text-[#EAEAEA]">Nom</label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          className="text-black mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FCD807]"
          required
        />
      </div>

      {/* Champ prénom */}
      <div className="mb-4">
        <label htmlFor="prenom" className="block text-sm font-medium text-[#EAEAEA]">Prénom</label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          value={formData.prenom}
          onChange={handleChange}
          className="text-black mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FCD807]"
          required
        />
      </div>

      {/* Champ numéro de téléphone */}
      <div className="mb-4">
        <label htmlFor="numero" className="block text-sm font-medium text-[#EAEAEA]">Numéro de téléphone</label>
        <input
          type="tel"
          id="numero"
          name="numero"
          value={formData.numero}
          onChange={handleChange}
          className=" text-black mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FCD807]"
          required
        />
      </div>

      {/* Champ ville */}
      <div className="mb-4">
        <label htmlFor="ville" className="block text-sm font-medium text-[#EAEAEA]">Ville</label>
        <input
          type="text"
          id="ville"
          name="ville"
          value={formData.ville}
          onChange={handleChange}
          className="text-black mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FCD807]"
          required
        />
      </div>

      {/* Champ message */}
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-[#EAEAEA]">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="text-black mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FCD807]"
          required
        ></textarea>
      </div>

      {/* Bouton de soumission */}
      <button
        type="submit"
        className="mt-4 w-full bg-[#323232] border text-white py-2 rounded-md hover:bg-[#FCD807] focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={isLoading}
      >
        {isLoading ? 'Envoi en cours...' : 'Envoyer'}
      </button>

      {/* Affichage des erreurs */}
      {error && <div className="mt-2 text-red-500">{error}</div>}
    </form>
  );
};

export default Formulaire;