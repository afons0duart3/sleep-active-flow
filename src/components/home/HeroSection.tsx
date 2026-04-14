import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowDown, Shield, Smartphone, Moon } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Video background */}
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover opacity-30"
        src="/videos/hero-bedroom.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
    </div>

    <div className="container relative z-10 text-center py-20 max-w-4xl mx-auto">
      <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl animate-slide-up">
        Fato inteligente que melhora recuperação e mobilidade{" "}
        <span className="text-gradient-cyan">enquanto dormes.</span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed animate-slide-up [animation-delay:200ms]">
        Acorda com menos rigidez. Transforma horas de sono em recuperação ativa — sem esforço, sem rotinas extra.
      </p>

      {/* Trust micro-chips */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-fade-in [animation-delay:300ms]">
        {[
          { icon: Moon, label: "Funciona durante o sono" },
          { icon: Shield, label: "Seguro e confortável" },
          { icon: Smartphone, label: "App com dados reais" },
        ].map((chip) => (
          <span
            key={chip.label}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium text-primary/80"
          >
            <chip.icon className="h-3.5 w-3.5" />
            {chip.label}
          </span>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-slide-up [animation-delay:400ms]">
        <Link to="/contacto">
          <Button size="lg" className="glow-cyan font-display font-semibold text-base px-8">
            Entrar na Lista de Espera
          </Button>
        </Link>
        <a href="#como-funciona">
          <Button variant="outline" size="lg" className="font-display font-medium text-base border-primary/30 text-foreground hover:bg-primary/10">
            Ver Como Funciona
          </Button>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="mt-16 animate-pulse-glow">
        <ArrowDown className="mx-auto h-5 w-5 text-primary/60" />
      </div>
    </div>
  </section>
);

export default HeroSection;
