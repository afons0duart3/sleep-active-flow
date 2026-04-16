import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search, LogIn, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import strexLogo from "@/assets/strex-logo-clean.png";

const navLinks = [
  { label: "Produto", path: "/produto" },
  { label: "Ciência", path: "/ciencia" },
  { label: "FAQ", path: "/faq" },
  { label: "Contacto", path: "/contacto" },
];

const searchablePages = [
  { label: "Início", path: "/", keywords: "home início hero benefícios" },
  { label: "Produto & Como Funciona", path: "/produto", keywords: "produto como funciona exosuit fato specs features mecânica integrações" },
  { label: "Ciência", path: "/ciencia", keywords: "ciência estudos investigação evidência" },
  { label: "FAQ", path: "/faq", keywords: "perguntas frequentes faq dúvidas segurança" },
  { label: "Contacto", path: "/contacto", keywords: "contacto email lista espera" },
  { label: "App", path: "/app", keywords: "app aplicação dados métricas" },
  { label: "Para Quem", path: "/para-quem", keywords: "atletas biohackers fisioterapia clínica" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { user, signOut } = useAuth();

  const results = query.trim()
    ? searchablePages.filter(
        (p) =>
          p.label.toLowerCase().includes(query.toLowerCase()) ||
          p.keywords.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const goTo = (path: string) => {
    navigate(path);
    setSearchOpen(false);
    setQuery("");
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between lg:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={strexLogo} alt="STREX" className="h-10 lg:h-14 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === l.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}

          {/* Social icons */}
          <div className="flex items-center gap-2 ml-1">
            <a href="https://www.instagram.com/strex.suit/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61572233772035" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>

          {/* Search */}
          <div className="relative ml-2" ref={searchRef}>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-muted-foreground hover:text-primary transition-colors p-1.5 rounded-md hover:bg-accent"
              aria-label="Pesquisar"
            >
              <Search className="h-4 w-4" />
            </button>
            {searchOpen && (
              <div className="absolute right-0 top-10 w-72 rounded-xl border border-border/50 bg-background/95 backdrop-blur-xl shadow-2xl overflow-hidden animate-fade-in">
                <div className="flex items-center gap-2 border-b border-border/50 px-3 py-2">
                  <Search className="h-4 w-4 text-muted-foreground shrink-0" />
                  <input
                    ref={inputRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Pesquisar no site..."
                    className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && results.length > 0) goTo(results[0].path);
                      if (e.key === "Escape") { setSearchOpen(false); setQuery(""); }
                    }}
                  />
                </div>
                {query.trim() && (
                  <div className="py-1">
                    {results.length > 0 ? (
                      results.map((r) => (
                        <button
                          key={r.path}
                          onClick={() => goTo(r.path)}
                          className="w-full text-left px-4 py-2.5 text-sm text-foreground hover:bg-accent transition-colors"
                        >
                          {r.label}
                        </button>
                      ))
                    ) : (
                      <p className="px-4 py-3 text-sm text-muted-foreground">Sem resultados</p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="hidden lg:block">
          {user ? (
            <Button variant="outline" size="sm" className="font-display font-semibold border-primary/30" onClick={signOut}>
              <LogOut className="h-4 w-4 mr-1.5" />
              Sair
            </Button>
          ) : (
            <Link to="/auth">
              <Button variant="default" size="sm" className="glow-cyan font-display font-semibold">
                <LogIn className="h-4 w-4 mr-1.5" />
                Login
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl animate-fade-in">
          <div className="container flex flex-col gap-4 py-6">
            {/* Mobile search */}
            <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-card px-3 py-2 mb-2">
              <Search className="h-4 w-4 text-muted-foreground shrink-0" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Pesquisar..."
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && results.length > 0) goTo(results[0].path);
                }}
              />
            </div>
            {query.trim() && results.length > 0 && (
              <div className="rounded-lg border border-border/50 bg-card overflow-hidden mb-2">
                {results.map((r) => (
                  <button key={r.path} onClick={() => goTo(r.path)} className="w-full text-left px-4 py-2.5 text-sm text-foreground hover:bg-accent transition-colors">
                    {r.label}
                  </button>
                ))}
              </div>
            )}
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === l.path ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            {user ? (
              <Button variant="outline" size="sm" className="w-full font-display font-semibold border-primary/30 mt-2" onClick={() => { signOut(); setOpen(false); }}>
                <LogOut className="h-4 w-4 mr-1.5" />
                Sair
              </Button>
            ) : (
              <Link to="/auth" onClick={() => setOpen(false)}>
                <Button variant="default" size="sm" className="w-full glow-cyan font-display font-semibold mt-2">
                  <LogIn className="h-4 w-4 mr-1.5" />
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
