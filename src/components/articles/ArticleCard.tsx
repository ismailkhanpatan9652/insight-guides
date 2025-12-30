import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, ArrowRight } from "lucide-react";

export interface ArticleCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image?: string;
  featured?: boolean;
}

export function ArticleCard({
  slug,
  title,
  excerpt,
  category,
  readTime,
  image,
  featured = false,
}: ArticleCardProps) {
  return (
    <Link to={`/insights/${slug}`} className="block group">
      <Card className={`overflow-hidden card-elevated border-border/50 h-full ${featured ? 'md:flex' : ''}`}>
        {image && (
          <div className={`overflow-hidden ${featured ? 'md:w-2/5' : ''}`}>
            <div 
              className={`bg-muted bg-cover bg-center transition-transform duration-500 group-hover:scale-105 ${
                featured ? 'h-48 md:h-full' : 'h-48'
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
        )}
        <CardContent className={`p-6 ${featured ? 'md:w-3/5 md:flex md:flex-col md:justify-center' : ''}`}>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
              {category}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              {readTime}
            </span>
          </div>
          
          <h3 className={`font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors ${
            featured ? 'text-xl md:text-2xl' : 'text-lg'
          }`}>
            {title}
          </h3>
          
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
            {excerpt}
          </p>
          
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
            Read more
            <ArrowRight className="w-4 h-4" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
