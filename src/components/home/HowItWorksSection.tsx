import SectionHeading from "@/components/SectionHeading";
import { Shirt, Moon, BedDouble, Sunrise, Smartphone } from "lucide-react";

const steps = [
  { icon: Shirt, step: "01", title: "Veste o fato", desc: "Leve e respirável, como roupa de dormir. Sem fios, sem setup complicado." },
  { icon: BedDouble, step: "02", title: "Deita-te e dorme", desc: "O sistema ativa automaticamente. Não precisas de fazer nada." },
  { icon: Moon, step: "03", title: "Atuação durante o sono", desc: "Micro-trações suaves ao longo da noite, com limites de segurança automáticos." },
  { icon: Sunrise, step: "04", title: "Acorda com resultados", desc: "Menos rigidez, mais amplitude. Sentes a diferença logo de manhã." },
  { icon: Smartphone, step: "05", title: "Vê o teu progresso", desc: "A app mostra dados de recuperação, mobilidade e evolução semanal." },
];

const HowItWorksSection = () => (
  <section id="como-funciona" className="py-24 md:py-32">
    <div className="container max-w-4xl">
      <SectionHeading
        tag="Experiência Completa"
        title="Como é usar a STREX?"
        description="Do vestir ao acordar — tudo é pensado para ser automático e sem fricção."
      />

      <div className="relative">
        {/* Vertical line connector */}
        <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden md:block" />

        <div className="space-y-6">
          {steps.map((s) => (
            <div key={s.step} className="flex gap-6 items-start">
              <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
                <s.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="pt-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary/60 font-display">Passo {s.step}</span>
                <h3 className="font-display text-lg font-semibold text-foreground mt-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
