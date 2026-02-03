import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, UserCheck, FileText, Network } from "lucide-react";

const outcomes = [
  {
    icon: Eye,
    title: "Full Sector Exposure",
    description: "Exposure to every major aviation vertical—airlines, airports, MRO, manufacturing, defence, policy, and finance.",
  },
  {
    icon: UserCheck,
    title: "Industry Access",
    description: "Direct access to industry leaders, decision-makers, and aviation founders through structured mentorship.",
  },
  {
    icon: FileText,
    title: "Capstone Deliverable",
    description: "Complete a capstone project and contribute to an aviation policy whitepaper with real-world relevance.",
  },
  {
    icon: Network,
    title: "Alumni Network",
    description: "Entry into the AGF alumni and advisory network—a lifelong community of aviation leaders and entrepreneurs.",
  },
];

const Outcomes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            What You'll Walk Away With
          </h2>
          <p className="text-muted-foreground text-lg font-body max-w-2xl mx-auto">
            Tangible outcomes that set you apart in India's aviation ecosystem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="flex items-start gap-5 p-6 bg-card border border-border rounded-xl shadow-subtle hover:shadow-card transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <outcome.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2">
                  {outcome.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed text-sm">
                  {outcome.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
