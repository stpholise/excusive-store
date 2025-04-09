
import Image from 'next/image' 
import Link from 'next/link'

interface Category {
    tagId:string;
    title:string;
    icon: string;
  }
  


const CategoryCard = ({tagId, title, icon} : Category) => {
   
  return (
  <Link href={`/categories/${tagId}`}>
    <div className="flex flex-col items-center  gap-2 border-2 border-gray-200 rounded-sm px-4 py-4">
         
          <div className="lg:w-20  lg:h-20  md:w-10 md:h-10 rounded-full flex items-center justify-center">
          <Image src={icon} 
              alt={tagId} 
              width={40}
              height={40}
              className='stroke-current  lg:w-20 lg:h-20 md:w-12 md:h-12   hover:invert-0 dark:invert  outline-white outline-2'
              />
          </div>
       
        <p className="text-sm text-center  ">{title}</p>
  </div>
  </Link>
  )
}

export default CategoryCard