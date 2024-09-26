import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import avtar from '../../../../../../assets/image/avtar.svg';
import flag from '../../../../../../assets/image/flag.svg';
import styles from './styles.module.css';

const data = [
  {
    name: "Abhishek Gupta",
    role: "마케팅",
    experience: "2y+",
    avatar: avtar,
    skills: ["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리", "블로그 글 작성"],
    flag: flag,
  },
  {
    name: "Abhishek Gupta",
    role: "마케팅",
    experience: "2y+",
    avatar: avtar,
    skills: ["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리", "블로그 글 작성"],
    flag: flag,
  },
  {
    name: "Abhishek Gupta",
    role: "마케팅",
    experience: "2y+",
    avatar: avtar,
    skills: ["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리", "블로그 글 작성"],
    flag: flag,
  },
];

const ProfileCards: React.FC = () => {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(1);
  const settings = {
    dots: false,
    className: "center",
    infinite: true,
    speed: 500,
    slidesToShow: 2.666,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "60px",
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
          slidesToShow: 1,
          slidesToScroll: 1,

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
          centerPadding: "10px",

        },
      },
      {
        breakpoint: 391,
        settings: {
          slidesToShow: 3,
          centerPadding: "0px",

        },
      },
    ]
  };

  return (
    <div className={`py-10 relative slider-cards max-[479px]:pt-2 ${styles.sliderWrapper}`}>
      <Slider {...settings} ref={sliderRef} initialSlide={1}>
        {data.map((person, index) => (
          <div key={index} className={`py-4 ${activeSlide === index ? 'slick-current' : ''}`}>
            <div className="bg-white rounded-2xl shadow-md p-6 text-center w-[291px] max-w-[291px] max-[425px]:w-[234px]">
              <div className="h-[120px] w-[120px] mx-auto rounded-full relative max-md:h-[64px] max-md:w-[64px]">
                <Image
                  loading="lazy"
                  src={person?.avatar}
                  alt="user"
                  className="object-contain max-w-full rounded-none aspect-square w-[120px]"
                />
                <Image
                  loading="lazy"
                  src={person?.flag}
                  alt="flag"
                  className="object-contain max-w-full absolute bottom-[-6px] right-4 rounded-none aspect-square max-md:right-0"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-[24px] font-black text-[#24252F] max-md:text-[18px]">{person.name}</h2>
                <p className="text-[#4A77FF] text-[16px] font-black max-md:text-[14px]">{person.role} · {person.experience}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-1 justify-center">
                {person.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-block text-[#5E626F] rounded-[6px] py-1 px-3 text-[16px] font-black bg-transparent border border-[#C1C5CF] max-md:text-[14px]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProfileCards;
