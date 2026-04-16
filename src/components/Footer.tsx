import { Link } from "react-router-dom";
import strexLogo from "@/assets/strex-logo-clean.png";

const Footer = () => (
  <footer className="border-t border-border/50 bg-background py-16">
    <div className="container">
      <div className="grid gap-12 md:grid-cols-4">
        <div>
          <Link to="/" className="inline-block mb-4">
            <img src={strexLogo} alt="STREX" className="h-12 w-auto" />
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Fato inteligente que melhora recuperação e mobilidade enquanto dormes.
          </p>

          <h4 className="font-display text-sm font-semibold text-foreground mt-6 mb-3 uppercase tracking-wider">Redes Sociais</h4>
          <div className="flex gap-3">
            <a href="https://www.instagram.com/strex.suit/" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-card text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors" aria-label="Instagram">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61572233772035" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-card text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors" aria-label="Facebook">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
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
