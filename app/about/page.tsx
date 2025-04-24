import Image from "next/image";
import CostomerAssurance from "../components/utilitycomponents/costomerAssurance";

interface Statistic {
  icon: string;
  statValue: string;
  statDescription: string;
}

const siteStatistic: Statistic[] = [
  {
    icon: "/icons/icon_shop.svg",
    statValue: "10.5k",
    statDescription: "Sellers active our site",
  },
  {
    icon: "/icons/Icon-Sale.svg",
    statValue: "33k",
    statDescription: "Monthly product sale",
  },
  {
    icon: "/icons/Icon-Shopping bag.svg",
    statValue: "44k",
    statDescription: "Customers active on our site ",
  },
  {
    icon: "/icons/Icon-Moneybag.svg",
    statValue: "24k",
    statDescription: "Anual gross sale in our site",
  },
];

interface CompanyEmployee {
  id: string;
  image: string;
  name: string;
  position: string;
  twitter: string;
  instagram: string;
  linkedin: string;
}

const companyEmployees: CompanyEmployee[] = [
  {
    id: "aonien",
    image: "/NoBgImages/image 46.svg",
    name: "Tom Cruise",
    position: "Founder & Chairman",
    twitter: "",
    instagram: "",
    linkedin: "",
  },
  {
    id: "aoinfoinleihfl",
    image: "/NoBgImages/image 51.svg",
    name: "Emma Watson",
    position: "Managing Director",
    twitter: "",
    instagram: "",
    linkedin: "",
  },
  {
    id: "aoofinienao",
    image: "/NoBgImages/image 47.svg",
    name: "Will Smith",
    position: "Product Designer",
    twitter: "",
    instagram: "",
    linkedin: "",
  },
];

const page = () => {
  return (
    <div className="container mx-auto py-12 lg:px-8 px-4 lg:py-16 flex flex-col gap-20">
      <div className="flex gap-10 md:flex-row flex-col-reverse justify-between ">
        <div className="flex flex-col gap-7w-full md:w-5/12 items-start justify-center">
          <h1 className="text-4xl"> Our Story</h1>
          <div className="flex flex-col gap-4 w-full text-sm">
            <p className="w-full">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <p className="w-full">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
        </div>
        <div className=" w-full md:w-1/2">
          <Image
            src="/image/about-side-image.svg"
            alt="random image"
            width="100"
            height="100"
            className="w-full"
          />
        </div>
      </div>
      <div className="grid xs:grid-cols-2 md:grid-cols-4 items-center justify-center gap-6  ">
        {siteStatistic.map((item, index) => (
          <div
            className="px-5 py-4 border      border-gray-500 rounded-md flex flex-col items-center gap-4 group hover:bg-[#DB4444] hover:border-none"
            key={index}
          >
            <div className="bg-black p-2  border-8 h-20 w-20 flex items-center justify-center border-gray-600 rounded-full group-hover:invert transition-colors duration-700 ease-in-out">
              <Image
                src={item.icon}
                alt="icon"
                width="100"
                height="100"
                className="w-10 h-10"
              />
            </div>
            <div className="group-hover:invert">
              <h3 className="text-3xl font-bold text-center">
                {item.statValue}
              </h3>
              <p className=" ">{item.statDescription}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:flex  gap-7 justify-stretch ">
        {companyEmployees.map((person) => (
          <div key={person.id} className=" w-full lg:min-w-96 md:flex flex-col gap-6">
            <div className="bg-gray-50 h-40  xxs:h-40 xs:h-60 sm:h-72   md:h-[430px] flex items-end justify-center md:items-end">
              <Image
                src={person.image}
                alt="employee"
                width="100"
                height="100"
                className=" xxs:h-40 xs:h-60 sm:h-72 md:h-96 md:w-11/12 "
              />
            </div>
            <div className="flex flex-col gap-1 sm:gap-2">
              <h4 className="font-medium text-lg sm:text-3xl">{person.name} </h4>
              <p className=" sm:text-base text-sm">{person.position} </p>
              <div className="flex gap-3">
                <div className="">
                  <Image
                    src="/icons/Icon-twitter.svg"
                    alt=""
                    width="24"
                    height="24"
                  />
                </div>
                <div className="">
                  <Image
                    src="/icons/Icon-Instagram.svg"
                    alt=""
                    width="24"
                    height="24"
                  />
                </div>
                <div className="">
                  <Image
                    src="/icons/Icon-Linkedin.svg"
                    alt=""
                    width="24"
                    height="24"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=""> 
       <CostomerAssurance />
      </div>
    </div>
  );
};

export default page;
