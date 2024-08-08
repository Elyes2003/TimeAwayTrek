import React, { useState, useEffect } from 'react';
import { UserLine } from './lineemp';
import { getAllUser } from '../../helper/helperUser';
import { useToast } from '../../layout/toaster';
import { useAuthContext } from '../../hooks/useAuthContext';

export const Users = () => {
  const { user } = useAuthContext();
  const [employees, setEmployees] = useState(null);
  const { showToast } = useToast();

  useEffect(() => {
    const fetchUsers= async () => {
      try {
        const {data} = await getAllUser();
        setEmployees(data)
      } catch (error) {
        showToast(error.error, 'error');
      }
    };
    if (user) {
      fetchUsers();
    }
  }, [ user, showToast]);


  return (
    <div>
      <h2 className="text-2xl font-bold mb-0 dark:text-white ">Liste des demandes de congé</h2>
    <div className="relative overflow-x-auto my-10 ">
      {employees?.length > 0 ? (
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
              />
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex items-center p-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600" role="alert">
  <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span className="sr-only">Info</span>
  <div>
    Il n'y a aucun employee pour le moment
  </div>
</div>
      )}
    </div>
    </div>
  );
};

