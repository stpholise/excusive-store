 "use client"
 import Image from 'next/image'
//  import Link from 'next/link'
 import { Poppins } from 'next/font/google';
import Rating from './Rating';
import clsx from 'clsx';

import { useDispatch,   } from 'react-redux' 

import { addToCart } from '../../store/slices/cartSlice'
import { addToWishlist } from '../../store/slices/wishlistSlice'
import { useState } from 'react'


 interface Items {
    id: string;
    name:string;
    image:string;
    percentOff?: number;
    stars:number;
    price:number;
    previousPrice?:number
    liked:boolean
 }
 
interface Product {
    id:string
    name:string;
    image:string;
    percentOff?: number;
    stars:number;
    price:number;
    previousPrice?:number
    liked:boolean
 }

 const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ['400', '500', '600', '700'], 
 })

 
 const ProductCard = ({id,name, image, percentOff, stars, price, previousPrice, liked}:Items) => {
     const dispatch = useDispatch()
     const [ isLiked, setIsLiked ] = useState(liked)
     
    const product:Product = {id, name, image, price, percentOff, stars, liked: isLiked}
    const quantity = 1

     const handleCartUpdate = () => { 
        dispatch(addToCart({product, quantity} ))
     }
     
     const updateWishlist = () => {
        setIsLiked((prev) => !prev);  
        dispatch(addToWishlist({id, product}))
     }
     console.log(liked)
    
    return (
    <div className={`"min-w-40   md:h-64  md:w-40 md:min-w-40 lg:min-w-56 lg:max-w-56 lg:w-56 xl:w-64 xl:min-w-[200px] xl:max-w-[20px] flex flex-col gap-4 " ${poppins.variable}`}>
        <div className="relative md:overflow-hidden min-h-40 max-h-64 bg-gray-200 md:h-40 min-w-36 lg:min-w-56 xl:min-w-64 xl:h-64 lg:h-56  flex items-center justify-center">
            <Image 
            src={`/productImage/${image}.svg`}
            alt="Next.js logo"
            width='70'
            height='70'
            className='w-9/12 x min-w-32 max-w-32 min-h-32 max-h-32 md:max-h-36 md:max-w-36 lg:max-h-52 lg:max-w-44  object-contain'
            />
            {percentOff && <p className="absolute top-2 left-2 lg:top-4 lg:left-4 w-10  md:w-14 h-6 bg-red-600 text-center  text-white rounded-md text-xs flex items-center justify-center"><span className="">-</span>{percentOff}%</p>}
            <div className="absolute top-2 right-2 md:top-2 md:right-2 lg:top-4 lg:rigth-4"> 
                <button title='wishlist' className="h-6 w-6 md:h-7 md:w-7 bg-white rounded-full flex items-center justify-center" onClick={updateWishlist}>
                   {
                    product.liked ? 
                    <Image 
                    src='/icons/red-heart.svg'
                    alt='wishlist'
                    width='20'
                    height='20'
                    className='w-3 md:w-4 max-h-12 max-w-12 object-contain '
                    />:
                    <Image 
                    src='/icons/Wishlist.svg'
                    alt='wishlist'
                    width='24'
                    height='24'
                    className='w-5 md:w-6 max-h-12 max-w-12 object-contain '
                    />
                   } 
                </button>
                <div className="addToCart"></div>
            </div>
            <div  className="absolute transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100 bottom-0 w-full h-9 bg-black flex gap-3 items-center justify-center">
                <Image 
                src='/icons/light-Cart1.svg'
                alt="cart-icono"
                width='24'
                height='24'
                className='w-6 h-6 max-h-12 max-w-12 object-contain'
                />
                <button onClick={handleCartUpdate} className="text-white text-sm">Add to Cart</button>
            </div>
        </div>
        <div className={ " flex flex-col gap-1 md:gap-2" }>
            <h3 className="title text-sm md:text-sm lg:text-base font-medium">{name}</h3>
            <div className={clsx(" flex gap-1 md:gap-2  ", {
                    'flex-col items-start': previousPrice,
                    'flex-row items-center justify-start': !previousPrice
                }
            )}>
                <div className="price flex gap-5 lg:text-base md:text-sm">
                    <p className="current text-red-400 ">${price}</p>
                    <p className={clsx("previous line-through text-gray-500",{
                        'hidden': !previousPrice
                    })}>${previousPrice}</p>
                </div>
                <div className="stars flex items-center">
                    <Rating stars={stars} />     
                    <p className='text-gray-500 text-sm'>(88)</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard