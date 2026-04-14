import SectionHeading from "@/components/SectionHeading";
import { Shield, Thermometer, HeartPulse, Shirt } from "lucide-react";

const trustPoints = [
  { icon: Shield, title: "Limites de segurança automáticos", desc: "O sistema nunca excede forças seguras. Sensores monitorizam em tempo real." },
  { icon: Thermometer, title: "Materiais confortáveis", desc: "Têxtil respirável, leve e desenhado para 8h de uso contínuo." },
  { icon: HeartPulse, title: "Orientado para bem-estar", desc: "Baseado em evidência científica sobre alongamento passivo e recovery." },
  { icon: Shirt, title: "Não interfere com o sono", desc: "Micro-trações suaves que não causam despertares." },
];

const TrustSection = () => (
  <section className="py-24 md:py-32 bg-gradient-section">
    <div className="container max-w-4xl">
      <SectionHeading
        tag="Confiança"
        title="Seguro, confortável, baseado em ciência"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {trustPoints.map((t) => (
          <div key={t.title} className="flex gap-4 items-start">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
              <t.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold text-foreground mb-1">{t.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
