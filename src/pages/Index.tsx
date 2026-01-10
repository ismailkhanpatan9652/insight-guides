import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { ParticleBurst } from "@/components/ui/ParticleBurst";
import { articles } from "@/data/articles";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { 
  ArrowRight, 
  BookOpen, 
  Shield, 
  Users, 
  TrendingUp, 
  Sparkles, 
  Zap, 
  Globe,
  ChevronDown,
  Play,
  CheckCircle2,
  ArrowUpRight,
  Star
} from "lucide-react";

const stats = [
  { value: "50K+", label: "Active Readers", icon: Users },
  { value: "200+", label: "Expert Guides", icon: BookOpen },
  { value: "98%", label: "Satisfaction", icon: Star },
  { value: "24/7", label: "Updated Content", icon: TrendingUp },
];

const features = [
  {
    icon: Shield,
    title: "Unbiased Research",
    description: "Independent editorial content backed by thorough research and real-world testing.",
    gradient: "from-blue-500 to-cyan-400",
    particleColors: ["#3b82f6", "#22d3ee", "#60a5fa"],
  },
  {
    icon: Zap,
    title: "Actionable Insights",
    description: "Clear, practical recommendations you can implement immediately.",
    gradient: "from-amber-500 to-orange-400",
    particleColors: ["#f59e0b", "#fb923c", "#fbbf24"],
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Comprehensive guides covering services available worldwide.",
    gradient: "from-purple-500 to-pink-400",
    particleColors: ["#a855f7", "#ec4899", "#d946ef"],
  },
  {
    icon: TrendingUp,
    title: "Always Current",
    description: "Content updated regularly to reflect the latest market changes.",
    gradient: "from-emerald-500 to-teal-400",
    particleColors: ["#10b981", "#14b8a6", "#34d399"],
  },
];

const testimonials = [
  {
    quote: "Dativa helped me save over $500 annually on subscriptions I didn't even know I was wasting money on.",
    author: "Sarah M.",
    role: "Small Business Owner",
    avatar: "S",
  },
  {
    quote: "The most comprehensive and unbiased guides I've found anywhere. Truly life-changing content.",
    author: "James K.",
    role: "Tech Professional",
    avatar: "J",
  },
  {
    quote: "Finally, a resource that explains complex financial topics in a way anyone can understand.",
    author: "Maria L.",
    role: "First-time Homebuyer",
    avatar: "M",
  },
];

const Index = () => {
  const featuredArticles = articles.slice(0, 6);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 0.95]);
  const heroY = useTransform(smoothProgress, [0, 0.3], [0, 100]);

  const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <Layout>
      <div ref={containerRef} className="relative">
        {/* Premium Hero Section */}
        <motion.section 
          ref={heroRef}
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            {/* Static Mesh Gradient with CSS Animation */}
            <div 
              className="absolute inset-0 opacity-50 animate-gradient-shift"
              style={{
                background: `
                  radial-gradient(ellipse 80% 50% at 40% 30%, rgba(99, 102, 241, 0.3) 0%, transparent 50%),
                  radial-gradient(ellipse 60% 40% at 60% 70%, rgba(236, 72, 153, 0.25) 0%, transparent 50%),
                  radial-gradient(ellipse 50% 30% at 50% 50%, rgba(34, 211, 238, 0.2) 0%, transparent 50%)
                `,
              }}
            />
            
            {/* Animated Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            
            {/* Floating Orbs */}
            <motion.div
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                y: [0, 40, 0],
                x: [0, -30, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl"
            />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container-wide px-6 py-20">
            <div className="max-w-5xl mx-auto text-center">
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-medium text-white/80">Trusted by 50,000+ readers worldwide</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-6"
              >
                Navigate the
                <br />
                <span className="relative">
                  <span className="bg-gradient-to-r from-indigo-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Digital World
                  </span>
                  <motion.svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 300 12"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                  >
                    <motion.path
                      d="M2 10 Q 75 2, 150 6 T 298 4"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#818cf8" />
                        <stop offset="50%" stopColor="#f472b6" />
                        <stop offset="100%" stopColor="#22d3ee" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </span>
                <br />
                with Confidence
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed"
              >
                Expert guides, unbiased reviews, and actionable insights to help you make smarter decisions in today's complex digital landscape.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
              >
                <Link to="/insights">
                  <Button 
                    size="lg" 
                    className="group relative overflow-hidden bg-white text-slate-900 hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-full shadow-2xl shadow-white/20 transition-all duration-300 hover:scale-105 hover:shadow-white/30"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Explore Guides
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  size="lg"
                  className="group text-white/80 hover:text-white hover:bg-white/5 px-8 py-6 text-lg font-medium rounded-full border border-white/10 transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative p-4">
                      <stat.icon className="w-6 h-6 text-white/40 mx-auto mb-2" />
                      <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-white/50">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-2 text-white/40"
              >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Features Section */}
        <section className="relative py-32 bg-background overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.05),transparent_50%)]" />
          
          <div className="container-wide px-6 relative">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto mb-20">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4"
                >
                  Why Dativa
                </motion.span>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Built for the
                  <span className="text-gradient"> Modern Consumer</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  We combine rigorous research with practical insights to help you navigate an increasingly complex digital world.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const [isHovered, setIsHovered] = useState(false);
                
                return (
                  <AnimatedSection key={feature.title}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="group relative h-full"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                      <div className="relative h-full bg-card border border-border/50 rounded-3xl p-8 overflow-hidden transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-2xl">
                        {/* Gradient Icon Background with Jump & Rotate Animation */}
                        <div className="relative">
                          <motion.div 
                            className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 transition-all duration-300 z-10`}
                            whileHover={{ 
                              scale: 1.2,
                              rotate: 360,
                              y: -10,
                            }}
                            transition={{ 
                              type: "spring", 
                              stiffness: 400, 
                              damping: 10,
                              rotate: { duration: 0.6, ease: "easeInOut" }
                            }}
                          >
                            <motion.div className="group-hover:animate-icon-bounce">
                              <feature.icon className="w-7 h-7 text-white" />
                            </motion.div>
                            
                            {/* Particle Burst Effect */}
                            <ParticleBurst 
                              isActive={isHovered} 
                              colors={feature.particleColors}
                              particleCount={14}
                            />
                          </motion.div>
                        </div>
                        
                        <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                        
                        {/* Hover Arrow */}
                        <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          <span className="text-sm font-medium">Learn more</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </motion.div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Premium Bento Grid Section */}
        <section className="relative py-32 bg-muted/30 overflow-hidden">
          <div className="container-wide px-6">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  Our Approach
                </span>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Experience the
                  <span className="text-gradient"> Difference</span>
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-12 gap-4 md:gap-6">
              {/* Large Featured Card */}
              <AnimatedSection className="col-span-12 md:col-span-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group relative h-80 md:h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-8 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-50" />
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <Sparkles className="w-12 h-12 text-white/80" />
                      <ArrowUpRight className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                    <div>
                      <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                        Curated Excellence
                      </h3>
                      <p className="text-white/70 text-lg max-w-lg">
                        Every guide is meticulously researched and vetted by our expert team to ensure you get only the best recommendations.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>

              {/* Stats Card */}
              <AnimatedSection className="col-span-12 md:col-span-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group relative h-80 md:h-96 rounded-3xl overflow-hidden bg-card border border-border/50 p-8"
                >
                  <div className="h-full flex flex-col justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                      <div className="text-6xl md:text-7xl font-bold text-foreground mb-2">98%</div>
                      <p className="text-muted-foreground text-lg">Reader satisfaction rate across all our guides</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>

              {/* Two smaller cards */}
              <AnimatedSection className="col-span-6 md:col-span-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group relative h-64 rounded-3xl overflow-hidden bg-gradient-to-br from-amber-500 to-orange-600 p-6 cursor-pointer"
                >
                  <Zap className="w-10 h-10 text-white/80 mb-auto" />
                  <div className="mt-auto">
                    <h4 className="font-display text-xl font-bold text-white mb-2">Lightning Fast</h4>
                    <p className="text-white/70 text-sm">Get insights in minutes, not hours</p>
                  </div>
                </motion.div>
              </AnimatedSection>

              <AnimatedSection className="col-span-6 md:col-span-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group relative h-64 rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-500 to-blue-600 p-6 cursor-pointer"
                >
                  <Shield className="w-10 h-10 text-white/80 mb-auto" />
                  <div className="mt-auto">
                    <h4 className="font-display text-xl font-bold text-white mb-2">100% Unbiased</h4>
                    <p className="text-white/70 text-sm">No sponsored content, ever</p>
                  </div>
                </motion.div>
              </AnimatedSection>

              <AnimatedSection className="col-span-12 md:col-span-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group relative h-64 rounded-3xl overflow-hidden bg-card border border-border/50 p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-6 h-6 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="text-foreground text-lg font-medium mb-4">
                    "The best resource for making informed digital decisions."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">T</div>
                    <div>
                      <div className="font-medium text-foreground">Tech Weekly</div>
                      <div className="text-sm text-muted-foreground">Featured Review</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative py-32 bg-background overflow-hidden">
          <div className="container-wide px-6">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  Testimonials
                </span>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Loved by
                  <span className="text-gradient"> Thousands</span>
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <AnimatedSection key={testimonial.author}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group relative h-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative h-full bg-card border border-border/50 rounded-3xl p-8 group-hover:border-primary/20 transition-colors">
                      <div className="flex gap-1 mb-6">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <blockquote className="text-foreground text-lg leading-relaxed mb-8">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{testimonial.author}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles Section */}
        <section className="relative py-32 bg-muted/30 overflow-hidden">
          <div className="container-wide px-6">
            <AnimatedSection>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                <div>
                  <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                    Latest Insights
                  </span>
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                    Fresh from Our Experts
                  </h2>
                </div>
                <Link to="/insights">
                  <Button variant="outline" size="lg" className="group rounded-full">
                    View All Articles
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article, index) => (
                <AnimatedSection key={article.slug}>
                  <ArticleCard {...article} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Premium CTA Section */}
        <section className="relative py-32 overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.3),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_100%,rgba(236,72,153,0.2),transparent_50%)]" />
          </div>

          <div className="container-wide px-6 relative">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-medium text-white/80">Free access to all guides</span>
                </motion.div>

                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Ready to Make
                  <br />
                  <span className="bg-gradient-to-r from-indigo-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Smarter Decisions?
                  </span>
                </h2>

                <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
                  Join thousands of readers who trust Dativa for unbiased insights and expert recommendations.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/insights">
                    <Button 
                      size="lg" 
                      className="group bg-white text-slate-900 hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-full shadow-2xl shadow-white/20 transition-all duration-300 hover:scale-105"
                    >
                      Start Exploring
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button 
                      variant="ghost" 
                      size="lg"
                      className="text-white/80 hover:text-white hover:bg-white/5 px-8 py-6 text-lg rounded-full border border-white/10"
                    >
                      Learn About Us
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
