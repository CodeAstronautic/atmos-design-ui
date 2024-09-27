import React from 'react';

type FeatureCardProps = {
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col w-[161px]">
      <div className="max-w-full border border-white border-solid min-h-[1px] w-[129px]" />
      <h3 className="mt-2 text-lg text-white font-black">{title}</h3>
      <p className="mt-2 text-base leading-6 text-white text-opacity-80 font-black">{description}</p>
    </div>
  );
};

export default FeatureCard;
