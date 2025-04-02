 "use client"
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import clsx from 'clsx'


const WishlistItems = () => {
    const items = useSelector((state: RootState) => state.wishlist.items)
    const itemsInWishlist = useSelector((state: RootState) => state.wishlist.wishlistQuantity)
    

  return (
    <div className="flex flex-col gap-9">
      <div className="">
        <h3 className="font-medium">Wishlist ({itemsInWishlist})</h3>
      </div>
     { 
      itemsInWishlist > 0 ?
      <div className={clsx('grid grid-cols-2 gap-2 md:grid-cols-4 w-full   md:gap-7 justify-start items-start',  )}>
          {   items &&
              items.map((item) => (
                  <ProductCard key={item.product.id} id={item.product.id} name={item.product.name} image={item.product.image}  stars={item.product.stars} price={item.product.price}   liked={item.product.liked}  /> 
              ))
          }
      </div>
      : <div className='flex items-center py-3 justify-center font-semibold text-red-500 text-xl' > No Item in Wishlist   </div>
      }
    </div>
  )
}

export default WishlistItems