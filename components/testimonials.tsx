import Image from "next/image";

const testimonials = [
  {
    content:
      "This platform has completely transformed how we operate. The efficiency gains have been remarkable.",
    author: "pod sorkar",
    role: "CTO at TechCorp",
    image: "/placeholder.svg",
  },
  {
    content:
      "The best investment we've made in our tech stack. Customer support is outstanding.",
    author: "oni chan",
    role: "allah",
    image: "/placeholder.svg",
  },
  {
    content:
      "Intuitive interface, powerful features, and reliable performance. Exactly what we needed.",
    author: "dadu",
    role: "Product Manager at InnovateCo",
    image: "/placeholder.svg",
  },
];

export default function Testimonials() {
  return (
    <div className="py-24" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what our customers have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-muted/30 p-6 rounded-2xl border">
              <p className="text-lg mb-4">{testimonial.content}</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="ml-3">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
