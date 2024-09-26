import React from 'react';
import FeatureCard from './componentes/FeatureCard/FeatureCard';
import styles from './styles.module.css'

const features = [
  {
    title: "평균 월 120만원",
    description: "임금을 해당 국가를 기준으로 계산합니다."
  },
  {
    title: "최대 3회 인력교체",
    description: "막상 채용해보니 맞지 않아도 걱정하지 마세요."
  },
  {
    title: "평균 3일, 최대 10일",
    description: "급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다."
  }
];

const FeatureSection: React.FC = () => {
  return (
    <section className="mt-14 w-full max-md:mt-10 max-md:mr-0.5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">

        <div className={`flex flex-col  w-[82%] max-md:ml-0 max-md:w-full ${styles?.fadeIn}`}>
          <div className="flex flex-wrap gap-8 items-start font-black max-md:mt-6 max-md:hidden">
            {features.map((feature, index) => (
              <FeatureCard key={index} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;