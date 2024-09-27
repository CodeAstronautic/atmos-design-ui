import { FooterColumnProps } from '@/interface/types';
import React from 'react';

const FooterColumn: React.FC<FooterColumnProps> = ({ companyName, ceo, ceoNameIndia, companyNameIndia }) => {
  return (
    <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-start w-full font-black max-md:mt-10">
        <div className="flex gap-5 justify-between self-stretch">
          <div className="flex flex-col ">
            <div className="text-[12px] leading-[21px] text-[#343741] font-black">상호명</div>
            <div className="text-[13px] leading-[19.5px] text-[#5E626F] font-black">{companyName}</div>
        <div className="mt-1.5 text-[13px] leading-[19.5px] text-[#5E626F] font-black break-words">{companyNameIndia}</div>
          </div>
          <div className="flex flex-col">
            <div className="text-[12px] leading-[21px] text-[#343741] font-black">대표 CEO</div>
            <div className="text-[13px] leading-[19.5px] text-[#5E626F] font-black">{ceo}</div>
        <div className="mt-1.5 text-[13px] leading-[19.5px] text-[#5E626F] font-black break-words">{ceoNameIndia}</div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default FooterColumn;