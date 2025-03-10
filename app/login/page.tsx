import Image from 'next/image'

const page = () => {
  return (
    <div className='container mx-auto lg:px-8 flex flex-row justify-between py-12'>
      <div className="bg-[#CBE4E8] w-[760px]">
          <Image 
              src='/Side Image.svg'
              alt='side image '
              width='100'
              height='100'
              className='lg:w-[760px] lg:h-[700px] mr-auto ' 
          />
      </div>
      <div className="form flex flex-col items-center justify-center">
        <div className="w-96 "> 
          <h1 className=" text-4xl font-medium ">Log in to Exclusive</h1>
          <p className="mt-4">Enter your details below</p>
          <form action="" className="flex flex-col gap-10 mt-12">
            
            <input type="email" placeholder="Email" className="outline-none border-b-2 border-gray-400 p-2  "/>
            <input type="password" placeholder="Password" className="outline-none border-b-2 border-gray-400 p-2  "/>
           <div className=" flex flex-row gap-9 justify-between items-center"> 
            <button className="bg-red-500 text-white text-sm py-3 px-12 rounded-md">Log in</button>
            <button className="bg-transparent text-red-600 text-sm  py-3 px-1 rounded-md">Forget Password?</button>
           </div>
           
          </form>
        </div>
      </div>
    </div>
  )
}

export default page