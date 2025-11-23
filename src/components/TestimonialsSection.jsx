import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/Card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Software Engineer at TechCorp",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content:
      "JobConnect helped me land my dream role in just 2 weeks! The easy apply feature saved me hours of repetitive work.",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: "Marketing Manager at GrowthLab",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    content:
      "The verified employer badge gave me confidence throughout my job search. Found an amazing company that values work-life balance.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer at DesignStudio",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    content:
      "Smart matching is incredible! I received relevant job recommendations that perfectly matched my skills and career goals.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals who found their dream jobs through
            JobConnect
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
