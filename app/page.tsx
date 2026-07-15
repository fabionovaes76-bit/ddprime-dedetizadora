import {
  Award,
  BadgeCheck,
  Building2,
  Clock3,
  ShieldCheck,
} from "lucide-react";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
      addressCountry: "BR"
    },
    openingHours: "Mo-Su 00:00-23:59",
    areaServed: "Campo Grande - MS",
    sameAs: ["https://g.page/r/CWHLPzas78KlEBM/review"]
  };

  const trust = [
    [BadgeCheck, "Empresa licenciada", "Regularizada e autorizada"],
    [ShieldCheck, "Produtos registrados", "Aplicação conforme cada ambiente"],
    [Building2, "Atendimento profissional", "Residencial e empresarial"],
    [Award, "Garantia do serviço", "Conforme o serviço contratado"],
    [Clock3, "Atendimento rápido", "Contato direto pelo WhatsApp"],
  ];

  return (
    <main>
      <Header />
      <Hero />

      <div className="container trust-wrap">
        <div className="trust-grid">
          {trust.map(([IconRef, title, text]) => {
            const Icon = IconRef as typeof Clock3;

            return (
              <article className="trust-card" key={String(title)}>
                <div className="icon-circle"><Icon size={23} /></div>
                <div>
                  <strong>{String(title)}</strong>
                  <div className="mt-1 text-sm text-slate-500">{String(text)}</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <Reviews />
      <Services />
      <Process />
      <Differentials />
      <Contact />

      <section className="cta">
        <div className="container flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <div>
            <p className="eyebrow">Atendimento 24 horas</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Proteja seu ambiente hoje mesmo.
            </h2>
          </div>

          <a className="btn btn-green" href="https://wa.me/5567981086008">
            Solicitar orçamento pelo WhatsApp
          </a>
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
