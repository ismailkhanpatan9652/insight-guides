import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { Section, SectionHeader } from "@/components/ui/section";
import { articles } from "@/data/articles";
import { ArrowRight, BookOpen, Shield, Users, FileText } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "In-Depth Guides",
    description: "Comprehensive articles that help you understand digital services and make informed decisions.",
  },
  {
    icon: Shield,
    title: "Unbiased Research",
    description: "Independent editorial content without promotional bias or misleading claims.",
  },
  {
    icon: Users,
    title: "User-Focused",
    description: "Content designed to genuinely help consumers navigate the digital landscape.",
  },
  {
    icon: FileText,
    title: "Regular Updates",
    description: "Fresh insights and updated information as the digital marketplace evolves.",
  },
];

const Index = () => {
  const featuredArticles = articles.slice(0, 3);
  const recentArticles = articles.slice(3, 6);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/40 border-b border-border/50">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
        <div className="container-wide py-20 md:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="opacity-0 animate-slide-up-3d">
              <span className="inline-block text-sm font-medium text-accent bg-accent/10 px-4 py-1.5 rounded-full mb-6 animate-glow-pulse">
                Independent Digital Insights
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
                Informative Guides for the <span className="text-gradient">Digital Consumer</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
                We publish independent guides and insights to help you understand digital services, 
                evaluate options, and make informed decisions in today's complex digital marketplace.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/insights">
                  <Button size="lg" className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Explore Insights
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="transition-all duration-300 hover:scale-105">
                    Learn About Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative opacity-0 animate-tilt-in stagger-2 perspective-1000">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-card transform-3d hover-3d-lift">
                <img 
                  src="/images/hero-bg.jpg" 
                  alt="Professional content publishing workspace" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-card border border-border/50 hidden md:block opacity-0 animate-flip-in stagger-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Quality Content</p>
                    <p className="text-xs text-muted-foreground">Research-backed insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Section className="bg-muted/20">
        <div className="container-wide">
          <SectionHeader 
            title="What We Offer" 
            subtitle="Our commitment to providing valuable, unbiased content for digital consumers."
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="bg-card p-6 rounded-xl border border-border/50 opacity-0 animate-tilt-in perspective-1000 transform-3d hover-3d-lift"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:animate-glow-pulse">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured Articles Section */}
      <Section>
        <div className="container-wide">
          <SectionHeader 
            title="Featured Insights" 
            subtitle="Our most comprehensive guides to help you navigate the digital landscape."
          />
          <div className="space-y-6">
            {featuredArticles.map((article, index) => (
              <ArticleCard 
                key={article.slug}
                {...article}
                featured={index === 0}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Recent Articles Section */}
      <Section className="bg-muted/20">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <SectionHeader 
              title="Recent Articles" 
              subtitle="Stay informed with our latest research and guides."
            />
            <Link to="/insights">
              <Button variant="outline" className="gap-2">
                View All Articles
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentArticles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Make Informed Digital Decisions
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Explore our comprehensive library of guides and insights designed to help you 
            navigate the world of digital services with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/insights">
              <Button size="lg" variant="secondary" className="gap-2">
                Browse All Insights
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                How It Works
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Index;
