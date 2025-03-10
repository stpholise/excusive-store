"use client"
import Nav from './utilitycomponents/Nav' 
import Image from 'next/image'
import clsx from 'clsx'
import Link from 'next/link' 
import { useSelector } from 'react-redux'
import type { RootState } from "../store";
import AccountDropdown from './utilitycomponents/AccountDropdown'

import { useState } from 'react' 

const Header = () => { 
  const [showDropdown, setShowDropdown] = useState(false)
  const itemsInCart = useSelector((state: RootState ) => state.cart.totalQuantity)
  const itemsInWishlist = useSelector((state: RootState) => state.wishlist.wishlistQuantity)
  
  
  return (
    <div className="w-full">
        <div className='container mx-auto flex justify-between items-center px-8 py-6 w-full' >
            <div className="logo font-semibold">
              <Link href={'/'} className='font-bold text-2xl'>Exclusive</Link> 
            </div> 

            <Nav/> 

          <div className=" flex items-center  gap-6   justify-center">
            <form className="search w-60  bg-gray-200 px-3 py-2 flex gap-3 h-8 items-center justify-center ">
              <input type="text" placeholder="Search" className='bg-transparent outline-none h-6 h-11/12 w-10/12' />
              <button title='search' type="submit"> 
              <Image 
                src='/icons/search.svg'
                alt='search'
                width={18}
                height={18} 
              />
              </button>
            </form> 
            <div className="flex gap-4 items-center">
              <div className="relative flex items-center justify-center">
                {
                  itemsInWishlist > 0 &&
                  <p className="postion absolute text-xs -top-1 -right-1 z-10 bg-red-600 rounded-full w-4 h-4 text-white flex items-center justify-center">{itemsInWishlist}</p>
                }
                <Link href={'/wishlist'}   >
                  <Image 
                    src='/icons/Wishlist.svg'
                    alt='wishlist'
                    width={30}
                    height={30}
                    className='dark:invert'
                  />
                </Link>
              </div>
              <div className="relative flex items-center justify-center">
                {
                  itemsInCart > 0 &&
                  <p className="postion absolute text-xs -top-1 -right-1 z-10 bg-red-600 rounded-full w-4 h-4 text-white flex items-center justify-center">{itemsInCart}</p>
                }
                <Link href={'/cart'} className="">
                  <Image 
                    src='/icons/Cart1 with buy.svg'
                    alt='cart'
                    width={30}
                    height={30}
                    className='dark:invert'
                  />
                </Link>
              </div>
              <div className="relative"> 
                <button type='button' title='cart' onClick={() => setShowDropdown(!showDropdown)} 
                    className={clsx('dark:text-white rounded-full w-9 h-9 flex item-center justify-center',{
                      'bg-red-600 ': showDropdown,
                      'bg-white': !showDropdown
                    })}>
                  <Image 
                    src={`/icons/${showDropdown ? 'light-user' :'user'}.svg`}
                    alt='user'
                    width={30}
                    height={30}
                    className='dark:invert transition-colors duration-500 ease-in-out'
                  /> 
                </button>
                <div className={clsx("absolute top-10 right-0",{
                  'block': showDropdown,
                  'hidden': !showDropdown
                })}>
                  <AccountDropdown />
                </div>
              </div>
            </div>
          </div> 
          {
            showDropdown &&
            <div className="overlay fixed top-0 bottom-0 left-0 right-0  z-30 " onClick={() => setShowDropdown(false)}></div>
          }
        </div>
    <div className="border border-gray-300 w-full"></div>
    </div>
  )
}

export default Header