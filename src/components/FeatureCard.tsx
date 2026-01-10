import { useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon, ArrowUpRight } from "lucide-react";
import { ParticleBurst } from "@/components/ui/ParticleBurst";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  particleColors: string[];
}

export function FeatureCard({ icon: Icon, title, description, gradient, particleColors }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
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
            className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 transition-all duration-300 z-10`}
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
              <Icon className="w-7 h-7 text-white" />
            </motion.div>
            
            {/* Particle Burst Effect */}
            <ParticleBurst 
              isActive={isHovered} 
              colors={particleColors}
              particleCount={14}
            />
          </motion.div>
        </div>
        
        <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        {/* Hover Arrow */}
        <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <span className="text-sm font-medium">Learn more</span>
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}
