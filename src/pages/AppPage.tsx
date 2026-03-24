import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Target, TrendingUp, Watch, RefreshCw } from "lucide-react";

const features = [
  { icon: Target, title: "Programas por objetivo", desc: "Lombar, hip opening, ombros, recovery pós-treino." },
  { icon: TrendingUp, title: "Insights e relatórios", desc: "Minutos de tração, evolução de amplitude, consistência." },
  { icon: Watch, title: "Integrações wearables", desc: "Sincroniza com Oura, Whoop, Apple Health e mais." },
  { icon: RefreshCw, title: "Atualizações contínuas", desc: "Firmware e novos protocolos entregues automaticamente." },
];

const AppPage = () => (
  <Layout>
    <section className="py-24 md:py-32">
      <div className="container">
        <SectionHeading
          tag="App & Subscrição"
          title="STREX+ — o cérebro do teu exosuit."
          description="O fato funciona com modos básicos. A subscrição STREX+ adiciona programas avançados, analytics e integrações."
        />
        {/* Mock app dashboard */}
        <div className="mx-auto max-w-3xl rounded-2xl border border-border/50 bg-card p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-3 w-3 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm font-display font-medium text-foreground">Dashboard STREX+</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-muted p-4 text-center">
              <p className="text-2xl font-display font-bold text-primary">47 min</p>
              <p className="text-xs text-muted-foreground mt-1">Tração esta noite</p>
            </div>
            <div className="rounded-lg bg-muted p-4 text-center">
              <p className="text-2xl font-display font-bold text-primary">+12%</p>
              <p className="text-xs text-muted-foreground mt-1">Amplitude lombar</p>
            </div>
            <div className="rounded-lg bg-muted p-4 text-center">
              <p className="text-2xl font-display font-bold text-primary">92</p>
              <p className="text-xs text-muted-foreground mt-1">Recovery Score</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 md:py-32 bg-gradient-section">
      <div className="container">
        <SectionHeading tag="O que inclui" title="Mais do que um app." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border/50 bg-card p-6">
              <f.icon className="mb-3 h-6 w-6 text-primary" />
              <h3 className="font-display text-sm font-semibold text-foreground mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 md:py-32">
      <div className="container max-w-3xl">
        <SectionHeading tag="Modelo" title="Transparência total." description="Podes usar o STREX em modo básico sem subscrição. STREX+ é para quem quer coaching digital contínuo." />
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { plan: "Básico", price: "Incluído", features: ["Modos manuais", "Dados básicos", "Sem subscrição"] },
            { plan: "STREX+ Mensal", price: "—/mês", features: ["Programas avançados", "Analytics completos", "Integrações"], highlight: true },
            { plan: "STREX+ Anual", price: "—/ano", features: ["Tudo incluído", "2 meses grátis", "Suporte prioritário"] },
          ].map((p) => (
            <div key={p.plan} className={`rounded-2xl border p-6 ${p.highlight ? "border-primary/50 bg-primary/5" : "border-border/50 bg-card"}`}>
              <h3 className="font-display text-lg font-semibold text-foreground">{p.plan}</h3>
              <p className="text-xl font-display font-bold text-primary mt-2">{p.price}</p>
              <ul className="mt-4 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="text-primary">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default AppPage;
