"use client";
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import Rating from '@/app/components/utilitycomponents/Rating';
import SectionHeader from '@/app/components/utilitycomponents/SectionHeader';
import ProductCarousel from '@/app/components/utilitycomponents/ProductCarousel';
import { useFetchProducts } from '@/app/_hooks/useFetchHook';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useFetchSingleProductBySlug } from '@/app/_hooks/useFetchHook' 
import ProductImage from '@/app/components/utilitycomponents/ProductImage';
import { PortableTextBlock } from '@sanity/types'
import { PortableText } from '@portabletext/react'
 


 interface Items {
    name:string;
    _id:string;
    slug: string;
    image:{
      url: string;
      alt: string;
    };
    additionalImages?:  {
      "url": string;
      "alt": string;
    }[];
    description?: string;
    percentOff?: number;
    detail?: PortableTextBlock;
    stars?:number;
    currentPrice:number;
    previousPrice?:number
    liked?:boolean 
 }



const size = [
  'xs', 's', 'm', 'lg', 'xl'
]

 

const Page = () => {
  const pathname = usePathname();  

  const slug = pathname.split('/')[2]


  const { products, isLoading  } = useFetchProducts()
  const { singleProduct, isLoadingSingleProduct , singleProdcutError  } = useFetchSingleProductBySlug(slug)
 
  const currentProduct : Items = singleProduct[0]  
  
  const imageUrl = currentProduct?.image || '/productImage/Frame-Gamepad.svg';
  const additionalImages = currentProduct?.additionalImages || []
 console.log(currentProduct?.detail)  
  const items: Items[] = products 

  return (
    <div className='container mx-auto px-4 lg:px-8 flex flex-col gap-16 lg:py-14'>
      <div className="">
        <p>Home{pathname} {slug} </p>
      </div>
      <div className="product flex flex-col lg:flex-row gap-12 justify-between ">
            <div className="imgsection flex flex-col-reverse  lg:flex-row gap-4 md:gap-8 ">
              <div   className=" lg:h-[600px] flex lg:grid grid-cols-1 grid-rows-4  overflow-hidden gap-4 items-center justify-center">
              {    isLoadingSingleProduct ? <Skeleton /> :
               additionalImages.map((item , index) => ( 
                        <ProductImage key={index} item={item} /> 
                  ))
                  
                }
                </div>
           { isLoadingSingleProduct? <Skeleton />  : singleProdcutError ? <p> an error occorued</p> :
               <div  className="display flex  lg:w-[500px] h-fit lg:min-h-96 lg:max-h-[600px] bg-gray-50    items-center justify-center">
                    <Image 
                      src={imageUrl.url}
                      alt='item image'
                      width='100'
                      height='100'
                      className='w-full lg:min-h-96 lg:max-h-[600px] h-auto '
                    />
                  </div>}

            </div>
            <div className="product-information w-full sm:w-[400px] h-[600px] flex flex-col justify-between ">
                <div className="flex flex-col gap-5 h-96">
                  {
                            isLoadingSingleProduct? <Skeleton /> :
                            <h2 className="text-2xl font-semibold capitalize">{currentProduct.name}</h2>

                  }
                    <div className="rating flex gap-3 text-sm text-gray-500">
                        <span className="flex gap-1">
                          {
                            isLoadingSingleProduct? <Skeleton /> :
                            <Rating  stars={currentProduct.stars}/>
                          }
                          (50 Reviews)</span> | <span className='text-green-400'> In Stock </span>
                    </div>
                    <p> $192.00</p>
                    { 
                         isLoadingSingleProduct? <Skeleton />  : singleProdcutError ? <p> an error occorued</p> :
                        <p className='text-sm'>  {currentProduct.detail && <PortableText value={currentProduct.detail} />}</p>
                    }
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
