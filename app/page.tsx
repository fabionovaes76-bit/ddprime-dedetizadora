import Image from "next/image";
import Link from "next/link";
import {
  Award,
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
  [Bug, "Dedetização", "Controle de baratas, formigas, aranhas, pulgas e outras pragas."],
  [Rat, "Desratização", "Controle de ratos, camundongos e outros roedores."],
  [Sparkles, "Descupinização", "Tratamento para cupins de madeira seca e subterrâneos."],
  [ShieldCheck, "Controle de escorpiões", "Tratamento direcionado e orientação preventiva."],
  [Bug, "Controle de formigas", "Controle de colônias e prevenção de novas infestações."],
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

      <section id="inicio" className="hero py-14 text-white md:py-20">
        <div className="hero-city" />
        <div className="container hero-inner grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[.14em] text-orange-300">
              Proteção completa
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              Soluções eficazes contra pragas urbanas.
              <span className="block text-orange-400">
                Ambientes protegidos, famílias seguras.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              Atendimento 24 horas em Campo Grande-MS e região. Soluções para
              residências, empresas e condomínios com orçamento direto pelo WhatsApp.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn btn-orange" href="/orcamento">
                Solicitar orçamento
              </Link>
              <a className="btn btn-green" href="https://wa.me/5567981086008">
                <MessageCircle size={19} /> Falar no WhatsApp
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-sm font-black text-slate-200">
              <span className="inline-flex items-center gap-2"><Phone size={17} /> (67) 98108-6008</span>
              <span className="inline-flex items-center gap-2"><Clock3 size={17} /> Atendimento 24h</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} /> Orçamento sem compromisso</span>
            </div>
          </div>

          <div className="hero-graphic">
            <div className="ring ring-a" />
            <div className="ring ring-b" />
            <div className="shield-wrap shield-wrap-clean">
              <Image
                src="/escudo-ddprime-definitiva.png"
                alt="Escudo DD Prime Dedetizadora"
                width={620}
                height={560}
                priority
                className="mx-auto h-auto w-full max-w-[445px] object-contain drop-shadow-[0_30px_35px_rgba(0,0,0,0.44)]"
              />
            </div>

            <div className="hero-pests">
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

      <div className="container trust-panel">
        <div className="trust-grid">
          {[
            [ShieldCheck, "Produtos adequados", "Aplicação conforme cada ambiente"],
            [Award, "Atendimento técnico", "Avaliação responsável"],
            [CheckCircle2, "Garantia do serviço", "Conforme as condições contratadas"],
            [Clock3, "Atendimento rápido", "Contato 24 horas"],
          ].map(([I, title, text]) => {
            const Icon = I as typeof Clock3;
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

      <section id="servicos" className="section">
        <div className="container">
          <div className="text-center">
            <p className="kicker">Nossos serviços</p>
            <h2 className="title">Soluções completas para cada necessidade</h2>
          </div>

          <div className="service-cards-five mt-10">
            {services.map(([I, title, text]) => {
              const Icon = I as typeof Bug;
              return (
                <article className="service-card-five" key={String(title)}>
                  <div className="service-icon"><Icon size={30} /></div>
                  <h3 className="mt-5 text-lg font-black text-[#071c31]">{String(title)}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{String(text)}</p>
                  <Link className="mt-5 inline-flex rounded-lg border border-orange-500 px-4 py-2 text-sm font-black text-orange-600" href="/orcamento">
                    Saiba mais
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="diferenciais" className="section bg-[#fff8f2]">
        <div className="container">
          <div className="dark-panel overflow-hidden">
            <div className="grid items-stretch lg:grid-cols-[.95fr_1.35fr]">
              <div className="shield-side p-8">
                <Image
                  src="/escudo-ddprime-definitiva.png"
                  alt="Escudo DD Prime"
                  width={420}
                  height={400}
                  className="mx-auto h-auto w-full max-w-[320px] object-contain"
                />
              </div>

              <div className="p-8">
                <p className="text-sm font-black uppercase tracking-[.14em] text-orange-300">
                  Por que escolher a DD Prime?
                </p>
                <h2 className="mt-3 text-3xl font-black">Atendimento para diferentes ambientes</h2>
                <div className="mt-7 grid gap-3 text-slate-100 sm:grid-cols-2">
                  {[
                    "Atendimento residencial, comercial e empresarial",
                    "Avaliação adequada para cada tipo de ocorrência",
                    "Orientação clara antes e depois do serviço",
                    "Equipamentos e métodos profissionais",
                    "Planos personalizados conforme a necessidade",
                    "Atendimento em Campo Grande-MS e região",
                  ].map((item) => (
                    <div className="flex gap-3" key={item}>
                      <CheckCircle2 className="mt-1 text-orange-400" size={19} />
                      <span className="leading-7">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {[
                    [Home, "Residências"],
                    [Building2, "Empresas"],
                    [Building2, "Condomínios"],
                    [Building2, "Comércios"],
                  ].map(([I, label]) => {
                    const Icon = I as typeof Home;
                    return (
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center" key={String(label)}>
                        <Icon className="mx-auto text-orange-400" size={28} />
                        <div className="mt-3 text-sm font-black">{String(label)}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="section">
        <div className="container">
          <div className="text-center">
            <p className="kicker">Como funciona</p>
            <h2 className="title">Um atendimento simples em quatro etapas</h2>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-4">
            {[
              [MessageCircle, "Solicite o orçamento", "Fale pelo WhatsApp ou formulário."],
              [CalendarCheck, "Agendamento", "Combinamos o melhor horário."],
              [Zap, "Execução", "Realizamos o tratamento recomendado."],
              [ShieldCheck, "Orientação", "Explicamos os cuidados após o serviço."],
            ].map(([I, title, text], index) => {
              const Icon = I as typeof MessageCircle;
              return (
                <div className="process-card" key={String(title)}>
                  <div className="process-number">{index + 1}</div>
                  <div className="process-icon"><Icon size={24} /></div>
                  <h3 className="mt-5 font-black text-[#071c31]">{String(title)}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{String(text)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="avaliacoes" className="section bg-slate-50">
        <div className="container">
          <div className="text-center">
            <p className="kicker">Avaliações</p>
            <h2 className="title">Compartilhe sua experiência</h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["Atendimento", "Conte como foi o contato e a execução do serviço."],
              ["Confiança", "Sua avaliação ajuda outros clientes a conhecerem a DD Prime."],
              ["Qualidade", "Compartilhe sua opinião sobre o resultado e a orientação recebida."],
            ].map(([title, text]) => (
              <article className="review-card" key={title}>
                <div className="text-amber-400">★★★★★</div>
                <h3 className="mt-4 text-lg font-black text-[#071c31]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a href="https://g.page/r/CWHLPzas78KlEBM/review" className="btn btn-orange">
              <Star size={18} /> Avaliar no Google
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <article className="dark-panel p-8">
            <p className="text-sm font-black uppercase tracking-[.14em] text-orange-300">Área atendida</p>
            <h2 className="mt-3 text-3xl font-black">Campo Grande-MS e região</h2>
            <p className="mt-4 leading-7 text-slate-200">
              Atendimento residencial, comercial, empresarial e condominial.
            </p>
            <div className="mt-7 grid gap-3 text-sm text-slate-100 sm:grid-cols-2">
              {["Campo Grande-MS", "Vila Ieda", "Centro", "Tiradentes", "Carandá Bosque", "Demais bairros"].map((item) => (
                <div className="flex items-center gap-2" key={item}>
                  <CheckCircle2 className="text-green-400" size={17} />
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="quote-panel-large p-8">
            <p className="kicker">Orçamento rápido</p>
            <h2 className="mt-3 text-3xl font-black text-[#071c31]">Fale com a DD Prime</h2>
            <p className="mt-3 text-slate-600">Preencha os dados e envie tudo organizado pelo WhatsApp.</p>
            <div className="mt-6"><QuoteForm /></div>
          </article>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
