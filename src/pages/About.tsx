import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { BookOpen, Target, Users, Award } from "lucide-react";

const values = [
  {
    icon: BookOpen,
    title: "Educational Focus",
    description: "We prioritize informative content that genuinely helps readers understand complex digital topics.",
  },
  {
    icon: Target,
    title: "Accuracy",
    description: "Our editorial team verifies information and keeps content updated as services evolve.",
  },
  {
    icon: Users,
    title: "Reader-First Approach",
    description: "Every piece of content is designed with reader benefit as the primary goal.",
  },
  {
    icon: Award,
    title: "Editorial Independence",
    description: "Our insights are based on research and analysis, not promotional considerations.",
  },
];

const About = () => {
  return (
    <Layout>
      <PageHero 
        title="About Mallinova"
        subtitle="An independent content platform dedicated to helping users understand digital services and make informed decisions."
      />

      {/* Mission Section */}
      <Section>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Our Mission
              </h2>
              <div className="prose-article">
                <p>
                  Mallinova was founded with a clear purpose: to provide reliable, well-researched 
                  information about digital services that helps consumers make informed decisions.
                </p>
                <p>
                  In a digital landscape filled with marketing messages and promotional content, 
                  we aim to be a trusted source of objective analysis and educational resources. 
                  Our editorial team focuses on creating content that genuinely adds value to our 
                  readers' understanding of digital products and services.
                </p>
                <p>
                  We believe that informed consumers make better decisions. Our goal is to empower 
                  you with the knowledge and insights needed to navigate the increasingly complex 
                  world of digital services with confidence.
                </p>
              </div>
            </div>
            <div className="bg-muted/30 rounded-2xl p-8 border border-border/50">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                What We Cover
              </h3>
              <ul className="space-y-3">
                {[
                  "Digital subscription services and comparisons",
                  "Online service provider evaluations",
                  "Consumer protection and security best practices",
                  "Understanding promotional offers and trials",
                  "Technology and digital lifestyle topics",
                  "Research skills for digital consumers",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="bg-muted/20">
        <div className="container-wide">
          <SectionHeader 
            title="Our Values"
            subtitle="The principles that guide our content and editorial decisions."
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-card p-6 rounded-xl border border-border/50 card-elevated text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section>
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Our Approach
            </h2>
            <div className="prose-article text-center">
              <p>
                Our content is created by a dedicated editorial team with experience in technology, 
                consumer advocacy, and digital services. We combine thorough research with clear, 
                accessible writing to produce guides that are both comprehensive and easy to understand.
              </p>
              <p>
                Each article undergoes careful review to ensure accuracy, relevance, and genuine 
                usefulness to our readers. We regularly update our content to reflect changes in 
                the digital landscape and incorporate reader feedback into our editorial planning.
              </p>
              <p>
                We're committed to growing our content library and serving our audience with 
                curated insights that make a real difference in how they approach digital decisions.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Affiliate Disclosure */}
      <Section className="bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4 text-center">
              Affiliate Disclosure
            </h2>
            <div className="bg-card p-6 rounded-xl border border-border/50">
              <p className="text-muted-foreground leading-relaxed text-center">
                Some links on this site may be affiliate links. This means we may earn a small 
                commission if you make a purchase through these links, at no additional cost to you. 
                These partnerships help support our editorial work and allow us to continue providing 
                free, independent content. Our editorial decisions are not influenced by affiliate 
                relationships, and we only recommend services we believe provide genuine value to our readers.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default About;
