import { motion } from "framer-motion";
import { Circle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import logo from "@/assets/adacoys-logo.png";
import skoolLogo from "@/assets/skool-logo.png";

function FloatingDataElement({
  className,
  delay = 0,
  rotate = 0,
  type = "line-chart",
}: {
  className?: string;
  delay?: number;
  rotate?: number;
  type?: "line-chart" | "data-node" | "bar-chart" | "insight-glass" | "geo-accent";
}) {
  const renderContent = () => {
    switch (type) {
      case "line-chart":
        return (
          <div
            className={cn(
              "w-48 h-32 md:w-52 md:h-36",
              "rounded-2xl",
              "bg-white/[0.08] backdrop-blur-xl border border-white/[0.15]",
              "shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]",
              "p-4 flex items-center justify-center"
            )}
          >
            <svg
              className="w-full h-full text-cyan-400/60"
              viewBox="0 0 100 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 45Q15 40 25 30T45 25T70 10T100 5"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="100" cy="5" r="2" fill="currentColor" />
            </svg>
          </div>
        );

      case "data-node":
        return (
          <div
            className={cn(
              "w-36 h-36 md:w-40 md:h-40",
              "rounded-full",
              "bg-white/[0.08] backdrop-blur-xl border border-white/[0.15]",
              "shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]",
              "flex flex-col items-center justify-center p-4"
            )}
          >
            <div className="w-8 h-8 rounded-full bg-cyan-500/30 flex items-center justify-center mb-2">
              <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            </div>
            <div className="h-1 w-12 bg-white/15 rounded-full" />
            <div className="h-1 w-8 bg-white/15 rounded-full mt-1" />
          </div>
        );

      case "bar-chart":
        return (
          <div
            className={cn(
              "w-40 h-48 md:w-44 md:h-52",
              "rounded-2xl",
              "bg-white/[0.08] backdrop-blur-xl border border-white/[0.15]",
              "shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]",
              "flex items-end justify-around p-6"
            )}
          >
            <div className="w-3 h-[40%] bg-blue-500/50 rounded-t-sm" />
            <div className="w-3 h-[70%] bg-blue-500/70 rounded-t-sm" />
            <div className="w-3 h-[55%] bg-cyan-500/50 rounded-t-sm" />
            <div className="w-3 h-[90%] bg-cyan-400/80 rounded-t-sm shadow-[0_-5px_15px_rgba(34,211,238,0.2)]" />
          </div>
        );

      case "insight-glass":
        return (
          <div
            className={cn(
              "w-56 h-32 md:w-60 md:h-36",
              "rounded-2xl",
              "bg-white/[0.08] backdrop-blur-xl border border-white/[0.15]",
              "shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]",
              "p-5"
            )}
          >
            <div className="flex justify-between items-center mb-4">
              <div className="w-10 h-2 bg-white/30 rounded-full" />
              <div className="w-4 h-4 rounded-full border border-cyan-400/70" />
            </div>
            <div className="space-y-2">
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="w-[75%] h-full bg-blue-500/80" />
              </div>
              <div className="w-[60%] h-1.5 bg-white/10 rounded-full" />
            </div>
          </div>
        );

      case "geo-accent":
        return (
          <div
            className={cn(
              "w-24 h-24 md:w-28 md:h-28",
              "rounded-xl",
              "bg-white/[0.08] backdrop-blur-lg border border-white/[0.15]",
              "shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]",
              "flex items-center justify-center"
            )}
          >
            <div className="w-8 h-8 border-2 border-cyan-400/40 rounded-lg" />
          </div>
        );
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
          x: [0, 20, 0, -20, 0],
          rotateY: [0, 5, 0, -5, 0],
          rotateZ: [rotate, rotate + 3, rotate, rotate - 3, rotate],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          perspective: "1000px",
        }}
      >
        {renderContent()}
      </motion.div>
    </motion.div>
  );
}

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      {/* Skool Button - Top Right */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 z-50 flex items-center gap-3">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="hidden md:flex items-center gap-2 text-white/70 text-sm"
        >
          <span>Únete a nuestra comunidad</span>
          <ArrowRight className="h-4 w-4" />
        </motion.div>
        
        <motion.a
          href="https://adacoysacademy.com/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="glass-card p-3 md:p-4 hover:bg-white/[0.08] transition-all duration-300 hover:scale-105"
          style={{
            boxShadow: '0 0 40px rgba(251, 146, 60, 0.4), 0 0 80px rgba(251, 146, 60, 0.2), 0 10px 30px rgba(0, 0, 0, 0.3)'
          }}
        >
          <img 
            src={skoolLogo} 
            alt="Skool Community" 
            className="h-10 md:h-12 w-auto object-contain"
          />
        </motion.a>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-cyan-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <FloatingDataElement
          delay={0.3}
          rotate={12}
          type="line-chart"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <FloatingDataElement
          delay={0.5}
          rotate={-15}
          type="bar-chart"
          className="right-[-15%] md:right-[-10%] top-[60%] md:top-[65%]"
        />

        <FloatingDataElement
          delay={0.4}
          rotate={-8}
          type="insight-glass"
          className="left-[0%] md:left-[5%] bottom-[5%] md:bottom-[10%]"
        />

        <FloatingDataElement
          delay={0.6}
          rotate={20}
          type="data-node"
          className="right-[10%] md:right-[15%] top-[10%] md:top-[15%]"
        />

        <FloatingDataElement
          delay={0.7}
          rotate={-25}
          type="geo-accent"
          className="left-[15%] md:left-[20%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-4 md:mb-6"
          >
            <img 
              src={logo} 
              alt="Adacoys Consulting Logo" 
              className="h-32 sm:h-36 md:h-48 w-auto object-contain mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full glass-card mb-6 md:mb-10"
          >
            <Circle className="h-2 w-2 fill-rose-500/80 text-rose-500/80" />
            <span className="text-xs sm:text-sm text-white/60 tracking-wide">
              Tu Socio Financiero
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 tracking-tight px-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                Estrategia Financiera Con
              </span>
              <br />
              <span className="gradient-text-blue">
                Visión Real
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <p className="text-sm sm:text-base md:text-lg text-white/40 mb-8 md:mb-10 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              Consultoría financiera personalizada para tomar mejores decisiones, planificar con claridad y desbloquear nuevas oportunidades.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white border-0 shadow-xl glow-blue px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Comienza Tu Consultoría
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-card text-white/80 hover:text-white hover:bg-white/[0.05] px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-xl transition-all duration-300 w-full sm:w-auto"
              asChild
            >
              <a href="mailto:admin@adacoysconsulting.com">
                Habla Con Un Consultor
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
};

export default HeroSection;
