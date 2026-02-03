import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Presentation, Award, Users, FileText, MapPin } from "lucide-react";

const finaleHighlights = [
  { icon: Presentation, title: "Project Showcase", description: "Present capstone projects to industry leaders" },
  { icon: Award, title: "Awards Ceremony", description: "Recognition for outstanding fellows" },
  { icon: Users, title: "Industry & Policy Engagement", description: "Connect with decision-makers" },
  { icon: FileText, title: "Whitepaper Release", description: "AGF Impact Report launch" },
];

const GrandFinale = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium font-body">Delhi Conclusion</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            The Grand Finale
          </h2>
          <p className="text-primary-foreground/80 text-lg font-body max-w-2xl mx-auto">
            The fellowship culminates in Delhi with a prestigious national-stage event bringing together fellows, industry leaders, and policymakers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {finaleHighlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-primary-foreground/70 font-body">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrandFinale;