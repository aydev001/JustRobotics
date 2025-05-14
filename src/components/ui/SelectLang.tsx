import { useState, type JSX } from 'react';

const SelectLang = (): JSX.Element => {
  const [lang, setLang] = useState<"RU" | "UZ">("RU")

  return (
    <div className='hover:bg-white/10 p-[3px] duration-150 rounded-sm flex justify-between items-center font-tektur'>
      <div onClick={() => setLang("RU")} className={`py-[3px] px-[15px] rounded-sm text-[14px] font-medium text-primary duration-150 cursor-pointer ${lang==="RU" && "bg-primary text-white text-shadow-md"}`}>
        RU
      </div>
      <div onClick={() => setLang("UZ")} className={`py-[3px] px-[15px] rounded-sm text-[14px] font-medium text-primary duration-150 cursor-pointer ${lang==="UZ" && "bg-primary text-white text-shadow-md"}`}>
        UZ
      </div>
    </div>
  );
};

export default SelectLang;