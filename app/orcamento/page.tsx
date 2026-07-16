import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Orçamento de Dedetização em Campo Grande-MS",
  description:
    "Solicite orçamento para dedetização, descupinização, desratização e controle de escorpiões em Campo Grande-MS.",
  alternates: { canonical: "/orcamento" },
  openGraph: {
    title: "Solicite um orçamento | DD Prime",
    description: "Orçamento rápido para controle de pragas em Campo Grande-MS.",
    url: "/orcamento",
  },
};

export default function OrcamentoPage() {
  return (
    <main>
      <Header />
      <section className="section bg-[#fff8f2]">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Orçamento rápido</p>
            <h1 className="heading">Solicite orçamento para controle de pragas</h1>
            <p className="lead mt-4">
              Informe o tipo de serviço e os detalhes do ambiente. A mensagem será aberta pronta no WhatsApp da DD Prime.
            </p>
          </div>
          <div className="form-card"><QuoteForm /></div>
        </div>
      </section>
      <BreadcrumbSchema items={[
        { name: "Início", url: "https://ddprimededetizadora.com.br/" },
        { name: "Orçamento", url: "https://ddprimededetizadora.com.br/orcamento" },
      ]} />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
