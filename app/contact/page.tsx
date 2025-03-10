 

const page = () => {
  return (
    <div className='flex flex-row py-16 contianer mx-auto justify-center gap-9 lg:px-8 px-4'>
      <div className=" w-80 px-4 py-4 rounded-sm flex flex-col  justify-center gap-8 bg-[#f4f4f4]">
        <div className="flex flex-col gap-2">
          <h4 className="callToUse capitalize font-semibold">Call to Us</h4>
          <p>we are availbible 24/7 days a week </p>
          <p className="">Phone: +234232302939</p>
        </div>
        <div className="border"></div>
        <div className="flex flex-col gap-2">
          <h4 className="capitalize font-semibold">write to Us</h4>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p className="">Emails: customer@exclusive.com</p>
          <p className="">Emails: support@exclusive.com</p>
        </div> 
      </div>
      <div className="bg-white py-8 px-9 shadow">
       <form action="" className="flex flex-col gap-8 ">
        <div className=" flex gap-4">
          <input type="text" aria-label="name " placeholder="Your Name" className="px-3 py-2 bg-[#f5f5f5] outline-none" />
          <input type="text" aria-label="name " placeholder="Your Name" className="px-3 py-2 bg-[#f5f5f5] outline-none"/>
          <input type="text" aria-label="name " placeholder="Your Name" className="px-3 py-2 bg-[#f5f5f5] outline-none"/>
        </div>
          <textarea aria-label="text area" name="" id="" placeholder="Your message" className="px-3 py-2 bg-[#f5f5f5] h-52 outline-none "></textarea>
          <div className=" flex justify-end w-full">
          <button type="submit" className="bg-red-600 w-56 px-6 py-2 rounded-sm text-white outline-none" >send message</button>
          </div>
       </form>
      </div>
    </div>
  )
}

export default page