import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

interface SearchProps {
  onSearch: (results: Recipe[]) => void;
  onLoading: (loading: boolean) => void;
}

export const RecipeSearch = ({ onSearch, onLoading }: SearchProps) => {
  const [ingredient, setIngredient] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ingredient.trim()) return;

    onLoading(true);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`
      );
      const data = await response.json();
      onSearch(data.meals || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      onSearch([]);
    } finally {
      onLoading(false);
    }
  };

  return (
    <Card className="p-6 bg-gradient-card shadow-warm border-0">
      <form onSubmit={handleSearch} className="flex gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="text"
            placeholder="Enter an ingredient (e.g., chicken, tomato, rice)"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            className="pl-10 h-12 text-base border-border/50 bg-background/50 backdrop-blur-sm focus:bg-background transition-all duration-300"
          />
        </div>
        <Button
          type="submit"
          variant="search"
          size="lg"
          className="h-12 px-8"
        >
          Find Recipes
        </Button>
      </form>
    </Card>
  );
};