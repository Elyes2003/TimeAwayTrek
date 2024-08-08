import React  from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useToast } from '../../layout/toaster';
import { useLeavesContext } from '../../hooks/useLeavesContext';
import { useEffect, useState } from 'react';
import { getAllLeaves } from '../../helper/helperLeave';
import { getAllUser } from '../../helper/helperUser';
const Dashboard = () => {
  const { user, token } = useAuthContext();
  const { showToast } = useToast();
  const { leaves, dispatch } = useLeavesContext();
  const [employees, setEmployees] = useState(null);

  
  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const res = await getAllLeaves(token);
        dispatch({ type: 'SET_LEAVES', payload: res });
        const {data} = await getAllUser();
        setEmployees(data)
      } catch (error) {
        showToast(error.error, 'error');
      }
    };
    if (user) {
      fetchLeaves();
    }
  }, [dispatch, user, showToast, token]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };


  const employeCount = 10;

  return (
    <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700">
    <div className="grid grid-cols-4 gap-4 mb-4">
      <div className="flex flex-col p-4 rounded bg-gray-100 dark:bg-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Resumé
          </h5>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-4 justify-center h-24 rounded bg-gray-100 dark:bg-gray-700">
            <div className='text-green-500'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-check-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
</svg>
            </div>
            <div>
              <p className="text-gray-900 dark:text-white">Demandes acceptés</p>
              <p className="text-4xl text-center font-thin text-gray-900 dark:text-white">{leaves?.length}</p>
            </div>
          </div>
  
          <div className="flex items-center gap-4 justify-center h-24 rounded bg-gray-100 dark:bg-gray-700">
            <div className='text-red-500'>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30 " fill="currentColor" className="bi bi-x-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/>
              </svg>
            </div>
            <div>
              <p className="text-gray-900 dark:text-white">Demandes réfusés</p>
              <p className="text-4xl text-center font-thin text-gray-900 dark:text-white">0</p>
            </div>
          </div>
  <div className="flex items-center gap-4 justify-center h-24 rounded bg-gray-100 dark:bg-gray-700">
            <div role="status">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-hourglass-split dark:text-white" viewBox="0 0 16 16">
  <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
</svg>
              <span className="sr-only">Loading...</span>
            </div>
            <div>
              <p className="text-gray-900 dark:text-white">Demandes non traitées</p>
              <p className="text-4xl text-center font-thin text-gray-900 dark:text-white">{leaves?.length}</p>
            </div>
          </div>
  
          <div className="flex items-center gap-4 justify-center h-24 rounded bg-gray-100 dark:bg-gray-700">
            <div role="status">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-fill dark:text-white" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
            <div>
              <p className="text-gray-900 dark:text-white">Employés</p>
              <p className="text-4xl text-center font-thin text-gray-900 dark:text-white">{employeCount}</p>
            </div>
          </div>
        </div>
      </div>
  
      <div className="flex flex-col p-4 rounded bg-gray-100 dark:bg-gray-700 col-span-3">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Demandes
          </h5>
          <Link to="/admin/demandes" className="text-lg font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
          </Link>
        </div>
        <div className="relative overflow-x-auto " style={{flexGrow: 3, flexBasis: '75%'}}>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 text-sm py-3 font-semibold text-blue-600">
                  Employé
                </th>
                <th scope="col" className="px-6 text-sm py-3 font-semibold text-blue-600">
                  Date Début
                </th>
                
                <th scope="col" className="px-6 text-sm py-3 font-semibold text-blue-600">
                  Date d'envoie
                </th>
                <th scope="col" className="px-6 text-sm py-3 font-semibold text-blue-600">
                  Motif
                </th>
                <th scope="col" className="px-6 text-sm py-3 font-semibold text-blue-600">
                  jours
                </th>
              </tr>
            </thead>
            <tbody>
              {
                leaves?.map((demande)=>(
                  <tr key={demande.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="min-w-0 ">
                        <p className="text-sm  font-medium text-gray-900 truncate dark:text-white">
                          {demande.firstName}
                        </p>
                        <p className="text-sm lg:min-w-40 text-gray-500 truncate dark:text-gray-400">
                          {demande.email}
                        </p>
                      </div>
                    </th>
                    <td className="px-6 py-4">
                      {formatDate(demande.startDate)}
                    </td>
                    <td className="px-6 py-4">
                      {formatDate(demande.createdAt)}
                    </td>
                    <td className="px-6 py-4">
                      {demande.typeLeave}
                    </td>
                    <td className="px-6 py-4">
                      {demande.days}
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
  
    </div>
    <div className="mb-5 p-4 rounded bg-gray-100 dark:bg-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Employées
          </h5>
          <Link to="/admin/employees" className="text-lg font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
          </Link>
        </div>
        <div className="relative overflow-x-auto ">
          <table className=" w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 text-sm py-3 font-semibold text-blue-600">
                  Nom 
                </th>
                <th scope="col" className="px-6 text-sm py-3 font-semibold text-blue-600">
                Prenom
                </th>
                <th scope="col" className="px-6 text-sm py-3 font-semibold text-blue-600">
                Email
                </th>
                <th scope="col" className="px-6 text-sm py-3 font-semibold text-blue-600">
                Nombre de Jours restants
                </th>
                <th scope="col" className="px-6 text-sm py-3 font-semibold text-blue-600">
                  Détails
                </th>
              </tr>
            </thead>
            <tbody>
              {employees?.map((request) => (
                <tr key={request.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-600">
                  <td className="dark:text-white px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {request.firstName}
                  </td>
                  <td className="dark:text-white px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {request.lastName}
                  </td>
                  <td className="dark:text-white px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {request.email}
                  </td>
                  <td className="dark:text-white px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {request.nb_days}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link to={`/admin/employees`} className="text-blue-600 hover:underline dark:text-blue-500">
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  </div>
  );
};

export default Dashboard;
/*
<div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700">
<div className="grid grid-cols-3 gap-4 mb-4">
  <div className="flex items-center gap-4 justify-center h-24 rounded bg-gray-100 dark:bg-gray-700">
    <div className="text-green-500">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
      </svg>
    </div>
    <div>
      <p className="text-gray-900 dark:text-white">Demandes acceptés</p>
      <p className="text-4xl text-center font-thin text-gray-900 dark:text-white">{demandes.length}</p>
    </div></div>


  <div className="flex items-center gap-4 justify-center h-24 rounded bg-gray-100 dark:bg-gray-700">
    <div className='text-red-500'>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30 " fill="currentColor" className="bi bi-x-square-fill" viewBox="0 0 16 16">
        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/>
      </svg>
    </div>
    <div>
      <p className="text-gray-900 dark:text-white">Demandes réfusés</p>
      <p className="text-4xl text-center font-thin text-gray-900 dark:text-white">0</p>
    </div>
  </div>


  <div className="flex items-center gap-4 justify-center h-24 rounded bg-gray-100 dark:bg-gray-700">
    <div role="status">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-clipboard-x dark:text-white" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708"/>
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
    <div>
      <p className="text-gray-900 dark:text-white">Demandes non traitées</p>
      <p className="text-4xl text-center font-thin text-gray-900 dark:text-white">{demandes.length}</p>
    </div>
  </div>


          
</div>
<div className="flex flex-col p-4   mb-4 rounded bg-gray-100 dark:bg-gray-700">
  <div className="flex items-center justify-between mb-4">
    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Demandes</h5>
    <Link to="/admin/demandes" className="text-lg font-medium text-blue-600 hover:underline dark:text-blue-500">
      View all
    </Link>
  </div>
  <div className="relative overflow-x-auto ">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 text-sm py-3 font-semibold text-blue-600">
            Employé
          </th>
          <th scope="col" className="px-6 text-sm py-3 font-semibold text-blue-600">
            Date Début
          </th>
          <th scope="col" className="px-6 text-sm py-3 font-semibold text-blue-600">
            Nombre de jours
          </th>
          <th scope="col" className="px-6 text-sm py-3 font-semibold text-blue-600">
            Numéro de téléphone de l'employé
          </th>
          <th scope="col" className="px-6 text-sm py-3 font-semibold text-blue-600">
            Motif
          </th>
        </tr>
      </thead>
      <tbody>
        {
          demandes.map((demande)=>(
            <tr key={demande.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <div className="min-w-0 ">
                  <p className="text-sm  font-medium text-gray-900 truncate dark:text-white">
                    {demande.employeeName}
                  </p>
                  <p className="text-sm lg:min-w-40 text-gray-500 truncate dark:text-gray-400">
                    {demande.employeeEmail}
                  </p>
                </div>
              </th>
              <td className="px-6 py-4">
                {demande.dateDebut}
              </td>
              <td className="px-6 py-4">
                {demande.nbJour}
              </td>
              <td className="px-6 py-4">
                {demande.phoneNumber}
              </td>
              <td className="px-6 py-4">
                {demande.Motif}
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
</div>
<div className="grid grid-cols-2 gap-4 mb-4 ">
  <div className="flex items-center gap-4 justify-center h-24 rounded bg-gray-100 dark:bg-gray-700">
    <div className='text-green-500'>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-fill-gear" viewBox="0 0 16 16">
        <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4m9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
      </svg>
    </div>
    <div>
      <p className="text-gray-900 dark:text-white">Admin</p>
      <p className="text-4xl text-center font-thin text-gray-900 dark:text-white">{adminCount}</p>
    </div>
  </div>





  <div className="flex items-center gap-4 justify-center h-24 rounded bg-gray-100 dark:bg-gray-700">
    <div role="status">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-fill dark:text-white" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
    <div>
      <p className="text-gray-900 dark:text-white">Employés</p>
      <p className="text-4xl text-center font-thin text-gray-900 dark:text-white">{employeCount}</p>
    </div>
  </div>

</div>
<div className="flex flex-col p-4   mb-4 rounded bg-gray-100 dark:bg-gray-700">
  <div className="flex items-center justify-between mb-4">
    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Utilisateurs</h5>
    <Link to="/admin/users" className="text-lg font-medium text-blue-600 hover:underline dark:text-blue-500">
      View all
    </Link>
  </div>
  <div className="relative overflow-x-auto ">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 text-sm py-3 font-semibold text-blue-600">
            Employé
          </th>
          <th scope="col" className="px-6 text-sm py-3 font-semibold text-blue-600">
            Nombre de Jours restants
          </th>
          <th scope="col" className="px-6 text-sm py-3 font-semibold text-blue-600">
            Conge Demandé
          </th>
          <th scope="col" className="px-6 text-sm py-3 font-semibold text-blue-600">
            Détails
          </th>
        </tr>
      </thead>
      <tbody>
        {demandes.map((request) => (
          <tr key={request.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-600">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {request.employeeName}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {request.nbJour}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {request.Motif}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <Link to={`/admin/users/${request.employee_id}`} className="text-blue-600 hover:underline dark:text-blue-500">
                Details
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
</div>*/