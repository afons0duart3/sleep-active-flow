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
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="relative mx-auto max-w-3xl rounded-3xl border border-primary/30 bg-card p-10 md:p-16 text-center overflow-hidden">
          {/* Glow effect */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-40 w-80 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative z-10">
            <span className="inline-block mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary font-display">
              Produção Limitada
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Entra na lista STREX Core.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Primeira produção limitada. Garante o teu acesso antes de todos.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="O teu email"
                  className="h-12 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 sm:w-80"
                />
                <Button type="submit" size="lg" className="glow-cyan font-display font-semibold">
                  Entrar na lista
                </Button>
              </form>
            ) : (
              <div className="mt-8 rounded-lg border border-primary/30 bg-primary/10 p-4">
                <p className="text-primary font-display font-semibold">✓ Estás na lista! Vamos contactar-te em breve.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
