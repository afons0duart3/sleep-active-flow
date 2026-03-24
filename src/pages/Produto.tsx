import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import strexCloset from "@/assets/strex-closet.jpeg";
import strexSuit from "@/assets/strex-suit.jpeg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cable, Gauge, Wind, BatteryFull } from "lucide-react";

const features = [
  { icon: Cable, title: "Cabos têxteis de alta resistência", desc: "Em cadeia posterior completa, dos pés aos ombros." },
  { icon: Gauge, title: "Load cells para feedback", desc: "Força em tempo real, com limites de segurança automáticos." },
  { icon: Wind, title: "Têxtil respirável", desc: "Desenhado para 8h de uso contínuo e confortável." },
  { icon: BatteryFull, title: "Módulo eletrónico discreto", desc: "Bateria para uma noite completa, carregamento rápido." },
];

const specs = [
  ["Composição", "Tecido técnico respirável + cabos têxteis"],
  ["Peso aprox.", "~450g (sem módulo)"],
  ["Bateria", "8-10h de uso contínuo"],
  ["Zonas ativas (MVP)", "Lombar + Cadeia Posterior"],
  ["Tamanhos", "S / M / L / XL (ajuste personalizado)"],
  ["Conectividade", "Bluetooth 5.2 + Wi-Fi"],
];

const Produto = () => (
  <Layout>
    <section className="py-24 md:py-32">
      <div className="container">
        <SectionHeading tag="Produto" title="STREX Core" description="Exosuit têxtil para alongamento passivo noturno." />
        <div className="mx-auto max-w-4xl">
          <img src={strexCloset} alt="STREX Core no armário" className="rounded-2xl border border-border/30 w-full" />
        </div>
      </div>
    </section>

    <section className="py-24 md:py-32 bg-gradient-section">
      <div className="container">
        <SectionHeading tag="Features" title="Engenharia de detalhe." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border/50 bg-card p-6 hover:border-primary/40 transition-colors">
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
        <SectionHeading tag="Especificações" title="Specs técnicos." />
        <div className="rounded-2xl border border-border/50 bg-card overflow-hidden">
          {specs.map(([label, value], i) => (
            <div key={label} className={`flex justify-between p-4 text-sm ${i < specs.length - 1 ? "border-b border-border/50" : ""}`}>
              <span className="font-display font-medium text-foreground">{label}</span>
              <span className="text-muted-foreground text-right">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 md:py-32 bg-gradient-section">
      <div className="container text-center max-w-2xl">
        <SectionHeading
          tag="Early Adopters"
          title="Produção limitada. Suporte direto."
          description="Produto de early adopters, produzido em pequenos batches, com suporte direto da equipa STREX."
        />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contacto"><Button size="lg" className="glow-cyan font-display font-semibold">Falar com a equipa</Button></Link>
          <Link to="/contacto"><Button variant="outline" size="lg" className="font-display border-primary/30 text-foreground hover:bg-primary/10">Receber info de preço</Button></Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Produto;
