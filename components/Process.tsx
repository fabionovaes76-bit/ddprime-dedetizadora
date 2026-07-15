import {
  ClipboardCheck,
  MessageCircle,
  ShieldCheck,
  Zap,
} from "lucide-react";

const items = [
  [MessageCircle, "Contato", "Fale conosco pelo WhatsApp ou telefone."],
  [ClipboardCheck, "Avaliação", "Entendemos a necessidade e indicamos a solução."],
  [Zap, "Execução", "Aplicação profissional conforme o serviço contratado."],
  [ShieldCheck, "Proteção", "Orientação e acompanhamento após o atendimento."],
];

export default function Process() {
  return (
    <section id="como-funciona" className="section process-premium-section">
      <div className="container">
        <div className="process-premium-panel">
          <div className="text-center">
            <p className="eyebrow">Como funciona</p>
            <h2 className="process-premium-title">
              Atendimento simples, rápido e organizado
            </h2>
          </div>

          <div className="process-grid process-grid-final mt-10">
            {items.map(([IconRef, title, text], index) => {
              const Icon = IconRef as typeof MessageCircle;
              return (
                <article className="process-card process-card-final" key={String(title)}>
                  <div className="step-number">{index + 1}</div>
                  <div className="process-icon"><Icon size={25} /></div>
                  <h3>{String(title)}</h3>
                  <p>{String(text)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
