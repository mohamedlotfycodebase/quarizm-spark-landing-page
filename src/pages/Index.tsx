
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Comparison from "@/components/Comparison";
import WhoNeedsUs from "@/components/WhoNeedsUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhatMakesUsDifferent from "@/components/WhatMakesUsDifferent";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import DiscountPopup from "@/components/DiscountPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" dir="rtl">
      <Hero />
      <Features />
      <Benefits />
      <Comparison />
      <WhoNeedsUs />
      <WhyChooseUs />
      <WhatMakesUsDifferent />
      <Testimonials />
      <CTA />
      <Footer />
      <DiscountPopup />
    </div>
  );
};

export default Index;
