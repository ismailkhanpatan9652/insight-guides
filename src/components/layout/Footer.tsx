import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Disclaimer", href: "/disclaimer" },
  { name: "Editorial Policy", href: "/editorial-policy" },
];

const mainLinks = [
  { name: "Home", href: "/" },
  { name: "Insights", href: "/insights" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border mt-auto">
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-semibold text-foreground">
                Niarticles
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed mb-4">
              We publish independent guides and insights to help users understand 
              digital services and make informed decisions. Our editorial team 
              is committed to providing accurate, unbiased information.
            </p>
            <p className="text-sm text-muted-foreground">
              Some links on this site may be affiliate links. We may earn a 
              commission at no extra cost to you.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {mainLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Niarticles. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Independent insights for informed decisions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
