import SectionHeading from "@/components/SectionHeading";

const segments = [
  {
    title: "Biohackers",
    desc: "Otimizam sono, HRV e treino — mas faltava a peça da mobilidade passiva.",
  },
  {
    title: "Atletas",
    desc: "Recovery é tão importante como treino. STREX adiciona mobilidade sem roubar tempo.",
  },
  {
    title: "Profissionais com dor crónica",
    desc: "Horas sentados, lombar presa. Uma rotina noturna que alivia sem esforço.",
  },
];

const ForWhoSection = () => (
  <section className="py-24 md:py-32">
    <div className="container max-w-4xl">
      <SectionHeading
        tag="Para Quem"
        title="Quem beneficia mais"
      />

      <div className="grid gap-6 md:grid-cols-3">
        {segments.map((s) => (
          <div key={s.title} className="rounded-2xl border border-border/50 bg-card p-6 text-center">
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ForWhoSection;
