
import Image from 'next/image'

interface Category {
    title:string;
    icon: string;
  }
  


const CategoryCard = ({title, icon} : Category) => {
    const path= `/icons/${icon}`
  return (
    <div className="flex flex-col items-center  gap-2 border-2 border-gray-200 rounded-sm px-4 py-4">
        <div className="lg:w-20  lg:h-20  md:w-10 md:h-10 rounded-full flex items-center justify-center">
        <Image src={path} 
            alt={title} 
            width={40}
            height={40}
            className='stroke-current  lg:w-10 lg:h-10 md:w-8 md:h-8   hover:invert-0 dark:invert  outline-white outline-2'
        />
        </div>
        <p className="text-sm text-center  ">{title}</p>
  </div>
  )
}

export default CategoryCard