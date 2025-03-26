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
    <div className="h-96 flex flex-col items-center justify-end lg:border-r-2  w-full border-gray-200"> 
        <div className={`flex flex-col gap:1 lg:gap-2 justify-evenly h-[344px] w-full font-poppins text-sm md:w-36 lg:w-56   ${poppins.variable}  `}>
            {
                filterBy.map((item, index) => (
                    <div key={index} className="flex justify-start items-center  lg:gap-2 "> 
                        <button className=''>{item.title}</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Filter