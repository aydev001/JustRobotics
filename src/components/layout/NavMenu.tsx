import { CgClose } from "react-icons/cg"; 
import { RiMenu3Fill } from "react-icons/ri";
import { useState, type JSX } from 'react';
import category from "../../assets/icons/category.svg"
import edit from "../../assets/icons/edit.svg"
import chat from "../../assets/icons/chat.svg"
import users from "../../assets/icons/users.svg"

const NavMenu = (): JSX.Element => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>()
  return (
    <>
      <button onClick={() => setIsOpenMenu(prev => !prev)} className="w-[30px] h-[30px] text-[18px] flex justify-center items-center hover:bg-white/20 duration-100 rounded-sm cursor-pointer active:bg-white/10">
        {isOpenMenu? <CgClose />: <RiMenu3Fill />}
      </button>
      <div className={`fixed top-[89px] z-40 left-0 right-0 bg-black md:hidden flex flex-col px-[10px] duration-200 overflow-hidden border-primary ${isOpenMenu ? "h-[205px] py-[10px] border-b-[2px]" : "h-0 py-0"}`}>
        <a href="#" onClick={() => {setIsOpenMenu(false)}} className="flex items-center gap-[10px] py-[10px] px-[5%] hover:bg-white/10 duration-100 cursor-pointer">
          <img className="w-[25px] h-[25px]" src={category} alt="menu-icon" />
          <div>Главная</div>
        </a>
        <hr className="border-neutral-800"/>
        <a href="#about" onClick={() => {setIsOpenMenu(false)}} className="flex items-center gap-[10px] py-[10px] px-[5%] hover:bg-white/10 duration-100 cursor-pointer">
          <img className="w-[25px] h-[25px]" src={edit} alt="menu-icon" />
          <div>О нас</div>
        </a>
        <hr className="border-neutral-800"/>
        <a href="#courses" onClick={() => {setIsOpenMenu(false)}} className="flex items-center gap-[10px] py-[10px] px-[5%] hover:bg-white/10 duration-100 cursor-pointer">
          <img className="w-[25px] h-[25px]" src={chat} alt="menu-icon" />
          <div>Курсы</div>
        </a>
        <hr className="border-neutral-800"/>
        <a href="#registration" onClick={() => {setIsOpenMenu(false)}} className="flex items-center gap-[10px] py-[10px] px-[5%] hover:bg-white/10 duration-100 cursor-pointer">
          <img className="w-[25px] h-[25px]" src={users} alt="menu-icon" />
          <div>Контакты</div>
        </a>
      </div>
    </>
  );
};

export default NavMenu;