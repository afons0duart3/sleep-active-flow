import SectionHeading from "@/components/SectionHeading";
import { Check, X, Minus } from "lucide-react";

const criteria = [
  "Automação total",
  "Funciona durante o sono",
  "Personalização ao utilizador",
  "Dados em tempo real",
  "Acompanhamento contínuo",
  "Sem esforço ativo",
];

type Rating = "yes" | "no" | "partial";

const alternatives: { name: string; ratings: Rating[] }[] = [
  { name: "Alongamentos manuais", ratings: ["no", "no", "no", "no", "no", "no"] },
  { name: "Massagens", ratings: ["no", "no", "partial", "no", "no", "yes"] },
  { name: "Wearables comuns", ratings: ["no", "no", "partial", "yes", "yes", "yes"] },
  { name: "Apps de mobilidade", ratings: ["no", "no", "partial", "partial", "partial", "no"] },
  { name: "STREX", ratings: ["yes", "yes", "yes", "yes", "yes", "yes"] },
];

const RatingIcon = ({ rating }: { rating: Rating }) => {
  if (rating === "yes") return <Check className="h-4 w-4 text-primary" />;
  if (rating === "partial") return <Minus className="h-4 w-4 text-muted-foreground" />;
  return <X className="h-4 w-4 text-destructive/50" />;
};

const ComparisonSection = () => (
  <section className="py-24 md:py-32">
    <div className="container max-w-4xl">
      <SectionHeading
        tag="Comparação"
        title="Porquê STREX e não o resto?"
        description="Nenhuma alternativa combina atuação passiva, personalização e dados em tempo real."
      />

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50">
              <th className="text-left py-3 px-3 font-display text-xs uppercase tracking-wider text-muted-foreground">Critério</th>
              {alternatives.map((a) => (
                <th key={a.name} className={`py-3 px-3 font-display text-xs uppercase tracking-wider text-center ${a.name === "STREX" ? "text-primary" : "text-muted-foreground"}`}>
                  {a.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {criteria.map((c, i) => (
              <tr key={c} className="border-b border-border/30">
                <td className="py-3 px-3 text-foreground font-medium">{c}</td>
                {alternatives.map((a) => (
                  <td key={a.name} className={`py-3 px-3 text-center ${a.name === "STREX" ? "bg-primary/5" : ""}`}>
                    <span className="inline-flex justify-center">
                      <RatingIcon rating={a.ratings[i]} />
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default ComparisonSection;
