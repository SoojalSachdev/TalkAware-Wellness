import { Mic, FileText, Shield, TrendingUp, Heart, Users } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Text Analysis",
    description:
      "Analyze written thoughts and journal entries for emotional patterns and sentiment indicators.",
  },
  {
    icon: Mic,
    title: "Voice Input",
    description:
      "Speak naturally and let our AI detect emotional cues in your tone and speech patterns.",
  },
  {
    icon: TrendingUp,
    title: "Stress Level Prediction",
    description:
      "Get insights into your current stress levels based on communication analysis.",
  },
  {
    icon: Heart,
    title: "Emotional State Detection",
    description:
      "Understand your emotional patterns and identify signs of anxiety or low mood early.",
  },
  {
    icon: Shield,
    title: "Privacy-First Design",
    description:
      "Your data stays secure. We prioritize your privacy throughout the analysis process.",
  },
  {
    icon: Users,
    title: "Personalized Dashboard",
    description:
      "View your results, track trends, and receive tailored recommendations in one place.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Capabilities
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-4">
            What TalkAware Analyzes
          </h2>
          <p className="text-muted-foreground text-lg">
            Our AI focuses on communication patterns to provide meaningful insights
            into your mental wellness.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-background/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
