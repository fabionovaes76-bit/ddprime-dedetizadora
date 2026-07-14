import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BadgeCheck,
  Bug,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Home,
  MapPin,
  MessageCircle,
  Phone,
  Rat,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import WhatsAppButton from "@/components/WhatsAppButton";

const services = [
  [Bug, "Dedetização", "Controle de baratas, formigas, aranhas, pulgas e outras pragas urbanas."],
  [Rat, "Desratização", "Controle de ratos, camundongos e outros roedores."],
  [Sparkles, "Descupinização", "Tratamento para cupins de madeira seca e subterrâneos."],
  [ShieldCheck, "Controle de escorpiões", "Tratamento direcionado e orientação preventiva."],
  [Bug, "Controle de formigas", "Controle de colônias e prevenção de novas infestações."],
  [Building2, "Planos empresariais", "Atendimento periódico para empresas, comércios e condomínios."],
];

const reviews = [
  ["Atendimento excelente", "Equipe atenciosa, serviço organizado e retorno rápido."],
  ["Serviço profissional", "Recebi orientação clara antes e depois do atendimento."],
  ["Recomendo a DD Prime", "Contato rápido pelo WhatsApp e atendimento muito cuidadoso."],
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
      streetAddress: "Rua Marcelino Pires, 237",
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

      <section id="inicio" className="hero premium-hero text-white">
        <div className="hero-city" />
        <div className="premium-glow premium-glow-a" />
        <div className="premium-glow premium-glow-b" />

        <div className="container hero-inner grid min-h-[760px] items-center gap-12 py-16 lg:grid-cols-2">
          <div className="reveal-up">
            <span className="premium-pill">
              <BadgeCheck size={17} /> Controle profissional de pragas em Campo Grande-MS
            </span>

            <p className="mt-7 text-sm font-black uppercase tracking-[.16em] text-orange-300">
              Proteção completa 24 horas
            </p>

            <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl xl:text-7xl">
              Ambientes protegidos.
              <span className="block text-orange-400">Famílias mais seguras.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Dedetização, descupinização, desratização e controle de escorpiões
              para residências, empresas e condomínios, com atendimento direto pelo WhatsApp.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn btn-orange premium-btn" href="/orcamento">
                Solicitar orçamento
              </Link>
              <a className="btn btn-green premium-btn" href="https://wa.me/5567981086008">
                <MessageCircle size={19} /> Falar no WhatsApp
              </a>
            </div>

            <div className="premium-stats mt-9">
              <div><strong>24h</strong><span>Atendimento</span></div>
              <div><strong>100%</strong><span>Contato direto</span></div>
              <div><strong>6+</strong><span>Soluções</span></div>
            </div>
          </div>

          <div className="hero-graphic reveal-scale">
            <div className="ring ring-a" />
            <div className="ring ring-b" />
            <div className="ring ring-c" />

            <div className="shield-wrap shield-wrap-clean premium-shield">
              <Image
                src="/escudo-ddprime-definitiva.png"
                alt="Escudo DD Prime Dedetizadora"
                width={680}
                height={620}
                priority
                className="mx-auto h-auto w-full max-w-[500px] object-contain"
              />
            </div>

            <div className="hero-pests premium-pests">
              {[
                ["🪳", "Baratas"],
                ["🦂", "Escorpiões"],
                ["🐀", "Ratos"],
                ["🐜", "Cupins"],
                ["🐜", "Formigas"],
              ].map(([icon, label]) => (
                <div className="hero-pest" key={label}>
                  <span>{icon}</span>
                  <strong>{label}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container trust-panel premium-trust-panel">
        <div className="trust-grid">
          {[
            [Clock3, "Atendimento 24 horas", "Todos os dias"],
            [ShieldCheck, "Serviço responsável", "Orientação em cada etapa"],
            [Award, "Garantia do serviço", "Conforme contratação"],
            [Building2, "Residencial e empresarial", "Soluções por ambiente"],
          ].map(([IconRef, title, text]) => {
            const Icon = IconRef as typeof Clock3;
            return (
              <div className="trust" key={String(title)}>
                <div className="iconbox"><Icon size={24} /></div>
                <div>
                  <div className="font-black text-[#071c31]">{String(title)}</div>
                  <div className="mt-1 text-sm text-slate-500">{String(text)}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <section id="servicos" className="section premium-section">
        <div className="container">
          <div className="text-center">
            <p className="kicker">Serviços DD Prime</p>
            <h2 className="title">Soluções profissionais para cada necessidade</h2>
            <p className="subtitle mx-auto mt-5 max-w-3xl">
              Atendimento para casas, apartamentos, comércios, empresas,
              restaurantes, condomínios e outros ambientes.
            </p>
          </div>

          <div className="premium-service-grid mt-12">
            {services.map(([IconRef, title, text]) => {
              const Icon = IconRef as typeof Bug;
              return (
                <article className="premium-service-card" key={String(title)}>
                  <div className="premium-service-top">
                    <div className="service-icon"><Icon size={30} /></div>
                    <span className="premium-tag">Atendimento profissional</span>
                  </div>
                  <h3 className="mt-6 text-xl font-black text-[#071c31]">{String(title)}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{String(text)}</p>
                  <Link className="premium-link mt-6" href="/orcamento">
                    Solicitar avaliação →
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="diferenciais" className="section bg-[#fff8f2]">
        <div className="container">
          <div className="premium-dark-card">
            <div className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
              <div className="premium-shield-side">
                <Image
                  src="/escudo-ddprime-definitiva.png"
                  alt="Escudo DD Prime"
                  width={480}
                  height={440}
                  className="mx-auto h-auto w-full max-w-[360px] object-contain"
                />
              </div>

              <div className="p-8 md:p-12">
                <p className="text-sm font-black uppercase tracking-[.14em] text-orange-300">
                  Por que escolher a DD Prime?
                </p>
                <h2 className="mt-3 text-3xl font-black md:text-4xl">
                  Atendimento moderno, organizado e focado em segurança
                </h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    [Zap, "Resposta rápida", "Contato direto para agilizar o atendimento."],
                    [ShieldCheck, "Orientação clara", "Informações antes e depois do serviço."],
                    [BadgeCheck, "Equipe preparada", "Atendimento responsável para cada ambiente."],
                    [Building2, "Planos personalizados", "Soluções residenciais e empresariais."],
                  ].map(([IconRef, title, text]) => {
                    const Icon = IconRef as typeof Zap;
                    return (
                      <div className="premium-diff-card" key={String(title)}>
                        <Icon className="text-orange-400" size={28} />
                        <h3 className="mt-4 font-black">{String(title)}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{String(text)}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="section premium-process-section">
        <div className="container">
          <div className="text-center">
            <p className="kicker">Como funciona</p>
            <h2 className="title">Do primeiro contato à orientação final</h2>
          </div>

          <div className="premium-process mt-12">
            {[
              [MessageCircle, "Solicite o orçamento", "Envie os detalhes pelo WhatsApp."],
              [CalendarCheck, "Agendamento", "Combinamos o melhor dia e horário."],
              [Zap, "Execução", "Realizamos o tratamento recomendado."],
              [ShieldCheck, "Orientação final", "Explicamos os cuidados posteriores."],
            ].map(([IconRef, title, text], index) => {
              const Icon = IconRef as typeof MessageCircle;
              return (
                <article className="premium-process-card" key={String(title)}>
                  <div className="process-number">{index + 1}</div>
                  <div className="process-icon"><Icon size={24} /></div>
                  <h3 className="mt-5 text-lg font-black text-[#071c31]">{String(title)}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{String(text)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="avaliacoes" className="section bg-slate-50">
        <div className="container">
          <div className="text-center">
            <p className="kicker">Confiança</p>
            <h2 className="title">O que valorizamos em cada atendimento</h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {reviews.map(([title, text]) => (
              <article className="premium-review-card" key={title}>
                <div className="text-amber-400">★★★★★</div>
                <h3 className="mt-5 text-xl font-black text-[#071c31]">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-9 text-center">
            <a href="https://g.page/r/CWHLPzas78KlEBM/review" className="btn btn-orange">
              <Star size={18} /> Avaliar no Google
            </a>
          </div>
        </div>
      </section>

      <section className="section premium-contact-section">
        <div className="container grid gap-7 lg:grid-cols-[.9fr_1.1fr]">
          <article className="premium-map-card">
            <p className="text-sm font-black uppercase tracking-[.14em] text-orange-300">
              Área atendida
            </p>
            <h2 className="mt-3 text-3xl font-black">Campo Grande-MS e região</h2>
            <p className="mt-4 leading-7 text-slate-200">
              Atendimento para residências, empresas, condomínios e comércios.
            </p>

            <div className="mt-8 grid gap-3 text-sm sm:grid-cols-2">
              {["Campo Grande-MS", "Vila Ieda", "Centro", "Tiradentes", "Carandá Bosque", "Demais bairros"].map((item) => (
                <div className="flex items-center gap-2" key={item}>
                  <CheckCircle2 className="text-green-400" size={17} />
                  {item}
                </div>
              ))}
            </div>

            <div className="premium-map-visual mt-8">
              <MapPin className="text-orange-400" size={54} />
              <strong>Campo Grande-MS</strong>
            </div>
          </article>

          <article className="premium-quote-card">
            <p className="kicker">Orçamento rápido</p>
            <h2 className="mt-3 text-3xl font-black text-[#071c31]">Fale com a DD Prime</h2>
            <p className="mt-3 text-slate-600">
              Preencha os dados e envie as informações diretamente para o WhatsApp.
            </p>
            <div className="mt-7"><QuoteForm /></div>
          </article>
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
