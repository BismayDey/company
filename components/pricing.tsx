import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Starter",
    price: "₹699",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 5 team members",
      "Basic analytics",
      "Standard support",
      "5GB storage",
      "API access",
    ],
  },
  {
    name: "Professional",
    price: "₹6999",
    description: "For growing businesses and teams",
    features: [
      "Up to 20 team members",
      "Advanced analytics",
      "Priority support",
      "50GB storage",
      "API access",
      "Custom integrations",
      "Advanced security",
    ],
  },
  {
    name: "Enterprise",
    price: "₹6999 + 69🤨",
    description: "For large organizations with specific needs",
    features: [
      "Unlimited team members",
      "Custom analytics",
      "24/7 dedicated support",
      "Unlimited storage",
      "API access",
      "Custom integrations",
      "Advanced security",
      "SLA guarantee",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="py-24 bg-muted/50" id="pricing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the plan that best fits your needs. All plans include a
            14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="bg-background rounded-2xl shadow-sm border p-8 flex flex-col"
            >
              <h3 className="text-2xl font-semibold">{tier.name}</h3>
              <p className="mt-4 text-muted-foreground">{tier.description}</p>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold">{tier.price}</span>
                {tier.price !== "Custom" && (
                  <span className="ml-2 text-muted-foreground">/month</span>
                )}
              </div>
              <ul className="mt-8 space-y-4 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8 w-full">
                {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
