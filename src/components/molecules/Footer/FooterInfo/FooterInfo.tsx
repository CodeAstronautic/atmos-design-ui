import { FooterInfoProps } from '@/interface/types';
import React from 'react';

const FooterInfo: React.FC<FooterInfoProps> = ({ businessNumber, cinNumber, addressKorea, addressIndia }) => {
  return (
    <>
      <div className="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col items-start mt-1 text-sm font-black text-gray-600 max-md:mt-0">
          <div className="text-[12px] leading-[18px] text-[#343741] font-black">사업자등록번호 CIN</div>
          <div className="mt-2.5 text-[13px] leading-[19.5px] text-[#5E626F] font-black">{businessNumber}</div>
          <div className="self-stretch mt-[5px] text-[13px] leading-[19.5px] text-[#5E626F] font-black break-words">
            {cinNumber}
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[74%] max-md:ml-0 max-md:w-full">
        <div className="flex grow gap-0.5 max-md:mt-0">
          <div className="flex flex-col grow shrink-0 items-start self-start mt-1 text-sm font-black text-gray-600 basis-0 w-fit max-md:max-w-full max-md:-mt-0">
            <div className="text-[12px] leading-[18px] text-[#343741] font-black">주소 ADDRESS</div>
            <div className="mt-2.5 text-[13px] leading-[19.5px] text-[#5E626F] font-black">{addressKorea}</div>
            <div className="self-stretch mt-[5px] break-words text-[13px] leading-[19.5px] text-[#5E626F] font-black max-md:max-w-full">
              {addressIndia}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterInfo;
