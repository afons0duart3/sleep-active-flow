import SectionHeading from "@/components/SectionHeading";
import { Shirt, Waves, BarChart3 } from "lucide-react";

const solutions = [
  {
    icon: Shirt,
    title: "Exosuit Têxtil",
    desc: "Um fato confortável com micro-atuadores ao longo das cadeias musculares. Vestes como roupa de dormir.",
  },
  {
    icon: Waves,
    title: "Alongamento Passivo",
    desc: "Ciclos de tração suaves e calibrados durante o sono. Sem despertares, sem desconforto.",
  },
  {
    icon: BarChart3,
    title: "App & Dados Reais",
    desc: "Acompanha mobilidade, qualidade de recuperação e progresso semana a semana.",
  },
];

const SolutionSection = () => (
  <section id="solucao" className="py-24 md:py-32 bg-gradient-section">
    <div className="container max-w-5xl">
      <SectionHeading
        tag="A Solução"
        title="O sono deixa de ser tempo morto."
        description="A STREX transforma horas de descanso em recuperação ativa — automaticamente, todas as noites."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {solutions.map((s) => (
          <div key={s.title} className="group rounded-2xl border border-border/50 bg-card p-8 transition-all hover:border-primary/40 hover:glow-cyan">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
