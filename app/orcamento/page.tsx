import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import QuoteSimulator from "@/components/QuoteSimulator";

export const metadata: Metadata = {
  title: "Solicitar orçamento",
  description: "Solicite um orçamento para controle de pragas em Campo Grande-MS.",
};

export default function OrcamentoPage() {
  return (
    <main>
      <Header />
      <section className="section bg-[#fff8f2]">
        <div className="container grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="kicker">Orçamento pelo WhatsApp</p>
            <h1 className="heading">Conte os detalhes do atendimento</h1>
            <p className="mt-5 leading-8 text-slate-600">
              Preencha os campos. Ao enviar, o WhatsApp abrirá com as informações
              organizadas para você falar com a DD Prime.
            </p>
          </div>
          <QuoteSimulator />
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
