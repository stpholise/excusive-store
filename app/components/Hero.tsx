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
        duration: 200,  
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
    <div className='embla  overflow-hidden relative h-96 flex items-end justify-end  w-[894px] ' ref={emblaRef}>
        <div className=" flex flex-nowrap justify-start gap-4 h-[344px]  w-[894px]  "> 
            {
                slides.map((slide, index) => (
                    <div key={index} className={`embla__slide  w-full lg:min-w-[894px]  ${slide.color} ${index === slides.length - 1 ? 'mr-2' :''} ${index === 0 ? 'ml-2' : ''} flex justify-between items-center lg:px-10 py-6 h-full`}>
                        <div className="flex flex-col w-[444px]  text-gray-100 lg:h-72    gap-4">
                            <div className="flex gap-2 items-center">
                                <Image 
                                    src={slide.logo}
                                    alt='slide'
                                    width='40'
                                    height='40'
                                />

                                <h3 className="">
                                    {slide.title}
                                </h3>
                            </div>
                            <h2 className='text-5xl font-semibold leading-snug'> {slide.text}</h2>
                            <a href="/about" className='text-gray-100'>
                                Shop Now
                            </a>
                        </div>
                        <div className="flex items-center justify-center">
                            <Image 
                                src={slide.image}
                                alt='slide image'
                                width='100'
                                height='200'
                                className='h-72 w-80'
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