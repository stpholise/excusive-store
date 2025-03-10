import Image from 'next/image'

const page = () => {
  return (
    <div className='container mx-auto flex lg:px-8 px-4 flex-row justify-between py-12'>
      <div className="bg-[#CBE4E8] ">
          <Image 
              src='/Side Image.svg'
              alt='side image '
              width='100'
              height='100'
              className='lg:w-[760px] lg:h-[700px]' 
          />
      </div>
      <div className="form flex flex-col items-center justify-center">
        <div className="w-96 "> 
          <h1 className=" text-4xl font-medium ">Create an account</h1>
          <p className="mt-4">Enter your details below</p>
          <form action="" className="flex flex-col gap-10 mt-12">
            <input type="text" placeholder="Name" className=" outline-none border-b-2 border-gray-400 p-2  "/>
            <input type="email" placeholder="Email" className="outline-none border-b-2 border-gray-400 p-2  "/>
            <input type="password" placeholder="Password" className="outline-none border-b-2 border-gray-400 p-2  "/>
           <div className=" flex flex-col gap-4"> 
            <button className="bg-red-500 text-white py-3 px-14 rounded-md">Create Account</button>
            <button className="bg-transparent text-black border-2 border-gray-400 py-3 px-14 rounded-md">Sign up with Google</button>
           </div>
           
          </form>
        </div>
      </div>
    </div>
  )
}

export default page