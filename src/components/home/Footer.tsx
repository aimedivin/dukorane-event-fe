import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1a0b2e] text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Left Column - Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-gradient">
                <span className="text-xl font-bold text-white">DE</span>
              </div>
              <span className="text-xl font-bold text-white">
                Dukorane Events
              </span>
            </div>
            <p className="text-sm text-white/80">
              Rwanda&apos;s premier event planning platform connecting clients
              with verified service providers.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Platform Column */}
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  For Event Owners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  For Providers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Dispute Resolution
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-sm text-white/60">
            © 2024 Dukorane Events. All rights reserved. Made with ❤️ in Rwanda.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
