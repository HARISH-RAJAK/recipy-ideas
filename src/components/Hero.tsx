import { ChefHat, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative py-20 px-6 text-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 animate-bounce">
        <Sparkles className="w-6 h-6 text-primary-foreground/60" />
      </div>
      <div className="absolute top-20 right-16 animate-bounce delay-150">
        <Sparkles className="w-4 h-4 text-primary-foreground/40" />
      </div>
      <div className="absolute bottom-16 left-20 animate-bounce delay-300">
        <Sparkles className="w-5 h-5 text-primary-foreground/50" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-3 mb-6">
          <ChefHat className="w-12 h-12 text-primary-foreground animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground">
            Recipe Finder
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover delicious recipes based on ingredients you have at home
        </p>
        
        <div className="text-primary-foreground/80 text-lg">
          Simply enter an ingredient and find amazing meals to cook! 
          <span className="inline-block ml-2 animate-bounce">👨‍🍳</span>
        </div>
      </div>
    </section>
  );
};