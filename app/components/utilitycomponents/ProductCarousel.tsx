
import useEmblaCarousel from 'embla-carousel-react'
import ProductCard from './ProductCard';
import clsx from 'clsx'


interface Items {
    name:string;
    id:string;
    image:string;
    percentOff?: number;
    stars:number;
    currentPrice:number;
    previousPrice?:number
    liked:boolean 
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
        'w-[1416px]' : wrapperWidth,
        
    })} ref={emblaRef}>
    <div className="flex flex-nowrap justify-start gap-7 h-[344px]  w-[1216px]">
      { items.length > 1 &&
           items.map((item) => (
            <ProductCard key={item.id} id={item.id} name={item.name} percentOff={item.percentOff} image={item.image}   stars={item.stars} price={item.currentPrice} previousPrice={item.previousPrice} liked={item.liked}  /> 
        ) )
      }
    </div>
  </div>
  )
}

export default ProductCarousel