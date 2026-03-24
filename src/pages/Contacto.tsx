import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Contacto = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container max-w-2xl">
          <SectionHeading
            tag="Contacto"
            title="Fala connosco."
            description="Early access, parcerias, investimento ou apenas curiosidade."
          />

          {!submitted ? (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="space-y-4 rounded-2xl border border-border/50 bg-card p-8"
            >
              <div>
                <label className="block text-sm font-display font-medium text-foreground mb-1.5">Nome</label>
                <input required className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
              <div>
                <label className="block text-sm font-display font-medium text-foreground mb-1.5">Email</label>
                <input required type="email" className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
              <div>
                <label className="block text-sm font-display font-medium text-foreground mb-1.5">Tipo de utilizador</label>
                <select className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option>Biohacker</option>
                  <option>Atleta</option>
                  <option>Clínica / Fisioterapia</option>
                  <option>Empresa</option>
                  <option>Investidor</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-display font-medium text-foreground mb-1.5">Mensagem</label>
                <textarea rows={4} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
              </div>
              <Button type="submit" size="lg" className="w-full glow-cyan font-display font-semibold">
                Enviar
              </Button>
            </form>
          ) : (
            <div className="rounded-2xl border border-primary/30 bg-primary/10 p-8 text-center">
              <p className="text-primary font-display font-semibold text-lg">✓ Mensagem enviada!</p>
              <p className="text-sm text-muted-foreground mt-2">Vamos responder em breve.</p>
            </div>
          )}

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              <span className="font-display font-semibold text-foreground">Investidores e parcerias:</span>{" "}
              <a href="mailto:invest@strex.tech" className="text-primary hover:underline">invest@strex.tech</a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
