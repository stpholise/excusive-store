 
import EditProfile from "../components/utilitycomponents/EditProfile"

const page = () => {
  return (
    
    <div  className="flex container mx-auto gap-8">
        <div className="accountNav w-96 px-6 py-16 flex flex-col  gap-10 justify-start items-start">
            <div className="flex flex-col gap-4">
                <h3 className="font-semibold capitalize"> Manage My Account</h3>
                <ul className="px-4 ml-3 flex flex-col gap-2 ">
                    <li>My Profile</li>
                    <li>Adress Book</li>
                    <li>My Payment Options</li>
                </ul>
             </div>
            <div className="flex flex-col gap-4">
                <h3 className="font-semibold capitalize"> My Order</h3>
                <ul className="px-4 ml-3 flex flex-col gap-2 ">
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