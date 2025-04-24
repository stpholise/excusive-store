"use client";
import ProductCarousel from "../components/utilitycomponents/ProductCarousel";
import SectionHeader from "../components/utilitycomponents/SectionHeader";

import WishlistItems from "../components/utilitycomponents/WishlistItems";

import { useFetchProducts } from "@/app/_hooks/useFetchHook";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Items {
  name: string;
  _id: string;
  slug: string;
  image: {
    url: string;
    alt: string;
  };
  percentOff?: number;
  stars?: number;
  currentPrice: number;
  previousPrice?: number;
  liked?: boolean;
}

const Page = () => {
  const { products, isLoading } = useFetchProducts();
  const items: Items[] = products;
  return (
    <div className="container mx-auto px-4 md:px-8 py-16 gap-14 ">
      <WishlistItems />
      <div className="w-full flex flex-col container mx-auto overflow-x-hidden   gap-5 mb-12">
        <div className="top  ">
          <SectionHeader label="Just For You" />
        </div>
        {isLoading ? (
          <Skeleton />
        ) : (
          <ProductCarousel items={items} wrapperWidth="" />
        )}
      </div>
    </div>
  );
};

export default Page;
