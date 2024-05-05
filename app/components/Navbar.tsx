import React from 'react';
import Image from "next/image";
import Logo from '@/public/assets/images/logo.png';
const Navbar = () => {
    return (
        <nav className={'flex justify-between items-center fixed top-0 bg-[white] h-[88px] z-10 w-full py-[16px] px-[20px] lg:container lg:px-20 lg:mx-auto border shadow'}>
            <Image src={Logo} width={100} height={100} alt={'phuc-khang-gems-logo'}/>
            <div className={'flex justify-center items-center gap-x-2'}>
                <button className={'btn rounded-full text-[16px] mr-[14px]'}>Liên hệ ngay</button>
            </div>
        </nav>
    );
};

export default Navbar;
