import Navbar from "@/app/components/Navbar";

export default function Home() {
    return (
        <main className="">
            <Navbar/>
            {/*Intro section*/}
            <div className={'px-[32px] py-[50px] flex flex-col gap-y-[30px]'}>
                <div style={{lineHeight: '26.63px', letterSpacing: '2px'}}
                     className="intro text-primary text-[22px] font-[600] text-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
                <div style={{lineHeight: '16.94px', letterSpacing: '2px'}}
                     className="sub-intro text-[14px] font-[500] text-subText">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown
                </div>
                <div className="flex justify-center items-center">
                    <button className={'btn rounded-full w-[176px] h-[44px]'}>Button</button>
                </div>
            </div>
            {/*End Intro section*/}
            {/*Form registry*/}
            <div className="form-registry mx-[17px] my-[19px] px-[40px] py-[22px] rounded-[12px] gap-y-[20px]">
                <div className={'title-wrapper flex gap-y-[20px] flex-col'}>
                    <div style={{lineHeight: '36px'}}
                         className="title text-[30px] font-[600] text-primary text-center">Đăng ký thông tin
                    </div>
                    <div style={{lineHeight: '27.88px'}} className={'sub-title text-center text-[18px] text-subText'}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </div>
                </div>
                <div className={'form-controls'}>
                    <div className={'control'}></div>
                </div>
            </div>
            {/*End Form registry*/}
        </main>
    );
}
