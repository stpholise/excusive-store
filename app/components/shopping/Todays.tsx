 "use client" 
import SectionHeader from "../utilitycomponents/SectionHeader";
import ProductCarousel from "../utilitycomponents/ProductCarousel";

import { useFetchProducts } from '@/app/_hooks/useFetchHook';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

 interface Items {
    name:string;
    _id:string;
    image:{
      url: string;
      alt: string;
    };
    percentOff?: number;
    stars?:number;
    currentPrice:number;
    previousPrice?:number
    liked?:boolean 
 }



// const items: Items[] = [
//     {name: "HAVIT HV-G92 Gamepad",id:'12wa', image:'Frame-Gamepad', percentOff: 40, stars:5, currentPrice: 120, previousPrice:160, liked:false },
//     {name: "AK-900 Wired Keyboard", id:'13wa', image:'AK-900 Wired Keyboard', percentOff: 35, stars:4, currentPrice: 120, previousPrice:160, liked:false },
//     {name: "IPS LCD Gaming Monitor", id:'14wq',  image:'IPS LCD Gaming Monitor', percentOff: 30, stars:5, currentPrice: 120, previousPrice:160, liked:false },
//     {name: "S-Series Comfort Chair ", id:'15ew',  image:'S-Series Comfort Chair', percentOff: 25, stars:5, currentPrice: 120, previousPrice:160, liked:false },
//     {name: "HAVIT HV-G92 Gamepad", id:'12wqc',  image:'Frame-Gamepad', percentOff: 40, stars:3, currentPrice: 120, previousPrice:160, liked:false },
//     {name: "HAVIT HV-G92 Gamepad", id:'12e3w',  image:'Frame-Gamepad', percentOff: 40, stars:4, currentPrice: 120, previousPrice:160, liked:false },
//     {name: "HAVIT HV-G92 Gamepad", id:'1343fs',  image:'Frame-Gamepad', percentOff: 40, stars:4, currentPrice: 120, previousPrice:160, liked:false },
// ]


const Todays = () => {

  const { products, isLoading  } = useFetchProducts()

  
  // const {  _id: id, name,  image.url : image, percentOfff, stars, currentPrice, priviousPrice } = products

 const items: Items[] = products 

  return (
    <div className=" flex flex-col md:mt-10 gap-4 container mx-auto  ">
        <div className="top"> 
           <SectionHeader label="Today's" title='Flash Sales' coutdownTime={7} navigation={true}/> 
        </div> 
        {
            isLoading ? <Skeleton height={80} />  :
            <ProductCarousel items={items} wrapperWidth={'1400px'}  />
        }
    </div>
  )
}

export default Todays