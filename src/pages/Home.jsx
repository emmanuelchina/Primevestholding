import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import AboutSection from "../components/About";
import InvestmentPlans from "../components/Investmeantplans";
import whatareoffer from "../components/Whatareoffer";
import WhyChooseUs from "../components/Whychooseus"
import HowItWorks from "../components/Howitworks";
import FAQ from "../components/Faq";
import CTASection  from "../components/Ctasection";
import Footer from "../components/Footer";
import AboutHero from "../components/Aboutpage/AboutHero";
import WhoWeAre from "../components/Aboutpage/WhoWeAre";

export default function Home() {
  return (
    <>
      <Navbar />
<AboutHero/>
<WhoWeAre/>
      <Hero />
        
        <AboutSection />
        <InvestmentPlans/>
        <WhyChooseUs/>
        <HowItWorks/>
        <FAQ/>
        <CTASection/>
        <Footer/>
       
    </>
  );
}