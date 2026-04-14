import SectionHeading from "@/components/SectionHeading";
import { Check, X } from "lucide-react";

const comparisons = [
  { traditional: "Alongamento manual — requer tempo e disciplina", strex: "Automático durante o sono" },
  { traditional: "Foam roller — desconfortável e inconsistente", strex: "Micro-trações suaves e calibradas" },
  { traditional: "Fisioterapia — sessões pontuais e caras", strex: "Dose terapêutica todas as noites" },
  { traditional: "Wearables — só medem, não atuam", strex: "Mede e atua no corpo em simultâneo" },
];

const DifferentiationSection = () => (
  <section className="py-24 md:py-32 bg-gradient-section">
    <div className="container max-w-3xl">
      <SectionHeading
        tag="Diferenciação"
        title="Porquê STREX e não o habitual?"
      />

      <div className="space-y-4">
        {comparisons.map((c, i) => (
          <div key={i} className="grid grid-cols-2 gap-3">
            <div className="flex items-start gap-2 rounded-xl border border-destructive/20 bg-destructive/5 p-4">
              <X className="h-4 w-4 mt-0.5 shrink-0 text-destructive/60" />
              <span className="text-sm text-muted-foreground">{c.traditional}</span>
            </div>
            <div className="flex items-start gap-2 rounded-xl border border-primary/20 bg-primary/5 p-4">
              <Check className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
              <span className="text-sm text-foreground">{c.strex}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentiationSection;
