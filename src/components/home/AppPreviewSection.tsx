import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BarChart3, Target, Bell, Zap, MapPin, Calendar } from "lucide-react";

const features = [
  { icon: BarChart3, title: "Progresso de mobilidade", desc: "Vê como a tua amplitude evolui ao longo das semanas." },
  { icon: Target, title: "Qualidade de recuperação", desc: "Score diário baseado em dados reais do teu corpo." },
  { icon: MapPin, title: "Mapa corporal de tensão", desc: "Identifica zonas com mais rigidez e acompanha a melhoria." },
  { icon: Bell, title: "Sugestões personalizadas", desc: "Recomendações automáticas baseadas nos teus padrões." },
  { icon: Calendar, title: "Rotina recomendada", desc: "Planos semanais adaptados aos teus objetivos." },
  { icon: Zap, title: "Insights semanais", desc: "Relatórios claros sobre o que mudou e o que melhorar." },
];

const AppPreviewSection = () => (
  <section className="py-24 md:py-32 bg-gradient-section">
    <div className="container max-w-5xl">
      <SectionHeading
        tag="O Cérebro da Experiência"
        title="A app STREX+ não é extra. É essencial."
        description="Sem a app, o fato funciona. Com a app, tens um sistema inteligente que aprende contigo."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <f.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-display text-sm font-semibold text-foreground mb-1">{f.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link to="/app">
          <Button variant="outline" className="font-display border-primary/30 text-foreground hover:bg-primary/10">
            Explorar a App
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default AppPreviewSection;
