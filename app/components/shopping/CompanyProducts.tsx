"use client";
import SectionHeader from "../utilitycomponents/SectionHeader";
import ProductCard from "../utilitycomponents/ProductCard";
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

const CompanyProducts = () => {
  const { products, isLoading } = useFetchProducts();
  const items: Items[] = products;

  return (
    <div className="w-full flex flex-col min-h-fit overflow-y-hidden overflow-x-hidden gap-5 md:gap-8 lg:gap-14">
      <div className=" top ">
        <SectionHeader
          label="Our Products"
          title="Explore our products"
          navigation={true}
        />
      </div>

      <div className=" grid grid-cols-2 gap-3 md:grid-cols-4 lg:gap-x-4 xl:gap-x-6 justify-between md:gap-y-6 lg:gap-y-16 ">
        {isLoading ? (
          <Skeleton height={70} />
        ) : (
          items
            .slice(0, 16)
            .map((item) => (
              <ProductCard
                key={item._id}
                slug={item.slug}
                _id={item._id}
                name={item.name}
                image={item.image}
                stars={item.stars}
                price={item.currentPrice}
                previousPrice={item.previousPrice}
                liked={item.liked}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default CompanyProducts;
