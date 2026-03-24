import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Video background */}
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover opacity-40"
        src="/videos/hero-bedroom.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
    </div>

    <div className="container relative z-10 text-center py-20">
      {/* Chips */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-3 animate-fade-in">
        {["Biohackers", "Atletas de Elite", "Sleep & Recovery"].map((chip) => (
          <span
            key={chip}
            className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary font-display tracking-wide"
          >
            {chip}
          </span>
        ))}
      </div>

      <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl animate-slide-up max-w-5xl mx-auto">
        O primeiro exosuit que te alonga{" "}
        <span className="text-gradient-cyan">enquanto dormes.</span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-xl leading-relaxed animate-slide-up [animation-delay:200ms]">
        Sleep tech, mobilidade e recovery de elite — sem roubar tempo ao teu dia.
      </p>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-slide-up [animation-delay:400ms]">
        <Link to="/contacto">
          <Button size="lg" className="glow-cyan font-display font-semibold text-base px-8">
            Garantir Acesso Antecipado
          </Button>
        </Link>
        <a href="#solucao">
          <Button variant="outline" size="lg" className="font-display font-medium text-base border-primary/30 text-foreground hover:bg-primary/10">
            Ver Como Funciona
          </Button>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="mt-20 animate-pulse-glow">
        <ArrowDown className="mx-auto h-5 w-5 text-primary" />
      </div>
    </div>
  </section>
);

export default HeroSection;
