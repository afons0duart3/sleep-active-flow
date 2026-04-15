import SectionHeading from "@/components/SectionHeading";
import { Shield, Gauge, Activity, UserCheck, Eye, BedDouble } from "lucide-react";

const safetyPoints = [
  { icon: Gauge, title: "Intensidade controlada", desc: "Forças calibradas dentro de limites biomecânicos seguros." },
  { icon: Shield, title: "Limites de atuação", desc: "O sistema nunca excede amplitudes pré-definidas. Para automaticamente se detectar resistência." },
  { icon: Activity, title: "Sensores de segurança", desc: "Monitorização em tempo real de força, posição e resposta muscular." },
  { icon: UserCheck, title: "Adaptação ao utilizador", desc: "Perfil personalizado com base no teu corpo, histórico e objetivos." },
  { icon: Eye, title: "Monitorização contínua", desc: "Cada ciclo é supervisionado. Dados gravados para revisão na app." },
  { icon: BedDouble, title: "Conforto durante o sono", desc: "Têxtil respirável, leve, sem ruído. Desenhado para 8h de uso." },
];

const SafetySection = () => (
  <section className="py-24 md:py-32">
    <div className="container max-w-5xl">
      <SectionHeading
        tag="Segurança"
        title="Desenhado para confiança total"
        description="Num produto que atua no corpo durante o sono, a segurança é a prioridade nº1."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {safetyPoints.map((s) => (
          <div key={s.title} className="flex gap-4 items-start rounded-2xl border border-primary/10 bg-card/50 p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
              <s.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold text-foreground mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SafetySection;
