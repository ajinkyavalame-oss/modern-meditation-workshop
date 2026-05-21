import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import WhatYoullLearn from './components/WhatYoullLearn';
import PerfectFor from './components/PerfectFor';
import Bonuses from './components/Bonuses';
import Mentor from './components/Mentor';
import Testimonials from './components/Testimonials';
import Transformation from './components/Transformation';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';
import SectionDivider from './components/SectionDivider';
import UrgencyBar from './components/UrgencyBar';

export default function App() {
  return (
    <div className="pb-20 sm:pb-0">
      <UrgencyBar />
      <div className="pt-16">
        <Hero />
      <SectionDivider />
      <PainPoints />
      <SectionDivider />
      <WhatYoullLearn />
      <SectionDivider />
      <PerfectFor />
      <SectionDivider />
      <Bonuses />
      <SectionDivider />
      <Mentor />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <Transformation />
      <SectionDivider />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
      </div>
    </div>
  );
}
