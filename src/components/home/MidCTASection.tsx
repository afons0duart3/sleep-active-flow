import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MidCTASection = () => (
  <section className="py-16">
    <div className="container text-center">
      <p className="text-muted-foreground text-sm mb-2 font-display">Curioso?</p>
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link to="/contacto">
          <Button size="lg" className="glow-cyan font-display font-semibold px-8">
            Entrar na Lista de Espera
          </Button>
        </Link>
        <Link to="/produto">
          <Button variant="outline" size="lg" className="font-display border-primary/30 text-foreground hover:bg-primary/10">
            Ver o Produto
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default MidCTASection;
