import React from 'react';
import Image from "next/image";
import LogoFooter from '@/public/assets/images/footerMobile.png';
import GooglePlay from '@/public/assets/images/googlePlay.png';
import AppleStore from '@/public/assets/images/appleStore.png';
import {EmailSVG, FacebookSVG, MapSVG, PhoneSVG, TiktokSVG} from "@/public/assets/svgs";
import StoreGoogleMap from "@/app/components/StoreGoogleMap";

const Footer = () => {
    return (
        <footer className={'border-t-[3px] border-[#E0E0E0] pt-[43px] flex gap-y-[30px] flex-col'}>
            <div className={'md:px-[70px]'}>
                <div className="logo w-full justify-center items-center flex pb-[30px] md:pb-[50px]">
                    <Image src={LogoFooter} alt={'phuc-khang-gems-logo'} width={175} height={115}/>
                </div>
                <div className={'content-footer px-[16px]'}>
                    <div className={'md:flex md:justify-between'}>
                        <div className={'md:max-w-[408px]'}>
                            <div style={{lineHeight: '29.11px'}}
                                 className={'title text-primary font-[600] text-[22px]'}>
                                Đăng ký tư vấn và theo dõi những sản phẩm mới của chúng tôi
                            </div>
                            <div className={'relative'}>
                                <input type="text" placeholder={'Địa chỉ email'}
                                       className={'input-email border border-[#DEDFE0] placeholder-primary mt-[20px] w-full h-[56px] rounded-full px-[16px] text-[14px]'}/>
                                <button
                                    className={'btn absolute top-[26px] right-[8px] h-[43px] w-[110.9px] px-[0] py-[0] rounded-full'}>
                                    <span className={'text-[14px]'}>Đăng ký ngay</span>
                                </button>
                            </div>
                        </div>
                        <div className={'store-wrapper  mt-[20px] md:mt-0 flex flex-col gap-y-[30px]'}>
                            <div className={'title text-subText font-[500] text-[22px]'}>
                                Ứng dụng Phuc Khang Gems
                            </div>
                            <div className={'flex gap-x-[20.82px]'}>
                                <Image src={GooglePlay} alt={'phuc-khang-gems-google-play'} width={144.59}
                                       height={55.52}/>
                                <Image src={AppleStore} alt={'phuc-khang-gems-apple-store'} width={144.59}
                                       height={55.52}/>
                            </div>
                        </div>
                        <div className={'contact-wrapper flex gap-y-[10px] flex-col pt-[20px]'}>
                            <div className={'text-[#666666] text-[16px] font-[600]'}>Liên hệ: <span
                                className={'font-[500]'}>0000-000-000</span></div>
                            <div className={'text-[#666666] text-[16px] font-[600]'}>Email: <span
                                className={'font-[500]'}>@gmail.com</span></div>
                            <div className={'text-[#666666] text-[16px] font-[600]'}>Địa chỉ: <span
                                className={'font-[500]'}>Location</span></div>
                        </div>
                    </div>
                    <div className={'line border-b-[2px] border-[#DEDFE0] my-[10px] md:my-[50px]'}></div>
                    <div
                        className={'context-with-us text-subText flex flex-col gap-y-[20px] md:flex-row md:justify-between'}>
                        <div>
                            <div style={{lineHeight: '29.11px'}} className={'title font-[600] text-[22px]'}>
                                Kết nối với chúng tôi
                            </div>
                            <div className={'sub-title font-[500] text-[16px]'}>
                                Chia sẻ trải nghiệm của bạn ngay
                            </div>
                            <div
                                className="icons-wrapper flex gap-[20px] flex-wrap max-w-[208px] justify-start md:max-w-full">
                                <div
                                    className={'svg-item w-[56px] h-[56px] bg-primary rounded-[8px] flex justify-center items-center'}>
                                    <FacebookSVG color={'white'}/>
                                </div>
                                <div
                                    className={'svg-item w-[56px] h-[56px] bg-primary rounded-[8px] flex justify-center items-center'}>
                                    <TiktokSVG color={'white'}/>
                                </div>
                                <div
                                    className={'svg-item w-[56px] h-[56px] bg-primary rounded-[8px] flex justify-center items-center'}>
                                    <PhoneSVG color={'white'}/>
                                </div>
                                <div
                                    className={'svg-item w-[56px] h-[56px] bg-primary rounded-[8px] flex justify-center items-center'}>
                                    <EmailSVG color={'white'}/>
                                </div>
                                <div
                                    className={'svg-item w-[56px] h-[56px] bg-primary rounded-[8px] flex justify-center items-center'}>
                                    <MapSVG color={'white'}/>
                                </div>
                            </div>
                        </div>
                        <div className={'map w-[358px] h-[182px] rounded-[8px] overflow-hidden'}>
                            <StoreGoogleMap/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'bg-[#F4F4F4] h-[45px] flex justify-center items-center'}>
                <span
                    className={'text-subText text-[14px] text-center'}>Copyright ©2024 belongs to Phuc Khang Gems</span>
            </div>
        </footer>
    );
};

export default Footer;
