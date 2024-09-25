import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './styles.module.css'

interface SlideData {
  id: number;
  imageUrl: string;
  name: string;
  title: string;
  buttons: { label: string; onClick: () => void }[];
}
const SliderComponent: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0); 

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

  const slideData: SlideData[] = [
    {
      id: 1,
      imageUrl: '/placeholder-image.png', // Replace with actual image URLs
      name: 'Abhishek Gupta',
      title: '마케팅 • 2y+',
      buttons: [
        { label: '마케팅 콘텐츠 제작', onClick: () => console.log('Button 1 clicked!') },
        { label: '인스타그램 관리', onClick: () => console.log('Button 2 clicked!') },
      ],
    },
    { 
      id: 2,
      imageUrl: '/placeholder-image.png', 
      name: 'John Doe',
      title: 'Developer • 5y+',
      buttons: [
        { label: 'Web Development', onClick: () => console.log('Button 1 clicked!') },
        { label: 'React.js', onClick: () => console.log('Button 2 clicked!') },
      ],
    },
    { 
      id: 2,
      imageUrl: '/placeholder-image.png', 
      name: 'John Doe',
      title: 'Developer • 5y+',
      buttons: [
        { label: 'Web Development', onClick: () => console.log('Button 1 clicked!') },
        { label: 'React.js', onClick: () => console.log('Button 2 clicked!') },
      ],
    },
    // Add more slide data as needed
  ];

  return (
    <div className={`relative w-[350px] ${styles?.sliderRight}`}> {/* Adjust width as needed */}
      <Slider {...settings} className="-mx-4"> 
        {slideData.map((slide) => (
          <div key={slide.id} className="px-4"> 
            <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform duration-300 ease-in-out hover:scale-105">
              <img 
                src={slide.imageUrl}
                alt={slide.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" 
              />
              <h3 className="text-lg font-semibold">{slide.name}</h3>
              <p className="text-gray-600">{slide.title}</p>
              <div className="mt-4 space-x-2"> 
                {slide.buttons.map((button, index) => (
                  <button 
                    key={index}
                    onClick={button.onClick}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full"
                  >
                    {button.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
      
    </div>
  );
};

export default SliderComponent;