import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const targetAudience = [
  "Ages 18–25",
  "Aspiring pilots, engineers, entrepreneurs",
  "Students exploring aviation careers",
  "Young professionals seeking industry immersion",
];

const participationCategories = [
  { category: "Students (UG/PG)", description: "Final year or recently graduated" },
  { category: "Aspiring Pilots", description: "Preparing for commercial pilot training" },
  { category: "Engineers", description: "Aerospace, mechanical, or related fields" },
  { category: "MBA/Policy", description: "Business and policy enthusiasts" },
  { category: "Young Professionals", description: "Early career (0-3 years experience)" },
];

const WhoShouldApply = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToForm = () => {
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="apply" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4 font-body">
              Eligibility
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Is This For You?
            </h2>
          </motion.div>

          {/* Target Audience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-4 mb-8"
          >
            {targetAudience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg"
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground font-body">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Emphasis Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-lg md:text-xl text-foreground font-medium font-display">
              No aviation background required.{" "}
              <span className="text-accent">Only ambition and commitment.</span>
            </p>
          </motion.div>

          {/* Participation Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8"
          >
            <h3 className="font-display text-lg font-semibold text-foreground text-center mb-6">
              Participation Categories
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 px-4 font-display text-foreground font-semibold">Category</th>
                    <th className="py-3 px-4 font-display text-foreground font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {participationCategories.map((item, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-3 px-4 text-foreground font-body font-medium">{item.category}</td>
                      <td className="py-3 px-4 text-muted-foreground font-body">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Scholarship Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-accent/10 border border-accent/20 rounded-xl p-6 text-center mb-8"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <Award className="w-5 h-5 text-accent" />
              <h3 className="font-display text-lg font-semibold text-foreground">Scholarships Available</h3>
            </div>
            <p className="text-muted-foreground font-body">
              CSR-backed scholarships available. Merit and need both considered.
            </p>
          </motion.div>

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
      </div>
    </section>
  );
};

export default WhoShouldApply;