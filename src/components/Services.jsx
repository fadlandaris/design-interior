import React, { useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { CaretRight, ArrowRight} from 'phosphor-react';
import { partners } from '../data/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const Services = ({ portData }) => {
  const [marqueeData] = useState(partners);
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className='py-32'>
      <div className='w-[45%] mx-auto text-center'>
        <h2 className='text-4xl uppercase font-semibold '>Our Partners</h2>
        <p className='mt-6 mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sapiente ad commodi minima eligendi accusamus possimus magni. Porro, incidunt eius!</p>
      </div>

      <div className='mb-24'>
        <Marquee autoFill={true} pauseOnHover={true} pauseOnClick={true} gradient={true}>
          {marqueeData.map((item, i) => (
            <div key={i} className={`${i % 2 === 0 ? 'opacity-50' : 'opacity-100'} mx-16 text-lg font-semibold flex items-center gap-x-2`}>
              {item.icon && <item.icon weight='fill' />}
              <span>{item.title}</span>
            </div>
          ))}
        </Marquee>
      </div>

      <div className='px-20 relative'>
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation={false} 
          loop={true}
          spaceBetween={50}
        >
          {portData.map((item, i) => (
            <SwiperSlide key={i} >
              <div className='grid grid-cols-2 gap-x-16'>
                <div className='bg-gray-500 w-full h-[40rem]'>
                  <img src={item.img} alt="" className='w-full h-full object-cover' />
                </div>
                <div className='flex justify-start items-end relative overflow-hidden'>
                  <div className='content-container'>
                    <h2 className='mb-4'>PORTFOLIO</h2>
                    <div className='mb-10'>
                      <h2 className='uppercase text-4xl font-semibold mb-2 '>{item.name}</h2>
                      <p className='text-yellow-600 opacity-100'>{item.date}</p>
                    </div>
                    <p className='w-[80%] mb-20'>{item.desc}</p>
                    <a href="" className="button-style mb-36">
                      Learn More
                      <ArrowRight />
                    </a>
                  </div>
                  <img src={item.miniImg} className='absolute w-60 -right-4 -bottom-10 ' />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button onClick={handleNext} className="absolute top-1/2 -translate-y-1/2 right-20 z-10 text-3xl opacity-30 hover:opacity-100 hover:scale-125 transition-all duration-500 cursor-pointer">
          <CaretRight/>
        </button>
      </div>
    </div>
  );
};

export default Services;
