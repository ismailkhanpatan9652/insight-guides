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
  BadgeCheck,
  Wallet,
  LineChart,
  PiggyBank
} from "lucide-react";

// Import generated images
import heroWealthImage from "@/assets/images/hero-wealth.jpg";
import digitalInnovationImage from "@/assets/images/digital-innovation.jpg";
import investmentInsightsImage from "@/assets/images/investment-insights.jpg";

// ============= SEO-OPTIMIZED DATA =============

const expertise = [
  { value: 250, suffix: "K+", label: "Happy Readers" },
  { value: 850, suffix: "+", label: "Helpful Guides" },
  { value: 4.9, suffix: "/5", label: "Trust Score", decimal: true },
  { value: 15, suffix: "+", label: "Years Expertise" },
];

const journeySteps = [
  {
    number: "01",
    title: "Research",
    description: "Access comprehensive guides on savings accounts, budgeting tips, and smart money management strategies.",
  },
  {
    number: "02", 
    title: "Compare",
    description: "Evaluate top-rated financial products, credit cards, loans, and banking services side-by-side.",
  },
  {
    number: "03",
    title: "Prosper",
    description: "Make informed financial decisions that help you save more and manage your money effectively.",
  },
];

const testimonials = [
  {
    quote: "NexusFinance helped me understand budgeting and savings. Their guides on managing money and planning for the future are unmatched.",
    author: "David Richardson",
    role: "Small Business Owner",
    company: "Richardson Consulting",
  },
  {
    quote: "The best personal finance resource I've found. Their credit score improvement tips saved me thousands on my mortgage rate.",
    author: "Jennifer Walsh",
    role: "Home Buyer",
    company: "First-Time Owner",
  },
  {
    quote: "From budgeting basics to advanced savings strategies, NexusFinance covers everything you need to manage your finances.",
    author: "Michael Torres",
    role: "Financial Planner",
    company: "Torres Advisory",
  },
];

const categories = [
  { name: "Savings", icon: PiggyBank, count: 156 },
  { name: "Banking", icon: Wallet, count: 89 },
  { name: "Credit Cards", icon: Wallet, count: 124 },
  { name: "Budgeting", icon: LineChart, count: 203 },
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

// Enhanced Magnetic hover effect with stronger pull
const MagneticElement = ({ children, className = "", strength = 0.4 }: { children: React.ReactNode; className?: string; strength?: number }) => {
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
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Scroll-triggered section with enhanced animation
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

// Updated Floating orbs with violet/cyan theme
const FloatingOrb = ({ 
  size = 400, 
  color = "violet",
  delay = 0,
  className = ""
}: { 
  size?: number; 
  color?: string;
  delay?: number;
  className?: string;
}) => {
  const colors: Record<string, string> = {
    violet: "rgba(139, 92, 246, 0.15)",
    cyan: "rgba(0, 188, 212, 0.12)",
    pink: "rgba(236, 72, 153, 0.1)",
    blue: "rgba(59, 130, 246, 0.12)",
  };
  
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${colors[color] || colors.violet} 0%, transparent 70%)`,
        filter: "blur(60px)",
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 10,
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

// Enhanced Elegant card with animated border and glow
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
      whileHover={{ y: -12 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative overflow-hidden bg-card border border-border rounded-2xl ${className}`}
      style={{
        boxShadow: isHovered && hoverGlow 
          ? "0 25px 50px -12px hsl(262 83% 58% / 0.2), 0 0 0 1px hsl(262 83% 58% / 0.1)" 
          : "0 4px 30px -8px hsl(222 47% 11% / 0.06)",
      }}
    >
      {/* Animated gradient border on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        style={{
          background: "linear-gradient(90deg, hsl(262 83% 58% / 0.3), hsl(186 100% 42% / 0.3), hsl(262 83% 58% / 0.3))",
          backgroundSize: "200% 100%",
          animation: isHovered ? "border-flow 3s linear infinite" : "none",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "2px",
        }}
      />

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      >
        <motion.div
          className="absolute inset-0 -translate-x-full"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.08), transparent)",
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
          {/* Background decorations - Updated colors */}
          <div className="absolute inset-0">
            <FloatingOrb size={600} color="violet" className="-top-48 -right-48" delay={0} />
            <FloatingOrb size={500} color="cyan" className="-bottom-32 -left-32" delay={2} />
            <FloatingOrb size={400} color="pink" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" delay={4} />
            
            {/* Gradient mesh background */}
            <div 
              className="absolute inset-0 opacity-40"
              style={{
                background: `
                  radial-gradient(ellipse 80% 50% at 20% 40%, hsl(262 83% 58% / 0.08) 0%, transparent 50%),
                  radial-gradient(ellipse 60% 40% at 80% 60%, hsl(186 100% 42% / 0.06) 0%, transparent 50%)
                `,
              }}
            />
            
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
              {/* Editorial badge with glow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center mb-10"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 shadow-lg shadow-primary/5"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </motion.div>
                  <span className="text-sm font-medium text-primary tracking-wide">Trusted by 250,000+ Smart Readers</span>
                </motion.div>
              </motion.div>

              {/* Main heading - SEO optimized */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-center mb-10"
              >
                <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.1] tracking-tight mb-8">
                  Master Your
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
                      Financial Future
                    </motion.span>
                    {/* Animated underline */}
                    <motion.span
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </span>
                </h1>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                >
                  Smart budgeting tips, personal finance guides, and savings strategies to help you manage your money effectively.
                </motion.p>
              </motion.div>

              {/* CTA Buttons with enhanced hover */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
              >
                <MagneticElement>
                  <Link to="/insights">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative overflow-hidden bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
                    >
                      {/* Shimmer sweep effect */}
                      <motion.span 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                        whileHover={{ translateX: "200%" }}
                        transition={{ duration: 0.6 }}
                      />
                      {/* Glow ring on hover */}
                      <motion.span
                        className="absolute inset-0 rounded-xl"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        style={{
                          boxShadow: "inset 0 0 20px hsl(0 0% 100% / 0.2)",
                        }}
                      />
                      <span className="relative z-10 flex items-center gap-3">
                        Explore Money Guides
                        <motion.span
                          className="inline-block"
                          whileHover={{ x: 4 }}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.span>
                      </span>
                    </motion.button>
                  </Link>
                </MagneticElement>

                <MagneticElement>
                  <Link to="/about">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="group px-8 py-4 text-lg font-medium text-foreground rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all relative overflow-hidden"
                    >
                      {/* Animated border gradient on hover */}
                      <motion.span
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{
                          background: "linear-gradient(90deg, hsl(262 83% 58% / 0.1), hsl(186 100% 42% / 0.1), hsl(262 83% 58% / 0.1))",
                        }}
                      />
                      <span className="relative z-10 flex items-center gap-3">
                        Free Financial Tools
                        <motion.span
                          whileHover={{ rotate: 15, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Wallet className="w-5 h-5" />
                        </motion.span>
                      </span>
                    </motion.button>
                  </Link>
                </MagneticElement>
              </motion.div>

              {/* Stats with enhanced styling */}
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
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="text-center p-4 rounded-xl hover:bg-muted/30 transition-colors"
                  >
                    <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} decimal={stat.decimal} />
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Scroll indicator with bounce */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-2 text-muted-foreground/60 cursor-pointer hover:text-primary transition-colors"
              >
                <span className="text-xs uppercase tracking-[0.25em] font-medium">Discover</span>
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ============= YOUR JOURNEY SECTION - Cinematic Timeline ============= */}
        <section className="relative py-32 bg-background overflow-hidden">
          {/* Dramatic lighting effect - violet theme */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px]"
              style={{
                background: "radial-gradient(ellipse at center, hsl(262 83% 58% / 0.08) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </div>
          
          <GrainOverlay />

          <div className="container-wide px-6 relative z-10">
            <RevealSection>
              <div className="text-center max-w-3xl mx-auto mb-24">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-block text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-6"
                >
                  Your Wealth Journey
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground"
                >
                  Build Wealth
                  <span className="block mt-2 text-gradient">With Confidence</span>
                </motion.h2>
              </div>
            </RevealSection>

            {/* Horizontal Timeline */}
            <div className="relative">
              {/* Connecting line - gradient */}
              <motion.div
                className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4">
                {journeySteps.map((step, index) => (
                  <RevealSection key={step.number} delay={index * 0.2}>
                    <motion.div
                      className="group relative"
                      whileHover={{ y: -8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {/* Vertical connector for mobile */}
                      {index < journeySteps.length - 1 && (
                        <div className="lg:hidden absolute left-1/2 bottom-0 w-px h-8 -mb-8 bg-gradient-to-b from-primary/30 to-transparent transform -translate-x-1/2" />
                      )}

                      <div className="relative p-8 lg:p-10 text-center">
                        {/* Glowing number with violet theme */}
                        <motion.div
                          className="relative inline-block mb-8"
                          whileHover={{ scale: 1.1 }}
                        >
                          {/* Animated glow ring */}
                          <motion.div
                            className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                          />
                          
                          {/* Number container */}
                          <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-background via-card to-background border-2 border-primary/30 flex items-center justify-center group-hover:border-primary/60 transition-colors duration-500 group-hover:shadow-lg group-hover:shadow-primary/20">
                            <span className="text-3xl lg:text-4xl font-display font-bold text-gradient">
                              {step.number}
                            </span>
                          </div>

                          {/* Orbiting dot */}
                          <motion.div
                            className="absolute w-2 h-2 rounded-full bg-accent shadow-lg shadow-accent/50"
                            style={{
                              top: "50%",
                              left: "50%",
                            }}
                            animate={{
                              rotate: 360,
                            }}
                            transition={{
                              duration: 8,
                              repeat: Infinity,
                              ease: "linear",
                              delay: index * 0.3,
                            }}
                          >
                            <motion.div
                              style={{
                                position: "absolute",
                                left: 45,
                                top: -4,
                              }}
                            />
                          </motion.div>
                        </motion.div>

                        {/* Title with animated underline */}
                        <h3 className="relative inline-block text-2xl lg:text-3xl font-display font-bold text-foreground mb-4">
                          {step.title}
                          <motion.span
                            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                          />
                        </h3>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                          {step.description}
                        </p>

                        {/* Hover effect card background */}
                        <motion.div
                          className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                        />
                      </div>
                    </motion.div>
                  </RevealSection>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <RevealSection delay={0.8}>
              <motion.div
                className="mt-20 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <MagneticElement>
                  <Link to="/how-it-works">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-primary/30 hover:border-primary/60 bg-primary/5 hover:bg-primary/10 text-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                    >
                      <span>See How It Works</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-5 h-5 text-primary" />
                      </motion.div>
                    </motion.button>
                  </Link>
                </MagneticElement>
              </motion.div>
            </RevealSection>
          </div>
        </section>

        {/* ============= FEATURED CONTENT SECTION ============= */}
        <section className="relative py-32 bg-background overflow-hidden">
          <FloatingOrb size={500} color="cyan" className="top-1/4 -left-48" delay={0} />
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
                    <motion.div
                      animate={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <LineChart className="w-4 h-4 text-accent" />
                    </motion.div>
                    <span className="text-sm font-semibold text-foreground uppercase tracking-wider">Top Rated Guides</span>
                  </motion.div>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                    Financial
                    <span className="text-gradient ml-3">Resources</span>
                  </h2>
                </div>
                <MagneticElement>
                  <Link to="/insights">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all hover:shadow-md"
                    >
                      View All Resources
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </MagneticElement>
              </div>
            </RevealSection>

            {/* Categories with enhanced hover */}
            <RevealSection delay={0.1}>
              <div className="flex flex-wrap gap-3 mb-12">
                {categories.map((cat, i) => (
                  <motion.button
                    key={cat.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border hover:border-primary/40 hover:bg-primary/5 transition-all hover:shadow-md hover:shadow-primary/5"
                  >
                    <motion.span
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <cat.icon className="w-4 h-4 text-primary" />
                    </motion.span>
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
          <FloatingOrb size={450} color="pink" className="-top-32 right-1/4" delay={2} />
          <GrainOverlay />

          <div className="container-wide px-6 relative z-10">
            <RevealSection>
              <div className="text-center max-w-3xl mx-auto mb-20">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Star className="w-4 h-4 text-pink-500" />
                  </motion.div>
                  <span className="text-sm font-semibold text-pink-600 dark:text-pink-400 uppercase tracking-wider">Success Stories</span>
                </motion.div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Real Readers,
                  <span className="text-gradient ml-3">Real Results</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Discover how thousands of readers have improved their finances with our expert guidance on budgeting, saving, and smart money management.
                </p>
              </div>
            </RevealSection>

            {/* Testimonial cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <RevealSection key={testimonial.author} delay={index * 0.15}>
                  <ElegantCard className="h-full p-8">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Quote className="w-10 h-10 text-primary/30 mb-6" />
                    </motion.div>
                    <p className="text-foreground/90 text-lg leading-relaxed mb-8 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4 pt-6 border-t border-border">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold shadow-lg shadow-primary/20"
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
          <FloatingOrb size={500} color="violet" className="bottom-0 right-0" delay={1} />
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
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Award className="w-4 h-4 text-primary" />
                  </motion.div>
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why NexusFinance</span>
                </motion.div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Your Trusted
                  <span className="text-gradient ml-3">Financial Partner</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  We provide unbiased, data-driven financial advice covering budgeting strategies, savings tips, credit optimization, and smart money management.
                </p>

                <div className="space-y-6">
                  {[
                    { icon: BadgeCheck, title: "Expert-Verified Content", desc: "Thoroughly researched guides by experienced financial writers" },
                    { icon: Timer, title: "Up-to-Date Information", desc: "Fresh content updated regularly with the latest financial tips" },
                    { icon: Lock, title: "Zero Sponsored Content", desc: "100% independent reviews with no paid promotions" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.15 }}
                      whileHover={{ x: 8 }}
                      className="group flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-all cursor-default"
                    >
                      <motion.div 
                        className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <item.icon className="w-6 h-6 text-primary" />
                      </motion.div>
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
                    { label: "Savings Tips", value: "500+", color: "from-primary to-violet-400" },
                    { label: "Guides Published", value: "850+", color: "from-accent to-cyan-400" },
                    { label: "Countries Served", value: "94", color: "from-violet-500 to-purple-600" },
                    { label: "Industry Awards", value: "18", color: "from-pink-500 to-rose-400" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`relative p-6 rounded-2xl bg-gradient-to-br ${stat.color} text-white overflow-hidden shadow-lg`}
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
          {/* Gradient background - violet theme */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <FloatingOrb size={600} color="violet" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" delay={0} />
          <GrainOverlay />

          <div className="container-wide px-6 relative z-10">
            <RevealSection>
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mb-10 shadow-xl shadow-primary/30"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-10 h-10 text-white" />
                  </motion.div>
                </motion.div>

                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
                  Start Your Journey to
                  <br />
                  <span className="text-gradient">Financial Freedom</span>
                </h2>

                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                  Join over 250,000 smart readers who use NexusFinance for budgeting tips, savings strategies, and practical money management guides.
                </p>

                <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                  <MagneticElement>
                    <Link to="/insights">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative overflow-hidden bg-primary text-primary-foreground px-10 py-5 text-lg font-semibold rounded-xl shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-shadow"
                      >
                        <motion.span 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                          whileHover={{ translateX: "200%" }}
                          transition={{ duration: 0.6 }}
                        />
                        <span className="relative z-10 flex items-center gap-3">
                          Get Free Access
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
                        className="px-10 py-5 text-lg font-medium text-foreground rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all hover:shadow-lg"
                      >
                        Talk to an Expert
                      </motion.button>
                    </Link>
                  </MagneticElement>
                </motion.div>

                {/* Trust badges with enhanced hover */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-10 border-t border-border"
                >
                  {[
                    { icon: CheckCircle2, label: "100% Free Resources" },
                    { icon: Shield, label: "SEC Compliant" },
                    { icon: Lock, label: "Bank-Level Security" },
                    { icon: Zap, label: "Daily Market Updates" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                      whileHover={{ scale: 1.08, y: -3 }}
                      className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-default"
                    >
                      <motion.span
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <item.icon className="w-4 h-4 text-primary" />
                      </motion.span>
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