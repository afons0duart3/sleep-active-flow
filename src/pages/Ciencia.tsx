import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { BookOpen, FlaskConical, GraduationCap } from "lucide-react";

const evidence = [
  { title: "Alongamento passivo prolongado", desc: "Estudos demonstram melhorias na função vascular e amplitude de movimento com protocolos de alongamento passivo de baixa intensidade e longa duração.", icon: BookOpen },
  { title: "Soft exosuits em reabilitação", desc: "Investigação em Harvard e MIT sobre exosuits têxteis para assistência ao movimento e recuperação motora.", icon: FlaskConical },
  { title: "Sono, recovery e dor crónica", desc: "Evidência sobre a relação entre qualidade do sono, recuperação muscular e prevenção de condições musculoesqueléticas.", icon: GraduationCap },
];

const Ciencia = () => (
  <Layout>
    <section className="py-24 md:py-32">
      <div className="container">
        <SectionHeading
          tag="Base Científica"
          title="Baseado em evidência, não em hype."
          description="A abordagem STREX combina investigação em alongamento passivo prolongado, soft robotics e ciência do sono."
        />
      </div>
    </section>

    <section className="py-24 md:py-32 bg-gradient-section">
      <div className="container">
        <SectionHeading tag="Evidência" title="Pilares de investigação." />
        <div className="grid gap-6 md:grid-cols-3">
          {evidence.map((e) => (
            <div key={e.title} className="rounded-2xl border border-border/50 bg-card p-8">
              <e.icon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{e.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 md:py-32">
      <div className="container max-w-3xl">
        <SectionHeading tag="Roadmap" title="Roadmap científico." description="Pilotos em clínicas de sono, fisioterapia desportiva e centros de investigação." />
        <div className="space-y-4">
          {[
            "Piloto clínico — Clínica de Sono (Q3 2026)",
            "Estudo de mobilidade com atletas semi-pro (Q4 2026)",
            "Parceria universitária — Biomecânica (2027)",
            "Publicação peer-reviewed — Resultados MVP (2027)",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 rounded-lg border border-border/50 bg-card p-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary font-display">
                {i + 1}
              </div>
              <span className="text-sm text-secondary-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Ciencia;
