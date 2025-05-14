import type { ButtonHTMLAttributes, JSX } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'dark';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const Button = ({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  ...rest
}: ButtonProps): JSX.Element => {
  const baseClasses = 'px-[30px] py-[8px] uppercase rounded-sm text-[14px] transition duration-200 cursor-pointer';
  
  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-primary hover:bg-primaryHover font-tektur font-bold text-black shadow-[0px_0px_10px_0px_var(--color-primary)] active:bg-primary active:shadow-none active:scale-[0.98]',
    secondary: 'bg-gray-200 text-gray-800 font-tektur font-bold hover:bg-gray-100 active:bg-gray-200 duration-100 active:scale-95',
    dark: 'bg-gray-900 text-primary hover:bg-neutral-800 active:bg-gray-900 font-semibold',
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
