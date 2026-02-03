import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Users, BookOpen, Award, Map, Plane, Building2 } from "lucide-react";

const keyFacts = [
  { icon: Calendar, value: "20 Days", label: "Duration" },
  { icon: MapPin, value: "15 Cities", label: "Pan-India" },
  { icon: Users, value: "50 Fellows", label: "Cohort Size" },
  { icon: BookOpen, value: "8 Modules", label: "Curriculum" },
  { icon: Award, value: "Selective", label: "Cohort" },
  { icon: Plane, value: "Structured", label: "Curriculum" },
  { icon: Map, value: "Pan-India", label: "Expedition" },
  { icon: Building2, value: "Industry", label: "Integration" },
];

const WhatIsAGF = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4 font-body">
            The Fellowship
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-8">
            What is AGF?
          </h2>
          
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-body text-left md:text-center">
            <p>
              India's aviation sector is among the fastest-growing in the world. Yet there is no structured pathway for young Indians to understand, enter, or build within this ecosystem.
            </p>
            <p>
              The Akashgati Fellowship is a 20-day pan-India aviation immersion that takes 50 selected fellows across 15 aviation hubs—from greenfield airports to aerospace manufacturing clusters, from airline operations centers to aviation finance ecosystems.
            </p>
            <p>
              AGF combines structured learning, real-world industry exposure, and entrepreneurial mentorship to create not just professionals—but founders, policymakers, and leaders who will define India's aviation future.
            </p>
          </div>
        </motion.div>

        {/* Key Facts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {keyFacts.map((fact, index) => (
            <motion.div
              key={fact.value + fact.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
              className="flex flex-col items-center text-center p-4 bg-card border border-border rounded-xl"
            >
              <fact.icon className="w-5 h-5 text-accent mb-2" />
              <p className="font-display text-lg font-semibold text-foreground">
                {fact.value}
              </p>
              <p className="text-xs text-muted-foreground font-body">
                {fact.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsAGF;