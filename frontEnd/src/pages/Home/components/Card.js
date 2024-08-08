
const Card = ({image,text}) => {
  return (
    <div className="group w-[16rem] h-[18rem] lg:mr-8 rounded-lg overflow-hidden cursor-pointer mb-6 lg:mb-0 " >
        <div className="h-[60%] group-hover:scale-110 duration-500 " >
            <img src={image} />
        </div>

        <div className="h-[40%] bg-white p-4   dark:bg-gray-900" >
            <p className="text-sm" >
            {text}
            </p>
        </div>
    </div>
  )
}

export default Card