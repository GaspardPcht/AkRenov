import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  email: string;
  nom: string;
  prenom: string;
  numero: string;
  ville: string;
  message: string;
  agence: 'Plouescat' | 'Louannec'; // Limite les choix possibles à ces deux agences
}

const Formulaire: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    nom: '',
    prenom: '',
    numero: '',
    ville: '',
    message: '',
    agence: 'Plouescat', // Valeur par défaut
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleToggle = () => {
    setFormData((prev) => ({
      ...prev,
      agence: prev.agence === 'Plouescat' ? 'Louannec' : 'Plouescat',
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Déterminer l'email en fonction de l'agence
    const emailAgence = formData.agence === 'Plouescat' 
      ? 'contact@plouescat.com' 
      : 'contact@louannec.com';
    
    // Simuler l'envoi de l'email
    console.log('Formulaire envoyé à :', emailAgence);
    console.log('Données du formulaire:', formData);
    
    // Vous pouvez envoyer les données ici à un serveur qui gère l'envoi des emails
    alert(`Formulaire envoyé à l'agence ${formData.agence} (${emailAgence})`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="nom" className="block text-sm font-medium text-gray-700">Nom</label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">Prénom</label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          value={formData.prenom}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="numero" className="block text-sm font-medium text-gray-700">Numéro de téléphone</label>
        <input
          type="tel"
          id="numero"
          name="numero"
          value={formData.numero}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="ville" className="block text-sm font-medium text-gray-700">Ville</label>
        <input
          type="text"
          id="ville"
          name="ville"
          value={formData.ville}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      
          required
        ></textarea>
      </div>

      <div className="mb-4 flex items-center">
  
        <div className="relative inline-block w-12 mr-2 align-middle select-none">
          <input
            type="checkbox"
            id="toggle"
            name="toggle"
            checked={formData.agence === 'Louannec'}
            onChange={handleToggle}
            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-2 appearance-none cursor-pointer"
          />
          <label
            htmlFor="toggle"
            className="toggle-label block overflow-hidden h-6 mb-0 rounded-full bg-gray-300 cursor-pointer"
          ></label>
        </div>
        <span className="text-sm">{formData.agence === 'Plouescat' ? 'Plouescat' : 'Louannec'}</span>
      </div>

      <button
        type="submit"
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Envoyer
      </button>
    </form>
  );
};

export default Formulaire;