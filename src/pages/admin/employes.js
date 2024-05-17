import React, { useState } from 'react';
import { UserLine } from './lineemp';

export const Users = () => {
  const [employees, setEmployees] = useState([
    {
      id: '1',
      firstname: 'John',
      name: 'Doe',
      email: 'john.doe@example.com',
      nb_jour: 5,
      phoneNumber: '123-456-7890',
    },
    {
      id: '4',
      firstname: 'Alice',
      name: 'Johnson',
      email: 'alice.johnson@example.com',
      nb_jour: 12,
      phoneNumber: '321-654-0987',
    },
    
    {
      id: '2',
      firstname: 'Jane',
      name: 'Smith',
      email: 'jane.smith@example.com',
      nb_jour: 10,
      phoneNumber: '098-765-4321',
    },
    {
      id: '5',
      firstname: 'David',
      name: 'Brown',
      email: 'david.brown@example.com',
      nb_jour: 8,
      phoneNumber: '456-789-0123',
    },
    {
      id: '6',
      firstname: 'Emma',
      name: 'Wilson',
      email: 'emma.wilson@example.com',
      nb_jour: 20,
      phoneNumber: '789-012-3456',
    },
    {
      id: '7',
      firstname: 'Michael',
      name: 'Taylor',
      email: 'michael.taylor@example.com',
      nb_jour: 18,
      phoneNumber: '901-234-5678',
    },
    {
      id: '8',
      firstname: 'Sophie',
      name: 'Clark',
      email: 'sophie.clark@example.com',
      nb_jour: 14,
      phoneNumber: '234-567-8901',
    },
    {
      id: '9',
      firstname: 'Ryan',
      name: 'Martinez',
      email: 'ryan.martinez@example.com',
      nb_jour: 11,
      phoneNumber: '567-890-1234',
    },
    {
      id: '10',
      firstname: 'Olivia',
      name: 'Garcia',
      email: 'olivia.garcia@example.com',
      nb_jour: 16,
      phoneNumber: '890-123-4567',
    },
    {
      id: '10',
      firstname: 'Mlawah',
      name: 'Elyes',
      email: 'MawahElyes@gmail.com',
      nb_jour: 16,
      phoneNumber: '890-123-4567',
    }
    

    
    

  ]);

  const handleDeleteEmployee = (id) => {
    const confirmation = window.confirm('Êtes-vous sûr de vouloir supprimer cette demande ?');
    if (confirmation) {
    setEmployees(employees.filter((employee) => employee.id !== id));
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-0 dark:text-white ">Liste des demandes de congé</h2>
    <div className="relative overflow-x-auto my-10 ">
      {employees.length ? (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 text-sm py-3 font-semibold text-blue-600">
                Employé
              </th>
              <th scope="col" className="px-6 text-sm py-3 font-semibold text-blue-600">
                Nombre de Jours restantes
              </th>
              <th scope="col" className="px-6 text-sm py-3 font-semibold text-blue-600">
                Numéro de téléphone
              </th>
              <th scope="col" className="px-6 text-sm py-3 font-semibold text-blue-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((user) => (
              <UserLine
                key={user.id}
                user={user}
                handleDeleteEmployee={handleDeleteEmployee}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <div class="flex items-center p-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600" role="alert">
  <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span class="sr-only">Info</span>
  <div>
    Il n'y a aucun employee pour le moment
  </div>
</div>
      )}
    </div>
    </div>
  );
};

