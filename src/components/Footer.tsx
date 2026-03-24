import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/50 bg-background py-16">
    <div className="container">
      <div className="grid gap-12 md:grid-cols-4">
        <div>
          <h3 className="font-display text-xl font-bold tracking-wider text-foreground mb-4">
            <span className="text-gradient-cyan">⚡</span> STREX
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            O primeiro exosuit têxtil que te alonga enquanto dormes. Sleep tech, recovery e performance de elite.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Produto</h4>
          <div className="flex flex-col gap-2">
            <Link to="/como-funciona" className="text-sm text-muted-foreground hover:text-primary transition-colors">Como Funciona</Link>
            <Link to="/produto" className="text-sm text-muted-foreground hover:text-primary transition-colors">STREX Core</Link>
            <Link to="/app" className="text-sm text-muted-foreground hover:text-primary transition-colors">App & Subscrição</Link>
            <Link to="/ciencia" className="text-sm text-muted-foreground hover:text-primary transition-colors">Ciência</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Comunidade</h4>
          <div className="flex flex-col gap-2">
            <Link to="/para-quem" className="text-sm text-muted-foreground hover:text-primary transition-colors">Para Quem</Link>
            <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link>
            <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Contacto</h4>
          <div className="flex flex-col gap-2">
            <Link to="/contacto" className="text-sm text-muted-foreground hover:text-primary transition-colors">Falar Connosco</Link>
            <a href="mailto:hello@strex.tech" className="text-sm text-muted-foreground hover:text-primary transition-colors">hello@strex.tech</a>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-border/50 pt-8 text-center">
        <p className="text-xs text-muted-foreground">© 2026 STREX. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
