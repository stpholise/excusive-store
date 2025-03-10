 
import SectionHeader from "../utilitycomponents/SectionHeader"
import NewArrivalCard from "../utilitycomponents/NewArrivalCard";

interface Item {
    name:string;
    description: string;
    link:string;
    image:string;
   }

const items: Item[] = [
    {
        name: 'PlayStaion 5',  
        description:'Black and white version of the PS5 coming out on sale',
        link:'/',
        image:'/NoBgImages/ps5-slim-goedkope-playstation_large 1.svg'
    },
    {
        name: 'Women’s Collections',  
        description:'Featured woman collections that give you another vibe.',
        link:'/',
        image:'/NoBgImages/attractive-woman-wearing-hat-posing-black-background 1.svg'
    },
    {
        name: 'Speakers',  
        description:'Amazon wireless speakers',
        link:'/',
        image:'/NoBgImages/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.svg'
    },
    {
        name: 'Perfume',  
        description:'GUCCI INTENSE OUD EDP',
        link:'/',
        image:'/NoBgImages/Frame 706.svg'
    },
]
  

const NewArival = () => {
  return (
    <div className='w-full  flex flex-col gap-12' > 
        <div className=" top"> 
            <SectionHeader label="Featured" title='New Arrival' />
        </div>
        <div className="h-[600px] grid grid-cols-2 gap-5 w-full">
            <NewArrivalCard name={items[0].name} description={items[0].description} link={items[0].link} image={items[0].image} /> 
            <div className="grid grid-rows-2 grid-cols-1 gap-5">
                <div className="">
                    <NewArrivalCard name={items[1].name} description={items[1].description} link={items[1].link} image={items[1].image} /> 
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <NewArrivalCard name={items[2].name} description={items[2].description} link={items[2].link} image={items[2].image} /> 
                    <NewArrivalCard name={items[3].name} description={items[3].description} link={items[3].link} image={items[3].image} /> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewArival