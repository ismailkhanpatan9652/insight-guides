import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { articles } from "@/data/articles";
import { motion, useScroll, useTransform, useSpring, useInView, useMotionValue, AnimatePresence } from "framer-motion";
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
  Star,
  Layers,
  Target,
  Brain,
  Lock,
  ArrowUpRight,
  Compass,
  Feather,
  Leaf,
  Heart,
  Award,
  CheckCircle2,
  Quote,
  CircleDot,
  Lightbulb,
  Timer,
  BadgeCheck
} from "lucide-react";

// ============= DATA =============

const expertise = [
  { value: 150, suffix: "K+", label: "Monthly Readers" },
  { value: 500, suffix: "+", label: "Expert Guides" },
  { value: 4.9, suffix: "", label: "User Rating", decimal: true },
  { value: 12, suffix: "+", label: "Years Experience" },
];

const pillars = [
  {
    icon: Globe,
    title: "Global Perspective",
    subtitle: "Worldwide Intelligence",
    description: "Access insights curated from leading experts across 50+ countries, bringing you a truly global viewpoint.",
    stats: "50+ Countries",
    gradient: "from-cyan-400 via-blue-500 to-indigo-600",
    glowColor: "rgba(56, 189, 248, 0.4)",
  },
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    subtitle: "Smart Recommendations",
    description: "Our proprietary algorithms analyze thousands of data points to surface the most relevant insights for you.",
    stats: "10M+ Data Points",
    gradient: "from-violet-400 via-purple-500 to-fuchsia-600",
    glowColor: "rgba(168, 85, 247, 0.4)",
  },
  {
    icon: Lock,
    title: "Verified Sources",
    subtitle: "Trust & Authenticity",
    description: "Every piece of content undergoes rigorous fact-checking by our editorial team before publication.",
    stats: "100% Verified",
    gradient: "from-emerald-400 via-green-500 to-teal-600",
    glowColor: "rgba(16, 185, 129, 0.4)",
  },
  {
    icon: Timer,
    title: "Real-Time Updates",
    subtitle: "Always Current",
    description: "Stay ahead with instant updates on market trends, industry news, and emerging opportunities.",
    stats: "24/7 Monitoring",
    gradient: "from-orange-400 via-amber-500 to-yellow-500",
    glowColor: "rgba(251, 146, 60, 0.4)",
  },
];

const testimonials = [
  {
    quote: "Mallinova transformed how I approach financial decisions. Their insights are unmatched in depth and clarity.",
    author: "Alexandra Chen",
    role: "Investment Director",
    company: "Apex Ventures",
  },
  {
    quote: "The quality of research here rivals what you'd pay thousands for at consulting firms. Absolutely invaluable.",
    author: "Marcus Williams",
    role: "CEO",
    company: "TechForward Inc.",
  },
  {
    quote: "I've saved countless hours and made better choices thanks to their expertly curated guides.",
    author: "Sophia Martinez",
    role: "Entrepreneur",
    company: "Bloom Studios",
  },
];

const categories = [
  { name: "Finance", icon: TrendingUp, count: 87 },
  { name: "Technology", icon: Zap, count: 124 },
  { name: "Lifestyle", icon: Heart, count: 63 },
  { name: "Business", icon: Target, count: 95 },
];

// ============= UTILITY COMPONENTS =============

// Animated Counter
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

// Magnetic hover effect
const MagneticElement = ({ children, className = "", strength = 0.3 }: { children: React.ReactNode; className?: string; strength?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 350, damping: 15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Scroll-triggered section
const RevealSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ 
        duration: 0.9, 
        delay,
        ease: [0.22, 1, 0.36, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Floating decorative element
const FloatingOrb = ({ 
  size = 400, 
  color = "emerald",
  delay = 0,
  className = ""
}: { 
  size?: number; 
  color?: string;
  delay?: number;
  className?: string;
}) => {
  const colors: Record<string, string> = {
    emerald: "rgba(16, 185, 129, 0.15)",
    gold: "rgba(234, 179, 8, 0.12)",
    rose: "rgba(244, 63, 94, 0.1)",
  };
  
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${colors[color] || colors.emerald} 0%, transparent 70%)`,
        filter: "blur(60px)",
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
};

// Grain texture overlay
const GrainOverlay = () => (
  <div 
    className="absolute inset-0 pointer-events-none opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
    }}
  />
);

// Elegant card with hover effects
const ElegantCard = ({ 
  children, 
  className = "",
  hoverGlow = true,
}: { 
  children: React.ReactNode; 
  className?: string;
  hoverGlow?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative overflow-hidden bg-card border border-border rounded-2xl ${className}`}
      style={{
        boxShadow: isHovered && hoverGlow 
          ? "0 25px 50px -12px hsl(158 64% 40% / 0.15)" 
          : "0 4px 30px -8px hsl(160 30% 8% / 0.08)",
      }}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      >
        <motion.div
          className="absolute inset-0 -translate-x-full"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.05), transparent)",
          }}
          animate={isHovered ? { translateX: ["100%", "-100%"] } : {}}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
      
      {children}
    </motion.div>
  );
};

// ============= MAIN COMPONENT =============

const Index = () => {
  const featuredArticles = articles.slice(0, 6);
  const containerRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const heroParallax = useTransform(smoothProgress, [0, 0.3], [0, -150]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.25], [1, 0]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
  }, []);

  return (
    <Layout>
      <div ref={containerRef} className="relative overflow-hidden">
        
        {/* ============= HERO SECTION ============= */}
        <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-background">
          {/* Background decorations */}
          <div className="absolute inset-0">
            <FloatingOrb size={600} color="emerald" className="-top-48 -right-48" delay={0} />
            <FloatingOrb size={500} color="gold" className="-bottom-32 -left-32" delay={2} />
            <FloatingOrb size={400} color="rose" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" delay={4} />
            
            {/* Subtle grid pattern */}
            <div 
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
                backgroundSize: "80px 80px",
              }}
            />
          </div>
          
          <GrainOverlay />

          {/* Hero content */}
          <motion.div 
            style={{ y: reducedMotion ? 0 : heroParallax, opacity: reducedMotion ? 1 : heroOpacity }}
            className="relative z-10 container-wide px-6 py-32"
          >
            <div className="max-w-5xl mx-auto">
              {/* Editorial badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center mb-10"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/20"
                >
                  <Leaf className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary tracking-wide">Trusted by 150,000+ Readers Worldwide</span>
                </motion.div>
              </motion.div>

              {/* Main heading */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-center mb-10"
              >
                <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.1] tracking-tight mb-8">
                  Where Wisdom
                  <br />
                  <span className="relative inline-block">
                    <motion.span 
                      className="text-gradient"
                      animate={reducedMotion ? {} : {
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{ duration: 6, repeat: Infinity }}
                      style={{ backgroundSize: "200% auto" }}
                    >
                      Meets Clarity
                    </motion.span>
                  </span>
                </h1>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                >
                  Discover expertly curated guides, unbiased reviews, and strategic insights designed for the modern decision-maker.
                </motion.p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
              >
                <MagneticElement>
                  <Link to="/insights">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative overflow-hidden bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-primary/20"
                    >
                      <motion.span 
                        className="absolute inset-0 bg-gradient-to-r from-primary via-emerald-400 to-primary"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="relative z-10 flex items-center gap-3">
                        Explore Insights
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </motion.button>
                  </Link>
                </MagneticElement>

                <MagneticElement>
                  <Link to="/about">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group px-8 py-4 text-lg font-medium text-foreground rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                    >
                      <span className="flex items-center gap-3">
                        Our Philosophy
                        <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                      </span>
                    </motion.button>
                  </Link>
                </MagneticElement>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
              >
                {expertise.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
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
              transition={{ delay: 2 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-2 text-muted-foreground/60 cursor-pointer hover:text-muted-foreground transition-colors"
              >
                <span className="text-xs uppercase tracking-[0.25em] font-medium">Discover</span>
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ============= PILLARS SECTION - Premium Bento Grid ============= */}
        <section className="relative py-32 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
          {/* Animated mesh gradient background */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-0 left-0 w-[800px] h-[800px] opacity-30"
              style={{
                background: "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 60%)",
                filter: "blur(80px)",
              }}
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-[700px] h-[700px] opacity-25"
              style={{
                background: "radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 60%)",
                filter: "blur(80px)",
              }}
              animate={{
                x: [0, -80, 0],
                y: [0, -60, 0],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          
          <GrainOverlay />

          <div className="container-wide px-6 relative z-10">
            <RevealSection>
              <div className="text-center max-w-4xl mx-auto mb-20">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 mb-8"
                >
                  <Layers className="w-8 h-8 text-primary" />
                </motion.div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6"
                >
                  The Four
                  <span className="block mt-2">
                    <span className="relative">
                      <span className="text-gradient">Pillars</span>
                      <motion.span
                        className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary via-violet-500 to-primary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        viewport={{ once: true }}
                      />
                    </span>
                  </span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
                >
                  Our foundation is built on four essential principles that guide every insight we deliver.
                </motion.p>
              </div>
            </RevealSection>

            {/* Premium Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {pillars.map((pillar, index) => (
                <RevealSection key={pillar.title} delay={index * 0.15}>
                  <motion.div
                    className="group relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                      style={{ background: pillar.glowColor }}
                    />
                    
                    {/* Animated border */}
                    <motion.div
                      className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${pillar.glowColor}, transparent, ${pillar.glowColor})`,
                        backgroundSize: "300% 300%",
                      }}
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    
                    {/* Card content */}
                    <div className="relative h-full p-8 md:p-10 rounded-3xl bg-card/80 backdrop-blur-xl border border-border/50 overflow-hidden">
                      {/* Decorative corner gradient */}
                      <div 
                        className="absolute top-0 right-0 w-64 h-64 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle at top right, ${pillar.glowColor} 0%, transparent 60%)`,
                        }}
                      />
                      
                      {/* Floating particles on hover */}
                      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full"
                            style={{ 
                              background: pillar.glowColor,
                              left: `${20 + Math.random() * 60}%`,
                            }}
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ 
                              y: "-50%", 
                              opacity: [0, 1, 0],
                            }}
                            transition={{ 
                              duration: 2 + Math.random(), 
                              repeat: Infinity,
                              delay: i * 0.4,
                              ease: "easeOut"
                            }}
                          />
                        ))}
                      </div>

                      <div className="relative z-10 flex flex-col h-full">
                        {/* Icon with gradient background */}
                        <motion.div
                          className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-500`}
                          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          style={{
                            boxShadow: `0 10px 40px -10px ${pillar.glowColor}`,
                          }}
                        >
                          <pillar.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        
                        {/* Subtitle */}
                        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                          {pillar.subtitle}
                        </span>
                        
                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 group-hover:text-gradient transition-all duration-300">
                          {pillar.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                          {pillar.description}
                        </p>
                        
                        {/* Stats badge */}
                        <div className="flex items-center justify-between">
                          <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50"
                            whileHover={{ scale: 1.05 }}
                          >
                            <BadgeCheck className="w-4 h-4 text-primary" />
                            <span className="text-sm font-semibold text-foreground">{pillar.stats}</span>
                          </motion.div>
                          
                          {/* Arrow indicator */}
                          <motion.div
                            className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                            initial={{ x: -10 }}
                            whileHover={{ x: 0 }}
                          >
                            <span className="text-sm font-medium">Explore</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </RevealSection>
              ))}
            </div>

            {/* Trust indicators */}
            <RevealSection delay={0.6}>
              <motion.div
                className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                {[
                  { icon: CheckCircle2, text: "Fact-Checked Content" },
                  { icon: Award, text: "Award-Winning Team" },
                  { icon: Users, text: "Expert Contributors" },
                ].map((item, i) => (
                  <motion.div
                    key={item.text}
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05, color: "hsl(var(--foreground))" }}
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </RevealSection>
          </div>
        </section>

        {/* ============= FEATURED CONTENT SECTION ============= */}
        <section className="relative py-32 bg-background overflow-hidden">
          <FloatingOrb size={500} color="gold" className="top-1/4 -left-48" delay={0} />
          <GrainOverlay />

          <div className="container-wide px-6 relative z-10">
            <RevealSection>
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
                <div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6"
                  >
                    <BookOpen className="w-4 h-4 text-accent" />
                    <span className="text-sm font-semibold text-foreground uppercase tracking-wider">Editor's Picks</span>
                  </motion.div>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                    Featured
                    <span className="text-gradient ml-2">Insights</span>
                  </h2>
                </div>
                <MagneticElement>
                  <Link to="/insights">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all"
                    >
                      View All Insights
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </MagneticElement>
              </div>
            </RevealSection>

            {/* Categories */}
            <RevealSection delay={0.1}>
              <div className="flex flex-wrap gap-3 mb-12">
                {categories.map((cat, i) => (
                  <motion.button
                    key={cat.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border hover:border-primary/40 hover:bg-primary/5 transition-all"
                  >
                    <cat.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{cat.name}</span>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{cat.count}</span>
                  </motion.button>
                ))}
              </div>
            </RevealSection>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article, index) => (
                <RevealSection key={article.slug} delay={index * 0.1}>
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
        <section className="relative py-32 bg-muted/30 overflow-hidden">
          <FloatingOrb size={450} color="rose" className="-top-32 right-1/4" delay={2} />
          <GrainOverlay />

          <div className="container-wide px-6 relative z-10">
            <RevealSection>
              <div className="text-center max-w-3xl mx-auto mb-20">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 mb-6"
                >
                  <Heart className="w-4 h-4 text-rose-500" />
                  <span className="text-sm font-semibold text-rose-600 dark:text-rose-400 uppercase tracking-wider">Testimonials</span>
                </motion.div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Voices of
                  <span className="text-gradient ml-2">Trust</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hear from industry leaders and discerning readers who've transformed their decisions with Mallinova.
                </p>
              </div>
            </RevealSection>

            {/* Testimonial cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <RevealSection key={testimonial.author} delay={index * 0.15}>
                  <ElegantCard className="h-full p-8">
                    <Quote className="w-10 h-10 text-primary/20 mb-6" />
                    <p className="text-foreground/90 text-lg leading-relaxed mb-8 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4 pt-6 border-t border-border">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center text-white font-semibold"
                      >
                        {testimonial.author.charAt(0)}
                      </motion.div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </ElegantCard>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* ============= WHY CHOOSE US SECTION ============= */}
        <section className="relative py-32 bg-background overflow-hidden">
          <FloatingOrb size={500} color="emerald" className="bottom-0 right-0" delay={1} />
          <GrainOverlay />

          <div className="container-wide px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <RevealSection>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                >
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Mallinova</span>
                </motion.div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                  The Standard of
                  <span className="text-gradient ml-2">Excellence</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  We don't just deliver information—we craft experiences that elevate your understanding and refine your approach to every decision.
                </p>

                <div className="space-y-6">
                  {[
                    { icon: BadgeCheck, title: "Verified Expertise", desc: "Every guide is reviewed by industry specialists" },
                    { icon: Timer, title: "Always Current", desc: "Content updated weekly to reflect latest trends" },
                    { icon: Lock, title: "Complete Independence", desc: "No sponsored content or hidden affiliations" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.15 }}
                      whileHover={{ x: 8 }}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors cursor-default"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </RevealSection>

              <RevealSection delay={0.2}>
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { label: "Satisfaction Rate", value: "99.2%", color: "from-emerald-500 to-teal-600" },
                    { label: "Articles Published", value: "500+", color: "from-amber-500 to-yellow-600" },
                    { label: "Countries Reached", value: "87", color: "from-violet-500 to-purple-600" },
                    { label: "Awards Won", value: "12", color: "from-rose-500 to-pink-600" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`relative p-6 rounded-2xl bg-gradient-to-br ${stat.color} text-white overflow-hidden`}
                    >
                      <motion.div
                        className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                      />
                      <div className="relative z-10">
                        <div className="text-3xl font-display font-bold mb-1">{stat.value}</div>
                        <div className="text-sm text-white/80">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </RevealSection>
            </div>
          </div>
        </section>

        {/* ============= FINAL CTA SECTION ============= */}
        <section className="relative py-32 overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <FloatingOrb size={600} color="emerald" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" delay={0} />
          <GrainOverlay />

          <div className="container-wide px-6 relative z-10">
            <RevealSection>
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-emerald-400 mb-10 shadow-xl shadow-primary/20"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-10 h-10 text-white" />
                  </motion.div>
                </motion.div>

                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
                  Begin Your Journey to
                  <br />
                  <span className="text-gradient">Smarter Decisions</span>
                </h2>

                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                  Join over 150,000 discerning readers who trust Mallinova for insights that matter.
                </p>

                <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                  <MagneticElement>
                    <Link to="/insights">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative overflow-hidden bg-primary text-primary-foreground px-10 py-5 text-lg font-semibold rounded-xl shadow-xl shadow-primary/25"
                      >
                        <motion.span 
                          className="absolute inset-0 bg-gradient-to-r from-primary via-emerald-400 to-primary"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        <span className="relative z-10 flex items-center gap-3">
                          Start Exploring
                          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </span>
                      </motion.button>
                    </Link>
                  </MagneticElement>

                  <MagneticElement>
                    <Link to="/contact">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-10 py-5 text-lg font-medium text-foreground rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                      >
                        Get in Touch
                      </motion.button>
                    </Link>
                  </MagneticElement>
                </motion.div>

                {/* Trust badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-10 border-t border-border"
                >
                  {[
                    { icon: CheckCircle2, label: "100% Free Access" },
                    { icon: Shield, label: "No Advertisements" },
                    { icon: Lock, label: "Privacy Protected" },
                    { icon: Zap, label: "Updated Daily" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-default"
                    >
                      <item.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </RevealSection>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Index;
