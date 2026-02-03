import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, FileCheck, Plane, Handshake, Cog } from "lucide-react";

const differentiators = [
  {
    title: "Not a tour",
    description: "Real operations, real challenges, real decision-makers.",
  },
  {
    title: "Not a bootcamp",
    description: "Structured curriculum with defined learning outcomes.",
  },
  {
    title: "Not passive learning",
    description: "Fellows create, present, and contribute to real outputs.",
  },
  {
    title: "World-first airborne fellowship",
    description:
      "Travel across India's aviation network as a learning program.",
  },
  {
    title: "Integrated entrepreneurship",
    description: "Business thinking embedded throughout the journey.",
  },
  {
    title: "CSR-backed accessibility",
    description:
      "Scholarships ensure merit, not money, determines participation.",
  },
];

const cannotBeReplicated = [
  { icon: FileCheck, text: "National logistics" },
  { icon: Plane, text: "Aircraft coordination" },
  { icon: Handshake, text: "Multi-agency partnerships" },
  { icon: ShieldCheck, text: "Security clearances" },
  { icon: Cog, text: "High operational complexity" },
];

const WhyAGF = () => {
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
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4 font-body">
            Why AGF
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            What Makes This Different
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="bg-card border border-border rounded-xl p-5"
            >
              <h3 className="font-display text-lg font-semibold text-accent mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Why This Cannot Be Replicated */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-secondary/50 border border-border rounded-xl p-6 md:p-8">
            <h3 className="font-display text-lg md:text-xl font-semibold text-center mb-6 text-foreground">
              Impossible to Replicate at Small Scale
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {cannotBeReplicated.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full"
                >
                  <item.icon className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground font-body">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAGF;
