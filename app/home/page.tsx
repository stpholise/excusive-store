import Image from "next/image";
import Filter from "../components/shopping/Filter";
import Hero from "../components/Hero";
import Todays from "../components/shopping/Todays";
import CategoriesSection from "../components/shopping/CategoriesSection";
import BestSellingProducts from '../components/shopping/BestSellingProducts'
import CompanyProducts from "../components/shopping/CompanyProducts";
import NewArival from "../components/shopping/NewArival"; 
import CostomerAssurance from "../components/utilitycomponents/costomerAssurance";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400', '500', '700'],
})




export default function Home() {
  return (
    <div className={`"container mx-auto overflow-x-hidden
    flex  flex-col  items-center justify-start min-h-screen  dark:bg-[#121212] dark:text-white bg-white text-black transition-colors 
    " ${poppins.variable} antialiased`}>

      <div className="container mx-auto lg:px-8 filterhero flex flex-row justify-between h-96  ">
        <Filter /> 
        <Hero />
      </div>
      <main className="container mx-auto px-8 flex flex-col gap-14 py-16 items-start ">

        <Todays />
        
        <div className=" w-full lg:px-40"> 
            <button className="py-4 px-12 bg-red-600 rounded-sm text-white">view all products</button>
        </div>

        <div className="w-full "> 
          <div className="border border-gray-300 w-full"></div>
        </div>

        <CategoriesSection />
        
        <div className="w-full "> 
          <div className="border border-gray-300 w-full"></div>
        </div>
        <BestSellingProducts />


        <div className="w-full "> 
          <div className="border border-gray-300 w-full opacity-0"></div>
        </div>

        <section className='mid-hero bg-gray-950 h-[500px] w-full px-12 py-16 flex' > 
          <div className="container mx-auto flex flex-col gap-10 w-6/12 items-stretch ">
            <h3 className="text-[#00FF66] text-base font-semibold">Categories</h3>
            <h2 className="text-5xl font-semibold text-white">Enhance Your Music Experience</h2>
            <div className="flex justify-start dark:text-black text-black gap-6">
              <div className="flex flex-col p-4   bg-white rounded-full h-16 w-16  items-center justify-center">
                <h3 className="font-semibold  text-base leading-none">23</h3>
                <h5 className=' text-sm capitalize'>days</h5>
              </div>
              <div className="flex flex-col p-4  bg-white rounded-full h-16 w-16  items-center justify-center">
                <h3 className="font-semibold text-base leading-none">23</h3>
                <h5 className=' text-sm capitalize'>Hours</h5>
              </div>
              <div className="flex flex-col p-4  bg-white rounded-full h-16 w-16  items-center justify-center">
                <h3 className="font-semibold text-base leading-none">23</h3>
                <h5 className='text-sm capitalize'>minutes</h5>
              </div>
              <div className="flex flex-col p-4  bg-white rounded-full h-16 w-16  items-center justify-center">
                <h3 className="font-semibold text-base leading-none">23</h3>
                <h5 className=' text-sm capitali0e'>seconds</h5>
              </div>
            </div>
            <div className="">
              <button className="capitalize py-4 px-12 rounded-md bg-[#00FF66] text-white font-medium"> Buy Now !</button>
            </div>
          </div>
          <div className="w-6/12 text-white flex items-center justify-center">
            <Image src="/NoBgImages/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.svg" 
            alt="hero" width={500} height={500} 
             className="w-11/12 h-11/12 "
            />
          </div>
        </section>

        <CompanyProducts /> 
  
        <div className=" w-full lg:px-40 flex items-center justify-center"> 
            <button className="py-4 px-12 bg-red-600 rounded-sm text-white">view all products</button>
        </div>

        <NewArival />

      <CostomerAssurance />


      </main>

    
       
    </div>
  );
}
