 'use client'
 import Newsletter from "./utilitycomponents/Newsletter";
interface QuickLink {
  title: string;
  link: string;
}

const quickLinks: QuickLink[] = [
  {
    title: 'Privacy Policy',
    link: '/'
  },
  {
    title: 'Terms Of Use',
    link: '/about'
  },
  {
    title: 'FAQ',
    link: '/contact'
  },
  {
    title: 'Contact',
    link: '/contact'
  }
]

const accountLinks: QuickLink[] = [
  {
    title: 'My Account',
    link: '/'
  }, 
  {
    title: 'Order History',
    link: '/about'
  },
  {
    title: 'Cart',
    link: '/contact'
  },
  {
    title: 'Wishlist',
    link: '/contact'
  },
  {
    title: 'Newsletter',
    link: '/contact'
  },
  {
    title: 'Shop',
    link: '/contact'
  }
]



const Footer = () => {
  return (
    <div className="w-full bg-black text-white flex items-end justify-center gap-9 flex-col lg:gap-16 pt-16">
      <div className="container mx-auto flex flex-col px-4  sm:grid sm:grid-cols-2  md:grid-cols-3 lg:px-8 lg:flex-row justify-between items-start gap-4">
        <div className="flex flex-col gap-6 max-w-56">
          <h3 className=""> Exclusive</h3>
            <h4 className="">Subscribe</h4>
            <div className="text-gray-200">
            <p className="text-sm">Get 10% off your first order</p> 
            <Newsletter />
            {/* <form action="" className="w-full border-2 border-gray-300 flex gap-1 rounded-md my-2 p-2">
              <input type="email" placeholder="Email Address" className="outline-none w-10/12 bg-transparent" />
              <button  title='send' type="submit" >
                <Image 
                src='/icons/icon-send.svg'
                alt='send icon'
                width='24'
                height='24'
                className=''
                />
              </button>
            </form> */}
          </div>
        </div>

        <div className=" w-56 flex flex-col gap-6">
          <h3 className="support">Support</h3>
          <div className="text-sm text-gray-200 flex flex-col gap-2">
            <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
        </div>

        <div className=" max-w-56 flex flex-col gap-6">
          <h3 className="account">Account </h3>
          <div className="flex flex-col gap-2 text-gray-200 text-sm">
            {
              accountLinks.map((link, index) => (
                <a key={index} href={link.link} className="">{link.title}</a>
              ))
            }
          </div>
        </div>

        <div className="max-w-56 flex flex-col gap-6">
          <h3 className="account">Quick Link </h3>
          <div className="flex flex-col gap-2 text-gray-200 text-sm">
            {
              quickLinks.map((link, index) => (
                <a key={index} href={link.link} className="">{link.title}</a>
              ))
            }
          </div>
        </div>

        <div className="max-w-56 flex flex-col gap-6">
          <h3 className="account">Download App</h3>
            <div className="text-gray-100 text-sm"></div>
        </div>

      </div> 
      <div className="text-center mx-auto w-full "> 
        <p className="text-xs text-gray-600 py-4 border-t border-gray-900">© Copyright Rimel 2022. All right reserved</p>
      </div>
    </div>
  )
}

export default Footer