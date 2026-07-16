import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnalyticsLink from "@/components/AnalyticsLink";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Contato da Dedetizadora em Campo Grande-MS",
  description:
    "Fale com a DD Prime Dedetizadora em Campo Grande-MS pelo WhatsApp ou telefone e solicite uma avaliação para controle de pragas.",
  alternates: { canonical: "/contato" },
  openGraph: {
    title: "Contato | DD Prime Dedetizadora",
    description: "Atendimento para controle de pragas em Campo Grande-MS.",
    url: "/contato",
  },
};

export default function ContatoPage() {
  return (
    <main>
      <Header />
      <section className="section bg-[#fff8f2]">
        <div className="container">
          <p className="kicker">Contato</p>
          <h1 className="heading">Fale com a DD Prime em Campo Grande-MS</h1>
          <p className="lead mt-4 max-w-3xl">
            Entre em contato para solicitar avaliação de dedetização, descupinização,
            desratização ou controle de escorpiões.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="card p-6">
              <h2 className="font-black text-[#0f2942]">WhatsApp</h2>
              <AnalyticsLink
                className="mt-3 inline-block font-bold text-[#c95d19]"
                href="https://wa.me/5567981086008"
                eventName="click_whatsapp"
                eventParams={{ location: "contact_page" }}
              >
                (67) 98108-6008
              </AnalyticsLink>
            </div>
            <div className="card p-6">
              <h2 className="font-black text-[#0f2942]">Telefone</h2>
              <AnalyticsLink
                className="mt-3 inline-block font-bold text-[#c95d19]"
                href="tel:+5567981086008"
                eventName="click_phone"
                eventParams={{ location: "contact_page" }}
              >
                Ligar para a DD Prime
              </AnalyticsLink>
            </div>
            <div className="card p-6">
              <h2 className="font-black text-[#0f2942]">Endereço</h2>
              <p className="mt-3">Rua Marcelino Pires, 237 — Vila Ieda — Campo Grande-MS</p>
            </div>
          </div>
        </div>
      </section>
      <BreadcrumbSchema items={[
        { name: "Início", url: "https://ddprimededetizadora.com.br/" },
        { name: "Contato", url: "https://ddprimededetizadora.com.br/contato" },
      ]} />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
