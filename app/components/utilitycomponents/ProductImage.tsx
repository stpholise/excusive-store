import Image from 'next/image'
interface ProductImageProps {
    item: {
        url: string;
        alt: string;
    };
}

const ProductImage = ({ item }: ProductImageProps) => {
    console.log(item)
    const { url, alt } = item
  return (
    <div className="display flex p-2 bg-tranparent w-36 h-20 xs:h-36 md:w-44 md:h-32 items-center justify-center ">
          <Image 
                src={url}
                alt={alt || 'alt'}
                width='100'
                height='100'
                className='bg-gray-50 W-full   '
            />
     </div>
  )
}

export default ProductImage