import { User, GraduationCap } from "lucide-react";

const supervisors = [
  {
    name: "Sir Wajahat",
    role: "Supervisor",
  },
  {
    name: "Mr. Conard Walter D'Silva",
    role: "Co-Supervisor",
  },
];

const teamMembers = [
  {
    name: "Humesh Kumar",
    id: "cs221013",
    role: "Team Lead",
    responsibility: "System Design + API Developer",
  },
  {
    name: "Sumeet Jani",
    id: "css221109",
    role: "Team Member",
    responsibility: "Flutter Developer",
  },
  {
    name: "Soojal Kumar",
    id: "cs221122",
    role: "Team Member",
    responsibility: "Front-end Developer",
  },
  {
    name: "Danish Kumar",
    id: "cs221002",
    role: "Team Member",
    responsibility: "Database Developer",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            The Team
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-4">
            Meet the People Behind TalkAware
          </h2>
          <p className="text-muted-foreground text-lg">
            A dedicated team from DHA Suffa University working to make mental
            wellness more accessible.
          </p>
        </div>

        {/* University Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-secondary border border-border">
            <GraduationCap className="w-5 h-5 text-primary" />
            <span className="font-medium text-secondary-foreground">
              DHA Suffa University — Final Year Project
            </span>
          </div>
        </div>

        {/* Supervisors */}
        <div className="mb-16">
          <h3 className="text-center font-display text-xl font-semibold text-foreground mb-8">
            Supervisors
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {supervisors.map((supervisor, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border shadow-soft text-center min-w-[250px]"
              >
                <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center mx-auto mb-4 shadow-card">
                  <User className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground">
                  {supervisor.name}
                </h4>
                <p className="text-primary text-sm font-medium">
                  {supervisor.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h3 className="text-center font-display text-xl font-semibold text-foreground mb-8">
            Team Members
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-card transition-all duration-300 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <User className="w-10 h-10 text-muted-foreground" />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground">
                  {member.name}
                </h4>
                <p className="text-xs text-muted-foreground mb-2">{member.id}</p>
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {member.responsibility}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
