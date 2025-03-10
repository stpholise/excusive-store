import Image from 'next/image'

interface Offer {
    imgage: string;
    title: string;
    description: string;
  }
  
  const offers: Offer[] = [
    {
      imgage: "/icons/icon-delivery.svg",
      title: "Fast and Free delivery",
      description: "free delivery for all orders over $140",
    },
    {
      imgage: "/icons/Icon-Customer service.svg",
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      imgage: "/icons/Icon-secure.svg",
      title: "MONEY BACK GUARANTEE",
      description: "We reurn money within 30 days",
    },
  ]
 
  const CostomerAssurance = () => {
    return (
        <section className={`offers w-full flex items-center justify-center gap-20 antialiased`}>
        {
          offers.map((offer, index) => (

            <div key={index} className="flex flex-col gap-4 items-center">
              <div className="bg-black p-2 rounded-full border-8 border-gray-400">
                <Image 
                src={offer.imgage}
                alt="offer"
                width={40}
                height={40}
                className="dark:invert"
                />
              </div>
              <h3 className="text-xl font-semibold uppercase"> {offer.title}</h3>
              <p className="text-sm">{offer.description} </p>
            </div>
          ))
        }
      </section>
    )
  }
  
  export default CostomerAssurance