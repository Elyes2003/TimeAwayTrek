import React from 'react';
import preson from '../../assets/icons/avatar.webp'
export const AdminProfile = () => {
  return (
    <div className="max-w-3xl  mt-14 h-max  p-6 bg-blue-100 border border-blue-500 rounded-xl shadow-lg flex flex-row justify-center m-auto  dark:bg-gray-800 dark:border-gray-700">
  <div className="w-full md:w-1/2 mr-5">
    <img src={preson} alt="Profile" className="rounded-lg shadow-md h-80 w-80 object-cover" />
  </div>
  <div className="flex-1">
    <h4 className="text-3xl mb-4   font-bold  text-blue-500 text-center">Profile Informations</h4>
    <div className='flex justify-start  py-2'> 
      <p className="text-xl  text-blue-500 dark:text-white ">Email :</p>
      <p className="tracking-tighter text-gray-500 md:text-lg dark:text-gray-400 ">email</p>
    </div>

    <div className='flex justify-between items-center py-2'> 
      <div className='flex items-center'>
        <p className="text-xl  text-blue-500 dark:text-white">First name :</p>
        <p className="tracking-tighter text-gray-500 md:text-lg dark:text-gray-400">firstname</p>
      </div>
    </div>

    <div className='flex justify-between items-center py-2'> 
      <div className='flex items-center'> 
        <p className="text-xl  text-blue-500 dark:text-white">Last name :</p>
        <p className="tracking-tighter text-gray-500 md:text-lg dark:text-gray-400">name</p>
      </div>
    </div>
    <div className='flex justify-between items-center py-2 gap-1'> 
      <div className="flex items-center"> 
        <p className="text-xl  text-blue-500 dark:text-white">Phone number :</p>
        <p className="tracking-tighter text-gray-500 md:text-lg dark:text-gray-400">phoneNumber</p>
      </div>
    </div>
 
  </div>
</div>
  );
};