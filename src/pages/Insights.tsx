import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/ui/page-hero";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { articles } from "@/data/articles";

const Insights = () => {
  return (
    <Layout>
      <PageHero 
        title="Insights & Guides"
        subtitle="Explore our comprehensive library of articles designed to help you navigate digital services with confidence."
      />

      <section className="py-16 md:py-24">
        <div className="container-wide">
          {/* Featured Article */}
          <div className="mb-12">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
              Featured Article
            </h2>
            <ArticleCard {...articles[0]} featured />
          </div>

          {/* All Articles Grid */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
              All Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.slice(1).map((article) => (
                <ArticleCard key={article.slug} {...article} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
