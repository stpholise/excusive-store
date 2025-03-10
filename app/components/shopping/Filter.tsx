import React from 'react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ['400', '500', '700'],
  })
  

interface FilterBy {
    title: string
    value: string
}

const filterBy:FilterBy[] = [
    {title: 'Womens Fashion', value: 'womens-fashion'},
    {title: 'Mens Fashion', value: 'mens-fashion'},
    {title: 'Kids Fashion', value: 'kids-fashion'},
    {title: 'Electornics', value: 'electronics'},
    {title: 'Home & Lifestyle', value: 'home-lifestyle'},
    {title: 'Medicine' , value: 'medicine'},
    {title: 'Sports & Outdoor', value: 'sports-outdoor'},
    {title: 'Babies & Toys', value: 'babies-toys'},
    {title: 'Groceries & Fodd', value: 'groceries-food'},
    {title: 'Health & Beauty', value: 'health-beauty'},
]

const Filter = () => {
  return (
    <div className="h-96 flex flex-col items-center justify-end lg:border-r-2   border-gray-200"> 
        <div className={`flex flex-col gap-2 justify-evenly h-[344px]  font-poppins w-56   ${poppins.variable}  `}>
            {
                filterBy.map((item, index) => (
                    <div key={index} className="flex items-center gap-2"> 
                        <button>{item.title}</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Filter