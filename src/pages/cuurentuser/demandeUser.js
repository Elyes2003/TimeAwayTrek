
import React, { useState } from 'react';
import Modal from 'react-modal';

const DemandesPage = () => {

    const [selectedDemande, setSelectedDemande] = useState(null);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    
    id: null,
    type: '',
    date_debut: '',
    date_fin: '',
    statut: 'en_attente',
    justification: null,
  });

  const [demandes, setDemandes] = useState([
    { id: 1, type: 'Congé annuel', date_debut: '2024-05-01', date_fin: '2024-05-07', statut: 'en_attente' },
    { id: 2, type: 'Permission maladie', date_debut: '2024-05-05', date_fin: '2024-05-06', statut: 'approuvé' },
  ]);

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedDemande) {
      const updatedDemandes = demandes.map(demande =>
        demande.id === selectedDemande.id ? formData : demande
      );
      setDemandes(updatedDemandes);
    } else {
      const newDemande = { ...formData, id: demandes.length + 1 };
      setDemandes([...demandes, newDemande]);
    }
    setFormData({
      id: null,
      type: '',
      date_debut: '',
      date_fin: '',
      statut: 'en_attente',
      justification: null // Réinitialiser la justification
    });
    setSelectedDemande(null);
    setShow(false);
  };
  const handleModify = (demande) => {
    setSelectedDemande(demande);
    setFormData({
      id: demande.id,
      type: demande.type,
      date_debut: demande.date_debut,
      date_fin: demande.date_fin,
      statut: demande.statut,
      justification: demande.justification
    });
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    if (!formData.type || !formData.date_debut || !formData.date_fin) {
      alert('Veuillez remplir tous les champs requis.');
      return;
    }
    const updatedDemandes = demandes.map((demande) => (demande.id === formData.id ? formData : demande));
    setDemandes(updatedDemandes);
    setFormData({
      id: null,
      type: '',
      date_debut: '',
      date_fin: '',
      statut: 'en_attente',
      justification: null // Réinitialiser la justification
    });
  };
  const handleDelete = (demande) => {
    const confirmation = window.confirm('Êtes-vous sûr de vouloir supprimer cette demande ?');
    if (confirmation) {
      const updatedDemandes = demandes.filter(d => d.id !== demande.id);
      setDemandes(updatedDemandes);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
    <h2 className="text-2xl font-bold mb-6 dark:text-white ">Liste des demandes de congé</h2>
    {
        demandes.length>0?(
      <table className="table-auto mx-auto bg-white w-full dark:bg-gray-900">
        <thead>
          <tr className='dark:bg-gray-800 dark:text-white'>
            <th className="border px-4 py-2">Type</th>
            <th className="border px-4 py-2">Date de début</th>
            <th className="border px-4 py-2">Date de fin</th>
            <th className="border px-4 py-2">Statut</th>
            <th className="border px-4 py-2 w-1/5">Justification</th>
            <th className="border px-4 py-2 w-1/5">Action</th>
          </tr>
        </thead>
        <tbody>
          {demandes.map((demande) => (
            <tr className='dark:text-white' key={demande.id}>
              <td className="border px-4 py-2">{demande.type}</td>
              <td className="border px-4 py-2">{demande.date_debut}</td>
              <td className="border px-4 py-2">{demande.date_fin}</td>
              <td className="border px-4 py-2">{demande.statut}</td>
              <td className="border px-4 py-2">{demande.justification}</td>
              <td className="border flex px-4 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => handleModify(demande)}>Modifier</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded" onClick={() => handleDelete(demande)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  ):
         
  <div class="flex items-center p-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600" role="alert">
  <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span class="sr-only">Info</span>
  <div>
    Il n'y a aucune demande pour le moment
  </div>
</div>

}

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4" onClick={openModal}>
        Ajouter une demande
      </button>
      <Modal isOpen={show} onRequestClose={closeModal} contentLabel="Ajouter une demande">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4">Ajouter une demande</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Type de demande</label>
            <select required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="statut" name="statut" onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
            <option value="">Sélectionnez un type de congé</option>
                <option value="Congé annuel">Congé annuel</option>
                <option value="Congé maladie">Congé maladie</option>
                <option value="Congé sans solde">Congé sans solde</option>
                </select>         </div>
          <div className="mb-4">
            <label  className="block text-gray-700 text-sm font-bold mb-2">Date de début</label>
            <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date_debut" type="date" name="date_debut" onChange={(e) => setFormData({ ...formData, date_debut: e.target.value })} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Date de fin</label>
            <input  required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date_fin" type="date" name="date_fin" onChange={(e) => setFormData({ ...formData, date_fin: e.target.value })} />
          </div>
         
          <div className="mb-4">
            <label  className="block text-gray-700 text-sm font-bold mb-2">Justification</label>
            <div className="mb-4">
  <textarea  required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="justification" onChange={(e) => setFormData({ ...formData, justification: e.target.value })}></textarea>
  <input type="file" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="justification-file" onChange={(e) => setFormData({ ...formData, justification_file: e.target.files[0] })} />
</div>          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Enregistrer</button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={closeModal}>Fermer</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default DemandesPage;