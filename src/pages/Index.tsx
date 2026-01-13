import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { articles } from "@/data/articles";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { 
  ArrowRight, 
  BookOpen, 
  Shield, 
  TrendingUp, 
  Sparkles, 
  Globe,
  ChevronDown,
  Search,
  Heart,
  CheckCircle2,
  Quote,
  Lightbulb,
  BadgeCheck,
  Layers,
  Zap
} from "lucide-react";

// Import images for category cards
import streamingServices from "@/assets/images/streaming-services.jpg";
import productivityApps from "@/assets/images/productivity-apps.jpg";
import personalFinance from "@/assets/images/personal-finance.jpg";
import security from "@/assets/images/security.jpg";

// ============= CONTENT DATA =============

const stats = [
  { value: 150, suffix: "K+", label: "Monthly Readers" },
  { value: 500, suffix: "+", label: "In-Depth Guides" },
  { value: 4.8, suffix: "/5", label: "Reader Rating", decimal: true },
  { value: 12, suffix: "+", label: "Topics Covered" },
];

const howItWorks = [
  {
    number: "01",
    title: "Explore",
    description: "Browse our curated library of guides covering digital services, subscriptions, and everyday tools.",
    icon: Search,
  },
  {
    number: "02", 
    title: "Learn",
    description: "Read unbiased, well-researched content written to help you understand your options clearly.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Decide",
    description: "Make confident, informed choices with the knowledge you've gained from our expert insights.",
    icon: Lightbulb,
  },
];

const testimonials = [
  {
    quote: "Sulma helped me understand the differences between streaming services. Their comparison guides saved me hours of research.",
    author: "Sarah Mitchell",
    role: "Content Creator",
    company: "Freelancer",
  },
  {
    quote: "Finally, a website that explains digital services without pushing products. The articles are genuinely helpful and easy to understand.",
    author: "James Chen",
    role: "Small Business Owner",
    company: "Chen Designs",
  },
  {
    quote: "I recommend Sulma to all my clients who need help navigating the world of subscriptions and digital tools.",
    author: "Emily Rodriguez",
    role: "Digital Consultant",
    company: "TechPath Advisory",
  },
];

const categories = [
  { name: "Streaming", icon: Layers, count: 42, image: streamingServices },
  { name: "Productivity", icon: Zap, count: 38, image: productivityApps },
  { name: "Finance", icon: TrendingUp, count: 56, image: personalFinance },
  { name: "Security", icon: Shield, count: 31, image: security },
];

const benefits = [
  { 
    icon: BadgeCheck, 
    title: "Thoroughly Researched", 
    desc: "Every guide is fact-checked and updated regularly to ensure accuracy" 
  },
  { 
    icon: Heart, 
    title: "Reader-First Approach", 
    desc: "Content designed to inform, not to sell—your trust matters most" 
  },
  {
    icon: Globe, 
    title: "Accessible to Everyone", 
    desc: "Clear, jargon-free writing that anyone can understand" 
  },
];

// ============= UTILITY COMPONENTS =============

const AnimatedNumber = ({ value, suffix = "", decimal = false }: { value: number; suffix?: string; decimal?: boolean }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(decimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value, decimal]);

  return (
    <span ref={ref}>
      {decimal ? count.toFixed(1) : count.toLocaleString()}{suffix}
    </span>
  );
};

const RevealSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.7, 
        delay,
        ease: [0.22, 1, 0.36, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const FloatingShape = ({ 
  size = 300, 
  color = "primary",
  delay = 0,
  className = ""
}: { 
  size?: number; 
  color?: string;
  delay?: number;
  className?: string;
}) => {
  const colors: Record<string, string> = {
    primary: "hsl(var(--primary) / 0.08)",
    accent: "hsl(var(--accent) / 0.06)",
    muted: "hsl(var(--muted-foreground) / 0.04)",
  };
  
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none blur-3xl ${className}`}
      style={{
        width: size,
        height: size,
        background: colors[color] || colors.primary,
      }}
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.6, 0.9, 0.6],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
};

// ============= MAIN COMPONENT =============

const Index = () => {
  const featuredArticles = articles.slice(0, 6);
  const containerRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const heroParallax = useTransform(smoothProgress, [0, 0.3], [0, -100]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
  }, []);

  return (
    <Layout>
      <div ref={containerRef} className="relative overflow-hidden">
        
        {/* ============= HERO SECTION ============= */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
          {/* Background elements */}
          <div className="absolute inset-0">
            <FloatingShape size={500} color="primary" className="-top-32 -right-32" delay={0} />
            <FloatingShape size={400} color="accent" className="bottom-0 -left-24" delay={3} />
            
            {/* Subtle grid */}
            <div 
              className="absolute inset-0 opacity-[0.015]"
              style={{
                backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          {/* Hero content */}
          <motion.div 
            style={{ y: reducedMotion ? 0 : heroParallax, opacity: reducedMotion ? 1 : heroOpacity }}
            className="relative z-10 container-wide px-6 py-24"
          >
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Your Guide to Digital Discovery</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
              >
                Trendy Articles For
                <span className="block text-gradient mt-2">Daily Life</span>
              </motion.h1>
              
              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10"
              >
                Great trendy articles that will help you in daily life - from 
                budgeting tips to smart shopping guides.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
              >
                <Link to="/insights">
                  <Button size="lg" className="group px-8 py-6 text-base font-semibold rounded-xl shadow-lg shadow-primary/20">
                    Browse All Guides
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="px-8 py-6 text-base font-semibold rounded-xl">
                    How Sulma Works
                  </Button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    className="text-center p-4"
                  >
                    <div className="text-2xl md:text-3xl font-display font-bold text-foreground mb-1">
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} decimal={stat.decimal} />
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-2 text-muted-foreground/50"
              >
                <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ============= WHAT WE DO SECTION ============= */}
        <section className="relative py-24 bg-muted/30">
          <div className="container-wide px-6">
            <RevealSection>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
                  What We Do
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Helping You Make
                  <span className="text-gradient ml-2">Informed Choices</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We research, compare, and explain digital products and services so you can 
                  decide what's right for you—without the marketing noise.
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-8">
              {howItWorks.map((step, index) => (
                <RevealSection key={step.number} delay={index * 0.15}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-4xl font-display font-bold text-primary/20">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </motion.div>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* ============= WHO WE SERVE SECTION ============= */}
        <section className="relative py-24 bg-background">
          <FloatingShape size={400} color="accent" className="top-1/4 -right-32" delay={1} />
          
          <div className="container-wide px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <RevealSection>
                <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
                  Who This Is For
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Built for Curious,
                  <span className="text-gradient ml-2">Thoughtful Readers</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Whether you're exploring new streaming options, comparing productivity apps, 
                  or trying to understand the latest digital trends—Sulma provides the clear, 
                  honest information you need.
                </p>
                
                <div className="space-y-4">
                  {[
                    "People tired of biased reviews and aggressive marketing",
                    "Anyone comparing subscription services or digital tools",
                    "Readers who value thorough research over quick sales pitches",
                    "Those who want to understand before they commit"
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </RevealSection>

              <RevealSection delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  {categories.map((cat, i) => (
                    <motion.div
                      key={cat.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.03 }}
                      className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
                    >
                      {/* Background image */}
                      <div className="absolute inset-0">
                        <img 
                          src={cat.image} 
                          alt={cat.name}
                          className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
                      </div>
                      
                      {/* Content */}
                      <div className="relative p-6">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                          <cat.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-1">{cat.name}</h3>
                        <p className="text-sm text-muted-foreground">{cat.count} guides</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </RevealSection>
            </div>
          </div>
        </section>

        {/* ============= FEATURED GUIDES SECTION ============= */}
        <section className="relative py-24 bg-muted/30">
          <div className="container-wide px-6 relative z-10">
            <RevealSection>
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
                <div>
                  <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
                    Featured Guides
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                    Popular
                    <span className="text-gradient ml-2">Resources</span>
                  </h2>
                </div>
                <Link to="/insights">
                  <Button variant="outline" className="group">
                    View All Guides
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </RevealSection>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArticles.map((article, index) => (
                <RevealSection key={article.slug} delay={index * 0.08}>
                  <ArticleCard 
                    slug={article.slug}
                    title={article.title}
                    excerpt={article.excerpt}
                    category={article.category}
                    readTime={article.readTime}
                    image={article.image}
                  />
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* ============= TESTIMONIALS SECTION ============= */}
        <section className="relative py-24 bg-background">
          <FloatingShape size={350} color="primary" className="-top-24 left-1/4" delay={2} />
          
          <div className="container-wide px-6 relative z-10">
            <RevealSection>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
                  Reader Feedback
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  What Our Readers
                  <span className="text-gradient ml-2">Are Saying</span>
                </h2>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <RevealSection key={testimonial.author} delay={index * 0.12}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all"
                  >
                    <Quote className="w-8 h-8 text-primary/20 mb-4" />
                    <p className="text-foreground/90 leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold text-sm">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* ============= WHY SULMA SECTION ============= */}
        <section className="relative py-24 bg-muted/30">
          <div className="container-wide px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <RevealSection>
                <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
                  Why Sulma
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Information You Can
                  <span className="text-gradient ml-2">Actually Trust</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  In a world of sponsored content and affiliate-driven reviews, we focus on 
                  delivering genuinely helpful information that serves readers first.
                </p>

                <div className="space-y-5">
                  {benefits.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-card transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </RevealSection>

              <RevealSection delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Guides Published", value: "500+", color: "from-primary to-violet-400" },
                    { label: "Topics Covered", value: "12+", color: "from-accent to-cyan-400" },
                    { label: "Monthly Readers", value: "150K", color: "from-violet-500 to-purple-600" },
                    { label: "Reader Rating", value: "4.8★", color: "from-pink-500 to-rose-400" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.03 }}
                      className={`p-6 rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}
                    >
                      <div className="text-2xl font-display font-bold mb-1">{stat.value}</div>
                      <div className="text-sm text-white/80">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </RevealSection>
            </div>
          </div>
        </section>

        {/* ============= CTA SECTION ============= */}
        <section className="relative py-20 bg-background">
          <div className="container-wide px-6">
            <RevealSection>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ready to Explore?
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Start browsing our collection of guides and discover the information you've been looking for.
                </p>
                <Link to="/insights">
                  <Button size="lg" className="px-8 py-6 text-base font-semibold rounded-xl shadow-lg shadow-primary/20">
                    Browse All Guides
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </RevealSection>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Index;
