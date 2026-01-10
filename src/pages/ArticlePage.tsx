import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { getArticleBySlug, articles } from "@/data/articles";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { AffiliateButton } from "@/components/articles/AffiliateButton";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { articleImages } from "@/assets/images";
import { getAffiliateUrl } from "@/config/affiliateLinks";

// Helper to get the image - prioritize new assets, fallback to public folder
const getImageSrc = (imagePath?: string): string | undefined => {
  if (!imagePath) return undefined;
  
  // Extract the image key from the path (e.g., "/images/personal-finance.jpg" -> "personal-finance")
  const match = imagePath.match(/\/images\/([^.]+)\./);
  if (match && match[1]) {
    const key = match[1];
    if (articleImages[key]) {
      return articleImages[key];
    }
  }
  
  // Fallback to original path
  return imagePath;
};
const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;
  const affiliateUrl = slug ? getAffiliateUrl(slug) : "";

  if (!article) {
    return (
      <Layout>
        <div className="container-wide py-24 text-center">
          <h1 className="font-display text-3xl font-semibold text-foreground mb-4">
            Article Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/insights">
            <Button>Browse All Articles</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  // Parse content into sections
  const contentSections = article.content
    .trim()
    .split(/(?=## )/)
    .filter(Boolean);

  return (
    <Layout>
      {/* Article Header */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-12 md:py-16 border-b border-border/50">
        <div className="container-narrow">
          <Link to="/insights" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>
          
          <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded mb-4">
            {article.category}
          </span>
          
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {article.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(article.publishedDate).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-card">
            <img 
              src={getImageSrc(article.image)} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 md:py-12">
        <div className="container-narrow">
          <article className="prose-article">
            {contentSections.map((section, index) => {
              const lines = section.trim().split('\n');
              const isHeading = lines[0].startsWith('## ');
              
              // Insert affiliate button after the 2nd or 3rd section for natural placement
              const showButtonAfter = index === 2;
              
              if (isHeading) {
                const heading = lines[0].replace('## ', '');
                const content = lines.slice(1).join('\n');
                
                return (
                  <div key={index}>
                    <h2>{heading}</h2>
                    <div dangerouslySetInnerHTML={{ 
                      __html: formatContent(content) 
                    }} />
                    {showButtonAfter && <AffiliateButton category={article.category} affiliateUrl={affiliateUrl} />}
                  </div>
                );
              }
              
              return (
                <div key={index}>
                  <div 
                    dangerouslySetInnerHTML={{ 
                      __html: formatContent(section) 
                    }} 
                  />
                  {showButtonAfter && <AffiliateButton category={article.category} affiliateUrl={affiliateUrl} />}
                </div>
              );
            })}
          </article>

          {/* Second CTA at bottom */}
          <AffiliateButton category={article.category} affiliateUrl={affiliateUrl} className="mt-8" />

          {/* Affiliate Disclosure */}
          <div className="mt-8 p-6 bg-secondary/30 rounded-xl border border-border/50">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Disclosure:</strong> Some links in this article 
              may be affiliate links. We may earn a commission if you make a purchase through 
              these links, at no additional cost to you. This helps support our editorial work.
            </p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-muted/20 border-t border-border/50">
          <div className="container-wide">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((article) => (
                <ArticleCard key={article.slug} {...article} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

// Helper function to format content
function formatContent(content: string): string {
  return content
    .split('\n\n')
    .map((paragraph) => {
      // Handle h3 headings
      if (paragraph.startsWith('### ')) {
        return `<h3>${paragraph.replace('### ', '')}</h3>`;
      }
      // Handle bold text within paragraphs
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return `<p><strong>${paragraph.slice(2, -2)}</strong></p>`;
      }
      // Handle bold text at start of paragraph
      if (paragraph.match(/^\*\*[^*]+\*\*:/)) {
        const formatted = paragraph.replace(/\*\*([^*]+)\*\*:/, '<strong>$1:</strong>');
        return `<p>${formatted}</p>`;
      }
      // Handle lists
      if (paragraph.includes('\n- ')) {
        const items = paragraph.split('\n- ').filter(Boolean);
        const listItems = items.map((item, i) => 
          i === 0 ? `<p>${item}</p>` : `<li>${item}</li>`
        );
        if (items.length > 1) {
          return `${listItems[0]}<ul>${listItems.slice(1).join('')}</ul>`;
        }
      }
      // Regular paragraph
      if (paragraph.trim()) {
        // Replace inline bold
        const withBold = paragraph.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        return `<p>${withBold}</p>`;
      }
      return '';
    })
    .join('');
}

export default ArticlePage;
