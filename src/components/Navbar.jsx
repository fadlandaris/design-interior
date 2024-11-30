import { useState } from "react"
import { Navlinks } from "../data/data"
import { ArrowRight } from "phosphor-react"
import { S_1 } from "../assets/assets"

const Navbar = () => {
  const [navData] = useState(Navlinks)
  // console.log(navData)

  return (
    <div className="fixed top-0 w-full flex justify-between items-center py-4 px-16 z-50 bg-white/80 backdrop-blur-lg">
      <div className=" w-[10rem] h-[2rem] ">
       <img src={S_1} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="flex justify-center gap-x-12 uppercase">
        {navData.map((item, i) => (
          <a key={i} className="text-[12px]" href="" >
            {item.nav}
          </a>
        ))}
      </div>

      <a href="" className="button-style">
        Get A Qoute
        <ArrowRight/>
      </a>
    </div>
  )
}

export default Navbar