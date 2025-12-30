import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24 border-b border-border/50">
      <div className="container-wide">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4 animate-fade-in-up">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
