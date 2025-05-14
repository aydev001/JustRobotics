import type { JSX } from 'react';
import Container from './Container';
import logo from "../../assets/images/logo.png"
import telegram from "../../assets/icons/telegram.svg"
import youtube from "../../assets/icons/youtube.svg"
import instagram from "../../assets/icons/instagram.svg"

const Footer = (): JSX.Element => {
  return (
    <div className='mt-[30px] bg-primary text-black py-[30px] font-mont'>
      <Container>
        <div className='flex justify-between gap-[20px] max-sm:flex-col'>
          <div className='flex-[1.5] flex flex-col gap-[15px]'>
            <div className='flex max-sm:flex-row flex-col gap-[10px]'>
              <img className='w-[50px] h-[50px] rounded-full border-[2px]' src={logo} alt="logo" />
              <div className='font-semibold text-[16px]'>
                SLOGAN lLorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <div className='flex justify-start items-center gap-[10px]'>
              <img className='w-[30px] h-[30px]' src={telegram} alt="icon" />
              <img className='w-[30px] h-[30px]' src={youtube} alt="icon" />
              <img className='w-[30px] h-[30px]' src={instagram} alt="icon" />
            </div>
          </div>
          <div className='flex-[1.5] flex flex-col gap-[15px]'>
            <div className='font-bold text-[18px]'>
              Курсы
            </div>
            <ul className='flex flex-col gap-[5px]'>
              <li>Работотехника</li>
              <li>Английский для взрослых</li>
              <li>Английский для детей</li>
              <li>Шахмат</li>
              <li>Живопись</li>
            </ul>
          </div>
          <div className='flex-1 flex flex-col gap-[15px]'>
            <div className='font-bold text-[18px]'>
              Контакты
            </div>
            <ul className='flex flex-col gap-[5px]'>
              <li>Телеграм</li>
              <li>Инстаграм</li>
              <li>Ютюб</li>
            </ul>
          </div>
        </div>
        <div className='mt-[20px] font-semibold'>
          Ideallux.com © 2000-2024, All Rights Reserved
        </div>
      </Container>
    </div>
  );
};

export default Footer;