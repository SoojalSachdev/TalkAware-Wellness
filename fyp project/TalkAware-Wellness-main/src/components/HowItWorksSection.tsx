import { MessageSquare, Brain, BarChart3, Lightbulb } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Share Your Thoughts",
    description:
      "Provide text or voice input naturally — like journaling or talking to a friend.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description:
      "Our NLP and ML models analyze tone, word choice, and emotional patterns in your communication.",
    color: "from-primary/25 to-primary/10",
  },
  {
    icon: BarChart3,
    title: "Wellness Score",
    description:
      "Receive a personalized mental wellness score based on detected stress and emotional indicators.",
    color: "from-accent/20 to-accent/5",
  },
  {
    icon: Lightbulb,
    title: "Guidance & Recommendations",
    description:
      "Get actionable insights and suggestions, potentially guiding you toward professional support if needed.",
    color: "from-accent/25 to-accent/10",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            The Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-4">
            How TalkAware Works
          </h2>
          <p className="text-muted-foreground text-lg">
            A simple, non-intrusive approach to understanding your mental wellness
            through the power of AI.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-border to-transparent z-0" />
              )}

              <div className="relative z-10 bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 border border-border/50 h-full">
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-card">
                  {index + 1}
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className="w-7 h-7 text-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
