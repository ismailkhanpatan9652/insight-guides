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
  Play,
  Star,
  Layers,
  Target,
  Rocket,
  Brain,
  Lock,
  Cpu,
  ArrowUpRight,
  Diamond,
  Crown,
  Gem,
  Award,
  CheckCircle2,
  MousePointer
} from "lucide-react";

// Stats data
const stats = [
  { value: 50000, suffix: "+", label: "Active Readers", icon: Users },
  { value: 200, suffix: "+", label: "Expert Guides", icon: BookOpen },
  { value: 98, suffix: "%", label: "Satisfaction", icon: Star },
  { value: 24, suffix: "/7", label: "Updated Content", icon: TrendingUp },
];

// Feature cards data
const features = [
  {
    icon: Shield,
    title: "Unbiased Research",
    description: "Independent editorial content backed by thorough research and real-world testing.",
    gradient: "from-blue-500 via-indigo-500 to-purple-600",
    glow: "rgba(99, 102, 241, 0.5)",
  },
  {
    icon: Zap,
    title: "Actionable Insights",
    description: "Clear, practical recommendations you can implement immediately.",
    gradient: "from-amber-400 via-orange-500 to-red-500",
    glow: "rgba(251, 146, 60, 0.5)",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Comprehensive guides covering services available worldwide.",
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    glow: "rgba(20, 184, 166, 0.5)",
  },
  {
    icon: TrendingUp,
    title: "Always Current",
    description: "Content updated regularly to reflect the latest market changes.",
    gradient: "from-pink-400 via-rose-500 to-red-500",
    glow: "rgba(244, 114, 182, 0.5)",
  },
];

// Testimonials data
const testimonials = [
  {
    quote: "Mallinova helped me save over $500 annually on subscriptions I didn't even know I was wasting money on.",
    author: "Sarah M.",
    role: "Small Business Owner",
    avatar: "S",
    rating: 5,
  },
  {
    quote: "The most comprehensive and unbiased guides I've found anywhere. Truly life-changing content.",
    author: "James K.",
    role: "Tech Professional",
    avatar: "J",
    rating: 5,
  },
  {
    quote: "Finally, a resource that explains complex financial topics in a way anyone can understand.",
    author: "Maria L.",
    role: "First-time Homebuyer",
    avatar: "M",
    rating: 5,
  },
];

// ============= UTILITY COMPONENTS =============

// Animated Counter Component
const AnimatedNumber = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
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
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

// Magnetic Button Component - pulls toward cursor
const MagneticButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
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

// Animated Section with scroll trigger
const AnimatedSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.95 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.22, 1, 0.36, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Glassmorphism Card with hover effects
const GlassCard = ({ 
  children, 
  className = "",
  glowColor = "hsl(var(--primary))",
  enableHover = true,
}: { 
  children: React.ReactNode; 
  className?: string;
  glowColor?: string;
  enableHover?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={enableHover ? { 
        y: -8, 
        scale: 1.02,
        boxShadow: `0 25px 50px -12px ${glowColor}40`
      } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative overflow-hidden backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-3xl ${className}`}
    >
      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mouseX.get()}px ${mouseY.get()}px, ${glowColor}15, transparent 40%)`,
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      >
        <motion.div
          className="absolute inset-0 -translate-x-full"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
          }}
          animate={isHovered ? { translateX: ["100%", "-100%"] } : {}}
          transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.3 }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

// Floating Element with organic movement
const FloatingElement = ({ 
  children, 
  delay = 0, 
  duration = 6,
  amplitude = 20,
  className = "" 
}: { 
  children: React.ReactNode; 
  delay?: number; 
  duration?: number;
  amplitude?: number;
  className?: string;
}) => (
  <motion.div
    className={className}
    animate={{
      y: [-amplitude, amplitude, -amplitude],
      x: [-amplitude/2, amplitude/2, -amplitude/2],
      rotate: [-3, 3, -3],
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

// Particle System
const ParticleField = ({ count = 50, color = "white" }: { count?: number; color?: string }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(count)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: 2 + Math.random() * 4,
          height: 2 + Math.random() * 4,
          backgroundColor: color,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: 0.1 + Math.random() * 0.3,
        }}
        animate={{
          y: [-30, -150 - Math.random() * 100],
          x: [0, (Math.random() - 0.5) * 100],
          opacity: [0, 0.6, 0],
          scale: [0, 1 + Math.random() * 0.5, 0],
        }}
        transition={{
          duration: 4 + Math.random() * 6,
          repeat: Infinity,
          delay: Math.random() * 8,
          ease: "easeOut",
        }}
      />
    ))}
  </div>
);

// Noise/Grain Overlay
const NoiseOverlay = () => (
  <div 
    className="absolute inset-0 pointer-events-none opacity-[0.015] mix-blend-overlay"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
    }}
  />
);

// Skeleton Loader
const SkeletonCard = () => (
  <div className="animate-pulse">
    <div className="h-48 bg-white/5 rounded-2xl mb-4" />
    <div className="h-4 bg-white/5 rounded w-3/4 mb-2" />
    <div className="h-4 bg-white/5 rounded w-1/2" />
  </div>
);

// ============= MAIN COMPONENT =============

const Index = () => {
  const featuredArticles = articles.slice(0, 6);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 0.9]);
  const heroY = useTransform(smoothProgress, [0, 0.2], [0, -100]);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <Layout>
        <div className="min-h-screen bg-[#050510] flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-2 border-white/20 border-t-primary rounded-full"
          />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div ref={containerRef} className="relative bg-[#050510]">
        
        {/* ============= HERO SECTION ============= */}
        <motion.section 
          ref={heroRef}
          style={{ 
            opacity: reducedMotion ? 1 : heroOpacity, 
            scale: reducedMotion ? 1 : heroScale,
            y: reducedMotion ? 0 : heroY 
          }}
          className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
        >
          {/* Multi-layer Gradient Mesh Background */}
          <div className="absolute inset-0">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#0a0a20] to-[#050510]" />
            
            {/* Animated gradient orbs */}
            <motion.div
              className="absolute w-[1200px] h-[1200px] -top-1/4 -left-1/4"
              style={{
                background: "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 50%)",
                filter: "blur(100px)",
              }}
              animate={reducedMotion ? {} : {
                x: [0, 150, 0],
                y: [0, 100, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-[1000px] h-[1000px] -bottom-1/4 -right-1/4"
              style={{
                background: "radial-gradient(circle, rgba(236, 72, 153, 0.25) 0%, transparent 50%)",
                filter: "blur(100px)",
              }}
              animate={reducedMotion ? {} : {
                x: [0, -100, 0],
                y: [0, -80, 0],
                scale: [1, 1.4, 1],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            />
            <motion.div
              className="absolute w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                background: "radial-gradient(circle, rgba(34, 211, 238, 0.2) 0%, transparent 50%)",
                filter: "blur(80px)",
              }}
              animate={reducedMotion ? {} : {
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />

            {/* Light bloom effects */}
            <motion.div
              className="absolute top-1/3 right-1/4 w-96 h-96"
              style={{
                background: "radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 60%)",
              }}
              animate={reducedMotion ? {} : {
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </div>

          {/* Particle system */}
          {!reducedMotion && <ParticleField count={60} color="rgba(255,255,255,0.5)" />}

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_40%,#000_50%,transparent_100%)]" />

          {/* Noise overlay for cinematic texture */}
          <NoiseOverlay />

          {/* Hero Content */}
          <div className="relative z-10 container-wide px-6 py-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left: Main Content */}
              <div className="text-left">
                {/* Luxury Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-white/5 to-white/10 border border-white/10 backdrop-blur-xl mb-8"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Diamond className="w-4 h-4 text-amber-400" />
                    </motion.div>
                    <span className="text-sm font-medium text-white/80 tracking-wide">Premium Insights Platform</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4 text-white/50" />
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Main Heading with SVG underline animation */}
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-8"
                >
                  Elevate Your
                  <br />
                  <span className="relative inline-block mt-2">
                    <motion.span 
                      className="relative z-10 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                      animate={reducedMotion ? {} : {
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{ duration: 5, repeat: Infinity }}
                      style={{ backgroundSize: "200% auto" }}
                    >
                      Decisions
                    </motion.span>
                    {/* Animated underline */}
                    <motion.svg
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 300 12"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.5, delay: 1 }}
                    >
                      <motion.path
                        d="M2 10C50 4 100 2 150 6C200 10 250 4 298 8"
                        stroke="url(#gradient)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 1 }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#818cf8" />
                          <stop offset="50%" stopColor="#c084fc" />
                          <stop offset="100%" stopColor="#f472b6" />
                        </linearGradient>
                      </defs>
                    </motion.svg>
                    {/* Glow effect behind text */}
                    <motion.div
                      className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-xl blur-2xl -z-10"
                      animate={{ opacity: [0.4, 0.7, 0.4] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </span>
                </motion.h1>

                {/* Subheading with staggered reveal */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="text-lg sm:text-xl lg:text-2xl text-white/50 max-w-xl mb-12 leading-relaxed"
                >
                  Expert guides, unbiased reviews, and actionable insights crafted for the discerning digital consumer.
                </motion.p>

                {/* CTA Buttons with magnetic effect */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="flex flex-wrap items-center gap-5"
                >
                  <MagneticButton>
                    <Link to="/insights">
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative overflow-hidden bg-white text-slate-900 px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl shadow-white/20"
                      >
                        {/* Animated gradient sweep on hover */}
                        <motion.span 
                          className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
                          initial={{ x: "-100%", opacity: 0 }}
                          whileHover={{ x: "100%", opacity: 1 }}
                          transition={{ duration: 0.6 }}
                        />
                        <span className="relative z-10 flex items-center gap-3">
                          Explore Guides
                          <motion.span
                            className="inline-block"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <ArrowRight className="w-5 h-5" />
                          </motion.span>
                        </span>
                      </motion.button>
                    </Link>
                  </MagneticButton>

                  <MagneticButton>
                    <Link to="/how-it-works">
                      <motion.button 
                        whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.3)" }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative overflow-hidden text-white/80 hover:text-white px-8 py-4 text-lg font-medium rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-colors"
                      >
                        <span className="flex items-center gap-3">
                          <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <Play className="w-5 h-5 fill-current" />
                          </motion.span>
                          Watch Demo
                        </span>
                      </motion.button>
                    </Link>
                  </MagneticButton>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                  className="flex flex-wrap items-center gap-8 mt-14 pt-8 border-t border-white/10"
                >
                  {[
                    { icon: Shield, label: "Verified Reviews" },
                    { icon: Lock, label: "Secure & Private" },
                    { icon: Award, label: "Award Winning" },
                  ].map((item, i) => (
                    <motion.div 
                      key={item.label}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5 + i * 0.15 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-2.5 text-white/40 hover:text-white/60 transition-colors cursor-default"
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Right: Bento Grid */}
              <div className="hidden lg:grid grid-cols-2 gap-5">
                {/* Stats Card - Full Width */}
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="col-span-2"
                >
                  <GlassCard className="p-6" glowColor="rgba(99, 102, 241, 0.5)">
                    <div className="grid grid-cols-4 gap-4">
                      {stats.map((stat, i) => (
                        <motion.div 
                          key={stat.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 + i * 0.1 }}
                          whileHover={{ scale: 1.05, y: -3 }}
                          className="text-center cursor-default"
                        >
                          <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                          >
                            <stat.icon className="w-5 h-5 text-primary/60 mx-auto mb-2" />
                          </motion.div>
                          <div className="text-2xl font-bold text-white">
                            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                          </div>
                          <div className="text-xs text-white/40">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>

                {/* Feature Cards */}
                {[
                  { icon: Brain, title: "AI-Powered", desc: "Smart recommendations", gradient: "from-indigo-500 to-purple-600", delay: 0.6 },
                  { icon: Target, title: "Precision", desc: "Accurate insights", gradient: "from-pink-500 to-rose-600", delay: 0.7 },
                  { icon: Rocket, title: "Lightning Fast", desc: "Instant results", gradient: "from-cyan-500 to-teal-600", delay: 0.8 },
                  { icon: Crown, title: "Premium", desc: "Exclusive content", gradient: "from-amber-500 to-orange-600", delay: 0.9 },
                ].map((card) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: card.delay }}
                  >
                    <GlassCard className="p-5 h-full">
                      <FloatingElement delay={card.delay} duration={5 + Math.random() * 2} amplitude={10}>
                        <div className={`w-12 h-12 mb-4 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-lg`}>
                          <card.icon className="w-6 h-6 text-white" />
                        </div>
                      </FloatingElement>
                      <h3 className="text-lg font-semibold text-white mb-1">{card.title}</h3>
                      <p className="text-sm text-white/40">{card.desc}</p>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-3 text-white/30 cursor-pointer hover:text-white/50 transition-colors"
              >
                <MousePointer className="w-4 h-4" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium">Scroll</span>
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* ============= FEATURES SECTION ============= */}
        <section className="relative py-40 overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#0a0a1a] to-[#050510]" />
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(ellipse 60% 40% at 20% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 60%)",
                "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(236, 72, 153, 0.08) 0%, transparent 60%)",
                "radial-gradient(ellipse 60% 40% at 20% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 60%)",
              ],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <NoiseOverlay />

          <div className="container-wide px-6 relative z-10">
            <AnimatedSection>
              <div className="text-center max-w-4xl mx-auto mb-24">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                >
                  <Gem className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Mallinova</span>
                </motion.div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
                  Built for the
                  <span className="relative inline-block ml-3">
                    <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Elite
                    </span>
                    <motion.div
                      className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-xl -z-10"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </span>
                </h2>
                <p className="text-xl text-white/50 leading-relaxed">
                  We combine rigorous research with practical insights to help you navigate an increasingly complex digital world.
                </p>
              </div>
            </AnimatedSection>

            {/* Feature Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <AnimatedSection key={feature.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -12, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative h-full"
                  >
                    {/* Hover glow */}
                    <motion.div
                      className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                      style={{ background: feature.glow }}
                    />
                    
                    <div className="relative h-full p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl overflow-hidden">
                      {/* Icon with morph animation */}
                      <motion.div 
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}
                      >
                        <feature.icon className="w-7 h-7 text-white" />
                      </motion.div>

                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-white/50 leading-relaxed mb-6">{feature.description}</p>

                      {/* Animated arrow on hover */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors"
                      >
                        <span className="text-sm font-medium">Learn more</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>

                      {/* Floating particles on hover */}
                      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white/40 rounded-full"
                            initial={{ x: `${30 + Math.random() * 40}%`, y: "100%" }}
                            animate={{ y: "-20%", opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ============= BENTO SHOWCASE SECTION ============= */}
        <section className="relative py-40 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#08081a] to-[#050510]" />
          <motion.div
            className="absolute inset-0 opacity-40"
            animate={{
              background: [
                "radial-gradient(ellipse 80% 60% at 30% 70%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)",
                "radial-gradient(ellipse 80% 60% at 70% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
                "radial-gradient(ellipse 80% 60% at 30% 70%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <NoiseOverlay />

          <div className="container-wide px-6 relative z-10">
            <AnimatedSection>
              <div className="text-center max-w-4xl mx-auto mb-20">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
                >
                  <Layers className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Platform</span>
                </motion.div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
                  Everything You
                  <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent ml-3">
                    Need
                  </span>
                </h2>
              </div>
            </AnimatedSection>

            {/* Bento Grid */}
            <div className="grid grid-cols-12 gap-5 md:gap-6">
              {/* Large Featured Card */}
              <AnimatedSection className="col-span-12 md:col-span-8" delay={0.1}>
                <motion.div 
                  whileHover={{ scale: 1.01, y: -5 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="relative h-80 md:h-[420px] rounded-3xl overflow-hidden group"
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      background: [
                        "linear-gradient(135deg, #6366f1 0%, #8b5cf6 30%, #d946ef 60%, #ec4899 100%)",
                        "linear-gradient(135deg, #8b5cf6 0%, #d946ef 30%, #ec4899 60%, #f43f5e 100%)",
                        "linear-gradient(135deg, #6366f1 0%, #8b5cf6 30%, #d946ef 60%, #ec4899 100%)",
                      ],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Mesh pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    style={{
                      backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                      backgroundSize: "60px 60px",
                    }}
                  />

                  {/* Light bloom */}
                  <motion.div
                    className="absolute top-10 right-10 w-48 h-48 rounded-full bg-white/20 blur-3xl"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />

                  {/* Content */}
                  <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity }}
                        className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-8 shadow-2xl"
                      >
                        <Sparkles className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Curated Excellence</h3>
                      <p className="text-white/70 text-lg md:text-xl max-w-lg leading-relaxed">
                        Every guide is handcrafted by experts who understand the nuances of digital services.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {["Loans", "Streaming", "VPN", "Health", "Finance"].map((tag, i) => (
                        <motion.span 
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium backdrop-blur-sm border border-white/10"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>

              {/* Stats Card */}
              <AnimatedSection className="col-span-12 md:col-span-4" delay={0.2}>
                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="h-80 md:h-[420px] rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl p-6 md:p-8 flex flex-col justify-between overflow-hidden relative group"
                >
                  {/* Hover glow */}
                  <motion.div
                    className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                    style={{ background: "rgba(99, 102, 241, 0.3)" }}
                  />
                  
                  <div>
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6"
                    >
                      <TrendingUp className="w-7 h-7 text-primary" />
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-white mb-2">Real Impact</h3>
                    <p className="text-white/50">Measurable results that matter</p>
                  </div>
                  <div className="space-y-5">
                    {[
                      { label: "Avg. Savings", value: "$847", suffix: "/yr" },
                      { label: "Time Saved", value: "12+", suffix: " hrs" },
                      { label: "Better Choices", value: "93", suffix: "%" },
                    ].map((stat, i) => (
                      <motion.div 
                        key={stat.label}
                        whileHover={{ x: 5 }}
                        className="flex justify-between items-center"
                      >
                        <span className="text-white/40">{stat.label}</span>
                        <span className="text-2xl font-bold text-white">{stat.value}<span className="text-white/60">{stat.suffix}</span></span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>

              {/* Small Cards */}
              {[
                { icon: Zap, title: "Lightning Fast", desc: "Quick insights", gradient: "from-cyan-500 to-blue-600", delay: 0.3 },
                { icon: Globe, title: "Global Reach", desc: "Worldwide coverage", gradient: "from-emerald-500 to-teal-600", delay: 0.4 },
                { icon: Star, title: "Top Rated", desc: "User approved", gradient: "from-amber-500 to-orange-600", delay: 0.5 },
                { icon: Cpu, title: "Smart Tech", desc: "AI-enhanced", gradient: "from-rose-500 to-pink-600", delay: 0.6 },
              ].map((card) => (
                <AnimatedSection key={card.title} className="col-span-6 md:col-span-3" delay={card.delay}>
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`h-48 md:h-56 rounded-3xl bg-gradient-to-br ${card.gradient} p-6 flex flex-col justify-between relative overflow-hidden group`}
                  >
                    {/* Light bloom on hover */}
                    <motion.div
                      className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    <FloatingElement delay={card.delay} amplitude={8}>
                      <card.icon className="w-8 h-8 text-white" />
                    </FloatingElement>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{card.title}</h4>
                      <p className="text-white/70 text-sm">{card.desc}</p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ============= TESTIMONIALS SECTION ============= */}
        <section className="relative py-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#0a0a1a] to-[#050510]" />
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(ellipse 50% 30% at 70% 80%, rgba(236, 72, 153, 0.08) 0%, transparent 50%)",
                "radial-gradient(ellipse 50% 30% at 30% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)",
                "radial-gradient(ellipse 50% 30% at 70% 80%, rgba(236, 72, 153, 0.08) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <NoiseOverlay />

          <div className="container-wide px-6 relative z-10">
            <AnimatedSection>
              <div className="text-center max-w-4xl mx-auto mb-20">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6"
                >
                  <Star className="w-4 h-4 text-pink-400" />
                  <span className="text-sm font-semibold text-pink-400 uppercase tracking-wider">Testimonials</span>
                </motion.div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
                  Loved by
                  <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 bg-clip-text text-transparent ml-3">
                    Thousands
                  </span>
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <AnimatedSection key={testimonial.author} delay={index * 0.15}>
                  <motion.div 
                    whileHover={{ y: -12, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl h-full group overflow-hidden"
                  >
                    {/* Hover glow */}
                    <motion.div
                      className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                      style={{ background: "rgba(236, 72, 153, 0.2)" }}
                    />
                    
                    {/* Star rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                        >
                          <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                        </motion.div>
                      ))}
                    </div>
                    
                    <p className="text-white/80 mb-8 text-lg leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <motion.div 
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-primary via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-lg"
                      >
                        {testimonial.avatar}
                      </motion.div>
                      <div>
                        <p className="font-semibold text-white">{testimonial.author}</p>
                        <p className="text-sm text-white/50">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ============= FEATURED ARTICLES SECTION ============= */}
        <section className="relative py-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#08081a] to-[#050510]" />
          <NoiseOverlay />

          <div className="container-wide px-6 relative z-10">
            <AnimatedSection>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
                <div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6"
                  >
                    <BookOpen className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Latest Insights</span>
                  </motion.div>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                    Featured
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent ml-3">
                      Articles
                    </span>
                  </h2>
                </div>
                <MagneticButton>
                  <Link to="/insights">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:border-white/30 transition-all"
                    >
                      View All Articles
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </MagneticButton>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article, index) => (
                <AnimatedSection key={article.slug} delay={index * 0.1}>
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

        {/* ============= FINAL CTA SECTION ============= */}
        <section className="relative py-40 overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0a0a20] to-slate-900" />
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "radial-gradient(ellipse 70% 50% at 30% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 70% 60%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)",
                  "radial-gradient(ellipse 70% 50% at 70% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 30% 40%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)",
                  "radial-gradient(ellipse 70% 50% at 30% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 70% 60%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)",
                ],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          
          {/* Particles */}
          {!reducedMotion && <ParticleField count={40} color="rgba(255,255,255,0.4)" />}
          <NoiseOverlay />

          <div className="container-wide px-6 relative z-10">
            <AnimatedSection>
              <div className="max-w-5xl mx-auto text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary via-purple-500 to-pink-500 mb-10 shadow-2xl shadow-primary/30"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-10 h-10 text-white" />
                  </motion.div>
                </motion.div>

                <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                  Ready to Make
                  <br />
                  <span className="relative inline-block mt-2">
                    <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Smarter Choices?
                    </span>
                    <motion.div
                      className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-xl blur-2xl -z-10"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </span>
                </h2>

                <p className="text-xl md:text-2xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Join thousands of readers who trust Mallinova for unbiased insights and expert recommendations.
                </p>

                <motion.div
                  className="flex flex-col sm:flex-row items-center justify-center gap-5"
                >
                  <MagneticButton>
                    <Link to="/insights">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative overflow-hidden bg-white text-slate-900 px-10 py-5 text-lg font-semibold rounded-2xl shadow-2xl shadow-white/20"
                      >
                        <motion.span 
                          className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
                          initial={{ x: "-100%", opacity: 0 }}
                          whileHover={{ x: "100%", opacity: 1 }}
                          transition={{ duration: 0.6 }}
                        />
                        <span className="relative z-10 flex items-center gap-3">
                          Start Exploring
                          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </span>
                      </motion.button>
                    </Link>
                  </MagneticButton>

                  <MagneticButton>
                    <Link to="/about">
                      <motion.button
                        whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.3)" }}
                        whileTap={{ scale: 0.98 }}
                        className="px-10 py-5 text-lg font-medium text-white/80 hover:text-white rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all"
                      >
                        Learn About Us
                      </motion.button>
                    </Link>
                  </MagneticButton>
                </motion.div>

                {/* Trust badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-10 border-t border-white/10"
                >
                  {[
                    { icon: CheckCircle2, label: "Free to Use" },
                    { icon: Shield, label: "No Ads" },
                    { icon: Lock, label: "Privacy First" },
                    { icon: Zap, label: "Updated Daily" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors cursor-default"
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Index;
