import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Plane, Building2, Wrench, Briefcase, Scale, Shield, Lightbulb, Trophy } from "lucide-react";

const modules = [
  {
    icon: Plane,
    title: "Aviation Foundations",
    description: "Core principles of flight, aircraft systems, and industry overview",
  },
  {
    icon: Building2,
    title: "Air Transport Operations & Management",
    description: "Airlines, airports, ground handling, and operations control",
  },
  {
    icon: Wrench,
    title: "Aerospace Manufacturing & MRO",
    description: "Aircraft manufacturing, maintenance, repair, and overhaul",
  },
  {
    icon: Briefcase,
    title: "Aviation Finance, Insurance & Leasing",
    description: "Aircraft financing, leasing models, and risk management",
  },
  {
    icon: Scale,
    title: "Aviation Law, Policy & Safety",
    description: "Regulatory frameworks, safety protocols, and policy landscape",
  },
  {
    icon: Shield,
    title: "Defence Aviation & Air Power",
    description: "Military aviation, strategic air power, and civil-defence synergies",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurship & Startup Building",
    description: "Venture pathways, business models, and founder mentorship",
  },
  {
    icon: Trophy,
    title: "Innovation Challenge + Capstone Project",
    description: "Apply learning to real-world aviation challenges",
  },
];

const ProgramStructure = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="program" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4 font-body">
            Program Structure
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            What You'll Learn
          </h2>
          <p className="text-muted-foreground text-lg font-body max-w-2xl mx-auto">
            A comprehensive 8-module curriculum covering every dimension of the aviation ecosystem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="bg-card border border-border rounded-xl p-5 hover:shadow-card transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <module.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display text-base font-semibold text-foreground mb-2">
                {module.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {module.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramStructure;