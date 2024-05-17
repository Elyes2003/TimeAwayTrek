import React from 'react';
import {Button} from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
export const UserLine = ({ user, handleDeleteEmployee }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th scope="row" className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <div className="min-w-0  ">
          <p className="text-sm  font-medium text-gray-900 truncate dark:text-white">
            {user.firstname + ' ' + user.name}
          </p>
          <p className="text-sm lg:min-w-40 text-gray-500 truncate dark:text-gray-400">
            {user.email}
          </p>
        </div>
      </th>

      <td className="px-6 py-4">
        {user.nb_jour}
      </td>
      <td className="px-6 py-4">
        {user.phoneNumber}
      </td>

      <td className="px-6 py-4">
        <div className='text-red-500 cursor-pointer w-8 h-8 me-2 '>
          <Button variant="danger" className="flex justify-center p-auto gap-1 pt-3 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50" onClick={() => handleDeleteEmployee(user.id)}>
            <FaTrash /> Supprimer
          </Button>
        </div>
      </td>

    </tr>
  )
}