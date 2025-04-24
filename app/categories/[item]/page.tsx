"use client";
import ProductCard from "@/app/components/utilitycomponents/ProductCard";
import { useFetchProductsByTag } from "@/app/_hooks/useFetchHook";
import { usePathname } from "next/navigation";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Page = () => {
  const pathname = usePathname();
  const tagId = pathname.split("/")[2];

  const { tagProducts, isLoadingTagProducts, tagError } =
    useFetchProductsByTag(tagId);

  return (
    <div className="container mx-auto md:px-8 px-4 py-16">
      <div className="to tagnav"></div>

      <div className=" grid grid-cols-2 gap-3 md:grid-cols-4 lg:gap-x-4 xl:gap-x-6 justify-between md:gap-y-6 lg:gap-y-16 ">
        {isLoadingTagProducts ? (
          <Skeleton height={70} />
        ) : tagError ? (
          <p>an error occoured</p>
        ) : tagProducts.length <= 0 ? (
          <p>no items to show</p>
        ) : (
          tagProducts
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
              />
            ))
        )}
      </div>
    </div>
  );
};

export default Page;
