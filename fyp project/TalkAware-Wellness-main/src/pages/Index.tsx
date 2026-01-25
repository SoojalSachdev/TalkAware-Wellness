import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WellnessChat from "@/components/WellnessChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <DisclaimerSection />
        <TeamSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <WellnessChat />
    </div>
  );
};

export default Index;
