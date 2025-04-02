import Image from 'next/image'
import SignupForm from '../components/utilitycomponents/SignupForm'

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
          <SignupForm />

        </div>
      </div>
    </div>
  )
}

export default page