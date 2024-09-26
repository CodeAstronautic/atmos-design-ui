import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../assets/image/logo.svg';
import accordion from '../../assets/image/icon/accordion.svg';
import accordionBlack from '../../assets/image/icon/accordion-black.svg';
import menuIcon from '../../assets/image/icon/menu-icon.svg';
import CommonButton from '../CommonButton/CommonButton';

type HeaderProps = {
  onInquiryClick: () => void;
};

const Header: React.FC<HeaderProps> = ({ onInquiryClick }) => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className="w-full py-[18px] px-20 max-[768px]:px-4  flex flex-wrap gap-5 justify-between items-center max-w-full text-base font-black text-center relative">
      <div className='flex items-center gap-3'>
        <Image
          src={logo}
          alt="Company logo"
          width={60}
          height={60}
          loading="lazy"
          className="object-contain shrink-0 my-auto max-w-full aspect-[5.43] w-[114px]"
        />
      </div>

      <nav className="hidden md:flex gap-10 justify-center items-start self-stretch my-auto text-white">
        <div className="flex gap-2 items-center whitespace-nowrap relative" onClick={toggleDropdown}>
          <div className="self-stretch my-auto font-[poppins]">채용</div>
          <Image
            loading="lazy"
            src={accordion}
            alt=""
            className="object-contain shrink-0 my-auto w-4 aspect-square"
          />
          {isDropdownOpen && (
            <div className="absolute bg-white text-left rounded shadow-lg top-[30px]">
              <div className="text-[#344054] font-bold px-4 py-2.5 ">채용</div>
              <div className="text-[#344054] font-medium px-4 py-2.5">해외 개발자 원격 채용</div>
              <div className="text-[#344054] font-medium px-4 py-2.5">외국인 원격 채용 (비개발 직군)</div>
              <div className="text-[#344054] font-medium px-4 py-2.5">한국어 가능 외국인 채용</div>
            </div>
          )}
        </div>
        <div>해외 개발자 활용 서비스</div>
      </nav>

      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-white">
          <Image src={menuIcon} alt="Menu" className="w-6 h-6" />
        </button>
      </div>

      <CommonButton onClick={onInquiryClick} className="max-md:px-5 text-[#4A77FF] max-sm:hidden">
        문의하기
      </CommonButton>

      {isMobileMenuOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-white text-black  shadow-lg p-4 flex flex-col z-50">
          <div className="flex gap-2 items-center justify-center" onClick={toggleDropdown}>
            <div className="font-bold">채용</div>
            <Image
              loading="lazy"
              src={accordionBlack}
              alt=""
              className="object-contain w-4 "
            />
          </div>
          {isDropdownOpen && (
            <div className="bg-gray-100 p-2 rounded">
              <div className="text-[#344054] font-bold px-4 py-2.5">채용</div>
              <div className="text-[#344054] font-medium px-4 py-2.5">해외 개발자 원격 채용</div>
              <div className="text-[#344054] font-medium px-4 py-2.5">외국인 원격 채용 (비개발 직군)</div>
              <div className="text-[#344054] font-medium px-4 py-2.5">한국어 가능 외국인 채용</div>
            </div>
          )}
          <div className="mt-4">해외 개발자 활용 서비스</div>
          <CommonButton onClick={onInquiryClick} className="mt-4 text-[#4A77FF]">
            문의하기
          </CommonButton>
        </div>
      )}
    </div>
  );
};

export default Header;

