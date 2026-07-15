import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function OrcamentoPage() {
  return (
    <main>
      <Header />

      <section className="section bg-[#fff8f2]">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Orçamento rápido</p>
            <h1 className="heading">Envie sua solicitação</h1>
            <p className="lead mt-4">
              A mensagem será aberta pronta no WhatsApp da DD Prime.
            </p>
          </div>

          <div className="form-card">
            <QuoteForm />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
