import React from 'react'
import { useLeavesContext } from '../../../hooks/useLeavesContext';
import { NavLink } from 'react-router-dom';
const Table = ({formatDate}) => {
    const { leaves } = useLeavesContext()
    
      
  return (
    <div  style={{ maxHeight: '400px', overflowY: 'auto' }} className=" w-full overflow-scroll px-0  bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700  hover:shadow-gray-400">
  <table className=" w-full min-w-max table-auto text-left">
    <thead className='font-bold'>
      <tr>
        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
            <p className="antialiased  text-sm text-gray-700 flex items-center justify-between gap-2 leading-none opacity-70">Request <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                </svg>
          </p>
        </th>
        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
          <p className="antialiased  text-sm text-gray-700 flex items-center justify-between gap-2 leading-none opacity-70">Teamlead <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
            </svg>
          </p>
        </th>
        
        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
          <p className="antialiased  text-sm text-gray-700 flex items-center justify-between gap-2 leading-none opacity-70">Status <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
            </svg>
          </p>
        </th>
        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
          <p className="antialiased  text-sm text-gray-700 flex items-center justify-between gap-2 leading-none opacity-70">Days <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
            </svg>
          </p>
        </th>
      </tr>
    </thead>
    <tbody>
  {leaves?.map((leave) => (
    <tr key={leave._id}>
      <td className="p-4 border-b border-blue-gray-50">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <p className="block antialiased  text-sm leading-normal text-gray-700 font-normal">
              {leave.typeLeave}
            </p>
          </div>
        </div>
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <div className="flex items-center gap-3">
          
          <div className="flex flex-col">
            <p className="block antialiased  text-sm leading-normal text-gray-700 font-normal">
              {formatDate(leave.startDate)}
            </p>
            <p className="block antialiased  text-sm leading-normal text-gray-700 font-normal opacity-70">
              {formatDate(leave.finishDate)}
            </p>
          </div>
        </div>
      </td>
      
      <td className="p-4 border-b border-blue-gray-50">
        <div className="w-max">
          <div className={`relative grid items-center  font-bold uppercase whitespace-nowrap select-none ${
            leave.statut === "accepted"
              ? "bg-green-500/20 text-green-600"
              : leave.statut === "refused"
              ? "bg-red-500/20 text-red-700"
              : "bg-gray-200 text-gray-500"
          } py-1 px-2 text-xs rounded-md`}>
            <span>{leave.statut}</span>
          </div>
        </div>
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <p className="block antialiased  text-sm leading-normal text-gray-700 font-normal">
          {leave.days}
        </p>
      </td>
    </tr>
  ))}
</tbody>


  </table>
</div>
  )
}

export default Table