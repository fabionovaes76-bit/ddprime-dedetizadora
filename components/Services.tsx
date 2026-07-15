import Link from "next/link";
import {
  Bug,
  Building2,
  Droplets,
  Rat,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const services = [
  [Bug, "Dedetização", "Controle de baratas, formigas, aranhas, pulgas e outras pragas urbanas."],
  [Rat, "Desratização", "Controle e prevenção de ratos, camundongos e outros roedores."],
  [ShieldCheck, "Controle de escorpiões", "Tratamento direcionado e orientação preventiva para o ambiente."],
  [Sparkles, "Descupinização", "Tratamento para cupins de madeira seca e cupins subterrâneos."],
  [Droplets, "Limpeza de caixa d’água", "Limpeza e higienização para manter a água armazenada em boas condições."],
  [Building2, "Planos empresariais", "Atendimento periódico para empresas, comércios e condomínios."],
];

export default function Services() {
  return (
    <section id="servicos" className="section services services-premium">
      <div className="container">
        <div className="text-center">
          <p className="eyebrow">Nossos serviços</p>
          <h2 className="heading services-heading">
            Soluções completas para cada necessidade
          </h2>
          <p className="lead services-lead mx-auto mt-5 max-w-3xl">
            Atendimento profissional para residências, apartamentos,
            empresas, comércios e condomínios em Campo Grande-MS.
          </p>
        </div>

        <div className="service-grid service-grid-premium mt-12">
          {services.map(([IconRef, title, text], index) => {
            const Icon = IconRef as typeof Bug;

            return (
              <article className="service-card service-card-premium" key={String(title)}>
                <div className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="service-icon service-icon-premium">
                  <Icon size={32} />
                </div>
                <h3>{String(title)}</h3>
                <p>{String(text)}</p>
                <Link href="/orcamento">Solicitar avaliação →</Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
