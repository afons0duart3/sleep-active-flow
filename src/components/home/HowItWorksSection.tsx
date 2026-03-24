import SectionHeading from "@/components/SectionHeading";
import { Moon, Smartphone, BrainCircuit, Sun } from "lucide-react";

const steps = [
  { icon: Moon, step: "01", title: "Veste o fato", desc: "Antes de dormir, veste o STREX Core como loungewear." },
  { icon: Smartphone, step: "02", title: "Escolhe o protocolo", desc: "Na app, seleciona o foco: lombar, posterior, ombros." },
  { icon: BrainCircuit, step: "03", title: "Micro-trações inteligentes", desc: "Durante o sono, ciclos suaves sem despertares." },
  { icon: Sun, step: "04", title: "Acorda melhor", desc: "Corpo mais solto. Dados claros sobre o que foi feito." },
];

const HowItWorksSection = () => (
  <section className="py-24 md:py-32 bg-gradient-section">
    <div className="container">
      <SectionHeading
        tag="Experiência"
        title="Como é dormir com STREX"
      />

      <div className="relative grid gap-8 md:grid-cols-4">
        {/* Connector line */}
        <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0" />

        {steps.map((s) => (
          <div key={s.step} className="relative text-center group">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 transition-all group-hover:glow-cyan group-hover:border-primary/60">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xs font-bold text-primary font-display tracking-widest">{s.step}</span>
            <h3 className="mt-2 font-display text-base font-semibold text-foreground">{s.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Video */}
      <div className="mt-16 mx-auto max-w-4xl rounded-2xl overflow-hidden border border-border/30">
        <video autoPlay loop muted playsInline className="w-full">
          <source src="/videos/athlete-suit.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
