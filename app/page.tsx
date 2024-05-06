import Navbar from "@/app/components/Navbar";
import FormRegistry from "@/app/components/FormRegistry";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import Bg1 from "@/public/assets/images/bg1.jpeg";
import Bg2 from "@/public/assets/images/bg2.jpeg";
import Bg3 from "@/public/assets/images/bg3.png";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Home() {
    return (
        <main className="max-w-[1440px] m-auto">
            <Navbar/>
            {/*Intro section*/}
            <div>
                <div className={'md:hidden px-[32px] py-[50px] flex flex-col gap-y-[30px] mt-[90px]'}>
                    <div style={{lineHeight: '26.63px', letterSpacing: '2px'}}
                         className="intro text-primary text-[22px] font-[600] text-center">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </div>
                    <div id={'top'}></div>
                    <div style={{lineHeight: '16.94px', letterSpacing: '2px'}}
                         className="sub-intro text-[14px] text-subText">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the
                        1500s,
                        when an unknown
                    </div>
                    <div className="flex justify-center items-center">
                        <Link href={'#registry'}>
                            <button className={'btn rounded-full w-[176px] h-[44px]'}>Đăng kí ngay</button>
                        </Link>
                    </div>
                </div>
                <div className={'hidden lg:block'}>
                    <div style={{backgroundRepeat: 'no-repeat'}} className={'px-[32px] py-[50px] flex flex-row justify-between gap-x-[30px] mt-[90px] bg-custom-intro-bg bg-custom-intro-bg-size bg-custom-intro-bg-position'}>
                        <div className={'left max-w-[640px] flex flex-col gap-y-[30px] pt-[56px]'}>
                            <div style={{lineHeight: '58.09px', letterSpacing: '2px'}}
                                 className="intro text-primary text-[22px] lg:text-[48px] font-[600]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>
                            <div style={{lineHeight: '29.05px', letterSpacing: '2px'}}
                                 className="sub-intro text-[24px] text-subText">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since
                                the
                                1500s,
                                when an unknown
                            </div>
                            <Link href={'#registry'}>
                                <button className={'btn rounded-full w-[176px] h-[44px]'}>Đăng kí ngay</button>
                            </Link>
                        </div>
                        <div className={'right flex items-center max-w-[600px] gap-x-[26px]'}>
                            <div
                                style={{boxShadow:"7px 8px 30px 0px #00000040"}}
                                className={'border-[#FFF8ED] h-[411px] relative w-[318px] border-[7px] rounded-custom-rounded-image-1 overflow-hidden'}>
                                <Image src={Bg1} alt={'intro-image-1'} objectFit={'cover'} fill={true}/>
                            </div>
                            <div className={''}>
                                <div
                                    className={'h-[278px] relative w-[256] border-[#FFF8ED] border-[7px] rounded-custom-rounded-image-1 overflow-hidden'}>
                                    <Image src={Bg2} alt={'intro-image-2'} objectFit={'cover'} fill={true}/>
                                </div>
                                <div
                                    className={'h-[278px] relative w-[256px] border-[#FFF8ED] border-[7px] rounded-custom-rounded-image-2 overflow-hidden'}>
                                    <Image src={Bg3} alt={'intro-image-3'} objectFit={'cover'} fill={true}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*End Intro section*/}
            <div className={'md:flex md:flex-row flex-wrap flex-auto justify-center items-center gap-x-[20px] md:pb-[50px]'}>
                {/*Form registry*/}
               <div id={'registry'} className={'flex-1 md:p-[20px]'}>
                   <FormRegistry/>
               </div>
                {/*End Form registry*/}
                {/*Contact*/}
               <div className={'flex-1 md:max-w-[563px]'}>
                   <Contact/>
               </div>
                {/*End Contact*/}
            </div>

            {/*Footer*/}
            <Footer/>
        </main>
    );
}
