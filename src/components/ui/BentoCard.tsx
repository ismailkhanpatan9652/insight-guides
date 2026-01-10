import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  enableTilt?: boolean;
  enableShimmer?: boolean;
  enableGlow?: boolean;
}

export function BentoCard({ 
  children, 
  className = "", 
  glowColor = "rgba(99, 102, 241, 0.5)",
  enableTilt = true,
  enableShimmer = true,
  enableGlow = true,
}: BentoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !enableTilt) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative group cursor-pointer ${className}`}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
        rotateX: enableTilt ? rotateX : 0,
        rotateY: enableTilt ? rotateY : 0,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02, z: 50 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Glow effect */}
      {enableGlow && (
        <motion.div
          className="absolute -inset-1 rounded-3xl opacity-0 blur-xl transition-opacity duration-500 -z-10"
          style={{ background: glowColor }}
          animate={{ opacity: isHovered ? 0.6 : 0 }}
        />
      )}
      
      {/* Shimmer effect */}
      {enableShimmer && (
        <motion.div
          className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          <motion.div
            className="absolute inset-0 -translate-x-full"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
            }}
            animate={isHovered ? { translateX: ["100%", "-100%"] } : {}}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
          />
        </motion.div>
      )}

      {/* Floating particles on hover */}
      {isHovered && (
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full"
              initial={{ 
                x: `${20 + Math.random() * 60}%`, 
                y: "100%",
                opacity: 0 
              }}
              animate={{ 
                y: "-20%", 
                opacity: [0, 1, 0],
              }}
              transition={{ 
                duration: 2 + Math.random(), 
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      )}

      {/* Border glow animation */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          background: `linear-gradient(135deg, transparent, ${glowColor}, transparent)`,
          backgroundSize: "400% 400%",
        }}
        animate={isHovered ? {
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        } : {}}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
}
