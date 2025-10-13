import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Logo from "@/components/Logo";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AnimatedTestimonialsSection from "@/components/AnimatedTestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 z-50 bg-[#030303]">
            <Logo />
          </div>
          <div className="pt-24 md:pt-28">
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <TestimonialsSection />
            <AnimatedTestimonialsSection />
            <ContactSection />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
