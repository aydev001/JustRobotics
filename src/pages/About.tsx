import type { JSX } from 'react';
import Container from '../components/layout/Container';

const About = (): JSX.Element => {
    return (
        <div id='about' className='relative sm:top-[-50px] max-sm:mt-[25px] max-w-[1600px] mx-auto'>
            <Container>
                <div className='flex justify-between xl:justify-around items-center gap-[10px] md:gap-[20] lg:gap-[30px]'>
                    <div className='flex flex-1 flex-col justify-center font-tektur items-center gap-[5px] text-black bg-primary rounded-[15px] px-[15px] pt-[15px] sm:pt-[70px] pb-[15px] shadow-[0px_0px_20px_0px_var(--color-primary)]'>
                        <div className='text-[40px] sm:text-[50px] md:text-[60px] font-bold'>
                            300+
                        </div>
                        <div className='text-[16px] sm:text-[18px] md:text-[20px] text-center font-semibold min-h-[50px] flex justify-center items-center'>
                            Довольных студентов
                        </div>
                    </div>
                    <div className='flex flex-1 flex-col justify-center font-tektur items-center gap-[5px] text-black bg-primary rounded-[15px] px-[15px] pt-[15px] sm:pt-[70px] pb-[15px] shadow-[0px_0px_20px_0px_var(--color-primary)]'>
                        <div className='text-[40px] sm:text-[50px] md:text-[60px] font-bold'>
                            25+
                        </div>
                        <div className='text-[16px] sm:text-[18px] md:text-[20px] text-center font-semibold min-h-[50px] flex justify-center items-center'>
                            Преподавателей
                        </div>
                    </div>
                    <div className='flex flex-1 flex-col justify-center font-tektur max-sm:hidden items-center gap-[5px] text-black bg-primary rounded-[15px] px-[15px] pt-[15px] sm:pt-[70px] pb-[15px] shadow-[0px_0px_20px_0px_var(--color-primary)]'>
                        <div className='text-[40px] sm:text-[50px] md:text-[60px] font-bold'>
                            60+
                        </div>
                        <div className='text-[16px] sm:text-[18px] md:text-[20px] text-center font-semibold min-h-[50px] flex justify-center items-center'>
                            групп
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center mt-[10px] sm:hidden'>
                    <div className='flex flex-1 flex-col justify-center font-tektur max-w-[50%] items-center gap-[5px] text-black bg-primary rounded-[15px] px-[15px] pt-[15px] sm:pt-[70px] pb-[15px] shadow-[0px_0px_20px_0px_var(--color-primary)]'>
                        <div className='text-[40px] sm:text-[50px] md:text-[60px] font-bold'>
                            60+
                        </div>
                        <div className='text-[16px] sm:text-[18px] md:text-[20px] text-center font-semibold min-h-[50px] flex justify-center items-center'>
                            групп
                        </div>
                    </div>
                </div>
            </Container>
            <div className='bg-white text-black relative sm:top-[-15px] max-sm:mt-[20px] z-[-1] pt-[40px] pb-[40px]'>
                <Container>
                    <div className='font-mont text-[14px] lg:text-[16px]'>
                        <b>JustRobotics</b> – это современный учебный центр, специализирующийся на технологиях, искусстве и образовании. Мы предоставляем комфортную и поддерживающую среду для развития талантов и навыков наших учеников. Команда высококвалифицированных преподавателей использует передовые методики и технологии, делая занятия интерактивными и увлекательными. Мы уделяем большое внимание индивидуальному подходу, помогая каждому ученику раскрыть свои способности и достичь успеха.<br/> <br/>
                        <b>JustRobotics</b> – это сообщество увлеченных и целеустремленных людей, предлагающее не только учебные курсы, но и мероприятия, мастер-классы и конкурсы. Удобное расположение учебного центра обеспечивает легкий доступ для всех желающих.
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default About;