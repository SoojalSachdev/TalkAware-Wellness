import { Link } from "react-router-dom";
import { MessageCircle, Heart, UserPlus } from "lucide-react";

const CTASection = () => {
  const user = localStorage.getItem("user");

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to start your mental wellness journey?
          </h2>

          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join TalkAware today and take your first step toward a healthier mind.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {!user ? (
              <>
                <Link
                  to="/auth"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition"
                >
                  <UserPlus className="w-5 h-5" />
                  Get Started
                </Link>
              </>
            ) : (
              <Link
                to="/chat"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition"
              >
                <MessageCircle className="w-5 h-5" />
                Open Chat
              </Link>
            )}

            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-muted transition"
            >
              <Heart className="w-5 h-5" />
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
