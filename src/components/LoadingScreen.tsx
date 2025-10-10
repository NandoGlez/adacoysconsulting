import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loaderRef.current, {
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => {
            onComplete();
          },
        });
      },
    });

    tl.to(progressRef.current, {
      width: "100%",
      duration: 2.5,
      ease: "power2.out",
    })
    .to(textRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.5,
    }, "-=0.5");

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#030303]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.08] via-transparent to-rose-500/[0.08] blur-3xl" />
      
      <div className="relative z-10 w-full max-w-md px-8">
        <div ref={textRef} className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4">
            <span className="gradient-text-indigo">Credit Repair</span>
          </h1>
          <p className="text-white/40 text-sm tracking-wider">
            Building Your Financial Future
          </p>
        </div>

        <div className="relative h-1 w-full bg-white/[0.05] rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full glow-indigo"
          />
        </div>

        <div className="mt-4 text-center">
          <div className="inline-flex gap-2">
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-glow-pulse" />
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-glow-pulse" style={{ animationDelay: "0.2s" }} />
            <div className="w-2 h-2 rounded-full bg-rose-500 animate-glow-pulse" style={{ animationDelay: "0.4s" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
