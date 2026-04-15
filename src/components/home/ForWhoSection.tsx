import SectionHeading from "@/components/SectionHeading";
import { Dumbbell, Brain, Sofa, HeartPulse, Timer } from "lucide-react";

const segments = [
  {
    icon: Dumbbell,
    title: "Atletas",
    benefits: ["Recovery entre treinos sem tempo extra", "Mais amplitude para melhor performance", "Dados concretos de evolução"],
  },
  {
    icon: Brain,
    title: "Biohackers",
    benefits: ["Otimiza sono com ação real no corpo", "Integra com HRV, Oura, Whoop", "Dados de mobilidade que faltavam no stack"],
  },
  {
    icon: Sofa,
    title: "Sedentários & Desk Workers",
    benefits: ["Combate horas sentado sem esforço", "Alivia lombar e ombros durante a noite", "Rotina passiva e prática"],
  },
  {
    icon: HeartPulse,
    title: "Foco em Recuperação",
    benefits: ["Pós-lesão ou pós-cirurgia", "Dose terapêutica consistente", "Monitorização contínua do progresso"],
  },
  {
    icon: Timer,
    title: "Quem não tem tempo",
    benefits: ["Zero minutos da tua rotina diária", "Funciona enquanto dormes", "Resultados cumulativos sem disciplina"],
  },
];

const ForWhoSection = () => (
  <section className="py-24 md:py-32 bg-gradient-section">
    <div className="container max-w-5xl">
      <SectionHeading
        tag="Para Quem"
        title="Encontra o teu perfil"
        description="A STREX adapta-se a quem tu és e ao que precisas."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {segments.map((s) => (
          <div key={s.title} className="rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <s.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-display text-base font-semibold text-foreground mb-3">{s.title}</h3>
            <ul className="space-y-2">
              {s.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ForWhoSection;
