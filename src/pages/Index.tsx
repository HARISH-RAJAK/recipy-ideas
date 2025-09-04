import { useState } from "react";
import { Hero } from "@/components/Hero";
import { RecipeSearch } from "@/components/RecipeSearch";
import { RecipeGrid } from "@/components/RecipeGrid";

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

const Index = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (results: Recipe[]) => {
    setRecipes(results);
    setSearchQuery("searched"); // Just to indicate a search was made
  };

  const handleLoading = (isLoading: boolean) => {
    setLoading(isLoading);
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <RecipeSearch onSearch={handleSearch} onLoading={handleLoading} />
        </div>
        
        {(recipes.length > 0 || loading || searchQuery) && (
          <section className="animate-slide-up">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              {loading ? "Searching for recipes..." : searchQuery && recipes.length > 0 ? `Found ${recipes.length} delicious recipes` : "Recipe Results"}
            </h2>
            <RecipeGrid recipes={recipes} loading={loading} searchQuery={searchQuery} />
          </section>
        )}
        
        {!loading && !searchQuery && (
          <section className="text-center py-16">
            <div className="text-6xl mb-6">🥘</div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Ready to cook something amazing?
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Enter any ingredient above to discover recipes you can make right now!
            </p>
          </section>
        )}
      </main>
    </div>
  );
};

export default Index;
