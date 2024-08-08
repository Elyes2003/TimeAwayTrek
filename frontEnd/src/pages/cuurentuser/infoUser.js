import React, { useState } from 'react'
import preson from '../../assets/icons/avatar.webp'
import { updateUser } from '../../helper/helperUser';
import { useToast } from '../../layout/toaster';
import {  Button } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';
import { useAuthContext } from "../../hooks/useAuthContext";


export const Infouser = () => {
  const { user, dispatch } = useAuthContext();
  const { showToast } = useToast();
  const [changeFn, setChangeFn] = useState(false);
  const [changeN, setChangeN] = useState(false);
  const [changePn, setChangePn] = useState(false);
  const [changeE, setChangeE] = useState(false);

  const [firstName, setFirstName] = useState(user.firstName);
  const [email, setEmail] = useState(user.email);
  const [lastName, setLastName] = useState(user.lastName);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

  const handleChangeFn = (event) => setFirstName(event.target.value);
  const handleChangeN = (event) => setLastName(event.target.value);
  const handleChangePn = (event) => setPhoneNumber(event.target.value);
  const handleChangeE = (event) => setEmail(event.target.value);

  const handleSave = async () => {
    const updatedUser = { ...user, firstName, lastName, phoneNumber, email };
    try {
      await updateUser(updatedUser);
      dispatch({ type: 'UPDATE_USER', payload: updatedUser });
      showToast('User updated successfully', 'success');
    } catch (error) {
      showToast('Could not update user!', 'error');
    }
  };




  return (
    <div className='grid grid-cols-1 '>
    <div className="w-4/5 p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-2">
    <div className="flex flex-row">
      <div className="w-full md:w-1/2">
        <img src={preson} alt="Profile" className="rounded-lg shadow-md h-80 w-80 object-cover" />
      </div>
      <div className="flex flex-col gap-9 my-3 w-full md:w-1/2">
        <h1 className="text-2xl font-bold dark:text-white">User Information</h1>
        <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
          <div className="flex items-center">
            <label className="flex-1">
              First Name:
              <input
                type="text"
                value={firstName}
                onChange={handleChangeFn}
                disabled={!changeFn}
                className="ml-2"
              />
            </label>
            <button type="button" onClick={() => setChangeFn(!changeFn)} className="ml-2">
              {changeFn ? <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
</svg>}
            </button>
          </div>
          <div className="flex items-center">
            <label className="flex-1">
              Last Name:
              <input
                type="text"
                value={lastName}
                onChange={handleChangeN}
                disabled={!changeN}
                className="ml-2"
              />
            </label>
            <button type="button" onClick={() => setChangeN(!changeN)} className="ml-2">
              {changeN ? <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
</svg>}
            </button>
          </div>
          <div className="flex items-center">
            <label className="flex-1">
              Phone Number:
              <input
                type="text"
                value={phoneNumber}
                onChange={handleChangePn}
                disabled={!changePn}
                className="ml-2"
              />
            </label>
            <button type="button" onClick={() => setChangePn(!changePn)} className="ml-2">
              {changePn ? <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
</svg>}
            </button>
          </div>
          <div className="flex items-center">
            <label className="flex-1">
              Email:
              <input
                type="email"
                value={email}
                onChange={handleChangeE}
                disabled={!changeE}
                className="ml-2"
              />
            </label>
            <button type="button" onClick={() => setChangeE(!changeE)} className="ml-2">
              {changeE ? <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
</svg>}
            </button>
          </div>
          <div className=" flex justify-center">
            <Button
              variant="success"
              className="flex justify-end gap-2 pt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
              type="submit"
            >
              <FaCheck /> Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>
  )
}