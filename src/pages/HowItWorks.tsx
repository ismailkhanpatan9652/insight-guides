import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Search, BookOpen, Lightbulb, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "1",
    title: "Research & Analysis",
    description: "Our editorial team researches digital services, market trends, and consumer needs to identify topics that provide real value to our readers.",
  },
  {
    icon: BookOpen,
    step: "2",
    title: "Content Creation",
    description: "We create comprehensive, well-researched articles that explain complex topics in clear, accessible language.",
  },
  {
    icon: Lightbulb,
    step: "3",
    title: "Editorial Review",
    description: "Each piece undergoes thorough review for accuracy, clarity, and usefulness before publication.",
  },
  {
    icon: CheckCircle,
    step: "4",
    title: "Publish & Update",
    description: "Content is published and regularly updated to reflect changes in the digital landscape.",
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      <PageHero 
        title="How It Works"
        subtitle="Understanding our approach to creating valuable, independent content for digital consumers."
      />

      {/* Process Steps */}
      <Section>
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-semibold text-foreground mb-12 text-center">
              Our Content Process
            </h2>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div 
                  key={step.title}
                  className="flex gap-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-display text-xl font-semibold">
                      {step.step}
                    </div>
                  </div>
                  <div className="pt-1">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* For Readers Section */}
      <Section className="bg-muted/20">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
                For Our Readers
              </h2>
              <div className="prose-article">
                <p>
                  We provide free access to comprehensive guides and insights that help you 
                  understand digital services better. Our content covers:
                </p>
                <ul>
                  <li>How different types of digital services work</li>
                  <li>What to look for when evaluating options</li>
                  <li>Security and privacy considerations</li>
                  <li>Consumer rights and best practices</li>
                  <li>Practical tips for making informed decisions</li>
                </ul>
                <p>
                  All our content is designed to be educational and actionable, helping you 
                  navigate the digital landscape with greater confidence.
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
                Our Standards
              </h2>
              <div className="prose-article">
                <p>
                  We maintain high editorial standards to ensure our content is trustworthy 
                  and genuinely useful:
                </p>
                <ul>
                  <li>All facts are verified through reliable sources</li>
                  <li>Content is reviewed for accuracy before publication</li>
                  <li>Articles are updated as services and markets evolve</li>
                  <li>Editorial decisions are independent of commercial considerations</li>
                  <li>Affiliate relationships are clearly disclosed</li>
                </ul>
                <p>
                  Our goal is to earn your trust through consistently high-quality, 
                  honest content that puts reader benefit first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Affiliate Model Explanation */}
      <Section>
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-semibold text-foreground mb-6 text-center">
              How We Sustain Our Work
            </h2>
            <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-card">
              <div className="prose-article">
                <p>
                  Mallinova is supported through affiliate partnerships. When we link to 
                  products or services in our content, we may earn a commission if you make 
                  a purchase through those links.
                </p>
                <p>
                  This business model allows us to:
                </p>
                <ul>
                  <li>Provide all content free of charge to readers</li>
                  <li>Maintain editorial independence (we're not paid for positive reviews)</li>
                  <li>Continue researching and publishing new content</li>
                  <li>Keep our content updated and accurate</li>
                </ul>
                <p>
                  <strong>Important:</strong> Our editorial decisions are never influenced by 
                  affiliate relationships. We only recommend services we believe provide genuine 
                  value, and we always disclose when links may result in affiliate compensation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default HowItWorks;
