import type { JSX } from 'react';
import Container from './Container';
import logo from "../../assets/images/logo.png"
import Button from '../ui/Button';
import SelectLang from '../ui/SelectLang';
import NavMenu from './NavMenu';

const Header = (): JSX.Element => {
  return (
    <header className='border-y-[10px] border-y-primary sticky z-40 top-0 left-0 right-0 bg-black'>
      <Container>
        <div className='flex justify-between items-center gap-[10px] h-[70px]'>
          <div className='flex-1'>
            <img className='min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px]' src={logo} alt="just-roboto" />
          </div>
          <ul className='flex-2 flex justify-evenly items-center gap-[10px] font-mont max-md:hidden'>
            <li>
              <a className='hover:text-primary duration-150 text-nowrap font-tektur' href="#">Главная</a>
            </li>
            <li>
              <a className='hover:text-primary duration-150 text-nowrap font-tektur' href="#about">О нас</a>
            </li>
            <li>
              <a className='hover:text-primary duration-150 text-nowrap font-tektur' href="#courses">Курсы</a>
            </li>
            <li>
              <a className='hover:text-primary duration-150 text-nowrap font-tektur' href="#registration">Контакты</a>
            </li>
          </ul>
          <div className='flex-1 flex max-md:justify-end justify-between items-center gap-[10px]'>
            <div className='max-sm:hidden'>
              <Button>
                Позвонить
              </Button>
            </div>
            <SelectLang />
            <div className='md:hidden'>
              <NavMenu />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;