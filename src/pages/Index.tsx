import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhenNeededSection from "@/components/WhenNeededSection";
import FeaturesSection from "@/components/FeaturesSection";
import WorkflowSection from "@/components/WorkflowSection";
import MigrationSection from "@/components/MigrationSection";
import VideoSection from "@/components/VideoSection";
import NewsSection from "@/components/NewsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WhenNeededSection />
      <FeaturesSection />
      <WorkflowSection />
      <MigrationSection />
      <VideoSection />
      <NewsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;