import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CompanyStats from "../components/CompanyStats";
import AboutSection from "../components/About";
import InvestmentPlans from "../components/Investmeantplans";
import CryptoTicker from "../components/CryptoTicker";

import WhyChooseUs from "../components/Whychooseus"
import HowItWorks from "../components/Howitworks";
import FAQ from "../components/Faq";
import CTASection  from "../components/Ctasection";
import Footer from "../components/Footer";
import FAQQ from "../components/Faqq";
import Heropage from "../components/heropage/Hero";

export default function Home() {
  return (
    <>
     

     <Navbar/>
 <Heropage/>
 <AboutSection/>
 <CompanyStats/>
        <InvestmentPlans/>
         <HowItWorks/>
        <WhyChooseUs/>
         <CryptoTicker/>
        <CTASection/>
        <Footer/>
       
    </>
  );
}