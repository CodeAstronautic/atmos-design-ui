import React, { useState } from 'react';
import HeroSection from './HeroSection/HeroSection';
import FeatureSection from './FeatureSection/FeatureSection';
import ProfileCards from './ProfileCards/ProfileCards';
import dollorIcon from '../../../assets/image/icon/dollorIcon.svg';
import polygonDown from '../../../assets/image/icon/polygon-down.svg';
import styles from './styles.module.css';

import Image from 'next/image';
import { User } from '@/interface/types';
import CommonButton from '@/components/atoms/CommonButton/CommonButton';

interface Option {
  id: number;
  label: string;
  checked: boolean;
}
interface ProfileCardsProps {
  users: User[];
}

const MainContent: React.FC<ProfileCardsProps> = ({ users }) => {
  const [options, setOptions] = useState<Option[]>([
    { id: 1, label: '한국어 능력', checked: true },
    { id: 2, label: '업무 수행 능력', checked: true },
    { id: 3, label: '검업 여부', checked: true },
    { id: 4, label: '평판 조회', checked: true },
  ]);

  const handleCheckboxChange = (id: number) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) => (option.id === id ? { ...option, checked: !option.checked } : option)),
    );
  };

  return (
    <main className="flex flex-col pb-20 px-20 max-[768px]:px-4 rounded-none ">
      <div className="mt-[60px] max-w-full w-[1680px] max-md:mt-10">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5 max-md:flex-col">
          <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
            <HeroSection />
            <FeatureSection />
          </div>
          <div className="flex flex-col  w-full max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-3.5 max-md:max-w-full">
              <div
                className={`flex flex-wrap gap-10 self-end max-w-full font-black w-full max-[768px]:w-full justify-center ${styles.fadeIn}`}>
                <div className="flex gap-2.5 items-center px-4 py-2 text-lg text-teal-500 bg-emerald-50 rounded-lg relative">
                  <Image
                    loading="lazy"
                    src={dollorIcon}
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto rounded-none aspect-square w-[26px]"
                  />
                  <CommonButton onClick={() => {}} className="px-0 !bg-emerald-50 text-[#14b8a6] ">
                    월 100만원
                  </CommonButton>
                  <Image
                    loading="lazy"
                    src={polygonDown}
                    alt=""
                    className="object-contain w-3.5 rounded-sm aspect-square absolute bottom-[-10px] right-[50%] left-[50%] "
                  />
                </div>
              </div>
              <ProfileCards users={users} />
            </div>
            <div className="grid grid-cols-2  md:hidden">
              {options.map((option) => (
                <div key={option.id} className="flex items-center text-white">
                  <input
                    type="checkbox"
                    id={`checkbox-${option.id}`}
                    checked={option.checked}
                    onChange={() => handleCheckboxChange(option.id)}
                    className={styles?.customCheckbox}
                  />
                  <label htmlFor={`checkbox-${option.id}`} className="ml-2">
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
            <div className="self-start mt-4  text-[16px] text-[#FBFF23] font-black md:hidden">
              개발자가 필요하신가요?
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
