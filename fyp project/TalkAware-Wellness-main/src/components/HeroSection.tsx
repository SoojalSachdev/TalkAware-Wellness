import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const handleClick = () => {
    if (user) {
      navigate("/chat");
    } else {
      navigate("/auth");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-soft" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Your AI Wellness Companion
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            TalkAware helps you understand your{" "}
            <span className="text-primary">mental wellness</span>
          </h1>

          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Talk through your thoughts, track your emotional health, and build
            healthier habits — all in one safe space.
          </p>

          <div className="flex justify-center gap-4">
            <Button size="lg" onClick={handleClick} className="gap-2">
              {user ? "Open Chat" : "Get Started"}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
