import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PaperPlaneTilt, Phone, Envelope, MapPin } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const section = sectionRef.current;
    const form = formRef.current;

    if (!section || !form) return;

    gsap.fromTo(
      form.querySelectorAll(".form-element"),
      { opacity: 0, x: -40, filter: "blur(10px)" },
      {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      }
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Phone size={24} weight="light" />,
      label: "Phone",
      value: "(555) 123-4567",
    },
    {
      icon: <Envelope size={24} weight="light" />,
      label: "Email",
      value: "contact@creditrepair.com",
    },
    {
      icon: <MapPin size={24} weight="light" />,
      label: "Location",
      value: "New York, NY 10001",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full py-20 md:py-32 overflow-hidden bg-[#030303]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.03] via-transparent to-indigo-500/[0.03]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm text-primary tracking-wider uppercase">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white/90">Start Your</span>
            <br />
            <span className="gradient-text-indigo">Credit Journey</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to take control of your credit? Let's discuss how we can help you achieve your financial goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="glass-card p-6 hover:bg-white/[0.05] transition-all duration-300 group form-element"
              >
                <div className="flex items-start gap-4">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white/60 text-sm mb-1">{info.label}</h4>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div ref={formRef} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div className="form-element">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-white/[0.03] border-white/[0.1] focus:border-primary text-white placeholder:text-white/30 rounded-xl h-12"
                />
              </div>

              <div className="form-element">
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-white/[0.03] border-white/[0.1] focus:border-primary text-white placeholder:text-white/30 rounded-xl h-12"
                />
              </div>

              <div className="form-element">
                <Input
                  type="tel"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-white/[0.03] border-white/[0.1] focus:border-primary text-white placeholder:text-white/30 rounded-xl h-12"
                />
              </div>

              <div className="form-element">
                <Textarea
                  placeholder="Tell us about your credit situation..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-white/[0.03] border-white/[0.1] focus:border-primary text-white placeholder:text-white/30 rounded-xl resize-none"
                />
              </div>

              <div className="form-element">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0 shadow-xl glow-indigo rounded-xl transition-all duration-300 hover:scale-105 h-12"
                >
                  <PaperPlaneTilt size={20} weight="fill" className="mr-2" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
