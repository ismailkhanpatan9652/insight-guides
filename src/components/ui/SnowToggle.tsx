import { Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface SnowToggleProps {
  isSnowing: boolean;
  onToggle: () => void;
}

export function SnowToggle({ isSnowing, onToggle }: SnowToggleProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onToggle}
      className="relative w-9 h-9 overflow-hidden group"
      aria-label={isSnowing ? "Stop snow" : "Start snow"}
    >
      <motion.div
        animate={isSnowing ? { 
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1],
        } : {}}
        transition={{ 
          duration: 2, 
          repeat: isSnowing ? Infinity : 0,
          ease: "easeInOut"
        }}
      >
        <Snowflake 
          className={`h-5 w-5 transition-colors duration-300 ${
            isSnowing ? "text-cyan-400" : "text-foreground"
          }`}
        />
      </motion.div>
      
      {/* Active glow effect */}
      {isSnowing && (
        <motion.span 
          className="absolute inset-0 rounded-md bg-cyan-400/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
      
      {/* Hover effect */}
      <span className="absolute inset-0 rounded-md bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300" />
    </Button>
  );
}
