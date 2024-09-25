// import React from 'react';
// import SkillTag from '../SkillTags/SkillTags';

// interface ProfileCardProps {
//   name: string;
//   role: string;
//   experience: string;
//   imageUrl: string;
//   skills: string[];
// }

// const ProfileCards: React.FC<ProfileCardProps> = ({ name, role, experience, imageUrl, skills }) => {
//   return (
    // <article className="flex flex-col font-black rounded-xl w-[292px] max-w-[292px]">
    //   <div className="flex overflow-hidden flex-col items-center p-9 w-full bg-white rounded-xl shadow-[0px_15px_24px_rgba(0,0,0,0.12)]">
    //     <header className="flex flex-col items-center text-center">
    //       <img loading="lazy" src={imageUrl} alt={`Profile picture of ${name}`} className="object-contain max-w-full rounded-none aspect-square w-[120px]" />
    //       <div className="flex flex-col items-center mt-4">
    //         <h2 className="text-2xl text-zinc-800">{name}</h2>
    //         <p className="text-base text-[color:var(--,#4A77FF)]">
    //           {role} · {experience}
    //         </p>
    //       </div>
    //     </header>
    //     <section className="flex flex-col items-center mt-9 w-full text-base text-gray-600 max-w-[220px]">
    //       <div className="flex flex-col items-center">
    //         {skills.map((skill, index) => (
    //           <SkillTag key={index} skill={skill} className={index > 0 ? 'mt-1' : ''} />
    //         ))}
    //       </div>
    //     </section>
    //   </div>
    // </article>
//   );
// };

// export default ProfileCards;


// import React from 'react';
// import Slider from 'react-slick';
// import avtar from '../../../../assets/avtar.svg'
// import flag from '../../../../assets/flag.svg'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image from 'next/image';

// const data = [
//   {
//     name: "Abhishek Gupta",
//     role: "Marketing",
//     experience: "2y+",
//     avatar:avtar,
//     skills: ["Content Creation", "Instagram Management", "Twitter Management", "Blog Writing"],
//     flag:flag, // You can replace this with an image path if you need flags
//   },
//   {
//     name: "Abhishek Gupta",
//     role: "Marketing",
//     experience: "2y+",
//     avatar:avtar,
//     skills: ["Content Creation", "Instagram Management", "Twitter Management", "Blog Writing"],
//     flag: flag, // You can replace this with an image path if you need flags
//   },
//   {
//     name: "Abhishek Gupta",
//     role: "Marketing",
//     experience: "2y+",
//     avatar:avtar,
//     skills: ["Content Creation", "Instagram Management", "Twitter Management", "Blog Writing"],
//     flag: flag, // You can replace this with an image path if you need flags
//   },
//   // Add more items here
// ];

// const ProfileCards: React.FC = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="py-10">
//       <Slider {...settings}>
//         {data.map((person, index) => (
//           <div key={index} className="p-4 ">
//             <div className="bg-white rounded-xl shadow-md p-6 text-center !w-[292px] max-w-[292px]">
//               <div className="h-[120px] w-[120px] mx-auto rounded-full  relative">
//                <Image loading="lazy" src={person?.avatar} alt="user" className="object-contain max-w-full rounded-none aspect-square w-[120px]" />
//                <Image loading="lazy" src={person?.flag} alt="flag" className="object-contain max-w-full absolute bottom-[-6px] right-4 rounded-none aspect-square" />

//               </div>
//               <h2 className="text-xl font-semibold mt-4">{person.name}</h2>
//               <p className="text-blue-600">{person.role} · {person.experience}</p>
//               <div className="mt-4">
//                 {person.skills.map((skill, skillIndex) => (
//                   <span
//                     key={skillIndex}
//                     className="inline-block bg-gray-200 text-sm text-gray-800 px-3 py-1 rounded-full mr-2 mb-2"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>

//     </div>
//   );
// };

// export default ProfileCards;


import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import avtar from '../../../../assets/avtar.svg';
import flag from '../../../../assets/flag.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import styles from './styles.module.css'; // for custom styles


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
  // Add more items here
];

const ProfileCards: React.FC = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
const sliderRef = useRef(null);
const [activeSlide, setActiveSlide] = useState(0); 

  // const settings = {
  //   speed: 1000,
  //   arrows: true,
  //   dots: false,
  //   infinite: true,
  //   centerMode: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   centerPadding: "0",
  //   swipe: true,
  // };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "50px",
    beforeChange: (_current: number, next: number) => setActiveSlide(next)
  };

  return (
    <div className={`py-10 relative sliderWrapper ${styles.sliderWrapper}`}>
      <Slider {...settings} >
        {data.map((person, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-2xl test shadow-md p-6 text-center w-[292px] max-w-[292px]">
              <div className="h-[120px] w-[120px] mx-auto rounded-full relative">
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
                  className="object-contain max-w-full absolute bottom-[-6px] right-4 rounded-none aspect-square"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-[24px] font-black text-[#24252F]">{person.name}</h2>
                <p className="text-[#4A77FF] text-[16px] font-black">{person.role} · {person.experience}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-1 justify-center">
                {person.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-block  text-[#5E626F] rounded-[6px] py-1 px-3 text-[16px] font-black bg-transparent border border[#C1C5CF]"
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

// components/ProfileSlider.tsx

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'; // Ensure correct import path
// import 'swiper/css';  // Default Swiper styles
// import 'swiper/css/navigation';  // For navigation arrows
// import 'swiper/css/pagination';  // For pagination

// // Install modules
// SwiperCore.use([Navigation, Pagination, Autoplay]);

// interface ProfileCardProps {
//   name: string;
//   tagline: string;
//   skills: string[];
//   imageSrc: string;
// }

// const ProfileSlider: React.FC<ProfileCardProps> = ({ name, tagline, skills, imageSrc }) => {
//   return (
//     <div className="p-6 bg-white rounded-xl text-center shadow-md">
//       <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
//         <img src={imageSrc} alt={`${name}'s profile`} className="w-full h-auto" />
//       </div>
//       <h3 className="text-lg font-bold mb-2">{name}</h3>
//       <p className="text-blue-500 text-sm mb-4">{tagline}</p>
//       <div className="flex flex-wrap gap-2 justify-center">
//         {skills.map((skill, index) => (
//           <span key={index} className="bg-gray-200 rounded-full px-3 py-1 text-xs text-gray-700">
//             {skill}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// const ProfileCards: React.FC = () => {
//   return (
//     <div className="w-full p-5">
//       <Swiper
//         spaceBetween={20}
//         slidesPerView={3}
//         centeredSlides
//         loop
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000 }}
//       >
//         <SwiperSlide>
//           <ProfileSlider
//             name="Abhishek Gupta"
//             tagline="마케팅 · 2y+"
//             imageSrc="https://via.placeholder.com/150"  // Use a valid image URL
//             skills={['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성']}
//           />
//         </SwiperSlide>
//         {/* You can add more SwiperSlide components here as needed */}
//       </Swiper>
//     </div>
//   );
// };

// export default ProfileCards;

