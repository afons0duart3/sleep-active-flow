import SectionHeading from "@/components/SectionHeading";
import { Clock, TrendingDown, AlertTriangle, BrainCog, Repeat, Eye } from "lucide-react";

const problems = [
  { icon: AlertTriangle, title: "Rigidez ao acordar", desc: "O corpo acorda tenso, preso — e demoras 30min a desbloquear." },
  { icon: Clock, title: "Recuperação lenta", desc: "Mesmo com bom sono, os músculos não recuperam o suficiente." },
  { icon: Repeat, title: "Zero consistência", desc: "Sabes que devias alongar, mas não consegues manter a rotina." },
  { icon: TrendingDown, title: "Perda de mobilidade", desc: "Com a idade ou sedentarismo, a amplitude diminui sem que notes." },
  { icon: BrainCog, title: "Sem personalização", desc: "Apps genéricas e vídeos de YouTube não conhecem o teu corpo." },
  { icon: Eye, title: "Dados sem ação", desc: "Medes HRV, sono e treino — mas nada atua sobre o corpo." },
];

const ProblemSection = () => (
  <section id="problema" className="py-24 md:py-32 bg-gradient-section">
    <div className="container max-w-5xl">
      <SectionHeading
        tag="O Problema"
        title="Reconheces-te aqui?"
        description="A maioria das pessoas sabe que devia cuidar da mobilidade e recuperação. Mas a realidade é outra."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {problems.map((p) => (
          <div key={p.title} className="rounded-2xl border border-destructive/15 bg-destructive/5 p-6 transition-all hover:border-destructive/30">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-destructive/10">
              <p.icon className="h-5 w-5 text-destructive/70" />
            </div>
            <h3 className="font-display text-sm font-semibold text-foreground mb-1">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
