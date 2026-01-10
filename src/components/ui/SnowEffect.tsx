import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface Snowflake {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  wobble: number;
}

interface SnowEffectProps {
  isActive: boolean;
  flakeCount?: number;
}

export function SnowEffect({ isActive, flakeCount = 50 }: SnowEffectProps) {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    if (isActive) {
      const flakes: Snowflake[] = Array.from({ length: flakeCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 5 + 8,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.6 + 0.4,
        wobble: Math.random() * 30 - 15,
      }));
      setSnowflakes(flakes);
    } else {
      setSnowflakes([]);
    }
  }, [isActive, flakeCount]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${flake.x}%`,
            width: flake.size,
            height: flake.size,
            boxShadow: `0 0 ${flake.size * 2}px rgba(255, 255, 255, 0.8)`,
          }}
          initial={{ 
            y: -20, 
            opacity: 0,
            x: 0,
          }}
          animate={{ 
            y: "100vh",
            opacity: [0, flake.opacity, flake.opacity, 0],
            x: [0, flake.wobble, -flake.wobble, flake.wobble / 2, 0],
          }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Infinity,
            ease: "linear",
            x: {
              duration: flake.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }
          }}
        />
      ))}
      
      {/* Larger accent snowflakes */}
      {snowflakes.slice(0, 15).map((flake) => (
        <motion.div
          key={`large-${flake.id}`}
          className="absolute text-white/60"
          style={{
            left: `${(flake.x + 50) % 100}%`,
            fontSize: flake.size * 3,
          }}
          initial={{ 
            y: -30, 
            opacity: 0,
            rotate: 0,
          }}
          animate={{ 
            y: "100vh",
            opacity: [0, 0.6, 0.6, 0],
            rotate: 360,
          }}
          transition={{
            duration: flake.duration * 1.5,
            delay: flake.delay + 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ❄
        </motion.div>
      ))}
    </div>
  );
}
