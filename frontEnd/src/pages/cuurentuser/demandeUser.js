import React, {  useState } from 'react';
import Modal from 'react-modal';
import { createLeave, updateLeave } from '../../helper/helperLeave';
import { useToast } from '../../layout/toaster';
import RequestDetails from './leaveRequest';
import { useLeavesContext } from '../../hooks/useLeavesContext';
import { useAuthContext } from '../../hooks/useAuthContext';

const DemandesPage = () => {
  const { token } = useAuthContext();
  const [show, setShow] = useState(false);
  const { showToast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [currentLeaveId, setCurrentLeaveId] = useState(null);
  const [formData, setFormData] = useState({
    typeLeave: '',
    startDate: '',
    finishDate: '',
    justification: '',
    justificationFile: null,
  });
  const { leaves, dispatch } = useLeavesContext();

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
    setIsEditing(false);
    setFormData({
      typeLeave: '',
      startDate: '',
      finishDate: '',
      justification: '',
      justificationFile: null,
    });
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const today = new Date().toISOString().split('T')[0];
    if (formData.startDate <= today) {
      showToast("La date de début doit être ultérieure à la date d'aujourd'hui.", 'error');
      return;
    }
    if (formData.finishDate <= formData.startDate) {
      showToast("La date de fin doit être ultérieure à la date de début.", 'error');
      return;
    }

    try {
      if (isEditing) {
        const data = await updateLeave(currentLeaveId, formData, token);
        dispatch({ type: 'UPDATE_LEAVE', payload: data });
        showToast("Demande de congé mise à jour avec succès!", 'success');
      } else {
        const data = await createLeave(formData, token);
        dispatch({ type: 'CREATE_LEAVE', payload: data });
        showToast("Demande de congé créée avec succès!", 'success');
      }
      closeModal();
    } catch (error) {
      showToast(error.error, 'error');
    }
  };

  const handleEdit = (leaveRequest) => {
    setIsEditing(true);
    setCurrentLeaveId(leaveRequest._id);
    setFormData({
      typeLeave: leaveRequest.typeLeave,
      startDate: leaveRequest.startDate,
      finishDate: leaveRequest.finishDate,
      justification: leaveRequest.justification,
      justificationFile: null,
    });
    setShow(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="flex justify-between m-5">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">Liste des demandes de congé</h2>
        <button
          className="bg-blue-100 hover:bg-blue-200 text-blue-950 font-bold py-2 px-4 rounded-md shadow-md"
          onClick={openModal}
        >
          Ajouter une demande
        </button>
      </div>
      {leaves?.length > 0 ? (
        leaves.map((demande) => (
      
            <RequestDetails key={demande._id} leaveRequest={demande} onEdit={handleEdit}/>
            
        ))
      ) : (
        <div
          className="flex items-center p-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
          role="alert"
        >
          <svg
            className="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div>Il n'y a aucune demande pour le moment</div>
        </div>
      )}

      <Modal isOpen={show} onRequestClose={closeModal} contentLabel="Ajouter une demande" ariaHideApp={false}>
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4">
            {isEditing ? 'Modifier la demande' : 'Ajouter une demande'}
          </h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Type de demande</label>
            <select
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="typeLeave"
              name="typeLeave"
              value={formData.typeLeave}
              onChange={(e) => setFormData({ ...formData, typeLeave: e.target.value })}
            >
              <option value="">Sélectionnez un type de congé</option>
              <option value="Congé annuel">Congé annuel</option>
              <option value="Congé maladie">Congé maladie</option>
              <option value="Congé sans solde">Congé sans solde</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Date de début</label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="date_debut"
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Date de fin</label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="date_fin"
              type="date"
              name="finishDate"
              value={formData.finishDate}
              onChange={(e) => setFormData({ ...formData, finishDate: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Justification</label>
            <div className="mb-4">
              <textarea
                required
                className="shadow h-52 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="justification"
                name="justification"
                value={formData.justification}
                onChange={(e) => setFormData({ ...formData, justification: e.target.value })}
              ></textarea>
              
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
              {isEditing ? 'Mettre à jour' : 'Enregistrer'}
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={closeModal}
            >
              Fermer
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default DemandesPage;
