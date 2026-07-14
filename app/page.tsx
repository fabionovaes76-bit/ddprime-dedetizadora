import Link from "next/link";
import {
  Bug,
  Building2,
  CheckCircle2,
  Clock3,
  Home,
  MessageCircle,
  Rat,
  ShieldCheck,
  Sparkles,
  Star,
  Phone,
  MapPin,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const services = [
  [Bug, "Dedetização", "Controle de baratas, formigas, aranhas e outras pragas urbanas."],
  [Sparkles, "Descupinização", "Tratamento para cupins de madeira seca e subterrâneos."],
  [Rat, "Desratização", "Inspeção, controle, iscagem e monitoramento de roedores."],
  [ShieldCheck, "Controle de escorpiões", "Tratamento direcionado e orientação preventiva."],
  [Building2, "Empresas", "Planos periódicos para comércios, restaurantes e empresas."],
  [Home, "Residências e condomínios", "Proteção para casas, apartamentos e áreas comuns."],
];

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "DD Prime Dedetizadora",
    url: "https://ddprimededetizadora.com.br",
    telephone: "+55-67-98108-6008",
    email: "ddprimededetizadora@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Marcelino Pires, 237 - Vila Ieda",
      addressLocality: "Campo Grande",
      addressRegion: "MS",
      postalCode: "79050-570",
      addressCountry: "BR",
    },
    openingHours: "Mo-Su 00:00-23:59",
    areaServed: "Campo Grande - MS",
  };

  return (
    <main>
      <Header />

      <section className="hero py-16 text-white md:py-24">
        <div className="container hero-content grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
              <MapPin size={16} /> Atendimento em Campo Grande-MS
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              Proteção completa contra pragas urbanas.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              Atendimento 24 horas para residências, empresas e condomínios,
              com avaliação responsável, orientação clara e orçamento direto
              pelo WhatsApp.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/orcamento" className="btn btn-primary">
                Solicitar orçamento
              </Link>
              <a
                href="https://wa.me/5567981086008?text=Olá%2C%20gostaria%20de%20solicitar%20um%20orçamento."
                className="btn btn-outline"
              >
                <MessageCircle size={19} /> Falar no WhatsApp
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-black text-slate-200">
              <span>✓ Atendimento 24 horas</span>
              <span>✓ Orçamento sem compromisso</span>
              <span>✓ Residencial e empresarial</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Escudo de proteção contra pragas">
            <div className="orbit one" />
            <div className="orbit two" />
            <div className="shield-card">
              <div className="pest-chip c1">🐀</div>
              <div className="pest-chip c2">🦂</div>
              <div className="pest-chip c3">🐜</div>
              <div className="pest-chip c4">🪳</div>
              <div className="shield" />
              <div className="mt-6 text-center">
                <p className="text-xl font-black">DD PRIME</p>
                <p className="mt-1 text-sm font-bold text-slate-200">
                  Segurança, confiança e compromisso
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-grid">
          {[
            [Clock3, "Atendimento 24h", "Todos os dias"],
            [ShieldCheck, "Garantia", "Conforme o serviço"],
            [CheckCircle2, "Atendimento local", "Campo Grande-MS"],
            [MessageCircle, "Contato rápido", "Direto pelo WhatsApp"],
          ].map(([Icon, title, text]) => {
            const Component = Icon as typeof Clock3;
            return (
              <div className="trust-item" key={String(title)}>
                <div className="icon-box"><Component size={24} /></div>
                <div>
                  <div className="font-black text-[#0b2035]">{String(title)}</div>
                  <div className="mt-1 text-sm text-slate-500">{String(text)}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="servicos" className="section bg-[#fff8f2]">
        <div className="container">
          <p className="kicker">Nossos serviços</p>
          <h2 className="heading">Soluções para diferentes tipos de ambiente</h2>
          <p className="subheading mt-5 max-w-3xl">
            Atendimento para residências, empresas, restaurantes, condomínios e
            outros espaços que precisam de controle profissional de pragas.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(([Icon, title, text]) => {
              const Component = Icon as typeof Bug;
              return (
                <article key={String(title)} className="card p-6">
                  <div className="icon-box"><Component size={24} /></div>
                  <h3 className="mt-5 text-xl font-black text-[#0b2035]">
                    {String(title)}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">{String(text)}</p>
                  <Link
                    href="/orcamento"
                    className="mt-5 inline-block font-black text-[#f27022]"
                  >
                    Solicitar avaliação →
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="diferenciais" className="section">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <p className="kicker">Por que escolher a DD Prime?</p>
            <h2 className="heading">Atendimento profissional, claro e eficiente</h2>
            <p className="subheading mt-5 text-lg">
              A DD Prime analisa o ambiente, explica os cuidados necessários e
              recomenda uma solução adequada para cada ocorrência.
            </p>
            <a
              href="https://g.page/r/CWHLPzas78KlEBM/review"
              className="btn btn-dark mt-7"
            >
              <Star size={19} /> Avaliar no Google
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [Clock3, "Agilidade", "Contato rápido e agendamento objetivo."],
              [ShieldCheck, "Segurança", "Procedimentos adequados para cada ambiente."],
              [CheckCircle2, "Organização", "Orientação antes e depois do serviço."],
              [MessageCircle, "Comunicação", "Atendimento direto pelo WhatsApp."],
            ].map(([Icon, title, text]) => {
              const Component = Icon as typeof Clock3;
              return (
                <div key={String(title)} className="card p-5">
                  <div className="icon-box"><Component size={23} /></div>
                  <h3 className="mt-4 font-black text-[#0b2035]">{String(title)}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{String(text)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="section bg-slate-50">
        <div className="container">
          <p className="kicker">Como funciona</p>
          <h2 className="heading">Um atendimento simples em quatro etapas</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {[
              ["1", "Solicite o orçamento", "Envie as informações pelo WhatsApp."],
              ["2", "Avaliação", "Entendemos o tipo de praga e o ambiente."],
              ["3", "Execução", "Realizamos o tratamento recomendado."],
              ["4", "Orientação", "Explicamos os cuidados após o serviço."],
            ].map(([number, title, text]) => (
              <div key={number} className="card p-6">
                <div className="step-number">{number}</div>
                <h3 className="mt-5 text-lg font-black text-[#0b2035]">{title}</h3>
                <p className="mt-2 leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta py-16 text-white">
        <div className="container flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[.16em] text-orange-300">
              Orçamento rápido
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Está com problemas com pragas?
            </h2>
            <p className="mt-3 text-slate-200">
              Fale agora com a DD Prime pelo WhatsApp.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/5567981086008?text=Olá%2C%20gostaria%20de%20solicitar%20um%20orçamento."
              className="btn btn-primary"
            >
              <MessageCircle size={20} /> WhatsApp
            </a>
            <a href="tel:+5567981086008" className="btn btn-outline">
              <Phone size={20} /> Ligar agora
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </main>
  );
}
