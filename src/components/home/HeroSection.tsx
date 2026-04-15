import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowDown, Shield, Smartphone, Moon } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-30" src="/videos/hero-bedroom.mp4" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
    </div>

    <div className="container relative z-10 text-center py-20 max-w-4xl mx-auto">
      <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary font-display animate-fade-in">
        Sleep Tech · Recovery · Performance
      </span>

      <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl animate-slide-up">
        Recuperação e mobilidade{" "}
        <span className="text-gradient-cyan">enquanto dormes.</span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed animate-slide-up [animation-delay:150ms]">
        Fato inteligente que faz alongamento passivo durante o sono. Acordas com menos rigidez, mais amplitude e dados reais de progresso — sem esforço, sem rotinas extra.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-fade-in [animation-delay:250ms]">
        {[
          { icon: Moon, label: "Atua durante o sono" },
          { icon: Shield, label: "Seguro e confortável" },
          { icon: Smartphone, label: "App com dados reais" },
        ].map((chip) => (
          <span key={chip.label} className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium text-primary/80">
            <chip.icon className="h-3.5 w-3.5" />
            {chip.label}
          </span>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-slide-up [animation-delay:350ms]">
        <Link to="/contacto">
          <Button size="lg" className="glow-cyan font-display font-semibold text-base px-8">
            Entrar na Lista de Espera
          </Button>
        </Link>
        <a href="#problema">
          <Button variant="outline" size="lg" className="font-display font-medium text-base border-primary/30 text-foreground hover:bg-primary/10">
            Descobrir Como Funciona
          </Button>
        </a>
      </div>

      <div className="mt-16 animate-pulse-glow">
        <ArrowDown className="mx-auto h-5 w-5 text-primary/60" />
      </div>
    </div>
  </section>
);

export default HeroSection;
