import React from 'react'
import isimm from "../assets/icons/R.jpg";
import isimm01 from "../assets/images/isimm.png";


export const About = () => {
  const para1 = "Depuis son lancement, notre application de gestion des congés est devenue un outil essentiel pour l'Institut Supérieur d'Informatique et de Mathématiques de Monastir. En offrant une plateforme conviviale, elle permet à notre équipe de demander et de gérer leurs congés de manière efficace, ce qui améliore considérablement la planification des ressources humaines et favorise une transparence accrue dans le processus."
  return (
    <main>
       <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  
        <img className="rounded-t-lg" src={isimm}alt="" />
 
    <div className="p-5 flex flex-row ">
    <img src={isimm01} alt="" className='mr-7'/>
      <div> 
     
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Qui utilise notre Application ?</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{para1}</p>
        <a href="http://www.isimm.rnu.tn/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        </div>
    </div>
</div>
    </main>
  )
}




