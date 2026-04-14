import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BarChart3, Target, Bell, Zap } from "lucide-react";

const features = [
  { icon: BarChart3, title: "Métricas úteis", desc: "Mobilidade, sono e recuperação num dashboard claro." },
  { icon: Target, title: "Progresso semanal", desc: "Vê a evolução real da tua amplitude e consistência." },
  { icon: Bell, title: "Alertas inteligentes", desc: "Recomendações baseadas nos teus dados e padrões." },
  { icon: Zap, title: "Planos personalizados", desc: "Protocolos adaptados ao teu objetivo e zona do corpo." },
];

const AppPreviewSection = () => (
  <section className="py-24 md:py-32">
    <div className="container max-w-5xl">
      <SectionHeading
        tag="App & Dados"
        title="Acompanha tudo na app STREX+"
        description="Sem a app, o fato funciona em modo básico. Com STREX+, tens coaching digital contínuo."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border border-border/50 bg-card p-6 text-center transition-all hover:border-primary/30">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
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
            Ver planos e funcionalidades
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default AppPreviewSection;
