import SectionHeading from "@/components/SectionHeading";
import { Sunrise, Activity, Brain, TrendingUp, Zap, Crosshair } from "lucide-react";

const benefits = [
  { icon: Sunrise, title: "Menos tensão ao acordar", desc: "Sentes a diferença logo na primeira manhã." },
  { icon: Activity, title: "Recuperação mais rápida", desc: "Sem foam rollers, sem sessões extra." },
  { icon: Brain, title: "Rotina 100% passiva", desc: "Veste e dorme. Sem disciplina, sem esforço." },
  { icon: TrendingUp, title: "Mobilidade progressiva", desc: "Ganhos cumulativos, noite após noite." },
  { icon: Crosshair, title: "Acompanhamento inteligente", desc: "Dados que mostram evolução real." },
  { icon: Zap, title: "Mais controlo sobre o corpo", desc: "Performance e recovery numa só rotina." },
];

const BenefitsSection = () => (
  <section className="py-24 md:py-32 bg-gradient-section">
    <div className="container max-w-5xl">
      <SectionHeading
        tag="O Que Ganhas"
        title="Resultados que sentes, dados que comprovam"
        description="Não é promessa — é o que acontece quando o corpo trabalha enquanto descansas."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b) => (
          <div key={b.title} className="flex gap-4 rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <b.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-foreground mb-1">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
