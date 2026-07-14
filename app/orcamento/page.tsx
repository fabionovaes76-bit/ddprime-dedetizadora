import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteSimulator from "@/components/QuoteSimulator";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function OrcamentoPage() {
  return (
    <main>
      <Header />
      <section className="section bg-[#fff8f2]">
        <div className="container grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="kicker">Orçamento pelo WhatsApp</p>
            <h1 className="heading">Conte os detalhes do atendimento</h1>
            <p className="subheading mt-5">
              Preencha as informações. Ao enviar, o WhatsApp abrirá com a
              mensagem pronta para a DD Prime.
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
