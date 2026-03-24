import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import strexAngles from "@/assets/strex-angles.jpeg";
import { Layers, Cpu, Shield, Activity, Watch } from "lucide-react";

const ComoFunciona = () => (
  <Layout>
    {/* Overview */}
    <section className="py-24 md:py-32">
      <div className="container">
        <SectionHeading
          tag="Sistema STREX"
          title="Três camadas. Um sistema integrado."
          description="STREX aplica micro-trações passivas ao longo de cadeias musculares enquanto monitoriza força e tempo. No dia seguinte, a app traduz isso em mobilidade e recuperação."
        />
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {[
            { icon: Layers, title: "Corpo", desc: "As tuas cadeias musculares e articulações como base." },
            { icon: Cpu, title: "Exosuit STREX", desc: "Cabos, atuadores e sensores integrados no tecido." },
            { icon: Activity, title: "App & Cloud", desc: "Analytics, protocolos e integrações com wearables." },
          ].map((item) => (
            <div key={item.title} className="text-center rounded-2xl border border-border/50 bg-card p-8">
              <item.icon className="mx-auto mb-4 h-8 w-8 text-primary" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Mechanics */}
    <section className="py-24 md:py-32 bg-gradient-section">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <SectionHeading tag="Mecânica" title="Engenharia no tecido." center={false} />
            <div className="space-y-4">
              {[
                { icon: Shield, title: "Cabos têxteis de alta resistência", desc: "Percorrem as cadeias musculares lombar, posterior e ombros." },
                { icon: Cpu, title: "Micro-atuadores discretos", desc: "Aplicam trações suaves e controladas durante o sono." },
                { icon: Activity, title: "Load cells para feedback", desc: "Medem força em tempo real, garantindo limites de segurança." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 rounded-lg border border-border/50 bg-card/50 p-4">
                  <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h4 className="font-display text-sm font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img src={strexAngles} alt="STREX múltiplos ângulos" className="rounded-2xl border border-border/30" />
        </div>
      </div>
    </section>

    {/* Sleep session timeline */}
    <section className="py-24 md:py-32">
      <div className="container max-w-4xl">
        <SectionHeading
          tag="Sessão Noturna"
          title="8 horas. Minutos terapêuticos."
          description="O foco não é alongar a noite toda, mas somar minutos de dose terapêutica sem ocupares tempo acordado."
        />
        <div className="relative rounded-2xl border border-border/50 bg-card p-8">
          <div className="flex justify-between text-xs text-muted-foreground font-display mb-4">
            <span>23:00</span><span>01:00</span><span>03:00</span><span>05:00</span><span>07:00</span>
          </div>
          <div className="h-4 rounded-full bg-muted overflow-hidden flex">
            <div className="w-[15%] bg-muted-foreground/20 rounded-l-full" />
            <div className="w-[5%] bg-primary/60" />
            <div className="w-[20%] bg-muted-foreground/20" />
            <div className="w-[5%] bg-primary/60" />
            <div className="w-[25%] bg-muted-foreground/20" />
            <div className="w-[5%] bg-primary/60" />
            <div className="w-[25%] bg-muted-foreground/20 rounded-r-full" />
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="h-3 w-3 rounded-full bg-muted-foreground/20" /> Sono profundo
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="h-3 w-3 rounded-full bg-primary/60" /> Micro-trações ativas
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Integrations */}
    <section className="py-24 md:py-32 bg-gradient-section">
      <div className="container text-center">
        <SectionHeading
          tag="Integrações"
          title="Liga-se ao teu ecossistema."
          description="Importa o teu sono e treino, devolve-te insights sobre mobilidade e recovery."
        />
        <div className="flex flex-wrap justify-center gap-6">
          {["Apple Health", "Google Fit", "Oura Ring", "Whoop", "Garmin"].map((name) => (
            <div key={name} className="flex items-center gap-2 rounded-full border border-border/50 bg-card px-6 py-3">
              <Watch className="h-4 w-4 text-primary" />
              <span className="text-sm font-display font-medium text-foreground">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default ComoFunciona;
