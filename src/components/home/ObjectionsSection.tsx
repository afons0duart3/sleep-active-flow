import SectionHeading from "@/components/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const objections = [
  { q: "Isto é confortável?", a: "Sim. O fato é feito de têxtil respirável e leve, desenhado para 8h de uso contínuo. Sem fios soltos, sem peças rígidas." },
  { q: "É seguro usar durante o sono?", a: "Totalmente. O sistema tem limites de força automáticos, sensores em tempo real e para imediatamente se detectar resistência excessiva." },
  { q: "Funciona para qualquer pessoa?", a: "Sim. O sistema adapta-se ao perfil, historial e objetivos de cada utilizador. Começa suave e evolui progressivamente." },
  { q: "Preciso de configurar tudo manualmente?", a: "Não. Vestes o fato, deitas-te e o sistema faz o resto. A app permite ajustes, mas não são obrigatórios." },
  { q: "O fato substitui alongamentos tradicionais?", a: "Complementa. Se já fazes alongamentos, a STREX adiciona consistência e volume durante o sono. Se não fazes, é o teu ponto de partida automático." },
  { q: "Como sei se está a resultar?", a: "A app mostra dados de mobilidade, recuperação e evolução semanal. Vês a diferença nos números e sentes no corpo." },
  { q: "E se a bateria acabar durante a noite?", a: "O fato fica simplesmente inativo — como roupa normal. Zero risco." },
  { q: "Funciona sem subscrição?", a: "Sim. O modo básico funciona sem subscrição. O STREX+ adiciona programas avançados, mapa corporal e insights personalizados." },
];

const ObjectionsSection = () => (
  <section className="py-24 md:py-32">
    <div className="container max-w-2xl">
      <SectionHeading
        tag="Dúvidas Honestas"
        title="Perguntas que toda a gente faz"
        description="Respondemos sem rodeios."
      />

      <Accordion type="single" collapsible className="space-y-3">
        {objections.map((obj, i) => (
          <AccordionItem key={i} value={`obj-${i}`} className="border border-border/50 rounded-xl px-6 bg-card">
            <AccordionTrigger className="text-sm font-display font-semibold text-foreground hover:no-underline">
              {obj.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
              {obj.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default ObjectionsSection;
