import React, { useState } from 'react';
import { Container, Button, FormControl, InputGroup } from 'react-bootstrap';
import { FaCheck, FaTrash } from 'react-icons/fa';

function RequestList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [personnes, setPersonnes] = useState([
    { id: 1, nom: 'Doe', prenom: 'John', type: 'Congé annuel', date_debut: '2024-05-01', date_fin: '2024-05-05', accepted: false },
    { id: 2, nom: 'Smith', prenom: 'Alice', type: 'Congé maladie', date_debut: '2024-04-25', date_fin: '2024-04-30', accepted: false },
    { id: 3, nom: 'Johnson', prenom: 'Michael', type: 'Congé parental', date_debut: '2024-06-10', date_fin: '2024-06-30', accepted: false },
    { id: 4, nom: 'Brown', prenom: 'Emma', type: 'Congé sans solde', date_debut: '2024-07-15', date_fin: '2024-08-15', accepted: false },
    { id: 5, nom: 'Garcia', prenom: 'Sophie', type: 'Congé formation', date_debut: '2024-09-01', date_fin: '2024-09-15', accepted: false },
    { id: 6, nom: 'Martinez', prenom: 'David', type: 'Congé paternité', date_debut: '2024-10-10', date_fin: '2024-10-17', accepted: false },
  ]);
  const [filteredPersons, setFilteredPersons] = useState(personnes);
  // Filtrer les personnes en fonction du terme de recherche
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    const filtered = personnes.filter(person =>
      person.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.prenom.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPersons(filtered);
  };

  const handleAccept = (id) => {
    const confirmation = window.confirm('Êtes-vous sûr de vouloir Accepter cette demande ?');
    if (confirmation) {
    const updatedPersonnes = personnes.map((personne) =>
      personne.id === id ? { ...personne, accepted: true } : personne
    );
    setPersonnes(updatedPersonnes);
    const updatedFilteredPersons = updatedPersonnes.filter((personne) => !personne.accepted);
    setFilteredPersons(updatedFilteredPersons);
  }
  };
  
  const handleDelete = (id) => {
    const confirmation = window.confirm('Êtes-vous sûr de vouloir supprimer cette demande ?');
    if (confirmation) {
    const updatedPersonnes = personnes.filter((personne) => personne.id !== id);
    setPersonnes(updatedPersonnes);
    const updatedFilteredPersons = updatedPersonnes.filter((personne) => !personne.accepted);
    setFilteredPersons(updatedFilteredPersons);
    }
  };

  
  
  return (
    <>

      <Container className="my-1 ">
        <h2 className="text-2xl font-bold mb-4 dark:text-white ">Liste des demandes de congé</h2>
        <InputGroup className="mb-4">
          <FormControl
            placeholder="Rechercher par nom ou prénom"
            aria-label="Rechercher"
            onChange={handleSearch}
            className="border border-gray-300 dark:bg-gray-800 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </InputGroup>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Nom
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Prénom
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Type de congé
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date de début
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date de fin
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 text-gray-900  dark:text-white">
              {filteredPersons.length > 0 ? (
                filteredPersons.map((personne) => (
                  <tr key={personne.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm ">{personne.nom}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm ">{personne.prenom}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm ">{personne.type}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm ">{personne.date_debut}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm ">{personne.date_fin}</div>
                    </td>
                    <td className="flex gap-3 px-1 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button
                        variant="success"
                        className="flex justify-center p-auto gap-1 pt-3 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
                        onClick={() => handleAccept(personne.id)}
                        disabled={personne.accepted}
                      >
                        <FaCheck /> Accepter
                      </Button>
                      <Button variant="danger" className="flex justify-center p-auto gap-1 pt-3 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50" onClick={() => handleDelete(personne.id)}>
                        <FaTrash /> Supprimer
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center p-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600" role="alert">
  <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span class="sr-only">Info</span>
  <div>
    Il n'y a aucune demande pour le moment
  </div>
</div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
}

export default RequestList;