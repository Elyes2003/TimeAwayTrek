import { useState } from 'react'

const staticData = {
  user: {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    canRequest: true,
    nb_jour: 20
  },
  notifications: [
    {
      id: 1,
      message: 'Your leave request has been accepted.',
      modifiedAt: new Date()
    },
    {
      id: 2,
      message: 'Your leave request has been rejected.',
      modifiedAt: new Date()
    },
    {
        id: 3,
        message: 'Your leave request has been rejected.',
        modifiedAt: new Date()
    }
    
  ],
}

export const EmployeeHome = () => {
  const [notifications,setNotifications]=useState(staticData.notifications);
  

  const handleDelete = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  }

  return (
    <div className=' sm:justify-evenly w-full'>
  <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
    <div className='flex items-center gap-2 px-4 pb-3'>
        <div className='text-yellow-400'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
            </svg>
          </div> 
        <h4 className="text-2xl font-bold dark:text-white">Notifications</h4>
        
      </div>
      {
        notifications.length>0?
        notifications.map((not)=>(
          <div key={not.id} id="toast-message-cta" className={` w-full  p-4 text-gray-500 ${not.message.includes("accepté")? "bg-green-200 dark:bg-green-500 dark:text-gray-100":"bg-red-200 dark:bg-red-500 dark:text-gray-100"}   rounded-lg shadow   m-2`} role="alert">
            <div className="flex">
                <div className="ms-3 text-sm font-normal">
                    <div className='flex justify-start gap-4'>
                      <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Admin</span>
                      <div className="mb-2 text-sm font-normal">
                          {not.modifiedAt.toLocaleDateString()}
                      </div> 

                    </div>
                    <div className="mb-2 text-sm font-normal">{not.message}</div> 
                </div>
                <button onClick={ ()=>{handleDelete(not.id)}} type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-message-cta" aria-label="Close">
                    <span className="sr-only">Close</span>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                </button>
            </div>
          </div>
        ))
        :
         
        <div className="flex items-center p-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600" role="alert">
        <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <span className="sr-only">Info</span>
        <div>
          Il n'y a aucune notifications pour le moment
        </div>
      </div>

      }
      
</div>
</div>
  )
}