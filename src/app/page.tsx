import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import WhoItsForSection from '@/components/WhoItsForSection';
import SocialProofSection from '@/components/SocialProofSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorksSection />
      <WhoItsForSection />
      <SocialProofSection />
      <Footer />
    </main>
  );
}
