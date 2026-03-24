import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqGroups = [
  {
    category: "Segurança",
    items: [
      { q: "É seguro dormir com o fato?", a: "Sim. O STREX aplica trações de intensidade muito baixa, com limites de segurança automáticos controlados por sensores de força. Os ciclos são lentos e suaves." },
      { q: "O que acontece se eu me mexer muito?", a: "O sistema deteta movimento e pausa automaticamente as trações, retomando quando detetar estabilidade." },
    ],
  },
  {
    category: "Conforto e Uso",
    items: [
      { q: "Posso lavar o fato?", a: "Sim. O módulo eletrónico é removível. O tecido pode ser lavado à máquina em programa delicado." },
      { q: "Sente-se quente?", a: "O tecido é altamente respirável, desenhado para 8h de uso contínuo mesmo em climas temperados." },
      { q: "Quanto pesa?", a: "Aproximadamente 450g sem o módulo eletrónico. Leve e confortável como loungewear." },
    ],
  },
  {
    category: "Tecnologia",
    items: [
      { q: "E se a bateria acabar a meio da noite?", a: "O fato simplesmente deixa de aplicar trações — como se vestisses roupa normal. Sem risco." },
      { q: "Funciona sem telemóvel?", a: "Sim, em modos básicos pré-configurados. O telemóvel é necessário para personalização e analytics." },
    ],
  },
  {
    category: "Subscrição",
    items: [
      { q: "O fato deixa de funcionar se cancelar a subscrição?", a: "Não. Os modos básicos continuam a funcionar. A subscrição STREX+ adiciona programas avançados e analytics." },
    ],
  },
];

const FAQ = () => (
  <Layout>
    <section className="py-24 md:py-32">
      <div className="container max-w-3xl">
        <SectionHeading tag="FAQ" title="Perguntas frequentes." />
        <div className="space-y-8">
          {faqGroups.map((group) => (
            <div key={group.category}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary mb-4">{group.category}</h3>
              <Accordion type="single" collapsible className="space-y-2">
                {group.items.map((item, i) => (
                  <AccordionItem key={i} value={`${group.category}-${i}`} className="rounded-lg border border-border/50 bg-card px-4">
                    <AccordionTrigger className="text-sm font-display font-medium text-foreground hover:no-underline">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default FAQ;
