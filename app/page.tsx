import Image from "next/image";
import Link from "next/link";
import {
  Bug, Building2, CheckCircle2, Clock3, Home, MapPin, MessageCircle,
  Phone, Rat, ShieldCheck, Sparkles, Star, Zap, ClipboardCheck,
  BadgeCheck, CalendarCheck, Award
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import WhatsAppButton from "@/components/WhatsAppButton";

const services = [
  [Bug,"Dedetização","Eliminação de baratas, formigas, aranhas, pulgas e outras pragas."],
  [Sparkles,"Descupinização","Tratamento para cupins de madeira seca, subterrâneos e arborícolas."],
  [ShieldCheck,"Controle de escorpiões","Planos preventivos e tratamento direcionado contra escorpiões."],
  [Rat,"Desratização","Controle de ratos, camundongos e outros roedores."],
  [Bug,"Controle de mosquitos","Ações contra mosquitos e outros insetos voadores."],
  [Building2,"Controle para empresas","Soluções para comércios, indústrias, escolas e restaurantes."],
  [Home,"Residências","Proteção para casas, apartamentos e famílias."],
  [Building2,"Condomínios","Planos para áreas comuns, jardins, garagens e apartamentos."]
];

export default function HomePage(){
  const schema = {
    "@context":"https://schema.org",
    "@type":"LocalBusiness",
    name:"DD Prime Dedetizadora",
    url:"https://ddprimededetizadora.com.br",
    telephone:"+55-67-98108-6008",
    email:"ddprimededetizadora@gmail.com",
    address:{
      "@type":"PostalAddress",
      streetAddress:"Rua Marcelino Pires, 237 - Vila Ieda",
      addressLocality:"Campo Grande",
      addressRegion:"MS",
      postalCode:"79050-570",
      addressCountry:"BR"
    },
    openingHours:"Mo-Su 00:00-23:59",
    areaServed:"Campo Grande - MS"
  };

  return(
    <main>
      <Header/>

      <section id="inicio" className="hero py-14 text-white md:py-20">
        <div className="hero-city"/>
        <div className="container hero-inner grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[.14em] text-orange-300">Proteção completa</p>
            <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              Soluções eficazes contra pragas.
              <span className="block text-orange-400">Ambientes protegidos, famílias seguras.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              Atendimento 24 horas em Campo Grande-MS e região. Soluções para residências, empresas e condomínios com orçamento direto pelo WhatsApp.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn btn-orange" href="/orcamento">Solicitar orçamento</Link>
              <a className="btn btn-green" href="https://wa.me/5567981086008"><MessageCircle size={19}/> Falar no WhatsApp</a>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-sm font-black text-slate-200">
              <span className="inline-flex items-center gap-2"><Phone size={17}/> (67) 98108-6008</span>
              <span className="inline-flex items-center gap-2"><Clock3 size={17}/> Atendimento 24h</span>
            </div>
          </div>

          <div className="hero-graphic">
            <div className="ring ring-a"/>
            <div className="ring ring-b"/>
            <div className="shield-wrap shield-wrap-clean">
              <Image
                src="/escudo-ddprime-final.png"
                alt="Escudo DD Prime Dedetizadora"
                width={610}
                height={560}
                priority
                className="mx-auto h-auto w-full max-w-[440px] object-contain drop-shadow-[0_30px_35px_rgba(0,0,0,0.44)]"
              />
            </div>

            <div className="hero-pests">
              {["Baratas","Escorpiões","Ratos","Cupins","Formigas"].map((item, i)=>(
                <div className="hero-pest" key={item}>
                  <span>{["🪳","🦂","🐀","🐜","🐜"][i]}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container trust-panel">
        <div className="trust-grid">
          {[
            [Clock3,"Atendimento 24 horas","Todos os dias"],
            [ShieldCheck,"Procedimentos adequados","Conforme cada ambiente"],
            [Award,"Garantia do serviço","Conforme condições contratadas"],
            [Building2,"Residencial e empresarial","Casas, empresas e condomínios"]
          ].map(([I,t,s])=>{
            const Icon=I as typeof Clock3;
            return <div className="trust" key={String(t)}>
              <div className="iconbox"><Icon size={24}/></div>
              <div><div className="font-black text-[#071c31]">{String(t)}</div><div className="mt-1 text-sm text-slate-500">{String(s)}</div></div>
            </div>
          })}
        </div>
      </div>

      <section id="servicos" className="section">
        <div className="container">
          <div className="text-center">
            <p className="kicker">Nossos serviços</p>
            <h2 className="title">Soluções completas para cada necessidade</h2>
          </div>

          <div className="service-grid mt-10">
            {services.map(([I,t,d])=>{
              const Icon=I as typeof Bug;
              return <article className="service-card" key={String(t)}>
                <div className="iconbox"><Icon size={24}/></div>
                <h3 className="mt-4 font-black text-[#071c31]">{String(t)}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{String(d)}</p>
                <Link className="mt-4 inline-block text-sm font-black text-orange-600" href="/orcamento">Saiba mais →</Link>
              </article>
            })}
          </div>
        </div>
      </section>

      <section id="diferenciais" className="section bg-[#fff8f2]">
        <div className="container">
          <div className="dark-panel overflow-hidden">
            <div className="grid lg:grid-cols-[1.1fr_.9fr]">
              <div className="p-7 md:p-9">
                <p className="text-sm font-black uppercase tracking-[.14em] text-orange-300">Por que escolher a DD Prime?</p>
                <h2 className="mt-3 text-3xl font-black">Nossos diferenciais</h2>
                <div className="diffs mt-8">
                  {[
                    [Zap,"Atendimento rápido"],
                    [ClipboardCheck,"Orçamento sem compromisso"],
                    [ShieldCheck,"Garantia por escrito"],
                    [BadgeCheck,"Equipe especializada"],
                    [MapPin,"Atendimento local"]
                  ].map(([I,t])=>{
                    const Icon=I as typeof Zap;
                    return <div className="diff" key={String(t)}><Icon className="text-orange-400" size={29}/><div className="mt-3 text-sm font-black">{String(t)}</div></div>
                  })}
                </div>
              </div>

              <div className="quote-panel p-6 md:p-8">
                <p className="text-sm font-black uppercase tracking-[.14em] text-orange-400">Solicite seu orçamento</p>
                <h3 className="mt-2 text-2xl font-black text-[#071c31]">Fale com a DD Prime</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">Preencha os dados e envie pelo WhatsApp.</p>
                <div className="mt-5"><QuoteForm/></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-3">
          <article id="como-funciona" className="card p-6">
            <p className="kicker">Como funciona</p>
            <h2 className="mt-2 text-2xl font-black text-[#071c31]">Simples, rápido e eficiente</h2>
            <div className="mt-8 grid gap-6">
              {[
                [MessageCircle,"Solicite seu orçamento","Entre em contato pelo WhatsApp."],
                [CalendarCheck,"Agendamento","Combinamos o melhor horário."],
                [ShieldCheck,"Execução e orientação","Realizamos o tratamento e explicamos os cuidados."]
              ].map(([I,t,d])=>{
                const Icon=I as typeof MessageCircle;
                return <div className="flex gap-4" key={String(t)}>
                  <div className="stepnum"><Icon size={21}/></div>
                  <div><h3 className="font-black text-[#071c31]">{String(t)}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{String(d)}</p></div>
                </div>
              })}
            </div>
          </article>

          <article id="avaliacoes" className="card p-6">
            <p className="kicker">Avaliações</p>
            <h2 className="mt-2 text-2xl font-black text-[#071c31]">Avalie nossa empresa</h2>
            <div className="mt-8 text-center">
              <div className="text-4xl font-black text-[#4285f4]">Google</div>
              <div className="mt-3 text-3xl font-black">5,0 <span className="text-amber-400">★★★★★</span></div>
              <p className="mt-4 text-sm leading-6 text-slate-600">Compartilhe sua experiência e ajude outros clientes a conhecerem a DD Prime.</p>
              <a href="https://g.page/r/CWHLPzas78KlEBM/review" className="btn btn-orange mt-6"><Star size={18}/> Avaliar no Google</a>
            </div>
          </article>

          <article className="card p-6">
            <p className="kicker">Área de atendimento</p>
            <h2 className="mt-2 text-2xl font-black text-[#071c31]">Campo Grande-MS e região</h2>
            <div className="map-card mt-6">
              <div className="text-center">
                <MapPin className="mx-auto text-orange-400" size={48}/>
                <div className="mt-3 text-2xl font-black">Campo Grande-MS</div>
                <div className="mt-2 text-slate-300">Atendimento residencial e empresarial</div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Footer/>
      <WhatsAppButton/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    </main>
  )
}
