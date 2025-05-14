import type { JSX } from 'react';
import homeBg from "../assets/images/home-bg.svg"
import ellipseBg from "../assets/images/ellipse.svg"
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';
import robotImage from "../assets/images/orange-robot.png"

const Home = (): JSX.Element => {
  return (
    <div className='relative overflow-hidden rounded-b-[30px] max-w-[1600px] mx-auto z-10 bg-black shadow-[0px_10px_40px_-5px_#1a202c]'>
      <Container>
        <div className='relative z-10 flex justify-between gap-[10px]'>
          <div className='flex-1 py-[20px] md:py-[30px] lg:py-[40px] flex justify-center items-center'>
            <div className='p-[15px] md:p-[20px] lg:p-[25px] rounded-lg bg-white flex flex-col justify-between items-start gap-1 text-black font-tektur w-[230px] h-[220px] sm:h-[250px] sm:w-[300px] md:h-[300px] md:w-[350px] lg:h-[350px] lg:w-[400px]'>
              <div>
                <h3 className='text-[30px] sm:text-[40px] md:text-[45px] lg:text-[50px] font-bold'>JustRobotics</h3>
                <div className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]'>твой проводник в мир технологий и искусства</div>
              </div>
              <div className='flex flex-col gap-[10px] items-start'>
                <p className='max-sm:text-[12px]'>получите бесплатное первое занятие</p>
                <Button variant="dark">
                  Перейти к курсам
                </Button>
              </div>
            </div>
          </div>
          <div className='flex-1 relative flex justify-center items-center'>
            <img className='min-h-full max-h-full z-10 object-right-bottom min-w-[270px] sm:min-w-[300px] md:min-w-[370px] absolute top-0 bottom-0 ' src={robotImage} alt="robot-image" />
          </div>
        </div>
      </Container>
      <div className='absolute top-0 left-0 right-0 bottom-0'>
        <img className='w-full min-h-full object-cover max-w-[1600px] mx-auto' src={homeBg} alt="home-bg" />
        <img className='absolute right-0 bottom-0 top-0' src={ellipseBg} alt="ellipse" />
      </div>
    </div>
  );
};

export default Home;