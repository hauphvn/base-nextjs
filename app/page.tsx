import Navbar from "@/app/components/Navbar";
import FormRegistry from "@/app/components/FormRegistry";
import Contact from "@/app/components/Contact";

export default function Home() {
    return (
        <main className="">
            <Navbar/>
            {/*Intro section*/}
            <div className={'px-[32px] py-[50px] flex flex-col gap-y-[30px] mt-[90px]'}>
                <div style={{lineHeight: '26.63px', letterSpacing: '2px'}}
                     className="intro text-primary text-[22px] font-[600] text-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
                <div style={{lineHeight: '16.94px', letterSpacing: '2px'}}
                     className="sub-intro text-[14px] text-subText">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                    when an unknown
                </div>
                <div className="flex justify-center items-center">
                    <button className={'btn rounded-full w-[176px] h-[44px]'}>Button</button>
                </div>
            </div>
            {/*End Intro section*/}
            {/*Form registry*/}
            <FormRegistry/>
            {/*End Form registry*/}
            {/*Contact*/}
            <Contact/>
            {/*End Contact*/}
            {/*Footer*/}
            <div className={'h-[100px]'}></div>
        </main>
    );
}
