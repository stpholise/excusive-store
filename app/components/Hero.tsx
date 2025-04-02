"use client"  
import useEmblaCarousel from 'embla-carousel-react'
import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image' 
 

interface Slide {
    logo: string;
    title: string;
    text: string;
    color: string;
    image: string;
    link: string;
}

const slides:Slide[] = [
    {logo:'/icons/apple-logo.svg', image: '/image/hero_endframe__cvklg0xk3w6e_large 2.jpg', title: 'iPhone 14 Series', link: '/about', text: 'Up to 10% off Voucher', color: 'bg-black'},
    {logo:'/icons/apple-logo.svg', image: '/image/about-side-image.svg', title: 'iPhone 14 Series', link: '/about', text: 'Up to 10% off Voucher', color: 'bg-[#EB7EA8]'},
    {logo:'/icons/apple-logo.svg', image: '/image/hero_endframe__cvklg0xk3w6e_large 2.jpg', title: 'iPhone 14 Series', link: '/about', text: 'Up to 10% off Voucher', color: 'bg-gray-500'},
    {logo:'/icons/apple-logo.svg', image: '/image/hero_endframe__cvklg0xk3w6e_large 2.jpg', title: 'iPhone 14 Series', link: '/about', text: 'Up to 10% off Voucher', color: 'bg-gray-500'}, 
]

const Hero = () => { 
    const [selectedIndex, setSelectedIndex] = useState(0)

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true, 
        align:'start', 
        dragFree: false,
        skipSnaps: true, 
        slidesToScroll: 1 ,
        active: true,   
        duration: 70, 
        breakpoints:{
            '(max-width: 768px)': { loop: false },
        }
    },  )

 // Sync the selected index and update the embla carousel
 const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
}, [emblaApi])

   // Initialize the embla carousel and set the selected index when it changes
   useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    setSelectedIndex(emblaApi.selectedScrollSnap()) // Set initial selected index
}, [emblaApi, onSelect])


    // Scroll to the selected slide when the user clicks on the dots
    const handleDotClick = (index: number) => {
        if (emblaApi) {
            emblaApi.scrollTo(index)
        }
    }

  return (
    <div className='embla  overflow-hidden relative w-full flex h-48 min-w-80 items-center justify-center
        xs:w-[400px] xs:min-w-[400px] xs:max-w-[400px] 
        sm:w-[610px] sm:min-w-[600px]  sm:h-56 px-4 sm:justify-end sm:items-end 
        md:px-0   md:h-full  md:items-end md:justify-end  md:w-[540px] 
        lg:w-[700px] lg:max-w-[700px]  lg:h-96
        xl:min-w-[804px] xl:max-w-[894px]   xl:w-[904px]  ' ref={emblaRef}>
        <div className=" flex flex-nowrap px-8 h-40  gap-3 w-full min-w-80
            xs:w-[400px] xs:min-w-[400px] xs:max-w-[400px]
            sm:px-2 md:px-4 justify-start sm:h-48 sm:w-[600px] sm:min-w-[590px]
            md:gap-4 md:h-64 md:w-[540px]
            lg:h-80  lg:w-[700px]   lg:max-w-[700px]
            xl:h-[344px] xl:w-[894px]  xl:min-w-[894px] xl:max-w-[894px] "> 
            {
                slides.map((slide, index) => (
                    <div key={index} className={`embla__slide   rounded-lg w-full min-w-72 
                        xs:w-[390px] xs:min-w-[390px] xs:max-w-[390px] 
                        sm:w-[590px] sm:min-w-[590px]
                        md:rounded-none md:min-w-[580px] md:w-[540px]  
                        lg:min-w-[700px] lg:w-[700px]   lg:max-w-[700px]
                        xl:min-w-[894px] xl:max-w-[894px] xl:w-[894px] 
                        ${slide.color} ${index === slides.length - 1 ? '  lg:mr-2 md:mr-1 ' :''} ${index === 0 ? 'lg:ml-2 md:ml-1' : ''} flex  gap-1 md:gap-3 justify-between items-center px-4 py-4 lg:px-6 xl:px-10 lg:py-6 h-full `}>
                        <div className="flex flex-col  md:w-64 lg:w-[444px]  text-gray-100 lg:h-62 xl:h-72  gap-2  md:gap-4">
                            <div className="flex gap-1 md:gap-2 items-center">
                                <Image 
                                    src={slide.logo}
                                    alt='slide'
                                    width='40'
                                    height='40'
                                    className='md:w-10 md:h-10 w-5 h-5'
                                /> 
                                <h3 className=" text-xs md:text-sm">
                                    {slide.title}
                                </h3>
                            </div>
                            <h2 className='md:text-2xl text-xl lg:text-4xl xl:text-5xl font-semibold leading-snug'> {slide.text}</h2>
                            <a href="/about" className='text-gray-100 md:text-base text-sm'>
                                Shop Now
                            </a>
                        </div>
                        <div className="flex items-center md:w-64 lg:w-80 justify-center">
                            <Image 
                                src={slide.image}
                                alt='slide image'
                                width='100'
                                height='200'
                                className='w-28 h-24  md:h-56 lg:h-72 md:w-56 lg:w-80 '
                            />
                        </div>
                    </div>
                ))
            }
        </div>
     
            {/* Dots navigation */}
            <div className='absolute z-20 bottom-2 -translate-x-1/2 left-1/2 p-2'>
                {slides.map((item, index) => (
                    <button
                        key={item.text + index}
                        className={`rounded-full h-4 w-4  mx-1 ${selectedIndex === index ? 'bg-red-600 border-2 border-white' : 'bg-gray-400'}`}
                        onClick={() => handleDotClick(index)} // Scroll to the clicked slide
                        title={`Scroll to ${item.text}`} // Tooltip for user interaction
                    />
                ))}
            </div>
    </div>
  )
}

export default Hero