import { GoPlay } from "react-icons/go";
import type { JSX } from 'react';
import Container from '../components/layout/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";

const Comments = (): JSX.Element => {
  return (
    <div className='my-[22px]'>
      <Container>
        <div>
          <h5 className='text-primary max-sm:text-center font-tektur font-semibold text-[18px] uppercase'>отзывы</h5>
          <div className="py-[20px]">
            <Swiper
              spaceBetween={20}
              slidesPerView={5}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7].map(item => (
                <SwiperSlide key={item}>
                  <div className='flex justify-center text-[30px] items-center h-[250px] m-[10px] mb-[30px] rounded-lg bg-neutral-400 text-white shadow-[0px_0px_10px_0px_var(--color-primary)]'>
                    <GoPlay className="cursor-pointer hover:scale-125 duration-100 active:scale-100" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Comments;