import Image from "next/image";
import {
  Bug,
  Building2,
  CheckCircle2,
  Clock3,
  HomeIcon,
  MessageCircle,
  MousePointerClick,
  Rat,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import QuoteForm from "@/components/QuoteForm";

const whatsapp =
  "https://wa.me/5567981086008?text=Olá%2C%20gostaria%20de%20solicitar%20um%20orçamento.";

const services = [
  {
    icon: Bug,
    title: "Dedetização",
    text: "Controle profissional de baratas, formigas, aranhas e outras pragas urbanas.",
  },
  {
    icon: Sparkles,
    title: "Descupinização",
    text: "Tratamento técnico para cupins de madeira seca e cupins subterrâneos.",
  },
  {
    icon: Rat,
    title: "Desratização",
    text: "Inspeção, iscagem segura, monitoramento e prevenção contra roedores.",
  },
  {
    icon: ShieldCheck,
    title: "Controle de escorpiões",
    text: "Tratamento direcionado e orientações para reduzir abrigo e acesso.",
  },
  {
    icon: Building2,
    title: "Empresas",
    text: "Planos periódicos para restaurantes, lojas, escritórios e indústrias.",
  },
  {
    icon: HomeIcon,
    title: "Condomínios",
    text: "Controle preventivo para áreas comuns, jardins, depósitos e caixas de inspeção.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container flex min-h-20 items-center justify-between gap-5">
          <a href="#inicio" className="flex items-center">
            <Image
              src="/logo-ddprime.png"
              alt="DD Prime Dedetizadora"
              width={160}
              height={70}
              priority
              className="h-16 w-auto object-contain"
            />
          </a>

          <nav className="desktop-nav flex items-center gap-7 text-sm font-bold text-slate-700">
            <a href="#inicio">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#empresa">Empresa</a>
            <a href="#duvidas">Dúvidas</a>
            <a href="#contato">Contato</a>
          </nav>

          <a href="#orcamento" className="button button-primary text-sm">
            Solicitar orçamento
          </a>
        </div>
      </header>

      <section id="inicio" className="hero py-16 text-white md:py-24">
        <div className="container grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold">
              Atendimento em Campo Grande-MS
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              Controle de pragas com{" "}
              <span className="text-orange-400">segurança e garantia.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              Soluções profissionais para residências, empresas e condomínios,
              com atendimento responsável e orientação técnica.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#orcamento" className="button button-primary">
                Solicitar orçamento
              </a>
              <a href={whatsapp} className="button button-outline">
                <MessageCircle size={19} />
                WhatsApp
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-slate-200">
              <span>✓ Atendimento rápido</span>
              <span>✓ Equipe especializada</span>
              <span>✓ Produtos regularizados</span>
            </div>
          </div>

          <div className="logo-frame">
            <Image
              src="/logo-ddprime.png"
              alt="Identidade visual DD Prime"
              width={700}
              height={350}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <section id="servicos" className="section bg-[#fff7ef]">
        <div className="container">
          <p className="kicker">Soluções completas</p>
          <h2 className="heading">Serviços para cada necessidade</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Atendimento preventivo e corretivo, planejado conforme o ambiente,
            a praga e o nível de infestação.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text }) => (
              <article key={title} className="card p-6">
                <div className="icon">
                  <Icon size={23} />
                </div>
                <h3 className="mt-5 text-xl font-black text-[#102a43]">
                  {title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
                <a
                  href="#orcamento"
                  className="mt-5 inline-flex items-center gap-2 font-black text-[#cf5e18]"
                >
                  Solicitar avaliação <MousePointerClick size={17} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="empresa" className="section">
        <div className="container grid gap-12 md:grid-cols-2">
          <div>
            <p className="kicker">Por que escolher a DD Prime</p>
            <h2 className="heading">Atendimento profissional e próximo</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Cada atendimento começa com a avaliação do local e termina com
              orientações práticas para ajudar a manter o ambiente protegido.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [Clock3, "Agilidade", "Contato rápido e agendamento objetivo."],
              [ShieldCheck, "Segurança", "Procedimentos adequados ao ambiente."],
              [CheckCircle2, "Organização", "Registros claros do serviço realizado."],
              [MessageCircle, "Comunicação", "Orientação antes e depois da aplicação."],
            ].map(([Icon, title, text]) => {
              const Component = Icon as typeof Clock3;
              return (
                <div key={String(title)} className="card p-5">
                  <div className="icon">
                    <Component size={23} />
                  </div>
                  <h3 className="mt-4 font-black text-[#102a43]">
                    {String(title)}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {String(text)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#102a43] py-14 text-white">
        <div className="container grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {[
            ["Residencial", "Casas e apartamentos"],
            ["Comercial", "Lojas e escritórios"],
            ["Alimentação", "Restaurantes e lanchonetes"],
            ["Coletivo", "Condomínios e empresas"],
          ].map(([title, text]) => (
            <div key={title}>
              <div className="text-2xl font-black text-orange-400">{title}</div>
              <div className="mt-2 text-sm text-slate-300">{text}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="duvidas" className="section bg-[#f4eadf]">
        <div className="container grid gap-10 md:grid-cols-2">
          <div>
            <p className="kicker">Dúvidas frequentes</p>
            <h2 className="heading">Informação antes do atendimento</h2>
          </div>

          <div className="grid gap-3">
            <details className="card p-5">
              <summary className="cursor-pointer font-black text-[#102a43]">
                Preciso sair do imóvel durante o serviço?
              </summary>
              <p className="mt-3 leading-7 text-slate-600">
                Depende do produto e da técnica aplicados. A equipe orientará o
                período necessário antes do atendimento.
              </p>
            </details>

            <details className="card p-5">
              <summary className="cursor-pointer font-black text-[#102a43]">
                O serviço possui garantia?
              </summary>
              <p className="mt-3 leading-7 text-slate-600">
                A garantia varia conforme a praga, o nível de infestação e as
                condições do imóvel, conforme informado no orçamento.
              </p>
            </details>

            <details className="card p-5">
              <summary className="cursor-pointer font-black text-[#102a43]">
                Vocês atendem empresas?
              </summary>
              <p className="mt-3 leading-7 text-slate-600">
                Sim. Atendemos restaurantes, lanchonetes, condomínios,
                comércios, escritórios e outros segmentos.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section id="orcamento" className="section bg-[#fff7ef]">
        <div className="container grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="kicker">Orçamento rápido</p>
            <h2 className="heading">Conte o que está acontecendo</h2>
            <p className="mt-5 leading-7 text-slate-600">
              Após preencher o formulário, uma mensagem pronta será aberta no
              WhatsApp da DD Prime.
            </p>
          </div>

          <QuoteForm />
        </div>
      </section>

      <footer id="contato" className="bg-[#0b2034] py-12 text-slate-200">
        <div className="container grid gap-8 md:grid-cols-3">
          <div>
            <Image
              src="/logo-ddprime.png"
              alt="DD Prime"
              width={160}
              height={76}
              className="h-20 w-auto rounded bg-white p-2 object-contain"
            />
            <p className="mt-4 text-sm leading-6">
              Controle profissional de pragas urbanas em Campo Grande-MS.
            </p>
          </div>

          <div>
            <h3 className="font-black text-white">Contato</h3>
            <p className="mt-4">WhatsApp: (67) 98108-6008</p>
            <p className="mt-2 break-all">
              ddprimededetisadora@gmail.com
            </p>
          </div>

          <div>
            <h3 className="font-black text-white">Endereço</h3>
            <p className="mt-4 leading-7">
              Rua Marcelino Pires, 237
              <br />
              Vila Ieda
              <br />
              Campo Grande-MS
            </p>
          </div>
        </div>

        <div className="container mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
          © 2026 DD Prime Dedetizadora. Todos os direitos reservados.
        </div>
      </footer>

      <a
        href={whatsapp}
        className="whatsapp"
        aria-label="Falar com a DD Prime pelo WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </main>
  );
}
