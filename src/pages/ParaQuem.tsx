import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Dumbbell, Brain, Briefcase } from "lucide-react";

const segments = [
  {
    icon: Brain,
    title: "Biohackers de Alta Performance",
    pain: "Medem tudo mas não têm tempo para mobilidade.",
    fit: "STREX integra-se no sono — zero tempo extra, dados reais.",
    img: "🧬",
  },
  {
    icon: Dumbbell,
    title: "Atletas",
    pain: "Rigidez crónica, encurtamentos, recuperação insuficiente.",
    fit: "Recovery passivo noturno que complementa treino e fisioterapia.",
    img: "🏋️",
  },
  {
    icon: Briefcase,
    title: "Knowledge Workers",
    pain: "Dor lombar crónica, horas sentados.",
    fit: "Mobilidade lombar durante o sono, sem disciplina extra.",
    img: "💻",
  },
];

const ParaQuem = () => (
  <Layout>
    <section className="py-24 md:py-32">
      <div className="container">
        <SectionHeading tag="Público" title="Para quem é o STREX?" description="Desenhado para quem leva a sério a performance do corpo." />
        <div className="grid gap-8 md:grid-cols-3">
          {segments.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border/50 bg-card p-8 hover:border-primary/40 transition-colors">
              <div className="text-4xl mb-4">{s.img}</div>
              <s.icon className="mb-2 h-5 w-5 text-primary" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">{s.title}</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-display uppercase tracking-wider text-muted-foreground mb-1">Dor</p>
                  <p className="text-sm text-secondary-foreground">{s.pain}</p>
                </div>
                <div>
                  <p className="text-xs font-display uppercase tracking-wider text-primary mb-1">STREX</p>
                  <p className="text-sm text-secondary-foreground">{s.fit}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default ParaQuem;
