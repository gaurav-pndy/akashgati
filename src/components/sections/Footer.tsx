import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container px-6">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center mb-4">
            <img
              src="/logo-white.svg"
              alt="Akashgati logo"
              className="h-14 md:h-20"
            />
          </div>

          <p className="text-primary-foreground/70 text-sm font-body mb-4">
            World's First Aviation Entrepreneurial Fellowship
          </p>

          {/* Hashtags */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="text-accent text-sm font-body">#AGF2026</span>
            <span className="text-accent text-sm font-body">
              #AkashgatiFellowship
            </span>
            <span className="text-accent text-sm font-body">
              #SoarExploreLead
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            {/* unchanged */}
          </nav>

          {/* ✅ Social Links */}
          <div className="flex items-center gap-4 mb-8">
            {/* Facebook (added first) */}
            <a
              href="http://www.facebook.com/share/19exyN9Fh3/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/akashgati.fellowship/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/showcase/akashgati/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>

            {/* Twitter */}
            <a
              href="https://x.com/akashgati"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="Twitter"
            >
              <FaXTwitter className="w-5 h-5" />
            </a>
          </div>

          {/* Contact */}
          <a
            href="tel:+919773983147"
            className="text-accent hover:underline text-sm font-body mb-2"
          >
            +91 97739 83147
          </a>
          <a
            href="mailto:hello@akashgati.org"
            className="text-accent hover:underline text-sm font-body mb-8"
          >
            hello@akashgati.org
          </a>

          {/* Legal */}
          <div className="pt-8 border-t border-primary-foreground/10 w-full">
            <p className="text-xs text-primary-foreground/50 font-body">
              © {currentYear} Centre for Scientific Outreach (CSO). All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
