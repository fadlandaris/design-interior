import Marquee from 'react-fast-marquee';
import {  TEXT_IMAGE_1, TEXT_IMAGE_2 } from '../assets/assets';

const Contact = () => {
  return (
    <div className='mt-24 h-screen relative'>
      <div className='bg-primary pb-24 w-full h-1/2 absolute bottom-0'/>
      <div className=' absolute inset-0'>
        <Marquee autoFill={true} gradient={true} pauseOnHover={true} pauseOnClick={true}>
          <div className='flex items-center gap-x-6 mx-4 uppercase text-xl font-semibold'>
            <span>Elevate Your Office</span>
            <div className='w-2 h-2 rounded-full bg-black'/>
            <span>design Interior</span>
            <div className='w-2 h-2 rounded-full bg-black'/>
          </div>
        </Marquee>
        <div className='px-16 mt-16'>
          <div className='group w-[30%] cursor-pointer'>
            <div className='flex justify-start gap-x-2 items-center text-4xl uppercase font-semibold mb-4'>
              <h2>small </h2>
              <div className='w-[10rem] h-[2.5rem] overflow-hidden '> 
                <img src={TEXT_IMAGE_1} alt="" className='w-full h-full object-cover object-right group-hover:scale-110 transition-all duration-500' />
              </div>
              <h2>Space</h2>
            </div>
            <div className='flex justify-start gap-x-4 items-center text-4xl uppercase font-semibold'>
              <h2>Big Ideas </h2>
              <div className='w-[14rem] h-[2.5rem] overflow-hidden '> 
                <img src={TEXT_IMAGE_2} alt="" className='w-full h-full object-cover group-hover:scale-110 transition-all duration-500 cursor-pointer' />
              </div>
            </div>
            <p className='mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quisquam saepe praesentium </p>
          </div>
          <div>
            test
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact