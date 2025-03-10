import SectionHeader from "../utilitycomponents/SectionHeader" 
import ProductCard from "../utilitycomponents/ProductCard";
 

interface Items {
    name:string;
    id:string;
    image:string;
    percentOff: number;
    stars:number;
    currentPrice:number;
    previousPrice?:number
    liked:boolean
  }
  
  const items: Items[] = [
    {name: "Breed Dry Dog Food", id:'98aey',  image: 'Breed Dry Dog Food', percentOff: 40, stars:3, currentPrice: 120,   liked:false },
    {name: "CANON EOS DSLR Camera", id:'898ai',  image:'CANON EOS DSLR Camera', percentOff: 40, stars:4, currentPrice: 120,   liked:false },
    {name: "ASUS FHD Gaming Laptop", id:'093uh',  image:'ASUS FHD Gaming Laptop', percentOff: 40, stars:5, currentPrice: 120,  liked:false },
    {name: "Curology Product Set ", id:'oa38',  image:'Curology Product Set', percentOff: 40, stars:4, currentPrice: 120, liked:false },
    {name: "Kids Electric Car", id:'099wah',  image:'Kids Electric Car', percentOff: 40, stars:5, currentPrice: 120, liked:false },
    {name: "Jr. Zoom Soccer Cleats", id:'97e0a',  image:'Jr. Zoom Soccer Cleats', percentOff: 40, stars:5, currentPrice: 120, liked:false },
    {name: "GP11 Shooter USB Gamepad", id:'98euna',  image:'GP11 Shooter USB Gamepad', percentOff: 40, stars:5, currentPrice: 120, liked:false },
    {name: "Quilted Satin Jacket", id:'0e9a9jf',  image:'Quilted Satin Jacket', percentOff: 40, stars:4, currentPrice: 120, liked:false },
  ]
  


const CompanyProducts = () => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden gap-14">
        <div className=" top "> 
            <SectionHeader label='Our Products' title='Explore our products' navigation={true}/>
        </div>
      
        <div className=" grid grid-cols-4 gap-x-8 gap-y-16 ">
          {
               items.map((item) => (
                <ProductCard key={item.id} id={item.id} name={item.name} image={item.image}  stars={item.stars} price={item.currentPrice} previousPrice={item.previousPrice} liked={item.liked}  /> 
            ) )
          }
        </div> 
    </div>
  )
}

export default CompanyProducts