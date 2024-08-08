import React from 'react'
import { NavLink} from "react-router-dom";
import { useAuthContext } from '../../../hooks/useAuthContext';

const UserCard = () => {
    const { user } = useAuthContext();

  return (
    <div style={{ maxHeight: '400px'}} className="w-96  bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700  max-w-sm  overflow-hidden  hover:shadow-gray-400">
  <div className="relative">
    <img className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1557862921-37829c790f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHx1c2VyfGVufDB8MHx8fDE2OTQwOTU5Nzl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Image"/>
  </div>
  <div className="px-6 py-4">
    <div className="text-xl font-semibold text-gray-800">{user.firstName} {user.lastName}</div>
    <p className="text-gray-600">Front-end Developer</p>
  </div>
  <div className="px-6 py-4">
    <span className="inline-block px-2 py-1 font-semibold text-teal-900 bg-teal-200 rounded-full">Web</span>
    <span className="inline-block px-2 py-1 font-semibold text-indigo-900 bg-indigo-200 rounded-full">UI/UX</span>
    <span className="inline-block px-2 py-1 font-semibold text-purple-900 bg-purple-200 rounded-full">Design</span>
  </div>
  <div className="px-6 py-4">
  <NavLink to="/user/infouser" className="text-blue-500 hover:underline">View Profile</NavLink>
  </div>
</div>
  )
}

export default UserCard