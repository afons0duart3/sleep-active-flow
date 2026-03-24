import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import CTASection from "@/components/home/CTASection";

const Index = () => (
  <Layout>
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <HowItWorksSection />
    <SocialProofSection />
    <CTASection />
  </Layout>
);

export default Index;
