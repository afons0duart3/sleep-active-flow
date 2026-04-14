import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MidCTASection = () => (
  <section className="py-16">
    <div className="container text-center">
      <p className="text-muted-foreground text-sm mb-4">Queres experimentar?</p>
      <Link to="/contacto">
        <Button size="lg" className="glow-cyan font-display font-semibold px-8">
          Entrar na Lista de Espera
        </Button>
      </Link>
    </div>
  </section>
);

export default MidCTASection;
