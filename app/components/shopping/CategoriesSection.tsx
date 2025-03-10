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
    <div className="w-full flex flex-col  gap-14">
      <div className="top  "> 
        <SectionHeader label='Categories' title='Brouse By Categories' navigation={true}/>      
      </div>
      <div className="grid grid-cols-6 gap-6">
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