import { Card, CardContent } from "@/components/ui/card";

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

interface RecipeGridProps {
  recipes: Recipe[];
  loading: boolean;
  searchQuery?: string;
}

export const RecipeGrid = ({ recipes, loading, searchQuery }: RecipeGridProps) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <Card key={i} className="overflow-hidden animate-pulse">
            <div className="aspect-square bg-muted rounded-t-lg" />
            <CardContent className="p-4">
              <div className="h-4 bg-muted rounded mb-2" />
              <div className="h-3 bg-muted rounded w-2/3" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (!recipes.length && searchQuery) {
    return (
      <Card className="p-12 text-center bg-gradient-card border-0">
        <div className="text-4xl mb-4">🍽️</div>
        <h3 className="text-lg font-semibold mb-2">No recipes found</h3>
        <p className="text-muted-foreground">
          Try searching for a different ingredient like "chicken", "beef", or "rice"
        </p>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {recipes.map((recipe) => (
        <Card
          key={recipe.idMeal}
          className="group overflow-hidden hover:shadow-warm transition-all duration-300 transform hover:scale-105 bg-gradient-card border-0 cursor-pointer animate-fade-in"
        >
          <div className="aspect-square overflow-hidden">
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
              {recipe.strMeal}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Recipe ID: {recipe.idMeal}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};