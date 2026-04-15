import SectionHeading from "@/components/SectionHeading";
import { Check } from "lucide-react";

const basicFeatures = ["Modo de atuação automático", "Dados básicos de sessão", "Limites de segurança"];
const premiumFeatures = [
  "Relatórios avançados de mobilidade",
  "Mapa corporal de tensão",
  "Personalização detalhada por zona",
  "Acompanhamento baseado em objetivos",
  "Comparação histórica de progresso",
  "Programas específicos: recovery, flexibilidade, performance",
  "Integração com Oura, Whoop, Apple Health",
  "Insights semanais com recomendações",
];

const PremiumSection = () => (
  <section className="py-24 md:py-32 bg-gradient-section">
    <div className="container max-w-4xl">
      <SectionHeading
        tag="Planos"
        title="Básico funciona. Premium transforma."
        description="O fato atua sem subscrição. Mas com STREX+, tens um coach digital que evolui contigo."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {/* Basic */}
        <div className="rounded-2xl border border-border/50 bg-card p-8">
          <h3 className="font-display text-lg font-semibold text-foreground mb-1">STREX Core</h3>
          <p className="text-xs text-muted-foreground mb-6">Incluído com o fato</p>
          <ul className="space-y-3">
            {basicFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground/60" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Premium */}
        <div className="rounded-2xl border border-primary/30 bg-card p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-primary-foreground text-xs font-display font-semibold rounded-bl-xl">
            Recomendado
          </div>
          <h3 className="font-display text-lg font-semibold text-foreground mb-1">STREX+</h3>
          <p className="text-xs text-primary mb-6">Subscrição premium</p>
          <ul className="space-y-3">
            {premiumFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                <Check className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default PremiumSection;
