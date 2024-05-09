'use client'

import {useState} from 'react';
import {Modal as ModalAntd} from "antd";
import {NotOkCheckIcon, NotOkCheckIconMobile} from "@/public/assets/svgs";

const ModalOk = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <ModalAntd
            className={'custom-modal max-w-custom-max-width-modal-mobile md:max-w-custom-max-width-modal-desktop bg-custom-intro-bg-repeat'}
            open={isModalOpen} closeIcon={false} onCancel={handleCancel}
            footer={[
                <div key={'ok'} className={'flex justify-center items-center pb-[22px] md:pb-[30px] flex-wrap gap-[30px] md:flex-row-reverse'}>
                    <button
                        className={'bg-primary text-white rounded-[10px] px-[55px] py-[13px] text-[18px] font-[600] md:h-[48px] md:py-[0]'}
                        key="back" onClick={handleCancel}>
                        Đóng
                    </button>
                    <button
                        className={'bg-[#FFF8ED]  border-primary border-[2px] rounded-[10px] px-[55px] py-[13px] text-[18px] font-[600] text-primary md:h-[48px] md:py-[0]'}
                        key="back" onClick={handleCancel}>
                        Thử lại
                    </button>
                </div>
            ]}
        >
            <div>
                <div
                    className={'bg-custom-modal-bg h-[135px] md:h-[221px] bg-custom-modal-bg-size flex justify-center items-center'}>
                    <div className={'hidden md:block'}>
                       <NotOkCheckIcon/>
                   </div>
                    <div className={'md:hidden'}>
                        <NotOkCheckIconMobile/>
                    </div>
                </div>
                <div className={'content px-[29px] py-[30px] '}>
                    <div className={'font-[600] text-[22px] text-[#666666] text-center'}>Failure</div>
                    <div style={{lineHeight: '21.78px', letterSpacing: '2px'}}
                         className={'pt-[20px] pb-[30px] text-center text-[18px] text-[#777E90] border-b-[2px] border-[#DEDFE0]'}>
                        Đăng ký không thành công. Bạn có thể thử lại hoặc xem lại thông tin của mình <span className={'text-primary'}>tại đây</span>.
                    </div>
                </div>

            </div>

        </ModalAntd>
    );
};

export default ModalOk;
