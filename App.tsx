import React from 'react';
import { Hero } from './components/Hero';
import { Mechanism } from './components/Mechanism';
import { RecipeShowcase } from './components/RecipeShowcase';
import { Features } from './components/Features';
import { SocialProof } from './components/SocialProof';
import { Pricing } from './components/Pricing';
import { Guarantee } from './components/Guarantee';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { UrgencyBar } from './components/UrgencyBar';
import { BackRedirect } from './components/BackRedirect';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-brand-red selection:text-white pt-[44px]">
      <BackRedirect />
      <UrgencyBar />
      <Hero />
      <Mechanism />
      <RecipeShowcase />
      <Features />
      <SocialProof />
      <Pricing />
      <Guarantee />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;