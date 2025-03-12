"use client"
 
import SectionHeader from '../utilitycomponents/SectionHeader'
import CategoryCard from "../utilitycomponents/CategoryCard";


interface Category {
  title:string;
  icon: string;
}

const category: Category[] = [
  {title: "Phones", icon: 'Category-CellPhone.svg',  },
  {title: "Computer", icon: 'Category-Computer.svg',  },
  {title: "SmartWatch", icon: 'Category-SmartWatch.svg',  },
  {title: "Camera", icon: 'Category-Camera.svg',  },
  {title: "Headphones", icon: 'Category-Headphone.svg',  },
  {title: "Gaming", icon: 'Category-Gamepad.svg',  }, 
]

const CategoriesSection = () => {
  
  return (
    <div className="w-full flex flex-col gap-4 md:gap-8  lg:gap-14">
      <div className="top  "> 
        <SectionHeader label='Categories' title='Brouse By Categories' navigation={true}/>      
      </div>
      <div className="grid grid-cols-2 gap-1 md:grid-cols-6 md:gap-4  lg:gap-6 ">
        {
          category.map((item, index) => 
          (
            <CategoryCard  key={index} title={item.title} icon={item.icon} />
          )
          )
        }
      </div>
    </div>
  )
}

export default CategoriesSection