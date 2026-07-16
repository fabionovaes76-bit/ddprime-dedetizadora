import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock3,
  Home,
  MapPin,
  MessageCircle,
  PawPrint,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const pageUrl = "https://ddprimededetizadora.com.br/dedetizacao-campo-grande-ms";

export const metadata: Metadata = {
  title: "Dedetização em Campo Grande-MS | DD Prime",
  description:
    "Serviço profissional de dedetização em Campo Grande-MS para residências, empresas e condomínios. Controle de baratas, formigas, aranhas e outras pragas urbanas. Solicite uma avaliação.",
  keywords: [
    "dedetização em Campo Grande",
    "dedetizadora em Campo Grande MS",
    "controle de pragas Campo Grande",
    "dedetização residencial Campo Grande",
    "dedetização comercial Campo Grande",
    "controle de baratas Campo Grande",
    "DD Prime Dedetizadora",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Dedetização em Campo Grande-MS | DD Prime",
    description:
      "Proteção profissional contra pragas urbanas para residências, empresas e condomínios em Campo Grande-MS.",
    url: pageUrl,
    siteName: "DD Prime Dedetizadora",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "DD Prime Dedetizadora em Campo Grande-MS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dedetização em Campo Grande-MS | DD Prime",
    description:
      "Controle profissional de pragas urbanas em Campo Grande-MS.",
    images: ["/logo.png"],
  },
};

const faqs = [
  {
    question: "Quanto custa uma dedetização em Campo Grande-MS?",
    answer:
      "O valor depende do tamanho e das características do imóvel, da praga identificada, do nível da infestação e do tipo de tratamento indicado. A DD Prime avalia essas informações antes de apresentar o orçamento.",
  },
  {
    question: "Quanto tempo é necessário ficar fora do imóvel?",
    answer:
      "O período de afastamento varia conforme o produto, a técnica e o ambiente. Antes do serviço, a equipe informa os cuidados necessários e orienta o momento seguro para retorno de pessoas e animais.",
  },
  {
    question: "A dedetização atende casas, empresas e condomínios?",
    answer:
      "Sim. O atendimento pode ser realizado em residências, apartamentos, comércios, empresas, áreas comuns de condomínios e outros ambientes, com planejamento conforme cada local.",
  },
  {
    question: "A dedetização ajuda no controle de baratas e formigas?",
    answer:
      "Sim. O tratamento pode ser direcionado para baratas, formigas, aranhas, pulgas e outras pragas urbanas, de acordo com a identificação do problema e as condições do imóvel.",
  },
  {
    question: "Como preparar o ambiente antes do serviço?",
    answer:
      "As orientações variam conforme o tratamento. Em geral, é importante facilitar o acesso aos locais críticos, proteger alimentos e utensílios e seguir as instruções enviadas pela equipe antes da aplicação.",
  },
  {
    question: "A DD Prime oferece atendimento pelo WhatsApp?",
    answer:
      "Sim. Você pode enviar pelo WhatsApp informações sobre o imóvel, a praga observada, o bairro e, quando necessário, imagens para facilitar a avaliação inicial.",
  },
];

const benefits = [
  [ShieldCheck, "Tratamento direcionado", "A solução é escolhida conforme a praga, o ambiente e o nível da ocorrência."],
  [BadgeCheck, "Orientações claras", "Você recebe instruções de preparação, afastamento e cuidados após o serviço."],
  [Home, "Residencial", "Atendimento para casas, apartamentos e áreas externas de imóveis residenciais."],
  [Building2, "Comercial e condominial", "Soluções para empresas, comércios, condomínios e áreas de circulação."],
  [PawPrint, "Famílias com animais", "Orientação específica para o afastamento e o retorno seguro dos pets."],
  [Clock3, "Contato rápido", "Solicitação de avaliação e orçamento diretamente pelo WhatsApp."],
];

const steps = [
  ["1", "Contato inicial", "Você informa o tipo de imóvel, o bairro e os sinais de infestação observados."],
  ["2", "Avaliação da necessidade", "A equipe analisa o cenário e define a técnica mais adequada para o ambiente."],
  ["3", "Preparação e agendamento", "Você recebe as orientações necessárias e escolhe a melhor data para o atendimento."],
  ["4", "Execução do serviço", "O tratamento é realizado nos pontos estratégicos, conforme o planejamento definido."],
  ["5", "Cuidados posteriores", "A DD Prime explica o retorno ao ambiente e as medidas preventivas recomendadas."],
];

export default function DedetizacaoCampoGrandePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Dedetização em Campo Grande-MS",
    serviceType: "Dedetização e controle de pragas urbanas",
    url: pageUrl,
    description:
      "Serviço de dedetização para residências, empresas e condomínios em Campo Grande-MS.",
    provider: {
      "@type": "LocalBusiness",
      name: "DD Prime Dedetizadora",
      url: "https://ddprimededetizadora.com.br",
      telephone: "+55-67-98108-6008",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Campo Grande",
        addressRegion: "MS",
        addressCountry: "BR",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Campo Grande",
      containedInPlace: {
        "@type": "State",
        name: "Mato Grosso do Sul",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: "https://ddprimededetizadora.com.br/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Serviços",
        item: "https://ddprimededetizadora.com.br/servicos",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Dedetização em Campo Grande-MS",
        item: pageUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main>
      <Header />

      <section className="pillar-hero">
        <div className="pillar-grid-overlay" />
        <div className="container pillar-hero-inner">
          <div className="pillar-copy">
            <nav className="pillar-breadcrumb" aria-label="Navegação estrutural">
              <Link href="/">Início</Link>
              <span>/</span>
              <Link href="/servicos">Serviços</Link>
              <span>/</span>
              <strong>Dedetização</strong>
            </nav>

            <span className="pillar-badge">
              <MapPin size={17} /> Atendimento em Campo Grande-MS
            </span>

            <h1>Dedetização profissional em Campo Grande-MS</h1>

            <p>
              Proteção planejada contra baratas, formigas, aranhas, pulgas e
              outras pragas urbanas para residências, empresas e condomínios.
              A DD Prime orienta cada etapa, da preparação do ambiente aos
              cuidados depois do serviço.
            </p>

            <div className="pillar-actions">
              <a
                className="btn btn-green"
                href="https://wa.me/5567981086008?text=Olá%2C%20gostaria%20de%20solicitar%20uma%20avaliação%20para%20dedetização%20em%20Campo%20Grande-MS."
              >
                <MessageCircle size={20} /> Solicitar avaliação pelo WhatsApp
              </a>
              <a className="btn btn-outline" href="tel:+5567981086008">
                Ligar: (67) 98108-6008
              </a>
            </div>

            <div className="pillar-trust-row">
              <span><CheckCircle2 size={17} /> Residências</span>
              <span><CheckCircle2 size={17} /> Empresas</span>
              <span><CheckCircle2 size={17} /> Condomínios</span>
            </div>
          </div>

          <aside className="pillar-summary-card">
            <div className="pillar-summary-icon"><ShieldCheck size={42} /></div>
            <p className="eyebrow">Avaliação personalizada</p>
            <h2>O tratamento certo para cada ambiente</h2>
            <p>
              Nem toda infestação exige a mesma aplicação. A técnica é
              definida conforme os sinais encontrados, o tipo de imóvel e os
              pontos de abrigo e acesso das pragas.
            </p>
            <ul>
              <li><CheckCircle2 size={17} /> Análise da ocorrência</li>
              <li><CheckCircle2 size={17} /> Orientação antes da aplicação</li>
              <li><CheckCircle2 size={17} /> Cuidados para o retorno ao ambiente</li>
            </ul>
            <Link className="btn btn-orange" href="/orcamento">
              Pedir orçamento
            </Link>
          </aside>
        </div>
      </section>

      <section className="pillar-nav-section">
        <div className="container pillar-jump-links">
          <a href="#quando-contratar">Quando contratar</a>
          <a href="#pragas-controladas">Pragas controladas</a>
          <a href="#como-funciona-servico">Como funciona</a>
          <a href="#diferenciais-pilar">Diferenciais</a>
          <a href="#faq-dedetizacao">Dúvidas frequentes</a>
        </div>
      </section>

      <section id="quando-contratar" className="section pillar-content-section">
        <div className="container pillar-two-columns">
          <article className="pillar-article">
            <p className="eyebrow">Controle de pragas urbanas</p>
            <h2 className="heading">Quando procurar uma dedetizadora em Campo Grande?</h2>
            <p>
              A presença frequente de insetos, trilhas de formigas, baratas
              durante o dia, teias em excesso, picadas recorrentes ou sinais de
              reprodução indicam que o problema pode estar além de uma aparição
              isolada. Nesses casos, somente eliminar o inseto visível costuma
              não ser suficiente, porque abrigos, ovos e rotas de acesso podem
              continuar ativos em locais escondidos.
            </p>
            <p>
              Uma dedetização profissional começa pela compreensão do ambiente.
              Cozinhas, banheiros, áreas de serviço, ralos, caixas de gordura,
              frestas, forros, depósitos e jardins apresentam riscos diferentes.
              Por isso, a escolha do produto, da forma de aplicação e dos pontos
              de tratamento deve considerar o imóvel e a espécie envolvida.
            </p>
            <p>
              A prevenção também é importante. Empresas, condomínios e imóveis
              com circulação intensa podem se beneficiar de inspeções e
              tratamentos periódicos, associados a medidas como vedação de
              acessos, organização de depósitos, manejo de resíduos e correção
              de fontes de água e alimento.
            </p>
          </article>

          <aside className="pillar-warning-card">
            <Sparkles size={34} />
            <h3>Sinais que merecem atenção</h3>
            <ul>
              <li>Baratas aparecendo durante o dia</li>
              <li>Formigas retornando após limpezas frequentes</li>
              <li>Ootecas, fezes ou resíduos em armários e cantos</li>
              <li>Insetos próximos a ralos e caixas de gordura</li>
              <li>Picadas ou presença de pulgas no ambiente</li>
              <li>Aranhas e teias em áreas pouco movimentadas</li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="pragas-controladas" className="section pillar-dark-section">
        <div className="container">
          <div className="pillar-section-heading">
            <p className="eyebrow">Atendimento direcionado</p>
            <h2>Principais pragas atendidas na dedetização</h2>
            <p>
              A indicação do tratamento depende da identificação da praga e das
              condições do imóvel. Veja alguns dos problemas mais comuns.
            </p>
          </div>

          <div className="pillar-pest-grid">
            {[
              ["🪳", "Baratas", "Tratamento de pontos de abrigo, passagem e alimentação, com orientações para reduzir novas ocorrências."],
              ["🐜", "Formigas", "Identificação de trilhas e possíveis colônias para um controle mais consistente do que a aplicação superficial."],
              ["🕷️", "Aranhas", "Atenção a frestas, depósitos, jardins, forros e locais com acúmulo de insetos que servem de alimento."],
              ["🦟", "Insetos rasteiros e voadores", "Avaliação do ambiente para definir medidas químicas, físicas e preventivas adequadas."],
              ["🐾", "Pulgas", "Tratamento associado a orientações sobre tecidos, frestas, áreas de descanso e cuidados com animais."],
              ["🏢", "Prevenção empresarial", "Planejamento periódico para reduzir riscos em comércios, empresas e áreas comuns."],
            ].map(([icon, title, text]) => (
              <article className="pillar-pest-card" key={title}>
                <span>{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona-servico" className="section pillar-process-section">
        <div className="container">
          <div className="pillar-section-heading light-heading">
            <p className="eyebrow">Do primeiro contato à orientação final</p>
            <h2>Como funciona o serviço de dedetização</h2>
          </div>
          <div className="pillar-steps">
            {steps.map(([number, title, text]) => (
              <article className="pillar-step" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="diferenciais-pilar" className="section pillar-benefits-section">
        <div className="container">
          <div className="pillar-section-heading">
            <p className="eyebrow">Por que escolher a DD Prime?</p>
            <h2>Atendimento organizado e comunicação clara</h2>
            <p>
              A qualidade do serviço também depende de uma boa orientação ao
              cliente. Por isso, cada etapa é explicada com objetividade.
            </p>
          </div>
          <div className="pillar-benefit-grid">
            {benefits.map(([IconRef, title, text]) => {
              const Icon = IconRef as typeof ShieldCheck;
              return (
                <article className="pillar-benefit-card" key={String(title)}>
                  <div><Icon size={28} /></div>
                  <h3>{String(title)}</h3>
                  <p>{String(text)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section pillar-local-section">
        <div className="container pillar-two-columns local-columns">
          <article className="pillar-article">
            <p className="eyebrow">SEO local e atendimento próximo</p>
            <h2 className="heading">Dedetização para diferentes regiões de Campo Grande-MS</h2>
            <p>
              A DD Prime atende clientes em Campo Grande-MS, considerando as
              características de cada imóvel e a necessidade apresentada. Ao
              solicitar uma avaliação, informe seu bairro, o tipo de ambiente e
              há quanto tempo percebe a presença das pragas.
            </p>
            <p>
              Essas informações ajudam a organizar o atendimento e a orientar
              os próximos passos. Imóveis residenciais, estabelecimentos
              comerciais e condomínios apresentam rotinas e riscos diferentes,
              por isso o planejamento deve ser compatível com o uso do local.
            </p>
          </article>
          <aside className="pillar-local-card">
            <MapPin size={38} />
            <h3>Atendimento em Campo Grande-MS</h3>
            <p>Envie pelo WhatsApp:</p>
            <ul>
              <li>Seu nome e bairro</li>
              <li>Tipo de imóvel</li>
              <li>Praga observada</li>
              <li>Locais onde ela aparece</li>
            </ul>
            <a className="btn btn-green" href="https://wa.me/5567981086008">
              Enviar informações
            </a>
          </aside>
        </div>
      </section>

      <section id="faq-dedetizacao" className="section pillar-faq-section">
        <div className="container pillar-faq-layout">
          <div className="pillar-faq-intro">
            <p className="eyebrow">Perguntas frequentes</p>
            <h2 className="heading">Dúvidas sobre dedetização</h2>
            <p className="lead">
              Reunimos respostas para as dúvidas mais comuns antes de contratar
              o serviço. A orientação específica é fornecida conforme o ambiente.
            </p>
          </div>
          <div className="pillar-faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pillar-final-cta">
        <div className="container pillar-final-cta-inner">
          <div>
            <p className="eyebrow">Solicite uma avaliação</p>
            <h2>Precisa de dedetização em Campo Grande-MS?</h2>
            <p>
              Fale com a DD Prime, explique o que está acontecendo e receba as
              orientações para o atendimento.
            </p>
          </div>
          <div className="pillar-final-actions">
            <a className="btn btn-green" href="https://wa.me/5567981086008">
              <MessageCircle size={20} /> Falar no WhatsApp
            </a>
            <Link className="btn btn-orange" href="/orcamento">
              Solicitar orçamento
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />

      <Script id="service-schema" type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </Script>
      <Script id="breadcrumb-schema-dedetizacao" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="faq-schema-dedetizacao" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
    </main>
  );
}
