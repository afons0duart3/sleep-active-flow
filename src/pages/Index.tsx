import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import ForWhoSection from "@/components/home/ForWhoSection";
import MidCTASection from "@/components/home/MidCTASection";
import DifferentiationSection from "@/components/home/DifferentiationSection";
import AppPreviewSection from "@/components/home/AppPreviewSection";
import TrustSection from "@/components/home/TrustSection";
import HomeFAQSection from "@/components/home/HomeFAQSection";
import CTASection from "@/components/home/CTASection";

const Index = () => (
  <Layout>
    <HeroSection />
    <HowItWorksSection />
    <BenefitsSection />
    <ForWhoSection />
    <MidCTASection />
    <DifferentiationSection />
    <AppPreviewSection />
    <TrustSection />
    <HomeFAQSection />
    <CTASection />
  </Layout>
);

export default Index;
