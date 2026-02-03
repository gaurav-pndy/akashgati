import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileText,
  Video,
  UserCheck,
  Users,
  ArrowRight,
  CheckCircle2,
  Shield,
} from "lucide-react";

const selectionSteps = [
  {
    icon: FileText,
    title: "Stage 1",
    subtitle: "Online Aptitude Test",
    date: "July 2026",
  },
  {
    icon: Video,
    title: "Stage 2",
    subtitle: "Video Submission",
    date: "Aug 2026",
  },
  {
    icon: UserCheck,
    title: "Stage 3",
    subtitle: "Interview",
    date: "Sept 2026",
  },
  {
    icon: Users,
    title: "Final",
    subtitle: "Cohort Selection",
    date: "50 Fellows",
  },
];

const selectionCriteria = [
  "Demonstrated interest in aviation or entrepreneurship",
  "Clarity of thought and communication",
  "Commitment and coachability",
  "Leadership potential and team orientation",
];

const credibilitySignals = [
  { icon: Shield, text: "Plagiarism screening" },
  { icon: CheckCircle2, text: "Standardized scoring" },
  { icon: Users, text: "Independent evaluation panel" },
];

const SelectionStructure = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="selection"
      className="py-24 md:py-32 bg-secondary/30"
      ref={ref}
    >
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4 font-body">
            Selection Process
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            How Fellows Are Selected
          </h2>
          <p className="text-muted-foreground text-lg font-body max-w-2xl mx-auto">
            A rigorous 3-stage selection process ensures only the most committed
            candidates join the fellowship.
          </p>
        </motion.div>

        {/* Selection Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          {/* Desktop view - horizontal */}
          <div className="hidden md:flex items-center justify-between gap-2">
            {selectionSteps.map((step, index) => (
              <div key={step.title} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-background border-2 border-accent flex items-center justify-center mb-3 shadow-subtle">
                    <step.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-display text-sm font-semibold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-body">
                    {step.subtitle}
                  </p>
                  <p className="text-xs text-accent font-medium font-body mt-1">
                    {step.date}
                  </p>
                </motion.div>
                {index < selectionSteps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-muted-foreground mx-4" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile view - vertical */}
          <div className="md:hidden space-y-4">
            {selectionSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-background border border-border rounded-lg"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {step.title}: {step.subtitle}
                  </h3>
                  <p className="text-sm text-accent font-body">{step.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Selection Criteria */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <h3 className="font-display text-lg font-semibold text-foreground text-center mb-6">
            Selection Criteria
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {selectionCriteria.map((criteria, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                className="flex items-center gap-3 p-3 bg-background border border-border rounded-lg"
              >
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm text-foreground font-body">
                  {criteria}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Credibility Signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {credibilitySignals.map((signal) => (
            <div
              key={signal.text}
              className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full"
            >
              <signal.icon className="w-4 h-4 text-accent" />
              <span className="text-sm text-foreground font-body">
                {signal.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SelectionStructure;
