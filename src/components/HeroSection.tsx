import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import logo from "@/assets/adacoys-logo.png";

function CreditCard({
  className,
  delay = 0,
  rotate = 0,
  gradient = "from-blue-500/20 to-cyan-500/20",
}: {
  className?: string;
  delay?: number;
  rotate?: number;
  gradient?: string;
}) {
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
          rotateY: [0, 5, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="relative w-72 h-44 md:w-80 md:h-48"
        style={{
          perspective: "1000px",
        }}
      >
        <div
          className={cn(
            "absolute inset-0 rounded-2xl",
            "bg-gradient-to-br",
            gradient,
            "backdrop-blur-sm border border-white/[0.2]",
            "shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]",
            "p-6 flex flex-col justify-between"
          )}
        >
          <div className="w-12 h-10 rounded bg-gradient-to-br from-yellow-200/40 to-yellow-500/40 border border-yellow-600/30" />
          
          <div className="space-y-2">
            <div className="flex gap-3 text-white/60 text-sm md:text-base font-mono">
              <span>••••</span>
              <span>••••</span>
              <span>••••</span>
              <span className="text-white/80">1234</span>
            </div>
            
            <div className="flex justify-between items-end">
              <div>
                <div className="text-xs text-white/40 mb-1">Card Holder</div>
                <div className="text-white/70 text-sm font-medium">JOHN DOE</div>
              </div>
              <div>
                <div className="text-xs text-white/40 mb-1">Expires</div>
                <div className="text-white/70 text-sm">12/25</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-cyan-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <CreditCard
          delay={0.3}
          rotate={12}
          gradient="from-blue-500/20 to-cyan-600/20"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <CreditCard
          delay={0.5}
          rotate={-15}
          gradient="from-rose-500/20 to-pink-600/20"
          className="right-[-15%] md:right-[-10%] top-[60%] md:top-[65%]"
        />

        <CreditCard
          delay={0.4}
          rotate={-8}
          gradient="from-violet-500/20 to-fuchsia-600/20"
          className="left-[0%] md:left-[5%] bottom-[5%] md:bottom-[10%]"
        />

        <CreditCard
          delay={0.6}
          rotate={20}
          gradient="from-amber-500/20 to-orange-600/20"
          className="right-[10%] md:right-[15%] top-[10%] md:top-[15%]"
        />

        <CreditCard
          delay={0.7}
          rotate={-25}
          gradient="from-cyan-500/20 to-blue-600/20"
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
              className="h-16 sm:h-20 md:h-28 w-auto object-contain mx-auto"
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
                Abre Puertas Con un
              </span>
              <br />
              <span className="gradient-text-blue">
                Mejor Puntaje
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <p className="text-sm sm:text-base md:text-lg text-white/40 mb-8 md:mb-10 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              Desde tasas de interés más bajas hasta aprobaciones, el buen crédito es poder. Te ayudamos a construirlo.
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
              Comienza Tu Camino
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="glass-card text-white/80 hover:text-white hover:bg-white/[0.05] px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-xl transition-all duration-300 w-full sm:w-auto"
              onClick={() => window.location.href = '/calculadora'}
            >
              Calculadora de Costos
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
};

export default HeroSection;
