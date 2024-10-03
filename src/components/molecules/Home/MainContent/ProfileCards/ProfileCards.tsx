import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import avtar from '../../../../../assets/image/avtar.svg';
import flag from '../../../../../assets/image/flag.svg';
import styles from './styles.module.css';
import { NextPage } from 'next';
import { User } from '@/interface/types';

interface ProfileCardsProps {
  users: User[];
}
const ProfileCards: NextPage<ProfileCardsProps> = ({ users }) => {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(1);

  const settings = {
    dots: false,
    className: 'center',
    infinite: true,
    speed: 500,
    slidesToShow: 2.666,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '60px',
    beforeChange: (_current: number, next: number) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2.93,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.93,
          slidesToScroll: 1,
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2.95,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 3,
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 391,
        settings: {
          slidesToShow: 3,
          centerPadding: '0px',
        },
      },
    ],
  };

  return (
    <div className={`py-8 relative slider-cards max-[479px]:pt-4 max-md:pb-6 ${styles.sliderWrapper}`}>
      <Slider {...settings} ref={sliderRef} initialSlide={1}>
        {users?.map((person, index) => {
          const isLeftCard = (activeSlide === 0 && index === users.length - 1) || activeSlide === index + 1;
          const isRightCard = (activeSlide === users.length - 1 && index === 0) || activeSlide === index - 1;

          return (
            <div key={index} className={` ${activeSlide === index ? 'slick-current' : ''}`}>
              <div
                className={`bg-white rounded-2xl shadow-md p-9 max-md:px-[16px] text-center ${isLeftCard ? '!bg-[#EDFCFF]  max-[1200px]:mx-[105px] max-[768px]:mx-[136px] max-[479px]:mx-[74px] max-[425px]:mx-[60px] max-[375px]:mx-[70px]' : ''} ${isRightCard ? '!bg-[#EDFCFF]  max-[1200px]:mx-[-80px] max-[768px]:mx-[-100px] max-[479px]:mx-[-47px] max-[425px]:mx-[-22px] max-[375px]:mx-[-20px]' : ''} ${activeSlide === index ? 'w-[291px] max-w-[291px] max-[425px]:w-[234px]' : 'w-[291px] max-w-[291px] max-[425px]:w-[218px] max-[375px]:w-[204px] max-[360px]:w-[197px]'}`}>
                <div className="h-[120px] w-[120px] mx-auto rounded-full relative max-md:h-[64px] max-md:w-[69px]">
                  <Image
                    loading="lazy"
                    src={avtar}
                    alt="user"
                    className="object-contain max-w-full rounded-none aspect-square w-[120px] h-full"
                  />
                  <Image
                    loading="lazy"
                    src={flag}
                    alt="flag"
                    className="object-contain max-w-full absolute bottom-[-6px] right-4 rounded-none aspect-square max-md:right-0"
                  />
                </div>
                <div className="mt-4">
                  <h2 className="text-[24px] font-black text-[#24252F] max-md:text-[18px]">{person.name}</h2>
                  <p className="text-[#4A77FF] text-[16px] font-black max-md:text-[14px]">
                    {person.role} · {person.experience}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-1 justify-center">
                  {person.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block text-[#5E626F] rounded-[6px] py-1 px-3 text-[16px] font-black bg-transparent border border-[#C1C5CF] max-md:text-[14px]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProfileCards;
