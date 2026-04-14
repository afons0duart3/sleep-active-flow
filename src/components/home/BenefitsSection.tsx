import SectionHeading from "@/components/SectionHeading";
import { Sunrise, Activity, Brain, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Sunrise,
    title: "Menos rigidez ao acordar",
    desc: "O alongamento passivo durante a noite reduz a sensação de corpo preso de manhã.",
  },
  {
    icon: Activity,
    title: "Recuperação mais confortável",
    desc: "Sem foam rollers, sem sessões extra. A recuperação acontece enquanto descansas.",
  },
  {
    icon: Brain,
    title: "Rotina 100% passiva",
    desc: "Veste e dorme. Sem disciplina extra, sem alarmes, sem esforço consciente.",
  },
  {
    icon: TrendingUp,
    title: "Dados e progresso real",
    desc: "Acompanha mobilidade, qualidade do sono e evolução semana a semana na app.",
  },
];

const BenefitsSection = () => (
  <section className="py-24 md:py-32 bg-gradient-section">
    <div className="container max-w-5xl">
      <SectionHeading
        tag="Benefícios"
        title="O que muda na tua rotina"
        description="Une conforto, monitorização e performance numa só rotina — a de dormir."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="flex gap-4 rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30"
          >
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
