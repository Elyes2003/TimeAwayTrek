import { Link } from 'react-router-dom'
import image from '../../../assets/images/OIP.jpg'
export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center">
        <div className="text my-5 mr-1">
            <h1 className="text-3xl font-bold">Le système ultime de gestion des congés</h1>
            <p className="text-xl my-7 px-1 dark:text-slate-300">TimeAwayTrek se démarque comme la première plateforme de renom dédiée à la gestion des congés. Simplifiez la transition vers une gestion numérique transparente de vos congés avec TimeAwayTrek.</p>
            <Link to="/about" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Voir plus</Link>
        </div>
        <div className="visual my-5 lg:max-w-xl">
            <img className="rounded-lg max-w-96" src={image} alt="CodeBook Hero Section" />
        </div>
    </section>
  )
}
