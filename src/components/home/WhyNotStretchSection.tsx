import SectionHeading from "@/components/SectionHeading";
import { X } from "lucide-react";

const reasons = [
  "Falta de consistência — fazes uma semana, paras três.",
  "Sem orientação — não sabes que músculos precisam de mais atenção.",
  "Esquecimento — a rotina diária engole o tempo de alongamento.",
  "Esforço ativo necessário — exige disciplina após dias cansativos.",
  "Sem monitorização — nunca sabes se está a funcionar.",
];

const WhyNotStretchSection = () => (
  <section className="py-24 md:py-32">
    <div className="container max-w-3xl">
      <SectionHeading
        tag="A Verdade"
        title="Porque não basta alongar de vez em quando?"
        description="O problema não é alongar. É a falta de sistema."
      />

      <div className="space-y-3">
        {reasons.map((r) => (
          <div key={r} className="flex items-start gap-3 rounded-xl border border-border/50 bg-card/50 p-5">
            <X className="h-4 w-4 mt-0.5 shrink-0 text-destructive/60" />
            <span className="text-sm text-muted-foreground leading-relaxed">{r}</span>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
        <p className="font-display text-base font-semibold text-foreground">
          A STREX resolve isto com um sistema automático, passivo e contínuo — que funciona enquanto dormes.
        </p>
      </div>
    </div>
  </section>
);

export default WhyNotStretchSection;
