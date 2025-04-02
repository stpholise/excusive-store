
import useEmblaCarousel from 'embla-carousel-react'
import ProductCard from './ProductCard';
import clsx from 'clsx'


interface Items {
    name:string;
    _id:string; 
    image:{
      url: string;
      alt:string
  };
    percentOff?: number;
    stars?:number;
    currentPrice:number;
    previousPrice?:number
    liked?:boolean 
 }
  
 interface ProductCarouseProps {
    items: Items[];
    wrapperWidth?: string; 
 }

const ProductCarousel = ({items,wrapperWidth,} : ProductCarouseProps) => { 

      const [emblaRef] = useEmblaCarousel({
        loop:false,
        align:'start', 
        dragFree: false,
        skipSnaps: true, 
        slidesToScroll: 1 ,
        active: true,   
        duration: 100,
      })

      if (items.length === 0) {
        return <p>No items to display.</p>;
      }

  return (
    <div className={clsx("flex   overflow-hidden ", {
        'xl:w-[1416px] lg:w-[1216px] md:w-[900px]' : wrapperWidth,
        
    })} ref={emblaRef}>
    <div className="flex flex-nowrap justify-start gap-3 w-80 md:gap-7 xs:w-[400px] sm:w-[610px] md:h-64 lg:h-[344px] md:w-[800px] lg:w-[900px] xl:w-[1216px]">
      { items.length > 1 &&
           items.slice(0,12).map((item) => (
            <ProductCard key={item._id} _id={item._id} name={item.name} percentOff={item.percentOff} image={item.image}   stars={item?.stars} price={item.currentPrice} previousPrice={item.previousPrice} liked={item?.liked}  /> 
        ) )
      }
    </div>
  </div>
  )
}

export default ProductCarousel