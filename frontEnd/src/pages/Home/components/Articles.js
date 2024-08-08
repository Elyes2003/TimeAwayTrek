import Card from "./Card"


const Articles = () => {
  const text1 = "1. Automatiser la gestion des congés évite les erreurs, améliore la transparence et réduit la charge administrative pour les RH."
  const text2 = "2. L'automatisation rend la planification des congés plus facile pour les employés et les gestionnaires."
  const text3 = "3. Centraliser le processus permet de mieux gérer l'utilisation des congés, ce qui optimise la planification des effectifs."
  return (
    <div className="w-full" >

        <div className="w-full flex flex-col lg:flex-row items-center justify-center mt-8 dark:text-white">
            <Card image={require("../../../assets/images/card1.jpg")} text={text1}/>
            <Card image={require("../../../assets/images/card3.jpg")} text={text2}/>
            <Card image={require("../../../assets/images/card2.jpg")} text={text3}/>
        </div>
    </div>
  )
}

export default Articles
