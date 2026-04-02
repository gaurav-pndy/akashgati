import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { CheckCircle2, AlertCircle } from "lucide-react";

const benefits = [
  "Receive application launch notification",
  "Get early access to selection criteria and curriculum details",
  "Join AGF community updates",
];

const RegisterInterest = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // if (isSubmitted) {
  //   return (
  //     <section id="register" className="py-24 md:py-32 bg-background" ref={ref}>
  //       <div className="container px-6">
  //         <motion.div
  //           initial={{ opacity: 0, scale: 0.95 }}
  //           animate={{ opacity: 1, scale: 1 }}
  //           className="max-w-md mx-auto text-center"
  //         >
  //           <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
  //             <CheckCircle2 className="w-8 h-8 text-accent" />
  //           </div>
  //           <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
  //             You're on the list!
  //           </h3>
  //           <p className="text-muted-foreground font-body">
  //             We'll notify you when applications open for the October 2026
  //             cohort. Keep an eye on your inbox.
  //           </p>
  //         </motion.div>
  //       </div>
  //     </section>
  //   );
  // }

  return (
    <section id="register" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <p className="text-sm text-accent font-medium uppercase tracking-wider mb-3 font-body">
              October 2026 Cohort
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Register Your Interest
            </h2>

            {/* Urgency Line */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6"
            >
              <AlertCircle className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground font-body">
                50 seats. Nationwide selection. Applications open July 2026.
              </span>
            </motion.div>

            <p className="text-muted-foreground font-body mb-6">
              Register your interest to:
            </p>
            <ul className="inline-flex flex-col items-start gap-2 text-left">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-2 text-muted-foreground font-body"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className=" "
          >
            <iframe
              aria-label="AGF Contact Us"
              frameBorder="0"
              style={{ minHeight: "1350px", width: "100%", border: "none" }}
              src="https://forms.zohopublic.in/cso/form/AGFContactUs/formperma/yJKrLW4BdMEPvUscVdAuntGwNaP9_fw4UcupZRIIf6U"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegisterInterest;
