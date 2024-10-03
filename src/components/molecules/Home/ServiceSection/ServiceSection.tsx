import React from 'react';
import ServiceCard from './ServiceCard';
import marketingIcon from '../../../../assets/image/icon/marketing.svg';
import galleryIcon from '../../../../assets/image/icon/gallery-icon.svg';
import boxIcon from '../../../../assets/image/icon/box-icon.svg';
import targetIcon from '../../../../assets/image/icon/target-icon.svg';
import phoneIcon from '../../../../assets/image/icon/phone-icon.svg';
import styles from './styles.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const services = [
  { icon: marketingIcon, title: '해외 마케팅' },
  { icon: galleryIcon, title: '퍼블리셔' },
  { icon: boxIcon, title: '캐드원(제도사)' },
  { icon: targetIcon, title: '해외 세일즈' },
  { icon: phoneIcon, title: '해외 CS' },
  { icon: phoneIcon, title: '해외 마케팅' },
];

const ServiceSection: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1599,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="service-cards">
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className={styles?.fadeIn}>
            <ServiceCard icon={service.icon} title={service.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ServiceSection;
