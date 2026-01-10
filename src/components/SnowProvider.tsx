import { useState, createContext, useContext, ReactNode } from "react";
import { SnowEffect } from "@/components/ui/SnowEffect";

interface SnowContextType {
  isSnowing: boolean;
  toggleSnow: () => void;
}

const SnowContext = createContext<SnowContextType | undefined>(undefined);

export function useSnow() {
  const context = useContext(SnowContext);
  if (!context) {
    throw new Error("useSnow must be used within a SnowProvider");
  }
  return context;
}

export function SnowProvider({ children }: { children: ReactNode }) {
  const [isSnowing, setIsSnowing] = useState(false);

  const toggleSnow = () => setIsSnowing((prev) => !prev);

  return (
    <SnowContext.Provider value={{ isSnowing, toggleSnow }}>
      {children}
      <SnowEffect isActive={isSnowing} flakeCount={60} />
    </SnowContext.Provider>
  );
}
