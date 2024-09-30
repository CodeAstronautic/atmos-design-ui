import { ContactInfoProps } from '@/interface/types';
import React from 'react';

const ContactInfo: React.FC<ContactInfoProps> = ({ description, phone, email }) => {
  return (
    <div className="flex flex-col grow items-start max-md:mt-0">
      <div className="text-[14px] leading-[21px] text-[#343741] font-black	">{description}</div>
      <div className="mt-5 text-[#5E626F] font-black text-[13px] max-md:mt-[18px]">{phone}</div>
      <div className="mt-2 text-[#5E626F] font-black text-[13px]">{email}</div>
    </div>
  );
};

export default ContactInfo;
