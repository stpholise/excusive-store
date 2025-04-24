"use client";
import Image from "next/image";
import Filter from "../components/shopping/Filter";
import Hero from "../components/Hero";
import Todays from "../components/shopping/Todays";
import CategoriesSection from "../components/shopping/CategoriesSection";
import BestSellingProducts from "../components/shopping/BestSellingProducts";
import CompanyProducts from "../components/shopping/CompanyProducts";
import NewArival from "../components/shopping/NewArival";
import CostomerAssurance from "../components/utilitycomponents/costomerAssurance";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { useFetchAllTags } from "@/app/_hooks/useFetchHook";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

interface TagItem {
  _id: string;
  tagTitle: string;
  tagImage: {
    asset: {
      url: string;
      _type: string;
      _ref?: string;
    };
  };
}

export default function Home() {
  const { tags } = useFetchAllTags();

  const tagItems: TagItem[] = tags;
  return (
    <div
      className={`"container mx-auto overflow-x-hidden  
    flex  flex-col  items-center justify-start min-h-screen  dark:bg-[#121212] dark:text-white bg-white text-black transition-colors 
    " ${poppins.variable} antialiased`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-8 filterhero flex flex-row justify-between xl:justify-center h-48 sm:h-56 md:h-96  ">
        <div className="hidden md:flex w-fit">
          <Filter />
        </div>
        <Hero />
      </div>
      <main className="container gap-8 mx-auto px-4 md:px-8 flex flex-col md:gap-12 lg:gap-14 py-6 md:py-12 lg:py-16 items-start ">
        <Todays />

        <div className=" w-full lg:px-40">
          <Link
            href={`/categories/${tagItems[0]?._id}`}
            className="md:px-8 md:py-3 lg:py-4  px-5 py-2 lg:px-12 bg-red-600 rounded-sm text-white"
          >
            view all products
          </Link>
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

        <section className="mid-hero  bg-gray-950 md:h-96 lg:h-[500px] w-full px-2 sm:px-4 py-4 md:px-12 md:py-16 flex">
          <div className="container mx-auto flex  flex-col gap-2 md:gap-7 lg:gap-10 md:w-6/12 items-stretch ">
            <h3 className="text-[#00FF66] text-base font-semibold">
              Categories
            </h3>
            <h2 className="lg:text-5xl md:text-3xl text-lg font-semibold text-white">
              Enhance Your Music Experience
            </h2>
            <div className="flex justify-start dark:text-black text-black gap-1 md:gap-4 lg:gap-6">
              <div className="flex flex-col p-1 w-10 h-10  lg:p-4 md:p-2 bg-white rounded-full md:h-14 md:w-14 lg:h-16 lg:w-16  items-center justify-center">
                <h3 className=" text-xs font-semibold md:text-base leading-none">
                  23
                </h3>
                <h5 className=" text-[9px] md:text-xs lg:text-sm capitalize">
                  days
                </h5>
              </div>
              <div className="flex flex-col p-1 w-10 h-10  lg:p-4 md:p-2   bg-white rounded-full  md:h-14 md:w-14 lg:h-16 lg:w-16  items-center justify-center">
                <h3 className=" text-xs font-semibold md:text-base leading-none">
                  23
                </h3>
                <h5 className=" text-[9px]  md:text-xs lg:text-sm capitalize">
                  Hours
                </h5>
              </div>
              <div className="flex flex-col  p-1 w-10 h-10   lg:p-4 md:p-2   bg-white rounded-full md:h-14 md:w-14 lg:h-16 lg:w-16  items-center justify-center">
                <h3 className=" text-xs font-semibold md:text-base leading-none">
                  23
                </h3>
                <h5 className=" text-[9px] md:text-xs lg:text-sm capitalize">
                  minutes
                </h5>
              </div>
              <div className="flex flex-col p-1 w-10 h-10   lg:p-4 md:p-3  bg-white rounded-full md:h-14 md:w-14 lg:h-16 lg:w-16  items-center justify-center">
                <h3 className=" text-xs font-semibold md:text-base leading-none">
                  23
                </h3>
                <h5 className=" text-[9px] md:text-xs lg:text-sm capitali0e">
                  seconds
                </h5>
              </div>
            </div>
            <div className="">
              <button className="capitalize px-3 py-1 md:px-9 md:py-3 lg:py-4 lg:px-12 rounded-md bg-[#00FF66] text-white font-medium">
                {" "}
                Buy Now !
              </button>
            </div>
          </div>
          <div className="md:w-6/12 text-white flex items-center justify-center">
            <Image
              src="/NoBgImages/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.svg"
              alt="hero"
              width={500}
              height={500}
              className="w-36 h-28   lg:w-[500px] lg:h-[500px]   md:w-80 md:h-80 "
            />
          </div>
        </section>

        <CompanyProducts />

        <div className=" w-full lg:px-40 flex items-center justify-center">
          <Link
            href={`/categories/${tagItems[0]?._id}`}
            className="py-2 px-4 md:px-9 md:py-3 lg:py-4 lg:px-12 bg-red-600 rounded-sm text-white"
          >
            view all products
          </Link>
        </div>

        <NewArival />

        <CostomerAssurance />
      </main>
    </div>
  );
}
