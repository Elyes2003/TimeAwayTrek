import React from 'react';
import {Button} from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
export const UserLine = ({ user }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th scope="row" className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <div className="min-w-0  ">
          <p className="text-sm  font-medium text-gray-900 truncate dark:text-white">
            {user.firstName + ' ' + user.lastName}
          </p>
          <p className="text-sm lg:min-w-40 text-gray-500 truncate dark:text-gray-400">
            {user.email}
          </p>
        </div>
      </th>

      <td className="px-6 py-4">
        {user.nb_days}
      </td>
      <td className="px-6 py-4">
        {user.phoneNumber}
      </td>

    </tr>
  )
}