import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes("type=recovery")) {
      setReady(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.updateUser({ password });
    if (error) setError(error.message);
    else navigate("/");
    setLoading(false);
  };

  if (!ready) {
    return (
      <Layout>
        <section className="min-h-screen flex items-center justify-center">
          <p className="text-muted-foreground">Link inválido ou expirado.</p>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="w-full max-w-md mx-auto">
          <div className="rounded-2xl border border-border/50 bg-card p-8">
            <h1 className="font-display text-2xl font-bold text-foreground text-center mb-6">
              Nova Password
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Nova password"
                className="h-12 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              {error && <p className="text-sm text-red-400">{error}</p>}
              <Button type="submit" size="lg" disabled={loading} className="glow-cyan font-display font-semibold">
                {loading ? "A guardar..." : "Guardar Password"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResetPassword;
