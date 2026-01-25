import { AlertTriangle, Info, Phone } from "lucide-react";

const disclaimers = [
  {
    icon: AlertTriangle,
    title: "Not a Diagnostic Tool",
    description:
      "TalkAware is NOT a medical diagnosis or treatment tool. It provides wellness insights, not clinical diagnoses.",
  },
  {
    icon: Info,
    title: "Not Medical Advice",
    description:
      "This system is NOT a substitute for professional medical or psychological advice, diagnosis, or treatment.",
  },
  {
    icon: Phone,
    title: "Not for Emergencies",
    description:
      "TalkAware is NOT an emergency psychological intervention service. If you're in crisis, please contact emergency services.",
  },
];

const DisclaimerSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-accent font-medium text-sm uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" />
              Important Notice
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mt-3">
              Please Read Carefully
            </h2>
          </div>

          {/* Disclaimer Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {disclaimers.map((item, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 border border-accent/20 shadow-soft"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Note */}
          <div className="mt-8 p-6 bg-background rounded-xl border border-border text-center">
            <p className="text-muted-foreground text-sm">
              If you are experiencing a mental health crisis or emergency, please contact
              your local emergency services or a mental health crisis hotline immediately.
              <span className="block mt-2 font-medium text-foreground">
                Your wellbeing matters.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
