import Image from "next/image";
import Link from "next/link";
import {
  Bug,
  Building2,
  CheckCircle2,
  Clock3,
  HomeIcon,
  MessageCircle,
  Rat,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const services = [
  [Bug, "Dedetização", "Controle de baratas, formigas, aranhas e outras pragas urbanas."],
  [Sparkles, "Descupinização", "Tratamento para cupins de madeira seca e cupins subterrâneos."],
  [Rat, "Desratização", "Inspeção, iscagem segura, monitoramento e prevenção contra roedores."],
  [ShieldCheck, "Controle de escorpiões", "Tratamento direcionado e orientação preventiva."],
  [Building2, "Empresas", "Planos periódicos para restaurantes, lojas e outros negócios."],
  [HomeIcon, "Condomínios", "Controle preventivo para áreas comuns e ambientes coletivos."],
];

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero py-16 text-white md:py-24">
        <div className="container grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold">
              Atendimento em Campo Grande-MS
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              Proteção profissional contra pragas urbanas.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              Atendimento para residências, empresas e condomínios, com soluções
              adequadas para cada ambiente e contato direto pelo WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/orcamento" className="btn btn-primary">
                Solicitar orçamento
              </Link>
              <a
                href="https://wa.me/5567981086008?text=Olá%2C%20gostaria%20de%20solicitar%20um%20orçamento."
                className="btn btn-light"
              >
                <MessageCircle size={19} /> WhatsApp
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-slate-200">
              <span>✓ Orçamento sem compromisso</span>
              <span>✓ Atendimento residencial e empresarial</span>
              <span>✓ Campo Grande-MS</span>
            </div>
          </div>
          <div className="brand-panel">
            <Image
              src="/logo-ddprime.png"
              alt="DD Prime Dedetizadora"
              width={700}
              height={350}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <section className="section bg-[#fff8f2]">
        <div className="container">
          <p className="kicker">Nossos serviços</p>
          <h2 className="heading">Soluções para diferentes necessidades</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(([Icon, title, text]) => {
              const Component = Icon as typeof Bug;
              return (
                <article key={String(title)} className="card p-6">
                  <div className="icon-box"><Component size={23} /></div>
                  <h3 className="mt-5 text-xl font-black text-[#0f2942]">
                    {String(title)}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">{String(text)}</p>
                  <Link
                    href="/orcamento"
                    className="mt-5 inline-block font-black text-[#c95d19]"
                  >
                    Solicitar avaliação →
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-12 md:grid-cols-2">
          <div>
            <p className="kicker">Diferenciais</p>
            <h2 className="heading">Atendimento profissional e próximo</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              A DD Prime avalia o ambiente, orienta o cliente e recomenda o
              procedimento adequado para cada situação.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [Clock3, "Agilidade", "Contato rápido e agendamento objetivo."],
              [ShieldCheck, "Segurança", "Procedimentos adequados ao ambiente."],
              [CheckCircle2, "Organização", "Informações claras sobre o serviço."],
              [MessageCircle, "Comunicação", "Orientação antes e depois do atendimento."],
            ].map(([Icon, title, text]) => {
              const Component = Icon as typeof Clock3;
              return (
                <div key={String(title)} className="card p-5">
                  <div className="icon-box"><Component size={23} /></div>
                  <h3 className="mt-4 font-black text-[#0f2942]">{String(title)}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{String(text)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#0f2942] py-14 text-white">
        <div className="container grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {[
            ["Residências", "Casas e apartamentos"],
            ["Comércios", "Lojas e escritórios"],
            ["Alimentação", "Restaurantes e lanchonetes"],
            ["Condomínios", "Áreas comuns e coletivas"],
          ].map(([title, text]) => (
            <div key={title}>
              <div className="text-xl font-black text-orange-400">{title}</div>
              <div className="mt-2 text-sm text-slate-300">{text}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-[#f3e9df]">
        <div className="container text-center">
          <p className="kicker">Orçamento rápido</p>
          <h2 className="heading">Envie as informações pelo WhatsApp</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            O simulador organiza os dados do imóvel e abre uma mensagem pronta
            para o atendimento da DD Prime.
          </p>
          <Link href="/orcamento" className="btn btn-primary mt-8">
            Abrir simulador de orçamento
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
