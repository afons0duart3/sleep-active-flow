import SectionHeading from "@/components/SectionHeading";
import strexSuit from "@/assets/strex-suit.jpeg";
import { Shirt, Waves, BarChart3 } from "lucide-react";

const solutions = [
  {
    icon: Shirt,
    title: "Exosuit Têxtil",
    desc: "Macacão inteligente com cabos e micro-trações ao longo das cadeias musculares.",
  },
  {
    icon: Waves,
    title: "Alongamento Passivo",
    desc: "Ciclos de tração calibrados durante o sono, sem despertares.",
  },
  {
    icon: BarChart3,
    title: "App & Analytics",
    desc: "Dados de mobilidade, ritmo de recovery e integração com wearables.",
  },
];

const SolutionSection = () => (
  <section id="solucao" className="py-24 md:py-32">
    <div className="container">
      <SectionHeading
        tag="A Solução"
        title="Do sono passivo para o sono ativo."
        description="O STREX transforma o tempo de sono em tempo terapêutico — automaticamente."
      />

      <div className="grid gap-6 md:grid-cols-3 mb-16">
        {solutions.map((s) => (
          <div
            key={s.title}
            className="group rounded-2xl border border-border/50 bg-card p-8 transition-all hover:border-primary/40 hover:glow-cyan"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="relative mx-auto max-w-3xl">
        <img
          src={strexSuit}
          alt="STREX Exosuit com cadeias biomecânicas"
          className="rounded-2xl border border-border/30"
        />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/50 to-transparent" />
      </div>
    </div>
  </section>
);

export default SolutionSection;
