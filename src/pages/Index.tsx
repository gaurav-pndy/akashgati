import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import WhatIsAGF from "@/components/sections/WhatIsAGF";
import TheJourney from "@/components/sections/TheJourney";
import ProgramStructure from "@/components/sections/ProgramStructure";
import Deliverables from "@/components/sections/Deliverables";
import WhoShouldApply from "@/components/sections/WhoShouldApply";
import SelectionStructure from "@/components/sections/SelectionStructure";
import GrandFinale from "@/components/sections/GrandFinale";
import WhyAGF from "@/components/sections/WhyAGF";
import Outcomes from "@/components/sections/Outcomes";
import AboutCSO from "@/components/sections/AboutCSO";
import RegisterInterest from "@/components/sections/RegisterInterest";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhatIsAGF />
        <TheJourney />
        <ProgramStructure />
        <Deliverables />
        <WhoShouldApply />
        <SelectionStructure />
        <GrandFinale />
        <WhyAGF />
        <Outcomes />
        <AboutCSO />
        <RegisterInterest />
      </main>
      <Footer />
    </div>
  );
};

export default Index;