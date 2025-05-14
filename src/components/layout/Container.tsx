import type { JSX, ReactNode } from 'react';

interface IContainerProps {
  children : ReactNode
}

const Container = ({ children }: IContainerProps): JSX.Element => {
  return (
    <div className='w-[90%] mx-auto max-w-[1600px]'>
      {children}
    </div>
  );
};

export default Container;