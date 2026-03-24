import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const posts = [
  { category: "Biohacking", title: "Porque é que os biohackers estão obcecados com mobilidade passiva", date: "Mar 2026" },
  { category: "Sono", title: "O papel do sono na recuperação muscular: o que a ciência diz", date: "Mar 2026" },
  { category: "Mobilidade", title: "Alongamento ativo vs. passivo: qual funciona melhor?", date: "Fev 2026" },
  { category: "Bastidores", title: "Do protótipo ao MVP: 12 meses de desenvolvimento STREX", date: "Fev 2026" },
  { category: "Performance", title: "Como atletas de elite integram recovery no sono", date: "Jan 2026" },
  { category: "Sono", title: "Optimizar as 8 horas: a próxima fronteira do biohacking", date: "Jan 2026" },
];

const filters = ["Todos", "Biohacking", "Sono", "Mobilidade", "Bastidores", "Performance"];

const Blog = () => (
  <Layout>
    <section className="py-24 md:py-32">
      <div className="container">
        <SectionHeading tag="Blog" title="Insights STREX." description="Ciência, performance e bastidores do desenvolvimento." />
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {filters.map((f) => (
            <button key={f} className="rounded-full border border-border/50 bg-card px-4 py-1.5 text-xs font-display font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors">
              {f}
            </button>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group rounded-2xl border border-border/50 bg-card overflow-hidden hover:border-primary/40 transition-colors cursor-pointer">
              <div className="h-40 bg-muted flex items-center justify-center">
                <span className="text-3xl opacity-20">📝</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-display font-medium text-primary">{post.category}</span>
                  <span className="text-xs text-muted-foreground">• {post.date}</span>
                </div>
                <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">{post.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
