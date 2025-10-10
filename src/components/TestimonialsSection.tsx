import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quotes } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (!section || !cards) return;

    gsap.fromTo(
      cards.children,
      { opacity: 0, y: 60, rotateX: -15 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      }
    );
  }, []);

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Small Business Owner",
      content: "I was denied for a business loan due to my credit. After 4 months with this team, my score jumped 127 points and I got approved! They changed my life.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      name: "Marcus Johnson",
      role: "Recent Graduate",
      content: "As a young professional, I had no idea how to build credit. Their coaching was invaluable—I went from 580 to 720 in just 6 months.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    },
    {
      name: "Jennifer Lee",
      role: "Healthcare Professional",
      content: "Medical bills destroyed my credit. I thought I'd never recover, but they disputed every inaccuracy and helped me rebuild. Forever grateful!",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full py-20 md:py-32 overflow-hidden bg-[#030303]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-rose-500/[0.03]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm text-accent tracking-wider uppercase">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white/90">Real Stories,</span>
            <br />
            <span className="gradient-text-indigo">Real Results</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it—hear from clients who've transformed their financial futures.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:bg-white/[0.05] transition-all duration-500 group relative"
              style={{ perspective: "1000px" }}
            >
              <div className="absolute top-4 right-4 text-primary/30">
                <Quotes size={48} weight="fill" />
              </div>

              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} weight="fill" className="text-yellow-400" />
                  ))}
                </div>

                <p className="text-white/70 text-base leading-relaxed mb-8">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-indigo-500/20 to-purple-600/20 border border-white/10">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-white/40 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
