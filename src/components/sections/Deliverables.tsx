import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Presentation, Users } from "lucide-react";

const individualOutputs = [
  { icon: FileText, title: "Project concept note" },
  { icon: FileText, title: "Business feasibility outline" },
  { icon: Presentation, title: "Capstone report or pitch deck" },
];

const Deliverables = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4 font-body">
            Deliverables
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            What Fellows Create
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Individual Outputs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h3 className="font-display text-lg font-semibold text-foreground mb-4 text-center">
              Individual Outputs
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {individualOutputs.map((output, index) => (
                <motion.div
                  key={output.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-background border border-border rounded-lg"
                >
                  <output.icon className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground font-body">
                    {output.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Cohort Output */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-primary text-primary-foreground rounded-xl p-6 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Users className="w-6 h-6" />
              <h3 className="font-display text-lg font-semibold">
                Cohort Output
              </h3>
            </div>
            <p className="font-body text-primary-foreground/90 mb-4">
              AGF Impact Whitepaper submitted to ministries and industry
              stakeholders
            </p>
            <p className="text-sm font-medium text-accent">
              AGF prioritizes creation over consumption.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
