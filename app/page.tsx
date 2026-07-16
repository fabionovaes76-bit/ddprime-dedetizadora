import type { Metadata } from "next";
import { Award, BadgeCheck, Building2, Clock3, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnalyticsLink from "@/components/AnalyticsLink";

export const metadata: Metadata = {
  title: "Dedetizadora em Campo Grande-MS | DD Prime",
  description:
    "Controle de baratas, escorpiões, ratos, cupins e outras pragas em Campo Grande-MS. Solicite avaliação e orçamento pelo WhatsApp.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
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
      <FAQ />
      <Contact />
      <section className="cta">
        <div className="container flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <div>
            <p className="eyebrow">Atendimento 24 horas</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Proteja seu ambiente hoje mesmo.</h2>
          </div>
          <AnalyticsLink
            className="btn btn-green"
            href="https://wa.me/5567981086008"
            eventName="click_whatsapp"
            eventParams={{ location: "home_cta" }}
          >
            Solicitar orçamento pelo WhatsApp
          </AnalyticsLink>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
