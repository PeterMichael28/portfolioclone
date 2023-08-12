import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { FreeMode, Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";



// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return <Swiper
   spaceBetween={10}
    FreeMode={true}
    pagination={ {
      clickable: true
    }}
    modules={[FreeMode, Pagination]}
    className="h-[280px] sm:h-[340px]"
  >
    {
      workSlides.slides.map( ( item, i ) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-5 cursor-pointer">
            { item.images.map( ( img, i ) => (
              <div key={i} className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                <div className="flex items-center justify-center relative overflow-hidden grou">
                    {/* imgs */}
                    <Image src={img.path} alt="img" width={500} height={300}/>

                    {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

                  {/* text */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-500">
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                      {/* title pt 1 */}
                      <div className="delay-100 ">LIVE</div>

                      {/* title pt 2 */}
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">PROJECT</div>

                      {/* icon */}
                      <div><BsArrowRight className="text-xl translate-x-[500%] group-hover:translate-x-0 transition-all duration-300 delay-200"/></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
         </div>
        </SwiperSlide>
      ))
 }
  </Swiper>;
};


export default WorkSlider;