import { Link } from "react-router-dom";
import { useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { FeatureCard } from "@/components/FeatureCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
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
  Star,
  Layers,
  Target,
  Rocket,
  Brain,
  Lock,
  Cpu
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

// Floating element component
const FloatingElement = ({ 
  children, 
  delay = 0, 
  duration = 6,
  className = "" 
}: { 
  children: React.ReactNode; 
  delay?: number; 
  duration?: number;
  className?: string;
}) => (
  <motion.div
    className={className}
    animate={{
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      rotate: [-5, 5, -5],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  >
    {children}
  </motion.div>
);

// Glassmorphism card component
const GlassCard = ({ 
  children, 
  className = "",
  delay = 0
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ scale: 1.02, y: -5 }}
    className={`relative group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden ${className}`}
  >
    {/* Hover glow effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
    {children}
  </motion.div>
);

const Index = () => {
  const featuredArticles = articles.slice(0, 6);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.15], [1, 0.9]);

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
        {/* Immersive Hero Section with Splash Gradient */}
        <motion.section 
          ref={heroRef}
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Multi-layered Splash Gradient Background */}
          <div className="absolute inset-0 bg-[#0a0a1a]">
            {/* Primary splash gradient */}
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "radial-gradient(ellipse 100% 80% at 20% 20%, rgba(99, 102, 241, 0.4) 0%, transparent 60%), radial-gradient(ellipse 80% 60% at 80% 80%, rgba(236, 72, 153, 0.35) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 50% 50%, rgba(34, 211, 238, 0.25) 0%, transparent 50%)",
                  "radial-gradient(ellipse 100% 80% at 30% 30%, rgba(139, 92, 246, 0.4) 0%, transparent 60%), radial-gradient(ellipse 80% 60% at 70% 70%, rgba(244, 114, 182, 0.35) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 60% 40%, rgba(56, 189, 248, 0.25) 0%, transparent 50%)",
                  "radial-gradient(ellipse 100% 80% at 20% 20%, rgba(99, 102, 241, 0.4) 0%, transparent 60%), radial-gradient(ellipse 80% 60% at 80% 80%, rgba(236, 72, 153, 0.35) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 50% 50%, rgba(34, 211, 238, 0.25) 0%, transparent 50%)",
                ],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Animated mesh gradient overlay */}
            <div className="absolute inset-0 opacity-30">
              <motion.div
                className="absolute w-[800px] h-[800px] -top-40 -left-40 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(99, 102, 241, 0.6) 0%, transparent 70%)",
                  filter: "blur(80px)",
                }}
                animate={{
                  x: [0, 100, 0],
                  y: [0, 50, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute w-[600px] h-[600px] -bottom-20 -right-20 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, transparent 70%)",
                  filter: "blur(80px)",
                }}
                animate={{
                  x: [0, -80, 0],
                  y: [0, -60, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />
              <motion.div
                className="absolute w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, transparent 70%)",
                  filter: "blur(60px)",
                }}
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [-20, -100 - Math.random() * 100],
                    opacity: [0, 1, 0],
                    scale: [0, 1 + Math.random(), 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 4,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>
            
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_40%,transparent_100%)]" />
          </div>

          {/* Hero Content with Bento Grid */}
          <div className="relative z-10 container-wide px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-left">
                {/* Animated Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-emerald-400"
                  />
                  <span className="text-sm font-medium text-white/70">Trusted by 50K+ readers</span>
                  <ArrowRight className="w-4 h-4 text-white/50" />
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
                >
                  Your Guide to
                  <br />
                  <motion.span 
                    className="relative inline-block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <span className="bg-gradient-to-r from-indigo-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                      Smarter
                    </span>
                    <motion.div
                      className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-indigo-500/20 via-pink-500/20 to-cyan-500/20 rounded-lg blur-xl -z-10"
                      animate={{ opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </motion.span>
                  <br />
                  Decisions
                </motion.h1>

                {/* Subheading */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-lg sm:text-xl text-white/50 max-w-xl mb-10 leading-relaxed"
                >
                  Expert guides, unbiased reviews, and actionable insights for the modern digital consumer.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <Link to="/insights">
                    <Button 
                      size="lg" 
                      className="group relative overflow-hidden bg-white text-slate-900 hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-2xl shadow-2xl shadow-white/10"
                    >
                      <motion.span 
                        className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-pink-500 to-cyan-500"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="relative z-10 flex items-center gap-2">
                        Explore Guides
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </Link>
                  <Link to="/how-it-works">
                    <Button 
                      variant="ghost" 
                      size="lg"
                      className="text-white/70 hover:text-white hover:bg-white/5 px-6 py-6 text-lg font-medium rounded-2xl border border-white/10"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      How it Works
                    </Button>
                  </Link>
                </motion.div>

                {/* Trust indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10"
                >
                  {[
                    { icon: Shield, label: "Verified Reviews" },
                    { icon: Lock, label: "Secure & Private" },
                    { icon: Zap, label: "Real-time Updates" },
                  ].map((item, i) => (
                    <motion.div 
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4 + i * 0.1 }}
                      className="flex items-center gap-2 text-white/40"
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="text-sm">{item.label}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Right Side - Bento Grid */}
              <div className="hidden lg:grid grid-cols-2 gap-4">
                {/* Stats Card - Large */}
                <GlassCard className="col-span-2 p-6" delay={0.3}>
                  <div className="grid grid-cols-4 gap-4">
                    {stats.map((stat, i) => (
                      <motion.div 
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="text-center"
                      >
                        <stat.icon className="w-5 h-5 text-white/30 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-xs text-white/40">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>

                {/* Feature Cards */}
                <GlassCard className="p-5" delay={0.5}>
                  <FloatingElement delay={0} duration={5} className="w-12 h-12 mb-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </FloatingElement>
                  <h3 className="text-lg font-semibold text-white mb-2">AI-Powered</h3>
                  <p className="text-sm text-white/40">Smart recommendations tailored to your needs</p>
                </GlassCard>

                <GlassCard className="p-5" delay={0.6}>
                  <FloatingElement delay={1} duration={6} className="w-12 h-12 mb-4 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </FloatingElement>
                  <h3 className="text-lg font-semibold text-white mb-2">Precise</h3>
                  <p className="text-sm text-white/40">Accurate data from trusted sources</p>
                </GlassCard>

                <GlassCard className="p-5" delay={0.7}>
                  <FloatingElement delay={2} duration={5.5} className="w-12 h-12 mb-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </FloatingElement>
                  <h3 className="text-lg font-semibold text-white mb-2">Fast</h3>
                  <p className="text-sm text-white/40">Get answers in seconds, not hours</p>
                </GlassCard>

                <GlassCard className="p-5" delay={0.8}>
                  <FloatingElement delay={0.5} duration={7} className="w-12 h-12 mb-4 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                    <Layers className="w-6 h-6 text-white" />
                  </FloatingElement>
                  <h3 className="text-lg font-semibold text-white mb-2">Complete</h3>
                  <p className="text-sm text-white/40">Comprehensive coverage across topics</p>
                </GlassCard>
              </div>
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
                className="flex flex-col items-center gap-2 text-white/30"
              >
                <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
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
              {features.map((feature) => (
                <AnimatedSection key={feature.title}>
                  <FeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    gradient={feature.gradient}
                    particleColors={feature.particleColors}
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* New Bento Section */}
        <section className="relative py-32 bg-muted/30 overflow-hidden">
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 opacity-50"
            animate={{
              background: [
                "radial-gradient(ellipse 80% 50% at 20% 80%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
                "radial-gradient(ellipse 80% 50% at 80% 20%, hsl(var(--accent) / 0.15) 0%, transparent 50%)",
                "radial-gradient(ellipse 80% 50% at 20% 80%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="container-wide px-6 relative">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  Our Platform
                </span>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Everything You
                  <span className="text-gradient"> Need</span>
                </h2>
              </div>
            </AnimatedSection>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              {/* Large Featured Card */}
              <AnimatedSection className="col-span-12 md:col-span-8">
                <motion.div 
                  whileHover={{ scale: 1.01, y: -5 }}
                  className="relative h-80 md:h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-8 group"
                >
                  {/* Animated mesh */}
                  <motion.div
                    className="absolute inset-0 opacity-30"
                    animate={{ 
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{
                      backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                    }}
                  />
                  
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6"
                      >
                        <Sparkles className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Curated Excellence</h3>
                      <p className="text-white/70 text-lg max-w-md">
                        Every guide is handcrafted by experts who understand the nuances of digital services.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {["Loans", "Streaming", "VPN", "Health"].map((tag) => (
                        <span key={tag} className="px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Floating orbs */}
                  <motion.div
                    className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white/10 blur-2xl"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </motion.div>
              </AnimatedSection>

              {/* Stats Card */}
              <AnimatedSection className="col-span-12 md:col-span-4">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="h-80 md:h-96 rounded-3xl bg-card border border-border p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Real Impact</h3>
                    <p className="text-muted-foreground">Measurable results that matter</p>
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: "Avg. Savings", value: "$847/yr" },
                      { label: "Time Saved", value: "12+ hrs" },
                      { label: "Better Choices", value: "93%" },
                    ].map((stat) => (
                      <div key={stat.label} className="flex justify-between items-center">
                        <span className="text-muted-foreground">{stat.label}</span>
                        <span className="text-xl font-bold text-foreground">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>

              {/* Small Cards Row */}
              <AnimatedSection className="col-span-6 md:col-span-3">
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="h-48 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 p-6 flex flex-col justify-between group"
                >
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Zap className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Lightning Fast</h4>
                    <p className="text-white/70 text-sm">Quick insights</p>
                  </div>
                </motion.div>
              </AnimatedSection>

              <AnimatedSection className="col-span-6 md:col-span-3">
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="h-48 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 p-6 flex flex-col justify-between"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Globe className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Global Reach</h4>
                    <p className="text-white/70 text-sm">Worldwide coverage</p>
                  </div>
                </motion.div>
              </AnimatedSection>

              <AnimatedSection className="col-span-6 md:col-span-3">
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="h-48 rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 p-6 flex flex-col justify-between"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Star className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Top Rated</h4>
                    <p className="text-white/70 text-sm">User approved</p>
                  </div>
                </motion.div>
              </AnimatedSection>

              <AnimatedSection className="col-span-6 md:col-span-3">
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="h-48 rounded-3xl bg-gradient-to-br from-rose-500 to-pink-600 p-6 flex flex-col justify-between"
                >
                  <motion.div
                    animate={{ y: [-3, 3, -3], x: [-2, 2, -2] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Cpu className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Smart Tech</h4>
                    <p className="text-white/70 text-sm">AI-enhanced</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative py-32 bg-background overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.05),transparent_50%)]" />
          
          <div className="container-wide px-6 relative">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  Testimonials
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Loved by
                  <span className="text-gradient"> Thousands</span>
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <AnimatedSection key={testimonial.author}>
                  <motion.div 
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-300 h-full"
                  >
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-foreground/80 mb-8 text-lg leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold"
                      >
                        {testimonial.avatar}
                      </motion.div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="relative py-32 bg-muted/30 overflow-hidden">
          <div className="container-wide px-6">
            <AnimatedSection>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                <div>
                  <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                    Latest Insights
                  </span>
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                    Featured
                    <span className="text-gradient"> Articles</span>
                  </h2>
                </div>
                <Link to="/insights">
                  <Button variant="outline" className="group rounded-full">
                    View All Articles
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <AnimatedSection key={article.slug}>
                  <ArticleCard 
                    slug={article.slug}
                    title={article.title}
                    excerpt={article.excerpt}
                    category={article.category}
                    readTime={article.readTime}
                    image={article.image}
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-32 overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "radial-gradient(ellipse 60% 40% at 30% 50%, rgba(99, 102, 241, 0.2) 0%, transparent 60%)",
                  "radial-gradient(ellipse 60% 40% at 70% 50%, rgba(236, 72, 153, 0.2) 0%, transparent 60%)",
                  "radial-gradient(ellipse 60% 40% at 30% 50%, rgba(99, 102, 241, 0.2) 0%, transparent 60%)",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="container-wide px-6 relative z-10">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-8"
                >
                  <Sparkles className="w-10 h-10 text-white" />
                </motion.div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Ready to Make
                  <br />
                  <span className="bg-gradient-to-r from-indigo-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Smarter Choices?
                  </span>
                </h2>
                <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
                  Join thousands of readers who trust Dativa for unbiased insights and expert guidance.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/insights">
                    <Button 
                      size="lg" 
                      className="bg-white text-slate-900 hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-2xl shadow-2xl"
                    >
                      Start Exploring
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button 
                      variant="ghost" 
                      size="lg"
                      className="text-white/70 hover:text-white hover:bg-white/5 px-8 py-6 text-lg rounded-2xl border border-white/10"
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
