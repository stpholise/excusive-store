"use client";
import SectionHeader from "../utilitycomponents/SectionHeader";
import ProductCarousel from "../utilitycomponents/ProductCarousel";
import { useFetchProductsByTag } from "@/app/_hooks/useFetchHook";
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

const BestSellingProducts = () => {
  const { tagProducts, isLoadingTagProducts } = useFetchProductsByTag(
    "b5ee63b1-8498-4b7b-bff6-38ffdf0bdbf2",
  );

  const items: Items[] = tagProducts;

  return (
    <div className="w-full flex flex-col container overflow-x-hidden gap-5 md:gap-8 lg:gap-14">
      <div className="top  ">
        <SectionHeader
          label="this month"
          title="Best Selling Products"
          viewAll={true}
          viewAllHref={`/categories/b5ee63b1-8498-4b7b-bff6-38ffdf0bdbf2}`}
        />
      </div>
      {isLoadingTagProducts ? (
        <Skeleton height={80} />
      ) : (
        <ProductCarousel items={items} wrapperWidth="" />
      )}
    </div>
  );
};

export default BestSellingProducts;
