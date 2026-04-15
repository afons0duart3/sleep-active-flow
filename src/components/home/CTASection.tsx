import { Button } from "@/components/ui/button";
import { useState } from "react";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-24 md:py-32 bg-gradient-section">
      <div className="container">
        <div className="relative mx-auto max-w-2xl rounded-3xl border border-primary/20 bg-card p-10 md:p-14 text-center overflow-hidden">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-40 w-80 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative z-10">
            <span className="inline-block mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary font-display">
              Acesso Antecipado · Vagas Limitadas
            </span>
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              Faz parte da comunidade fundadora.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-lg mx-auto">
              STREX é um sistema inteligente de recuperação e mobilidade durante o sono, com foco em conforto, personalização e performance. Garante o teu lugar.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="O teu email"
                  className="h-12 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 sm:w-72"
                />
                <Button type="submit" size="lg" className="glow-cyan font-display font-semibold">
                  Pedir Acesso Antecipado
                </Button>
              </form>
            ) : (
              <div className="mt-8 rounded-lg border border-primary/30 bg-primary/10 p-4">
                <p className="text-primary font-display font-semibold text-sm">✓ Estás na lista! Vamos contactar-te em breve.</p>
              </div>
            )}

            <p className="mt-4 text-xs text-muted-foreground/60">
              Early access com benefícios exclusivos para os primeiros membros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
