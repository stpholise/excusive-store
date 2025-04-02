"use client";
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import Rating from '@/app/components/utilitycomponents/Rating';
import SectionHeader from '@/app/components/utilitycomponents/SectionHeader';
import ProductCarousel from '@/app/components/utilitycomponents/ProductCarousel';
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

const size = [
  'xs', 's', 'm', 'lg', 'xl'
]

// interface Items {
//   name:string;
//   id:string;
//   image:string;
//   percentOff?: number;
//   stars:number;
//   currentPrice:number;
//   previousPrice:number
//   liked:boolean
// }

// const items: Items[] = [
//   {name: "The north coat", id:'aeatgg',  image:'The north coat',   stars:5, currentPrice: 120, previousPrice:160, liked:false },
//   {name: "Gucci duffle bag", id:'aer34aq23',  image:'Gucci duffle bag', percentOff: 10, stars:4, currentPrice: 120, previousPrice:160, liked:false },
//   {name: "RGB liquid CPU Cooler", id:'aer34a6',  image:'RGB liquid CPU Cooler',  stars:5, currentPrice: 120, previousPrice:160, liked:false },
//   {name: "Small BookSelf", id:'wera34',  image:'Small BookSelf', percentOff: 40, stars:4, currentPrice: 120, previousPrice:160, liked:false },
//   {name: "HAVIT HV-G92 Gamepad", id:'ertt4a',  image:'Small BookSelf', percentOff: 40, stars:5, currentPrice: 120, previousPrice:160, liked:false },
//   {name: "HAVIT HV-G92 Gamepad", id:'df43423tg',  image:'Small BookSelf', percentOff: 40, stars:5, currentPrice: 120, previousPrice:160, liked:false },
//   {name: "HAVIT HV-G92 Gamepad", id:'w45aer',  image:'Small BookSelf', percentOff: 40, stars:5, currentPrice: 120, previousPrice:160, liked:false },
// ]

const Page = () => {
  const pathname = usePathname();  
  const { products, isLoading  } = useFetchProducts()

  const items: Items[] = products 

  return (
    <div className='container mx-auto px-4 lg:px-8 flex flex-col gap-16 lg:py-14'>
      <div className="">
        <p>Home{pathname}</p>
      </div>
      <div className="product flex flex-col lg:flex-row gap-12 justify-between ">
            <div className="imgsection flex flex-col-reverse  lg:flex-row gap-4 md:gap-8 ">
              <div   className=" lg:h-[600px] flex lg:grid grid-cols-1 grid-rows-4  overflow-hidden gap-4 items-center justify-center">
              {
                items.slice(0,4).map((_, index) => (
                  <div key={index} className="display flex p-2 bg-gray-50 w-36 h-20 xs:h-36 md:w-44 md:h-32 items-center justify-center ">
                    <Image 
                      src={`/productImage/Frame-Gamepad.svg`}
                      alt='item image'
                      width='100'
                      height='100'
                      className='bg-gray-50 W-11/12   '
                    />
                  </div>
                  ))
                }
                </div>
               <div  className="display p-2 flex h-full lg:w-[500px] lg:h-[600px] bg-gray-50    items-center justify-center">
                    <Image 
                      src={`/productImage/Frame-Gamepad.svg`}
                      alt='item image'
                      width='100'
                      height='100'
                      className='w-11/12  '
                    />
                  </div>
            </div>
            <div className="product-information w-full sm:w-[400px] h-[600px] flex flex-col justify-between ">
                <div className="flex flex-col gap-5 h-96">
                    <h2 className="text-2xl font-semibold">Havic HV G-92 Gamepad</h2>
                    <div className="rating flex gap-3 text-sm text-gray-500">
                        <span className="flex gap-1">
                        <Rating  stars={4}/> (50 Reviews)</span> | <span className='text-green-400'> In Stock </span>
                    </div>
                    <p> $192.00</p>
                    <p className='text-sm'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                    <div className="border-b border-gray-800"></div>
                    <div className="flex gap-4">
                      <p className='text-smibold'>color :</p> 
                      <div className="flex gap-2 items-center"> 
                        <div className="w-3 h-3 rounded-full bg-blue-400 border border-black"> </div> 
                        <div className="w-3 h-3 rounded-full bg-red-400    "></div>
                      </div>
                    </div>
                    <div className="specification">
                      <div className="flex gap-4   "> 
                        <p className="">Size:</p> 
                        <div className="flex items-center gap-3 "> 
                          {
                            size.map((item) =>(
                              <button key={item} className="shadow border transition-colors duration-500 ease-in-out border-gray-600 hover:text-white hover:bg-red-600 px-1 w-7 h-6 rounded-sm"> {item}</button>
                            ))
                          } 
                        </div>
                      </div>
                      </div> 
                      <div className=" flex justify-between gap-4 mb-5 sm:mb-0">
                        <div className=" flex justify-between gap-1 items-center w-40 h-10 rounded-md">
                          <div className=" w-10 h-10 hover:bg-red-600 transition-colors duration-500 ease-in-out rounded-l-md group/minus text-center text-3xl flex items-center justify-center">
                            <Image 
                                src={'/icons/icon-minus.svg'}
                                alt='like this'
                                width='24'
                                height='24'
                                className='group-hover/minus:invert'
                            />
                          </div>
                            <p>2</p>
                          <div className=" w-10 group/plus h-10 text-center transition-colors duration-500 ease-in-out rounded-r-md hover:bg-red-600 text-3xl flex items-center justify-center"> 
                            <Image 
                                src={'/icons/icon-plus.svg'}
                                alt='like this'
                                width='24'
                                height='24'
                                className='group-hover/plus:invert'
                            />
                          </div>
                        </div>
                        <button className=' px-5 rounded-md bg-red-600 lg:w-40 lg:h-10 text-sm font-medium text-white'>Buy Now </button>
                        <button title='wishlist' type='button' className='flex items-center justify-center border border-gra-300 w-10 h-10'>
                            <Image 
                              src={'/icons/Wishlist.svg'}
                              alt='like this'
                              width='24'
                              height='24'
                            />
                        </button>
                      </div>
                          
                </div>
                      <div className=" border border-gray-700 rounded-md h-48 ">
                        <div className=" flex items-center gap-4 p-4">
                          <div className="">
                            <Image 
                              src='/icons/icon-delivery.svg'
                              alt='truck '
                              width='40'
                              height='40'
                              className='invert'
                            />
                          </div>
                          <div className="">
                            <h5>Free Delivery</h5>
                            <p>Enter your postal code for Delivery</p>
                          </div> 
                        </div>
                        <div className="border-b border-gray-800"></div>
                        <div className=" flex items-center p-4 gap-4">
                          <div className="">
                            <Image 
                              src='/icons/Icon-Reviews.svg'
                              alt='truck '
                              width='40'
                              height='40'
                              className='invert'
                            />
                          </div>
                          <div className="">
                            <h5>Return Delivery</h5>
                            <p>Free 30 Days Deliver Return Details</p>
                          </div> 
                        </div>
                      </div>
             
            </div>
      </div> 

      <div  className="w-full flex flex-col container mx-auto overflow-x-hidden   gap-5 mb-12">
        <div className="top  "> 
          <SectionHeader label='related items'   /> 
        </div> 
          {
             isLoading ? <Skeleton /> :
              <ProductCarousel items={items} wrapperWidth="" />
          }
      </div> 
    </div>
  );
};

export default Page;
