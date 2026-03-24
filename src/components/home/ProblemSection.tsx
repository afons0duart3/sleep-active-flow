import strexTech from "@/assets/strex-tech.jpeg";
import SectionHeading from "@/components/SectionHeading";
import { AlertTriangle, Clock, TrendingDown, Activity } from "lucide-react";

const problems = [
  { icon: Clock, text: "Falta de tempo para alongar diariamente" },
  { icon: TrendingDown, text: "Adesão baixa a protocolos de mobilidade" },
  { icon: AlertTriangle, text: "Dores recorrentes e rigidez ao acordar" },
  { icon: Activity, text: "Gap entre dados (HRV, sono) e ação real" },
];

const ProblemSection = () => (
  <section className="py-24 md:py-32 bg-gradient-section">
    <div className="container">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            tag="O Problema"
            title="Medes tudo. Mas continuas preso."
            description="Biohackers e atletas medem sono, HRV e treino. Mas a barreira real — rigidez, encurtamentos, falta de amplitude — continua sem solução prática."
            center={false}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {problems.map((p) => (
              <div
                key={p.text}
                className="flex items-start gap-3 rounded-lg border border-border/50 bg-card/50 p-4"
              >
                <p.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-secondary-foreground">{p.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img
            src={strexTech}
            alt="Tecnologia STREX integrada no tecido"
            className="rounded-2xl border border-border/30"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/60 to-transparent" />
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
