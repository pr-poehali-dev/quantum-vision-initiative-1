import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhenNeededSection from "@/components/WhenNeededSection";
import WhyKEDOSection from "@/components/WhyKEDOSection";
import WorkflowSection from "@/components/WorkflowSection";
import FeaturesSection from "@/components/FeaturesSection";
import MobileAppSection from "@/components/MobileAppSection";
import GallerySection from "@/components/GallerySection";
import PricingSection from "@/components/PricingSection";
import VideoSection from "@/components/VideoSection";
import ConditionsSection from "@/components/ConditionsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WhenNeededSection />
      <WhyKEDOSection />
      <WorkflowSection />
      <FeaturesSection />
      <MobileAppSection />
      <GallerySection />
      <PricingSection />
      <VideoSection />
      <ConditionsSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;