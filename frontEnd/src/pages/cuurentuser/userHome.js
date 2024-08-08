import { NavLink, Outlet } from "react-router-dom";
import image from '../../assets/icons/avatar.webp'
import { useLogout } from "../../hooks/useLogout"
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLeavesContext } from "../../hooks/useLeavesContext";
import { useEffect } from "react";
import { getLeaves } from "../../helper/helperLeave";
import { useToast } from "../../layout/toaster";
const UserHome = () => {
  const activeClass = "inline-flex items-center justify-center p-4 text-cyan-600 border-b-2 border-cyan-600 rounded-t-lg active dark:text-cyan-500 dark:border-cyan-500 group ";
  const inActiveClass = "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 dark:hover:text-gray-300 group dark:text-white";
  const {logout} = useLogout()
  const {user, token} = useAuthContext()
  const { dispatch } = useLeavesContext();
  const { showToast } = useToast();


  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const res = await getLeaves(token);
        dispatch({ type: 'SET_LEAVES', payload: res });
      } catch (error) {
        showToast(error.error, 'error');
      }
    };
    if (user) {
      fetchLeaves();
    }
  }, [dispatch, user, showToast, token]);

  const handleLogout = () => {
    logout();
    window.location= "/login"
  }
  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-100 text-gray-900 p-6 dark:bg-gray-900">
        

      <div className="ml-3 mb-1 flex items-center gap-4">
    <img className="w-6 h-6 rounded-full" src={image} alt=""/>
    <div className=" dark:text-white">
        <div>{user?.firstName} {user?.lastName}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</div>
    </div>
</div>

        <NavLink to="/user/infouser" className={({ isActive }) => isActive ? activeClass : inActiveClass}>
          <svg className="w-4 h-4 me-2 text-gray-400 dark:text-gray-100 group-hover:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>Profile
        </NavLink>
        <NavLink to="/user/dashboard" className={({ isActive }) => isActive ? activeClass : inActiveClass}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 h-4 me-2 text-gray-400 dark:text-gray-100 group-hover:text-gray-500 dark:group-hover:text-gray-300 bi bi-people-fill" viewBox="0 0 16 16">
        <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
         <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zM10 8a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1"/>
        </svg>Dashboard
        </NavLink>
        <NavLink to="/user/demandeUser" className={({ isActive }) => isActive ? activeClass : inActiveClass}>
        <svg className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
          </svg>Demandes
        </NavLink>
        
        <NavLink to="/user/notificationUser" className={({ isActive }) => isActive ? activeClass : inActiveClass}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300 bi bi-people-fill' viewBox="0 0 16 16">
        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
        </svg>Notifications
          <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
        </NavLink>
        <NavLink onClick={handleLogout} className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 dark:hover:text-gray-300 group dark:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300 bi bi-people-fill'  viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
        <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
        </svg>Se deconneter
        </NavLink>
      </div>
      <div className="flex-1 p-6 bg-white rounded-l-xl dark:bg-gray-900">
        <Outlet/>
      </div>
    </div>
  );
};

export default UserHome;