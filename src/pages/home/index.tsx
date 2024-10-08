import Header from '@/components/molecules/Header/Header';
import { footerProps } from '@/utils/constant';
import Footer from '@/components/molecules/Footer/Footer';
import { NextPage } from 'next';
import { User } from '@/interface/types';
import MainContent from '@/components/molecules/Home/MainContent/MainContent';
import ServiceSection from '@/components/molecules/Home/ServiceSection/ServiceSection';

interface ProfileCardsProps {
  users: User[];
}
const Home: NextPage<ProfileCardsProps> = ({ users }) => {
  const handleInquiryClick = () => {};

  return (
    <div>
      <div className="bannerContent">
        <div className="container mx-auto">
          <Header onInquiryClick={handleInquiryClick} />
          <MainContent users={users} />
        </div>
        <div className="pb-[108px] ml-[254px] max-[1800px]:ml-[13rem] max-[1700px]:ml-[10rem] service-tab-slide max-[1600px]:ml-[7rem] max-[1400px]:ml-[9rem] max-[1440px]:ml-[10rem]  max-[1200px]:ml-[2.5rem] max-[1024px]:ml-8 max-[771px]:ml-[0.5rem] max-md:hidden">
          <ServiceSection />
        </div>
      </div>
      <div className="bg-[#FBFBFB]">
        <Footer {...footerProps} />
      </div>
    </div>
  );
};
export default Home;
