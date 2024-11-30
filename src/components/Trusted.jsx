import { ArrowRight } from "phosphor-react"
import { TRUSTED } from "../assets/assets"

const Trusted = () => {
  return (
    <div className="w-full bg-primary py-20 px-16 ">
      <div className=" grid grid-cols-3 gap-x-10"> 
        <div className="flex justify-start items-center ">
          <div>
            <h2 className="uppercase mb-4 font-semibold text-3xl">trusted by industry leaders</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate amet facere doloremque aspernatur qui iste, cupiditate nihil porro eum quo.</p>
          </div>
        </div>

        <div className="w-full h-[30rem] z-10 group cursor-pointer">
         <img src={TRUSTED} alt="" className="w-full h-full object-cover z-10 group-hover:rotate-6 transition-all duration-500" />
         <div className="w-[15rem] mx-auto h-[5rem] bg-black/60 blur-2xl rounded-full -mt-28 z-0 group-hover:rotate-6 transition-all duration-500 "/>
        </div>

        <div className="flex justify-start items-center text-right">
          <div>
            <h2 className="uppercase mb-4 font-semibold text-3xl">Partnering for success</h2>
            <p className="mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate amet facere doloremque aspernatur qui iste, cupiditate nihil porro eum quo.</p>
            <button className="button-style ml-auto">
              Contact Us
              <ArrowRight/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trusted