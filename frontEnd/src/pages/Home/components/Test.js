
import { Link } from 'react-router-dom'
import video from '../../../assets/testing.mp4'
import Articles from './Articles'

export const Test = () => {

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center  mb-6 ">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
            <video className="min-w-full min-h-full absolute object-cover"
                src={video}
                type="video/mp4" autoPlay muted loop ></video>
        </div>
        <div className="video-content space-y-2 z-10 flex flex-col items-center gap-2 ">
            
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl text-gray-200 dark:text-gray-900">Repartez sur la voie de la croissance avec le système <span className="text-sky-400 dark:text-sky-500">de gestion des congés </span></h1>
          <p className="text-lg font-normal  lg:text-xl text-gray-200 dark:text-gray-900 ">Numérisez votre processus de gestion des congés avec TimeAwayTrek.</p>
     
          <Link to="/login" type="button" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700 dark:text-white max-w-36 bg-sky-400 text-gray-900 hover:bg-blue-100 hover:text-slate-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2  focus:outline-none dark:focus:ring-blue-800">Commencer</Link>

        <Articles/>
        </div>
    </section>
  )
}
