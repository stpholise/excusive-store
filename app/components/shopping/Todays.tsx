"use client";
import SectionHeader from "../utilitycomponents/SectionHeader";
import ProductCarousel from "../utilitycomponents/ProductCarousel";

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

const Todays = () => {
  const { products, isLoading } = useFetchProducts();

  // const {  _id: id, name,  image.url : image, percentOfff, stars, currentPrice, priviousPrice } = products

  const items: Items[] = products;

  return (
    <div className=" flex flex-col md:mt-10 gap-4 container mx-auto  ">
      <div className="top">
        <SectionHeader
          label="Today's"
          title="Flash Sales"
          coutdownTime={7}
          navigation={true}
        />
      </div>
      {isLoading ? (
        <Skeleton height={80} />
      ) : (
        <ProductCarousel items={items} wrapperWidth={"1400px"} />
      )}
    </div>
  );
};

export default Todays;
