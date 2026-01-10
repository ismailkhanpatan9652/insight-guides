import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { Section, SectionHeader } from "@/components/ui/section";
import { articles } from "@/data/articles";
import { ArrowRight, BookOpen, Shield, Users, FileText, Sparkles, Zap, Heart, Star, Gem, Rocket } from "lucide-react";


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
  const heroRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      {/* Hero Section with Parallax */}
      <section 
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/40 border-b border-border/50 min-h-[90vh] flex items-center"
      >
        {/* Parallax Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * 0.3}px) translateX(${scrollY * -0.1}px)` }}
          />
          <div 
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * -0.2}px) translateX(${scrollY * 0.1}px)` }}
          />
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
            style={{ transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.0005})` }}
          />
          {/* Floating geometric shapes */}
          <div 
            className="absolute top-20 left-[20%] w-4 h-4 bg-primary/30 rounded-full"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
          <div 
            className="absolute top-40 right-[30%] w-6 h-6 bg-accent/30 rotate-45"
            style={{ transform: `translateY(${scrollY * 0.4}px) rotate(${45 + scrollY * 0.1}deg)` }}
          />
          <div 
            className="absolute bottom-40 left-[40%] w-3 h-3 bg-secondary/50 rounded-full"
            style={{ transform: `translateY(${scrollY * -0.3}px)` }}
          />
          <div 
            className="absolute top-60 right-[15%] w-5 h-5 border-2 border-primary/30 rounded-full"
            style={{ transform: `translateY(${scrollY * 0.35}px) scale(${1 + scrollY * 0.001})` }}
          />
        </div>
        
        <div 
          className="container-wide py-20 md:py-32 relative z-10"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <div 
              className="opacity-0 animate-slide-up-3d"
              style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            >
              <span className="inline-block text-sm font-medium text-accent bg-accent/10 px-4 py-1.5 rounded-full mb-6 animate-glow-pulse">
                Independent Digital Insights
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
                Informative Guides for the <span className="text-gradient">Digital Consumer</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                We publish independent guides and insights to help you understand digital services, 
                evaluate options, and make informed decisions in today's complex digital marketplace.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
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

      {/* Stunning Feature Boxes Section */}
      <Section>
        <div className="container-wide">
          <SectionHeader 
            title="Why Choose Dativa" 
            subtitle="Experience the difference with our unique approach to digital insights."
            centered
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* Box 1 - Gradient with floating icon & particle burst */}
            <div className="group relative aspect-square rounded-2xl bg-gradient-to-br from-primary via-primary/80 to-accent p-4 overflow-hidden cursor-pointer transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-primary/40 hover:rotate-2">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_50%)] group-hover:bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.3),transparent_50%)] transition-all duration-700" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:scale-[2] group-hover:-translate-x-4 group-hover:-translate-y-4 transition-all duration-700" />
              <div className="absolute top-2 left-2 w-2 h-2 bg-white/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity" />
              <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping animation-delay-200 transition-opacity" />
              <div className="absolute bottom-8 right-8 w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping animation-delay-400 transition-opacity" />
              <Sparkles className="w-8 h-8 text-white/90 mb-2 group-hover:animate-spin group-hover:scale-125 transition-transform duration-500" />
              <p className="text-white/90 font-semibold text-sm mt-auto absolute bottom-4 left-4 group-hover:translate-x-1 transition-transform">Curated</p>
            </div>

            {/* Box 2 - Glass morphism with ripple effect */}
            <div className="group relative aspect-square rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 p-4 overflow-hidden cursor-pointer transition-all duration-500 hover:scale-110 hover:bg-white/15 hover:border-accent hover:-rotate-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary group-hover:h-full group-hover:opacity-20 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-accent/20 rounded-full group-hover:w-[200%] group-hover:h-[200%] transition-all duration-700" />
              </div>
              <Zap className="w-8 h-8 text-accent mb-2 group-hover:text-primary group-hover:scale-150 group-hover:-rotate-12 transition-all duration-300 relative z-10" />
              <p className="text-foreground font-semibold text-sm mt-auto absolute bottom-4 left-4 group-hover:text-primary transition-colors relative z-10">Fast</p>
            </div>

            {/* Box 3 - Neon glow with heartbeat */}
            <div className="group relative aspect-square rounded-2xl bg-card border-2 border-accent/30 p-4 overflow-hidden cursor-pointer transition-all duration-500 hover:scale-110 hover:border-accent hover:shadow-[0_0_40px_hsl(350_70%_75%_/_0.5),inset_0_0_20px_hsl(350_70%_75%_/_0.1)]">
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-accent animate-pulse" />
              <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-accent/50 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity" />
              <Heart className="w-8 h-8 text-accent mb-2 group-hover:scale-125 group-hover:animate-[heartbeat_0.6s_ease-in-out_infinite] transition-transform" />
              <p className="text-foreground font-semibold text-sm mt-auto absolute bottom-4 left-4 group-hover:tracking-wider transition-all">Trusted</p>
            </div>

            {/* Box 4 - Animated gradient border with flip */}
            <div className="group relative aspect-square rounded-2xl p-[2px] bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite] cursor-pointer transition-all duration-500 hover:scale-110 hover:p-[3px] [perspective:1000px]">
              <div className="w-full h-full rounded-[14px] bg-card p-4 flex flex-col transition-transform duration-700 group-hover:[transform:rotateY(10deg)_rotateX(5deg)]">
                <div className="absolute inset-0 rounded-[14px] bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Star className="w-8 h-8 text-primary mb-2 group-hover:rotate-[360deg] group-hover:scale-125 group-hover:text-accent transition-all duration-700 relative z-10" />
                <p className="text-foreground font-semibold text-sm mt-auto relative z-10 group-hover:text-primary transition-colors">Premium</p>
              </div>
            </div>

            {/* Box 5 - Layered depth with explosion */}
            <div className="group relative aspect-square cursor-pointer transition-all duration-500 hover:scale-110 [perspective:800px]">
              <div className="absolute inset-0 rounded-2xl bg-accent/30 translate-x-2 translate-y-2 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:scale-90 group-hover:opacity-50 transition-all duration-500" />
              <div className="absolute inset-0 rounded-2xl bg-primary/40 translate-x-1 translate-y-1 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:scale-95 group-hover:opacity-70 transition-all duration-400" />
              <div className="relative w-full h-full rounded-2xl bg-card border border-border p-4 flex flex-col group-hover:shadow-xl group-hover:[transform:translateZ(20px)] transition-all duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Gem className="w-8 h-8 text-primary mb-2 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10" />
                <p className="text-foreground font-semibold text-sm mt-auto relative z-10 group-hover:font-bold transition-all">Quality</p>
              </div>
            </div>

            {/* Box 6 - Orbital animation with liftoff */}
            <div className="group relative aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 p-4 overflow-hidden cursor-pointer transition-all duration-500 hover:scale-110 hover:bg-gradient-to-tl">
              <div className="absolute inset-4 rounded-full border border-dashed border-primary/30 animate-[spin_20s_linear_infinite] group-hover:animate-[spin_5s_linear_infinite] group-hover:border-primary/60 transition-all" />
              <div className="absolute inset-8 rounded-full border border-dashed border-accent/30 animate-[spin_15s_linear_infinite_reverse] group-hover:animate-[spin_3s_linear_infinite_reverse] group-hover:border-accent/60 transition-all" />
              <div className="absolute inset-12 rounded-full border border-dotted border-primary/20 opacity-0 group-hover:opacity-100 group-hover:animate-[spin_2s_linear_infinite] transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-primary group-hover:-translate-y-3 group-hover:translate-x-2 group-hover:scale-125 group-hover:rotate-[-20deg] transition-all duration-500" />
              </div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-4 h-0 bg-gradient-to-t from-accent via-primary to-transparent rounded-full opacity-0 group-hover:opacity-100 group-hover:h-8 blur-sm transition-all duration-300" />
              <p className="text-foreground font-semibold text-sm absolute bottom-4 left-4 group-hover:text-primary group-hover:translate-x-1 transition-all">Growth</p>
            </div>
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
              <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
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
