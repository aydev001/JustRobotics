import { MdLocationPin } from "react-icons/md"; 
import { MdWatchLater } from "react-icons/md"; 
import { FaPhoneAlt } from "react-icons/fa"; 
import type { JSX } from 'react';
import Container from '../components/layout/Container';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Select, { type StylesConfig } from 'react-select';


const Registration = (): JSX.Element => {
  type OptionType = {
    value: string;
    label: string;
  };

  const options: OptionType[] = [
    { value: '1', label: 'Работотехника' },
    { value: '2', label: 'Живопись для взрослых' },
    { value: '3', label: 'Живопись для детей' },
    { value: '4', label: 'Шахмат' },
    { value: '5', label: 'Английский' },
  ];

  const customStyles: StylesConfig<OptionType, false> = {
    control: (base, state) => ({
      ...base,
      backgroundColor: '#f9f9f9',
      boxShadow: state.isFocused ? '0 0 10px 2px var(--color-primary)' : 'none',
      borderRadius: '8px',
      fontSize: '16px',
    }),
    option: (base, state) => ({
      ...base,
      color: state.isSelected ? '#1E3A8A' : '#111827',
      backgroundColor: state.isSelected ? 'var(--color-primary)' : '#ffffff',
      padding: '10px 15px',
      cursor: 'pointer',
      borderBottom: "1px solid #333333"
    })
  };
  return (
    <div id="registration" className='my-[20px]'>
      <Container>
        <div>
          <h4 className='text-center text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[40px] lg:leading-[60px] uppercase font-tektur text-primary font-bold max-w-[800px] mx-auto'>получите бесплатный первый урок</h4>
        </div>
        <div className='mt-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[10px]'>
          <Input placeholder='Ваше имя' />
          <Input placeholder='Номер телефона' />
          <div className='w-full'>
            <Select options={options} styles={customStyles} placeholder={"Выберете курс"} />
          </div>
          <Input placeholder='Возраст' />
          <div className="md:col-span-2 lg:col-span-1 flex justify-center items-center">
            <Button className='w-full md:w-[50%] lg:w-full'>
              получить
            </Button>
          </div>
        </div>
        <div className='flex justify-start items-center gap-[20px] mt-[30px]'>
          <Button className='max-sm:w-full'>
            Филиал Ц4
          </Button>
          <Button variant="secondary" className='max-sm:w-full'>
             Филиал Беруни
          </Button>
        </div>

        <div className='flex justify-between items-center gap-[10px] my-[30px] max-w-[600px] mx-auto'>
          <div className='flex justify-center items-center gap-[10px]'>
            <div className='w-[20px] h-[20px] text-[12px] rounded-full bg-primary text-black flex justify-center items-center'>
              <FaPhoneAlt />
            </div>
            <div>
              Адрес Орьентир
            </div>
          </div>
          <div className='flex justify-center items-center gap-[10px]'>
            <div className='w-[20px] h-[20px] text-[18px] rounded-full bg-primary text-black flex justify-center items-center'>
              <MdLocationPin />
            </div>
            <div>
              График работы
            </div>
          </div>
          <div className='flex justify-center items-center gap-[10px]'>
            <div className='w-[20px] h-[20px] text-[18px] rounded-full bg-primary text-black flex justify-center items-center'>
              <MdWatchLater />
            </div>
            <div>
              Номера телефонов
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Registration;