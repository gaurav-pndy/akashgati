import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Plane, Building2, Wrench, Radio, Shield, Briefcase, Lightbulb, ArrowRight, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const experienceHighlights = [
  { icon: Building2, text: "Airport operations walkthroughs" },
  { icon: Plane, text: "Airline OCC visits" },
  { icon: Wrench, text: "MRO hangar immersions" },
  { icon: Building2, text: "Manufacturing ecosystem tours" },
  { icon: Radio, text: "ATC exposure (where permitted)" },
  { icon: Shield, text: "Defence aviation exposure (subject to clearance)" },
  { icon: Briefcase, text: "Aviation finance & legal sessions" },
  { icon: Lightbulb, text: "Entrepreneurship masterclasses" },
];

const TheJourney = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToForm = () => {
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="journey" className="py-24 md:py-32 bg-secondary/50" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4 font-body">
            The AGF Airborne Immersion
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            The Journey
          </h2>
          <p className="text-muted-foreground text-lg font-body max-w-3xl mx-auto">
            Starting and ending in Delhi, fellows travel together across India's aviation landscape. Each city represents a different vertical of the aviation ecosystem.
          </p>
        </motion.div>

        {/* Route Map Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-background border border-border rounded-xl p-6 md:p-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-accent" />
              <h3 className="font-display text-xl font-semibold text-foreground">Pan-India Route</h3>
            </div>
            
            <div className="space-y-4 text-sm font-body">
              <div className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg">
                <span className="font-semibold text-foreground whitespace-nowrap">North & East →</span>
                <span className="text-muted-foreground">Jewar → Lucknow/Kanpur → Darbhanga → Kolkata</span>
              </div>
              <div className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg">
                <span className="font-semibold text-foreground whitespace-nowrap">South →</span>
                <span className="text-muted-foreground">Hyderabad → Bengaluru → Chennai → Coimbatore → Kochi</span>
              </div>
              <div className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg">
                <span className="font-semibold text-foreground whitespace-nowrap">West & Central →</span>
                <span className="text-muted-foreground">Goa → Mumbai → Pune → Nagpur → Ahmedabad/GIFT City → Jaipur → Delhi</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-8"
        >
          <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground text-center mb-8">
            Experience Highlights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {experienceHighlights.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-background border border-border rounded-lg"
              >
                <item.icon className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm text-foreground font-body">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center text-xs text-muted-foreground font-body flex items-center justify-center gap-2 mb-8"
        >
          <AlertCircle className="w-3 h-3" />
          Visits to sensitive facilities depend on operational and security clearances.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <Button
            onClick={scrollToForm}
            variant="outline"
            className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Register Interest
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TheJourney;