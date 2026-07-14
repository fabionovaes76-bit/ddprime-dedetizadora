import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Orcamento(){
  return(
    <main>
      <Header/>
      <section className="section bg-[#fff8f2]">
        <div className="container grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="kicker">Orçamento rápido</p>
            <h1 className="title">Envie os dados pelo WhatsApp</h1>
            <p className="subtitle mt-5">Preencha os campos. A mensagem será aberta pronta no WhatsApp da DD Prime.</p>
          </div>
          <div className="card p-6"><QuoteForm/></div>
        </div>
      </section>
      <Footer/>
      <WhatsAppButton/>
    </main>
  )
}
