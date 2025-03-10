import Countdown from "../shopping/Countdown"

interface SectionHeader{
    label?: string;
    title?: string;
    coutdownTime?: number | string;
    viewAll?:boolean;
    navigation?:boolean;
}

const SectionHeader = ({label,title, coutdownTime, viewAll, navigation}: SectionHeader) => {
  return (
    <div className="top flex flex-col gap-5"> 
        {
            label &&
            <div className="flex justify-start gap-4 text-red-600 items-center">
                <div className="w-5 h-10 bg-red-600 rounded-sm "></div> 
                <p className="font-semibold">{label}</p>
            </div>
        }
        <div className=" flex flex-row justify-between items-center w-full ">
            {
                title && 
                <div className="flex justify-between items-center w-7/12">
                    <h2 className="title text-capetalize text-4xl font-semibold lg:whitespace-nowrap ">{title}</h2>
                    {coutdownTime && <Countdown  />}
                </div>
            }
            {
                navigation &&
                <div className="navigation">
                    <button className="prev">prev</button>
                    <button className="next">next</button>
                </div>
            }
            {
                viewAll &&
                <div className="">
                    <button className="viewall bg-red-600 px-12 py-4 font-medium text-white rounded-sm">view all</button>
                </div>
            }
        </div> 
    </div> 
  )
}

export default SectionHeader