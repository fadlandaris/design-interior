import { HERO } from "../assets/assets"

const Hero = () => {
  return (
    <div className=" h-screen flex justify-center items-start  relative">
      <div className="absolute bottom-0 w-full h-[41.5rem] overflow-hidden">
        <img src={HERO} alt="" className="w-full " />
      </div>
      <div className="max-w-5xl mt-12 ">
        <h2 className="text-8xl font-medium uppercase ">stories of success</h2>
        <div className="grid grid-cols-2">
          <div className="">
          </div>
          <div className=" text-right flex justify-end ">
            <p className="mt-8 w-[90%]">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veniam quis magnam? Accusamus, saepe? Iure adipisci quisquam repudiandae harum corrupti!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero