import { Brain, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center shadow-soft">
              <Brain className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-semibold text-foreground">
              TalkAware
            </span>
          </a>

          {/* Navigation */}
          <nav className="flex items-center gap-6 text-sm">
            <a
              href="#how-it-works"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </a>
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#team"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Team
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} TalkAware. Final Year Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
