import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/ui/page-hero";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { articles, getAllCategories } from "@/data/articles";
import { Button } from "@/components/ui/button";

const Insights = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", ...getAllCategories()];
  
  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(a => a.category === selectedCategory);

  return (
    <Layout>
      <PageHero 
        title="Insights & Guides"
        subtitle="Explore our comprehensive library of articles designed to help you navigate digital services with confidence."
      />

      <section className="py-16 md:py-24">
        <div className="container-wide">
          {/* Category Filter */}
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Article */}
          {selectedCategory === "All" && (
            <div className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                Featured Article
              </h2>
              <ArticleCard {...articles[0]} featured />
            </div>
          )}

          {/* Articles Grid */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
              {selectedCategory === "All" ? "All Articles" : selectedCategory}
              <span className="text-muted-foreground text-lg ml-2">({filteredArticles.length})</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(selectedCategory === "All" ? articles.slice(1) : filteredArticles).map((article) => (
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
