import Image from 'next/image';
import React from 'react';

type ServiceCardProps = {
  icon: string;
  title: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title }) => {
  return (
    <div className="flex overflow-hidden gap-6 items-center p-4 rounded-xl bg-white bg-opacity-20 min-w-[240px] w-[320px] min-[1700px]:w-[318px] max-[1600px]:w-[290px] max-[1200px]:w-[345px] max-[1024px]:w-[320px] max-[771px]:w-[360px] slide-service-box ">
      <div className="flex gap-2.5 items-center self-stretch p-3 my-auto w-14 h-14 rounded-lg bg-white bg-opacity-40">
        <Image loading="lazy" src={icon} alt="" className="object-contain w-8 aspect-square" />
      </div>
      <div className="flex-1 shrink self-stretch my-auto text-2xl font-black text-white basis-6">{title}</div>
    </div>
  );
};

export default ServiceCard;
