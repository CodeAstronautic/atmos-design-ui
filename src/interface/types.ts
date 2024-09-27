export interface User {
    name: string;
    role: string;
    experience: string;
    avatar: string;
    skills: string[];
    flag: string;
  }
  export interface FooterInfoProps {
    businessNumber: string;
    cinNumber: string;
    addressKorea: string;
    addressIndia: string;
  }
  export interface ServiceFooterProps {
    icon: string;
    title: string;
    link: string;
  }
  export  interface FooterColumnProps {
    companyName: string;
    ceo: string;
    ceoNameIndia: string;
    companyNameIndia: string;
  }
  export interface ContactInfoProps {
    description: string;
    phone: string;
    email: string;
  }
  export interface FooterProps {
    companyName: string;
    ceo: string;
    ceoNameIndia: string;
    companyNameIndia: string;
    businessNumber: string;
    cinNumber: string;
    addressKorea: string;
    addressIndia: string;
  }