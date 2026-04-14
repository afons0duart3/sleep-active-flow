import SectionHeading from "@/components/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "É seguro dormir com o fato?", a: "Sim. O sistema tem limites de força automáticos e monitoriza em tempo real. Se detectar resistência excessiva, para imediatamente." },
  { q: "Dói ou causa desconforto?", a: "Não. As micro-trações são suaves e progressivas, desenhadas para não causar despertares nem desconforto." },
  { q: "Posso usar todas as noites?", a: "Sim. O fato foi desenhado para uso contínuo, com materiais respiráveis e laváveis." },
  { q: "E se a bateria acabar a meio da noite?", a: "O fato fica simplesmente inativo — como roupa normal. Sem qualquer risco." },
  { q: "Funciona sem subscrição?", a: "Sim. O modo básico funciona sem subscrição. O STREX+ adiciona programas avançados e analytics." },
];

const HomeFAQSection = () => (
  <section className="py-24 md:py-32">
    <div className="container max-w-2xl">
      <SectionHeading
        tag="Dúvidas Frequentes"
        title="Perguntas comuns"
      />

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border border-border/50 rounded-xl px-6 bg-card">
            <AccordionTrigger className="text-sm font-display font-semibold text-foreground hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default HomeFAQSection;
