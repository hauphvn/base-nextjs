import React from 'react';
import {EmailSVG, FacebookSVG, MapSVG, PhoneSVG, TiktokSVG} from "@/public/assets/svgs";
import Link from "next/link";
import Image from "next/image";
import AppStore from "@/public/assets/images/appleStore.png";
import PlayStore from "@/public/assets/images/googlePlay.png";
const Contact = () => {
    return (
        <div className={'mx-[16px]'}>
            <div className={'title text-primary text-center text-[30px] font-[600]'}>
                Lorem Ipsum is simply dummy text of the
            </div>
            <div style={{lineHeight: '26px'}} className={'sub-title text-subText font-[500] text-[18px] mb-[30px]'}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown
            </div>
            <div className={'context-wrapper flex justify-center flex-col items-center gap-y-[20px]'}>
                <div className={'us text-primary text-center text-[30px] font-[600]'}>
                    Liên hệ với chúng tôi!
                </div>
                <div className="icons-wrapper flex gap-x-[20px] flex-wrap max-w-[208px] justify-center">
                    <div
                        className={'svg-item w-[56px] h-[56px] bg-primaryOpacity50 rounded-[8px] flex justify-center items-center'}>
                        <FacebookSVG/>
                    </div>
                    <div
                        className={'svg-item w-[56px] h-[56px] bg-primaryOpacity50 rounded-[8px] flex justify-center items-center'}>
                        <TiktokSVG/>
                    </div>
                    <div
                        className={'svg-item w-[56px] h-[56px] bg-primaryOpacity50 rounded-[8px] flex justify-center items-center'}>
                        <PhoneSVG/>
                    </div>
                    <div
                        className={'svg-item w-[56px] h-[56px] bg-primaryOpacity50 rounded-[8px] flex justify-center items-center'}>
                        <EmailSVG/>
                    </div>
                    <div
                        className={'svg-item w-[56px] h-[56px] bg-primaryOpacity50 rounded-[8px] flex justify-center items-center'}>
                        <MapSVG/>
                    </div>
                </div>
                <div className="download-apps gap-y-[30px] flex flex-col">
                    <div className={'font-[600] text-[22px] text-primary text-center'}>Tải app Phuc Khang ngay</div>
                    <div className={'flex gap-x-[21px]'}>
                        <Link href={'/'}>
                            <Image src={PlayStore} alt={'phuc-khang-gems-play-store'} width={145.83} height={56}/>
                        </Link>
                        <Link href={'/'}>
                            <Image src={AppStore} alt={'phuc-khang-gems-apple-store'} width={145.83} height={56}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
