"use client"
 
import SectionHeader from '../utilitycomponents/SectionHeader'
import CategoryCard from "../utilitycomponents/CategoryCard"; 
import { useFetchAllTags } from "@/app/_hooks/useFetchHook";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface TagItem {
  _id: string;
  tagTitle:string;
  tagImage: {
    asset: {
      url: string;
      _type: string;
      _ref?: string;
    }
  };
}



const CategoriesSection = () => {

  const { tags, isLoadingTags, errorFetchingTags} = useFetchAllTags()
  
  const tagItems: TagItem[] = tags 

  return (
    <div className="w-full flex flex-col gap-4 md:gap-8  lg:gap-14">
      <div className="top  "> 
        <SectionHeader label='Categories' title='Brouse By Categories' navigation={true}/>      
      </div>
      <div className="grid grid-cols-2 gap-1 md:grid-cols-6 md:gap-4  lg:gap-6 ">
        { isLoadingTags ? <Skeleton /> : errorFetchingTags ? <p> error fetching page</p>:
          tagItems.slice(0,5).map((item, index) => 
          (
            <CategoryCard  key={index} tagId={item._id} title={item.tagTitle} icon={item.tagImage.asset.url} />
          )
          )
        }
      </div>
    </div>
  )
}

export default CategoriesSection