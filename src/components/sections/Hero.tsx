import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const credibilityStats = [
  { label: "20 Days" },
  { label: "15 Cities" },
  { label: "50 Fellows" },
  { label: "Highly Selective" },
  { label: "Pan-India Immersion" },
];

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-secondary via-background to-background">
      {/* Subtle aviation pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L35 25H55L39 38L45 58L30 45L15 58L21 38L5 25H25L30 5Z' fill='none' stroke='%23000' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "120px 120px",
        }}
      />

      <div className="container relative z-10 px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-card border border-border"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Applications Opening July 2026
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-tight tracking-tight mb-6">
            The World's First <span className="text-accent">Aviation</span>{" "}
            Entrepreneurial Fellowship
          </h1>

          {/* Subhead */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 font-body leading-relaxed">
            20 days. 15 cities. 50 fellows. One mission: Shape India's next
            generation of aviation leaders, innovators, and entrepreneurs.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col items-center gap-4 mb-12"
          >
            <Button
              onClick={scrollToForm}
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium rounded-lg shadow-elevated hover:shadow-card transition-all duration-300"
            >
              Register Interest — October 2026 Cohort
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-sm text-muted-foreground">
              A CSR-supported national fellowship by CSO | Applications open
              July 2026
            </p>
          </motion.div>

          {/* Credibility Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-3 md:gap-4 max-w-3xl mx-auto pt-8 border-t border-border/50"
          >
            {credibilityStats.map((stat, index) => (
              <motion.span
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground font-body"
              >
                {stat.label}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
