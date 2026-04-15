import SectionHeading from "@/components/SectionHeading";
import { Lightbulb, FlaskConical, Target, Rocket } from "lucide-react";

const proofPoints = [
  { icon: FlaskConical, title: "Conceito validado", desc: "Baseado em estudos sobre alongamento passivo, recovery noturno e biomecânica funcional." },
  { icon: Target, title: "Protótipo em desenvolvimento", desc: "Testes de materiais, atuação e integração com sensores em fase avançada." },
  { icon: Lightbulb, title: "Visão clara", desc: "Transformar o sono num período terapêutico ativo, acessível a qualquer pessoa." },
  { icon: Rocket, title: "Roadmap definido", desc: "Beta privada → produção limitada → lançamento aberto com comunidade fundadora." },
];

const SocialProofSection = () => (
  <section className="py-24 md:py-32">
    <div className="container max-w-4xl">
      <SectionHeading
        tag="Onde Estamos"
        title="Transparência total"
        description="A STREX é um projeto real, em desenvolvimento — e queremos que faças parte desde o início."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {proofPoints.map((p) => (
          <div key={p.title} className="flex gap-4 items-start">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
              <p.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold text-foreground mb-1">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
