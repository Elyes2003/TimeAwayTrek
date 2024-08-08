import React, {  useEffect } from 'react';
import { getAllLeaves} from '../../helper/helperLeave';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useLeavesContext } from '../../hooks/useLeavesContext';
import { useToast } from '../../layout/toaster';
import RequestDetailsAdmin from './leaveRequest';

function RequestList() {
  const { user, token } = useAuthContext();
  const { showToast } = useToast();
  const { leaves, dispatch } = useLeavesContext();

  
  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const res = await getAllLeaves(token);
        dispatch({ type: 'SET_LEAVES', payload: res });
      } catch (error) {
        showToast(error.error, 'error');
      }
    };
    if (user) {
      fetchLeaves();
    }
  }, [dispatch, user, showToast, token]);
  


  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="flex justify-between m-5">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">Liste des demandes de congé</h2>
      </div>
      {leaves?.length > 0 ? (
        leaves.map((demande) => (
      
            <RequestDetailsAdmin key={demande._id} leaveRequest={demande} />
            
        ))
      ) : (
        <div
          className="flex items-center p-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
          role="alert"
        >
          <svg
            className="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div>Il n'y a aucune demande pour le moment</div>
        </div>
      )}
      </div>

  );
}

export default RequestList;