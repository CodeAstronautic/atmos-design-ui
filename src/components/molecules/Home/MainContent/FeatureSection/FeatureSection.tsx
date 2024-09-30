import React from 'react';
import FeatureCard from './FeatureCard';
import styles from './styles.module.css';
import { featuresData } from '@/utils/constant';

const FeatureSection: React.FC = () => {
  return (
    <section className="mt-[60px] w-full max-md:mt-10 max-md:mr-0.5 max-md:max-w-full max-md:hidden">
      <div className="flex gap-5 max-md:flex-col">
        <div className={`flex flex-col  w-[82%] max-md:ml-0 max-md:w-full ${styles?.fadeIn}`}>
          <div className="flex flex-wrap gap-8 items-start font-black max-md:mt-6 ">
            {featuresData.map((feature, index) => (
              <FeatureCard key={index} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
