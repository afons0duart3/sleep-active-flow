import SectionHeading from "@/components/SectionHeading";
import { Quote } from "lucide-react";

const testimonials = [
  { name: "João M.", role: "Atleta Semi-Pro", text: "Acordei com uma sensação de mobilidade que normalmente só consigo depois de 30 minutos de alongamento." },
  { name: "Ana R.", role: "Biohacker", text: "Integra-se perfeitamente na minha rotina de sono. Zero fricção, dados reais." },
  { name: "Dr. Carlos S.", role: "Fisioterapeuta", text: "O conceito de dose terapêutica passiva durante o sono é revolucionário para recovery." },
];

const SocialProofSection = () => (
  <section className="py-24 md:py-32">
    <div className="container">
      <SectionHeading
        tag="Early Adopters"
        title="Desenhado com quem vive performance."
        description="Biohackers, atletas e especialistas em fisioterapia."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="rounded-2xl border border-border/50 bg-card p-8"
          >
            <Quote className="mb-4 h-5 w-5 text-primary/40" />
            <p className="text-sm text-secondary-foreground leading-relaxed mb-6">"{t.text}"</p>
            <div>
              <p className="font-display text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Partners placeholder */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-30">
        {["Lab Innovation", "SportTech Hub", "Sleep Clinic", "Uni Research"].map((p) => (
          <span key={p} className="font-display text-sm font-semibold tracking-wider text-foreground uppercase">{p}</span>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
