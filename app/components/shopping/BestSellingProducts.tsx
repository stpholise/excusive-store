"use client" 
import SectionHeader from "../utilitycomponents/SectionHeader"
// import ProductCard from "../utilitycomponents/ProductCard"
// import useEmblaCarousel from 'embla-carousel-react'
import ProductCarousel from "../utilitycomponents/ProductCarousel"


interface Items {
  name:string;
  id:string;
  image:string;
  percentOff?: number;
  stars:number;
  currentPrice:number;
  previousPrice:number
  liked:boolean
}

const items: Items[] = [
  {name: "The north coat", id:'aeatgg',  image:'The north coat',   stars:5, currentPrice: 120, previousPrice:160, liked:false },
  {name: "Gucci duffle bag", id:'aer34aq23',  image:'Gucci duffle bag', percentOff: 10, stars:4, currentPrice: 120, previousPrice:160, liked:false },
  {name: "RGB liquid CPU Cooler", id:'aer34a6',  image:'RGB liquid CPU Cooler',  stars:5, currentPrice: 120, previousPrice:160, liked:false },
  {name: "Small BookSelf", id:'wera34',  image:'Small BookSelf', percentOff: 40, stars:4, currentPrice: 120, previousPrice:160, liked:false },
  {name: "HAVIT HV-G92 Gamepad", id:'ertt4a',  image:'Small BookSelf', percentOff: 40, stars:5, currentPrice: 120, previousPrice:160, liked:false },
  {name: "HAVIT HV-G92 Gamepad", id:'df43423tg',  image:'Small BookSelf', percentOff: 40, stars:5, currentPrice: 120, previousPrice:160, liked:false },
  {name: "HAVIT HV-G92 Gamepad", id:'w45aer',  image:'Small BookSelf', percentOff: 40, stars:5, currentPrice: 120, previousPrice:160, liked:false },
]


const BestSellingProducts = () => {

 

  return (
    <div  className="w-full flex flex-col container overflow-x-hidden gap-5 md:gap-8 lg:gap-14">
      <div className="top  "> 
        <SectionHeader label='this month' title='Best Selling Products' viewAll={true}/> 
      </div> 
      {
        items.length > 1 &&
          <ProductCarousel items={items} wrapperWidth="" />
      }
    </div>
  )
}

export default BestSellingProducts