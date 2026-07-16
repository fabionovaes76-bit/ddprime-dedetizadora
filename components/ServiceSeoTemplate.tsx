import Link from "next/link";
import Script from "next/script";
import { CheckCircle2, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

type FAQ = { question: string; answer: string };
type ServiceSeoTemplateProps = {
  title: string;
  shortTitle: string;
  slug: string;
  description: string;
  intro: string;
  problems: string[];
  benefits: string[];
  process: { title: string; text: string }[];
  faqs: FAQ[];
  related?: { label: string; href: string }[];
};

const whatsapp = "https://wa.me/5567981086008?text=Olá%2C%20vim%20pelo%20site%20da%20DD%20Prime%20e%20quero%20solicitar%20uma%20avaliação.";

export default function ServiceSeoTemplate(props: ServiceSeoTemplateProps) {
  const pageUrl = `https://ddprimededetizadora.com.br/${props.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: props.shortTitle,
        serviceType: props.shortTitle,
        description: props.description,
        url: pageUrl,
        provider: {
          "@type": "LocalBusiness",
          name: "DD Prime Dedetizadora",
          telephone: "+55 67 98108-6008",
          url: "https://ddprimededetizadora.com.br",
          areaServed: { "@type": "City", name: "Campo Grande" },
        },
        areaServed: { "@type": "City", name: "Campo Grande", containedInPlace: { "@type": "State", name: "Mato Grosso do Sul" } },
      },
      {
        "@type": "FAQPage",
        mainEntity: props.faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: "https://ddprimededetizadora.com.br/" },
          { "@type": "ListItem", position: 2, name: "Serviços", item: "https://ddprimededetizadora.com.br/servicos" },
          { "@type": "ListItem", position: 3, name: props.shortTitle, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <section className="seo-service-hero">
          <div className="container seo-service-hero-grid">
            <div>
              <nav className="pillar-breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Início</Link><span>/</span><Link href="/servicos">Serviços</Link><span>/</span><strong>{props.shortTitle}</strong>
              </nav>
              <div className="pillar-badge"><MapPin size={17} /> Atendimento em Campo Grande-MS</div>
              <h1>{props.title}</h1>
              <p>{props.intro}</p>
              <div className="pillar-actions">
                <a className="btn btn-primary" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={20}/> Solicitar avaliação</a>
                <Link className="btn btn-outline" href="/orcamento">Pedir orçamento</Link>
              </div>
              <div className="pillar-trust-row"><span><ShieldCheck size={18}/> Empresa licenciada</span><span><CheckCircle2 size={18}/> Produtos registrados</span><span><Phone size={18}/> Atendimento rápido</span></div>
            </div>
            <aside className="pillar-summary-card">
              <ShieldCheck className="pillar-summary-icon" size={48}/>
              <p className="eyebrow">PLANO PERSONALIZADO</p>
              <h2>Diagnóstico antes da aplicação</h2>
              <p>O tratamento é definido conforme a praga, os pontos de abrigo, o tipo de ambiente e o nível da ocorrência.</p>
              <ul>{props.problems.slice(0,4).map((item)=><li key={item}><CheckCircle2 size={17}/>{item}</li>)}</ul>
              <a className="btn btn-primary" href={whatsapp} target="_blank" rel="noreferrer">Falar no WhatsApp</a>
            </aside>
          </div>
        </section>

        <section className="section pillar-content-section">
          <div className="container pillar-two-columns">
            <article className="pillar-article">
              <p className="eyebrow">ATENDIMENTO TÉCNICO</p>
              <h2>{props.shortTitle} com planejamento e orientação</h2>
              <p>{props.description}</p>
              <p>A DD Prime atende residências, comércios, empresas, condomínios e outros ambientes em Campo Grande-MS. Cada serviço começa com a análise da ocorrência e termina com orientações práticas para reduzir condições que favorecem o retorno das pragas.</p>
              <p>O objetivo é aplicar a técnica adequada com segurança, organização e comunicação clara. O cliente recebe orientação sobre preparação do ambiente, cuidados durante o serviço e retorno seguro ao local.</p>
            </article>
            <aside className="pillar-warning-card">
              <ShieldCheck size={34}/><h3>Sinais que merecem atenção</h3>
              <ul>{props.problems.map((item)=><li key={item}>{item}</li>)}</ul>
            </aside>
          </div>
        </section>

        <section className="section pillar-process-section">
          <div className="container">
            <header className="pillar-section-heading"><p className="eyebrow">COMO FUNCIONA</p><h2>Etapas do atendimento</h2><p>Um processo simples, transparente e adaptado ao ambiente.</p></header>
            <div className="pillar-steps">{props.process.map((step,index)=><article className="pillar-step" key={step.title}><span>{index+1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
          </div>
        </section>

        <section className="section pillar-benefits-section">
          <div className="container">
            <header className="pillar-section-heading"><p className="eyebrow">DIFERENCIAIS</p><h2>Por que escolher a DD Prime</h2></header>
            <div className="pillar-benefit-grid">{props.benefits.map((item)=><article className="pillar-benefit-card" key={item}><div><CheckCircle2/></div><h3>{item}</h3><p>Atendimento conduzido com análise do ambiente, orientação ao cliente e foco em prevenção.</p></article>)}</div>
          </div>
        </section>

        <section className="section pillar-local-section">
          <div className="container pillar-two-columns local-columns">
            <article className="pillar-article"><p className="eyebrow">SEO LOCAL</p><h2>Atendimento em Campo Grande-MS e região</h2><p>Atendemos diferentes bairros e regiões de Campo Grande, incluindo Centro, Tiradentes, Moreninhas, Universitário, Jardim dos Estados, Coronel Antonino, São Francisco e áreas próximas, conforme disponibilidade de agenda.</p><p>Para confirmar atendimento na sua região, informe o bairro, o tipo de imóvel e a praga observada pelo WhatsApp.</p></article>
            <aside className="pillar-local-card"><MapPin size={38}/><h3>Solicite uma avaliação</h3><p>Envie fotos e informações do ambiente para agilizar o atendimento.</p><a className="btn btn-primary" href={whatsapp} target="_blank" rel="noreferrer">Falar com a DD Prime</a></aside>
          </div>
        </section>

        <section className="section pillar-faq-section">
          <div className="container pillar-faq-layout">
            <div className="pillar-faq-intro"><p className="eyebrow">PERGUNTAS FREQUENTES</p><h2>Dúvidas sobre {props.shortTitle.toLowerCase()}</h2><p>Informações gerais. A orientação específica depende da avaliação de cada ambiente.</p></div>
            <div className="pillar-faq-list">{props.faqs.map((faq)=><details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
          </div>
        </section>

        {props.related?.length ? <section className="section seo-related"><div className="container"><h2>Conheça outros serviços</h2><div className="seo-related-grid">{props.related.map((item)=><Link href={item.href} key={item.href}>{item.label}<span>→</span></Link>)}</div></div></section> : null}

        <section className="pillar-final-cta"><div className="container pillar-final-cta-inner"><div><p className="eyebrow">DD PRIME DEDETIZADORA</p><h2>Precisa de atendimento em Campo Grande-MS?</h2><p>Fale com nossa equipe e receba orientação para o seu ambiente.</p></div><div className="pillar-final-actions"><a className="btn btn-primary" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><Link className="btn btn-outline" href="/orcamento">Solicitar orçamento</Link></div></div></section>
      </main>
      <Footer />
      <WhatsAppButton />
      <Script id={`schema-${props.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
