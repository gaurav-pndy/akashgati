import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const AboutCSO = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cso" className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4 font-body">
            Organized By
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-8">
            Centre for Scientific Outreach
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed font-body mb-6">
            The Akashgati Fellowship is conceived and organized by the Centre for Scientific Outreach (CSO)—a not-for-profit organization committed to breaking barriers and opening doors of opportunity.
          </p>
          
          <p className="text-muted-foreground text-lg leading-relaxed font-body mb-8">
            CSO brings together domain experts, industry partners, and institutional collaborators to deliver programs that meet global standards of rigor and relevance.
          </p>

          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-full mb-8">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <span className="text-foreground font-medium font-body">CSO</span>
            <span className="text-muted-foreground font-body">|</span>
            <span className="text-muted-foreground text-sm font-body">Not-for-Profit</span>
          </div>

          <div>
            <a
              href="https://www.thecso.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:underline font-body text-sm"
            >
              Learn more at www.thecso.in
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCSO;