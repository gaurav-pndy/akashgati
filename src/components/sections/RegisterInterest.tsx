import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const benefits = [
  "Receive application launch notification",
  "Get early access to selection criteria and curriculum details",
  "Join AGF community updates",
];

const RegisterInterest = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Interest Registered!",
      description: "We'll notify you when applications open for the October 2026 cohort.",
    });
  };

  if (isSubmitted) {
    return (
      <section id="register" className="py-24 md:py-32 bg-background" ref={ref}>
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto text-center"
          >
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
              You're on the list!
            </h3>
            <p className="text-muted-foreground font-body">
              We'll notify you when applications open for the October 2026 cohort. Keep an eye on your inbox.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
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
                <li key={benefit} className="flex items-center gap-2 text-muted-foreground font-body">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-card space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="font-body">Full Name *</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="Your full name"
                  className="font-body"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-body">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="font-body"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-body">Phone *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="font-body"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age" className="font-body">Age *</Label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  min="16"
                  max="30"
                  required
                  placeholder="Your age"
                  className="font-body"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="gender" className="font-body">Gender *</Label>
                <Select name="gender" required>
                  <SelectTrigger className="font-body">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent className="bg-background">
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="status" className="font-body">Current Status *</Label>
                <Select name="status" required>
                  <SelectTrigger className="font-body">
                    <SelectValue placeholder="Select your status" />
                  </SelectTrigger>
                  <SelectContent className="bg-background">
                    <SelectItem value="student-ug">Student (Undergraduate)</SelectItem>
                    <SelectItem value="student-pg">Student (Postgraduate)</SelectItem>
                    <SelectItem value="aspiring-pilot">Aspiring Pilot</SelectItem>
                    <SelectItem value="engineer">Engineer</SelectItem>
                    <SelectItem value="working">Working Professional</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="state" className="font-body">State *</Label>
                <Input
                  id="state"
                  name="state"
                  required
                  placeholder="Your state"
                  className="font-body"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city" className="font-body">City *</Label>
                <Input
                  id="city"
                  name="city"
                  required
                  placeholder="Your city"
                  className="font-body"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="interest" className="font-body">
                Why are you interested in AGF? (optional, max 150 chars)
              </Label>
              <Textarea
                id="interest"
                name="interest"
                placeholder="Tell us briefly..."
                maxLength={150}
                className="font-body resize-none"
                rows={2}
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-medium font-body shadow-elevated hover:shadow-card transition-all"
            >
              {isSubmitting ? "Registering..." : "Register Interest"}
            </Button>

            <p className="text-center text-sm text-muted-foreground font-body">
              Registering interest does not commit you to apply. We'll notify you when applications open.
            </p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default RegisterInterest;