import { Shield, Zap, BarChart3, Users } from "lucide-react";

const features = [
  {
    name: "Enterprise Security",
    description:
      "Bank-grade security with end-to-end encryption and advanced threat protection.",
    icon: Shield,
  },
  {
    name: "Lightning Fast",
    description:
      "Optimized performance with sub-second response times and real-time updates.",
    icon: Zap,
  },
  {
    name: "Advanced Analytics",
    description:
      "Powerful insights with customizable dashboards and predictive analytics.",
    icon: BarChart3,
  },
  {
    name: "Team Collaboration",
    description:
      "Seamless collaboration tools with real-time editing and version control.",
    icon: Users,
  },
];

export default function Features() {
  return (
    <div className="py-24 bg-muted/50" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Powerful Features for Modern Teams
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to manage your business, all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative p-6 bg-background rounded-2xl shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">{feature.name}</h3>
              <p className="mt-2 text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
