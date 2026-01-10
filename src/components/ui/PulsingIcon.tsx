import { motion } from "framer-motion";

interface PulsingIconProps {
  children: React.ReactNode;
  color?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function PulsingIcon({ children, color = "rgba(99, 102, 241, 0.5)", size = "md", className = "" }: PulsingIconProps) {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <div className={`relative ${className}`}>
      {/* Pulse rings */}
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className={`absolute inset-0 rounded-2xl`}
          style={{ backgroundColor: color }}
          initial={{ scale: 1, opacity: 0.4 }}
          animate={{ 
            scale: [1, 1.5, 1.8],
            opacity: [0.4, 0.2, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: ring * 0.4,
            ease: "easeOut",
          }}
        />
      ))}
      
      {/* Icon container */}
      <motion.div 
        className={`relative ${sizeClasses[size]} rounded-2xl flex items-center justify-center z-10`}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
