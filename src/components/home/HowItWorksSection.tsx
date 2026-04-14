import SectionHeading from "@/components/SectionHeading";

const steps = [
  {
    step: "01",
    title: "Veste o equipamento",
    desc: "Um fato confortável que usas como roupa de dormir. Leve, respirável, sem fios soltos.",
  },
  {
    step: "02",
    title: "O sistema atua durante o sono",
    desc: "Micro-trações suaves ao longo das cadeias musculares, com limites de segurança automáticos.",
  },
  {
    step: "03",
    title: "Acompanha o teu progresso",
    desc: "A app mostra dados de recuperação, mobilidade e sono. Vê o que mudou, semana a semana.",
  },
];

const HowItWorksSection = () => (
  <section id="como-funciona" className="py-24 md:py-32">
    <div className="container max-w-4xl">
      <SectionHeading
        tag="3 Passos Simples"
        title="Como funciona"
        description="Sem rotinas extra. Sem disciplina. O STREX trabalha enquanto descansas."
      />

      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.step} className="relative text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
              <span className="font-display text-2xl font-bold text-primary">{s.step}</span>
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
