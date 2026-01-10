import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  angle: number;
  velocity: number;
}

interface ParticleBurstProps {
  isActive: boolean;
  colors?: string[];
  particleCount?: number;
}

const generateParticles = (count: number, colors: string[]): Particle[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: 0,
    y: 0,
    size: Math.random() * 6 + 3,
    color: colors[Math.floor(Math.random() * colors.length)],
    angle: (360 / count) * i + Math.random() * 30 - 15,
    velocity: Math.random() * 40 + 30,
  }));
};

export function ParticleBurst({ 
  isActive, 
  colors = ["#818cf8", "#f472b6", "#22d3ee", "#fbbf24", "#34d399"],
  particleCount = 12 
}: ParticleBurstProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (isActive) {
      setParticles(generateParticles(particleCount, colors));
      setKey(prev => prev + 1);
    }
  }, [isActive, particleCount, colors]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      <AnimatePresence>
        {isActive && particles.map((particle) => {
          const radians = (particle.angle * Math.PI) / 180;
          const endX = Math.cos(radians) * particle.velocity;
          const endY = Math.sin(radians) * particle.velocity;

          return (
            <motion.div
              key={`${key}-${particle.id}`}
              className="absolute left-1/2 top-1/2 rounded-full"
              style={{
                width: particle.size,
                height: particle.size,
                backgroundColor: particle.color,
                boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
              }}
              initial={{ 
                x: -particle.size / 2, 
                y: -particle.size / 2, 
                scale: 0,
                opacity: 1 
              }}
              animate={{ 
                x: endX - particle.size / 2, 
                y: endY - particle.size / 2, 
                scale: [0, 1.5, 1, 0],
                opacity: [1, 1, 0.8, 0] 
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ 
                duration: 0.6,
                ease: [0.23, 1, 0.32, 1],
              }}
            />
          );
        })}
      </AnimatePresence>
      
      {/* Sparkle ring effect */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            key={`ring-${key}`}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
            style={{
              borderColor: colors[0],
              boxShadow: `0 0 20px ${colors[0]}40`,
            }}
            initial={{ width: 0, height: 0, opacity: 1 }}
            animate={{ 
              width: 80, 
              height: 80, 
              opacity: 0,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
