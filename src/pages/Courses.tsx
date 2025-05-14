import { BsArrowRight } from "react-icons/bs";
import type { JSX } from 'react';
import Container from '../components/layout/Container';
import coverImage1 from "../assets/images/Rectangle 1.jpg"
import coverImage2 from "../assets/images/Rectangle 2.jpg"
import coverImage3 from "../assets/images/Rectangle 3.jpg"
import coverImage4 from "../assets/images/Rectangle 4.jpg"
import coverImage5 from "../assets/images/Rectangle 5.jpg"
import Button from '../components/ui/Button';
import { Swiper, SwiperSlide } from "swiper/react";

const Courses = (): JSX.Element => {
  const courseData = [
    {
      id: 1, title: "Робототехника", cover: coverImage1
    },
    {
      id: 2, title: "Живопись для детей", cover: coverImage2
    },
    {
      id: 3, title: "Живопись для взрослых", cover: coverImage3
    },
    {
      id: 4, title: "Английский язык для детей", cover: coverImage4
    },
    {
      id: 5, title: "Шахмат", cover: coverImage5
    }
  ]
  return (
    <div id="courses" className='pb-[20px] max-sm:pt-[20px]'>
      <Container>
        <h4 className='text-center text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[40px] lg:leading-[60px] uppercase font-tektur text-primary font-bold max-w-[800px] mx-auto'>Авторские куpсы от JustRobotics</h4>
        <div className='hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[30px]'>
          {courseData.map(item => (
            <div key={item.id} className='bg-primary p-[20px] shadow-[0px_0px_20px_0px_var(--color-primary)] rounded-md flex flex-col gap-[20px]'>
              <img className='h-[200px] object-cover rounded-md w-full' src={item.cover} alt={item.title} />
              <div className='text-[20px] font-black font-tektur text-black'>
                {item.title}
              </div>
              <div className='flex justify-end'>
                <Button variant="dark" className='text-white flex justify-center items-center gap-[10px]'>
                  <span>Подробнее о куpсе</span>
                  <BsArrowRight />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[30px] md:hidden">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}>
            {courseData.map(item => (
              <SwiperSlide key={item.id}>
                <div className='bg-primary p-[20px] m-[10px] shadow-[0px_0px_20px_0px_var(--color-primary)] rounded-md flex flex-col gap-[20px]'>
                  <img className='h-[200px] object-cover rounded-md w-full' src={item.cover} alt={item.title} />
                  <div className='text-[20px] font-black font-tektur text-black'>
                    {item.title}
                  </div>
                  <div className='flex justify-end'>
                    <Button variant="dark" className='text-white flex justify-center items-center gap-[10px]'>
                      <span>Подробнее о куpсе</span>
                      <BsArrowRight />
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Courses;