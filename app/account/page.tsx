 
import EditProfile from "../components/utilitycomponents/EditProfile"

const page = () => {
  return (
    
    <div  className="flex container mx-auto md:gap-4 lg:gap-8">
        <div className="accountNav md:w-72 lg:w-96 px-6 py-16 flex flex-col  gap-10 justify-start items-start">
            <div className="flex flex-col gap-2 lg:gap-4">
                <h3 className="font-semibold capitalize"> Manage My Account</h3>
                <ul className="lg:px-4 ml-3 flex flex-col lg:text-base md:text-sm gap-2 ">
                    <li>My Profile</li>
                    <li>Adress Book</li>
                    <li>My Payment Options</li>
                </ul>
             </div>
            <div className="flex flex-col gap-2 lg:gap-4">
                <h3 className="font-semibold capitalize"> My Order</h3>
                <ul className="lg:px-4  lg:text-base md:text-sm  ml-3 flex flex-col gap-2 ">
                    <li>My Returns</li>
                    <li>My Cancellations</li> 
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="font-semibold capitalize"> My Wishlit</h3> 
            </div>
        </div>

        <section className="myprofile w-10/12">
            <EditProfile />
        </section>
    </div>
  )
}

export default page