import type { InputHTMLAttributes, JSX } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  
}

const Input = ({type = 'text', className = "", ...rest } : InputProps): JSX.Element => {
  const baseClasses = 'px-[15px] py-[7px] w-full rounded-md bg-white font-mont outline-none font-meduim focus:shadow-[0px_0px_10px_0px_var(--color-primary)] text-neutral-900 placeholde:text-neutral-500';

  return (
    <input
      type={type}
      className={`${baseClasses} ${className}`}
      {...rest}
    />
  );
};

export default Input;
