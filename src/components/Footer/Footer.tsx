import React from 'react';
import FooterColumn from './FooterColumn/FooterColumn';
import FooterInfo from './FooterInfo/FooterInfo';
import Image from 'next/image';
import ServiceFooter from './ServiceFooter/ServiceFooter';
import ContactInfo from './ContactInfo/ContactInfo';
import footerLogo from '../../assets/footer-logo.svg'
import serviceCodeIcon from '../../assets/service-code-icon.svg'
import serviceAvtarIcon from '../../assets/service-avatar-icon.svg'
import servicKorIcon from '../../assets/service-kor-icon.svg'
import servicSettingIcon from '../../assets/service-setting-icon.svg'
import arrowRight from '../../assets/arrow-right.svg'

interface FooterProps {
  companyName: string;
  ceo: string;
  ceoNameIndia: string;
  companyNameIndia: string;
  businessNumber: string;
  cinNumber: string;
  addressKorea: string;
  addressIndia: string;
}

const Footer: React.FC<FooterProps> = ({
    companyName,
    ceo,
    ceoNameIndia,
    companyNameIndia,
    businessNumber,
    cinNumber,
    addressKorea,
    addressIndia
}) => {


    const leftInfo = {
        logoSrc: footerLogo,
        description: "우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.",
        phone: "010-0000-0000",
        email: "aaaaa@naver.com",
        services: [
          {
            icon: serviceCodeIcon,
            title: "해외 개발자 원격 채용",
            link: arrowRight
          },
          {
            icon: serviceAvtarIcon,
            title: "외국인 원격 채용 (비개발)",
            link: arrowRight
          },
          {
            icon: servicKorIcon,
            title: "한국어 가능 외국인 채용",
            link: arrowRight
          },
          {
            icon: servicSettingIcon,
            title: "해외 개발자 활용 서비스",
            link: arrowRight
          }
        ]
    };
  


    
  return (

    <div className="flex flex-col justify-center py-24 rounded-none  px-20 max-[768px]:px-4 w-full container mx-auto">

    <div className="flex flex-col justify-center items-center pb-16 w-full bg-zinc-50 max-[768px]:pb-8  max-md:max-w-full">
      <div className="flex flex-col w-full">
        <div className="w-full max-md:max-w-full">
          <div className="flex gap-20 max-[768px]:gap-8 max-md:flex-col">
            <div className="flex flex-col w-[28%] max-md:w-full gap-4">
              <Image src={leftInfo?.logoSrc} alt="Company Logo" />
              <ContactInfo description={leftInfo?.description} phone={leftInfo?.phone} email={leftInfo?.email} />
            </div>
            <div className="flex flex-col  w-[76%] max-md:w-full">
              <div className="w-full  max-md:max-w-full ">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col  max-md:w-full">
                    <div className="grid grid-cols-4 max-[576px]:grid-cols-2 grow gap-4 items-center ">
                      {leftInfo?.services.map((service, index) => (
                        <ServiceFooter key={index} {...service} />
                      ))}
                
                    </div>
                  </div>
                  {/* <div className="flex flex-col ml-5 w-6/12 max-md:w-full">
                    <div className="flex gap-4 self-stretch my-auto ">
                      {leftInfo?.services.slice(2).map((service, index) => (
                        <ServiceFooter key={index} {...service} />
                      ))}
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center w-full bg-zinc-50  max-md:max-w-full">
      <div className="flex gap-20 max-[768px]:gap-8 max-md:flex-col w-full">
        <FooterColumn
          companyName={companyName}
          ceo={ceo}
          ceoNameIndia={ceoNameIndia}
          companyNameIndia={companyNameIndia}
        />
        <div className="flex flex-col  w-[72%]  max-md:w-full">
          <div className="flex flex-col w-full  max-md:max-w-full">
    
            <div className="z-10 w-full max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <FooterInfo
                  businessNumber={businessNumber}
                  cinNumber={cinNumber}
                  addressKorea={addressKorea}
                  addressIndia={addressIndia}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="w-full mt-12 text-[13px] leading-[19.5px] text-[#5E626F] max-md:mt-10 font-black">ⓒ 2023 Hyperhire</div>
    </div>
    </div>
  );
};

export default Footer;