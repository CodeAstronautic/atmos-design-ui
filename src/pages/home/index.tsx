import Header from '@/molecules/Header/Header';
import MainContent from '../../components/Home/MainContent/MainContent';
import Footer from '@/molecules/Footer/Footer';
import ServiceSection from '../../components/Home/ServiceSection/ServiceSection';
import { footerProps } from '@/utils/constant';


const Home = ({ users }:any) => {
  const handleInquiryClick = () => {};

  return (
    <div>
      <div className="bannerContent">
        <div className="container mx-auto">
          <Header onInquiryClick={handleInquiryClick} />
          <MainContent users={users}/>
        </div>
        <div className="pb-16 ml-[16.5rem] max-[1600px]:ml-[7rem] max-[1440px]:ml-[10rem] max-[1200px]:ml-[10.5rem] max-[1024px]:ml-[5rem] max-[771px]:ml-4 max-md:hidden">
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
