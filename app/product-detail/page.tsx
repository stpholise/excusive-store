import Rating from "../components/utilitycomponents/Rating"
  
  const page = () => {
    return (
      <div>
        <div className="product">
            <div className="imgsection">

            </div>
            <div className="product-information">
                <div className="">
                    <h2 className="">Havic HV G-92 Gamepad</h2>
                    <div className="rating">
                        <Rating  stars={5}/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default page