import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AffiliateButtonProps {
  category: string;
  className?: string;
}

// Returns a compliant, category-appropriate CTA text
// Following Daisycon guidelines: No aggressive language, no "free rewards", natural placement
const getCTAText = (category: string): { text: string; subtext: string } => {
  const ctaMap: Record<string, { text: string; subtext: string }> = {
    "Finance": {
      text: "Compare Financial Services",
      subtext: "Explore trusted options to help manage your finances"
    },
    "Loans": {
      text: "Compare Loan Options",
      subtext: "View current offers from verified lenders"
    },
    "Entertainment": {
      text: "Explore Entertainment Services",
      subtext: "Discover popular streaming and entertainment platforms"
    },
    "Gaming": {
      text: "Explore Gaming Platforms",
      subtext: "Browse gaming services and subscriptions"
    },
    "Home Improvement": {
      text: "Find Home Services",
      subtext: "Connect with trusted home improvement providers"
    },
    "Health": {
      text: "Explore Health Resources",
      subtext: "Discover wellness tools and healthcare services"
    },
    "Apps & Technology": {
      text: "View Recommended Tools",
      subtext: "Browse productivity and technology solutions"
    },
    "Education": {
      text: "Browse Learning Platforms",
      subtext: "Explore educational courses and resources"
    },
    "Consumer Guides": {
      text: "Compare Services",
      subtext: "View our curated selection of trusted providers"
    },
    "Travel": {
      text: "Explore Travel Options",
      subtext: "Compare booking platforms and travel services"
    },
    "Security": {
      text: "View Security Solutions",
      subtext: "Browse trusted digital security services"
    },
    "Digital Services": {
      text: "Explore Digital Services",
      subtext: "Discover platforms reviewed in this guide"
    },
    "Consumer Education": {
      text: "Learn More",
      subtext: "Explore services discussed in this article"
    }
  };

  return ctaMap[category] || {
    text: "Learn More",
    subtext: "Explore services related to this topic"
  };
};

export const AffiliateButton = ({ category, className = "" }: AffiliateButtonProps) => {
  const { text, subtext } = getCTAText(category);

  return (
    <div className={`my-10 p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-border/50 text-center ${className}`}>
      <p className="text-sm text-muted-foreground mb-3">{subtext}</p>
      <Button 
        asChild 
        size="lg" 
        className="group"
      >
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer sponsored"
          onClick={(e) => {
            // Placeholder - Replace # with actual affiliate link
            // e.preventDefault(); // Uncomment when testing
          }}
        >
          {text}
          <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
        </a>
      </Button>
      <p className="text-xs text-muted-foreground mt-3">
        Partner link • We may earn a commission
      </p>
    </div>
  );
};
