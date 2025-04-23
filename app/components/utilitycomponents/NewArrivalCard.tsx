import Image from "next/image";
import Link from "next/link";

interface Item {
  name: string;
  description: string;
  link: string;
  image: string;
}

const NewArrivalCard = ({ name, description, link, image }: Item) => {
  return (
    <div className="relative bg-black w-full h-full min-h-44 md:min-w-44 overflow-hidden">
      <div className="absolute z-10 h-full w-full top-0 left-0 right-0 bottom-0 px-4">
        <Image
          src={image}
          alt="@new Arival"
          width="70"
          height="70"
          className="w-10/12 h-9/12 object-contain absolute bottom-0 top-50 left-1/2 -translate-x-1/2"
        />
      </div>

      <div className="text-white absolute z-20 md:bottom-6 md:w-44 left-2 bottom-2 md:left-3 lg:bottom-8 lg:left-6 lg:w-72">
        <h3 className="md:text-xl lg:text-3xl  text-white">{name}</h3>
        <p className="text-xs md:text-sm lg:text-base description">
          {description}
        </p>
        <Link
          href={link}
          className="text-white border-b border-gray-200 text-xs md:text-sm lg:text-base"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default NewArrivalCard;
