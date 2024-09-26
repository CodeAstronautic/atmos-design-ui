import Header from "@/components/Header/Header";
import styles from './styles.module.css';
import MainContent from "../../components/Home/MainContent/MainConent";
import Footer from "@/components/Footer/Footer";
import ServiceSection from "../../components/Home/ServiceSection/ServiceSection";

export const Home = () => {

  const handleInquiryClick = () => {
  };

  const footerProps = {
    companyName: "하이퍼하이어",
    ceo: "김주현",
    ceoNameIndia: "Juhyun Kim",
    companyNameIndia: "Hyperhire India Private Limited",
    businessNumber: "427-86-01187",
    cinNumber: "U74110DL2016PTC290812",
    addressKorea: "서울특별시 강남대로 479, 지하 1층 238호",
    addressIndia: "D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India"
  };

  return (
    <div>
      <div className={styles.bannerContent}>
        <div className="container mx-auto">
          <Header onInquiryClick={handleInquiryClick} />
          <MainContent />
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
}
