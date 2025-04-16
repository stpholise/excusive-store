import Countdown from "../shopping/Countdown"
import Link from "next/link";

interface SectionHeader{
    label?: string;
    title?: string;
    coutdownTime?: number | string;
    viewAll?:boolean;
    navigation?:boolean;
    viewAllHref?: string;
}

const SectionHeader = ({label,title, coutdownTime, viewAll, navigation, viewAllHref}: SectionHeader) => {
  return (
    <div className="top flex flex-col gap-2 lg:gap-5"> 
        {
            label &&
            <div className="flex justify-start gap-1 md:gap-4 text-red-600 items-center">
                <div className=" w-3 h-5 md:w-5 Md:h-8 lg:h-10 bg-red-600 rounded-sm "></div> 
                <p className="font-semibold md:text-base text-sm">{label}</p>
            </div>
        }
        <div className=" flex flex-row justify-between items-center w-full ">
            {
                title && 
                <div className="flex flex-col gap-2 md:flex-row justify-start items-start   md:justify-between md:items-center md:w-9/12 lg:w-7/12">
                    <h2 className="title text-capetalize text-xl sm:text-3xl lg:text-4xl font-semibold lg:whitespace-nowrap ">{title}</h2>
                    {coutdownTime && <Countdown  />}
                </div>
            }
            {
                navigation &&
                <div className="navigation hidden">
                    <button className="prev">prev</button>
                    <button className="next">next</button>
                </div>
            }
            {
                viewAll &&
                <div className="">
                    <Link href={`${viewAllHref}`} className="viewall bg-red-600 md:px-8 md:py-2 sm:px-6 px-4 lg:px-12 py-1 sm:py-2   lg:py-4 font-medium text-white rounded-sm">view all</Link>
                </div>
            }
        </div> 
    </div> 
  )
}

export default SectionHeader