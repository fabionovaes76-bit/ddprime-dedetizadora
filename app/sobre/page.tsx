import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a DD Prime Dedetizadora em Campo Grande-MS.",
};

export default function SobrePage() {
  return (
    <main>
      <Header />
      <section className="section">
        <div className="container grid gap-10 md:grid-cols-2">
          <div>
            <p className="kicker">Sobre a DD Prime</p>
            <h1 className="heading">Compromisso com ambientes mais protegidos</h1>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              A DD Prime Dedetizadora atende residências, empresas e condomínios
              em Campo Grande-MS, oferecendo soluções para diferentes tipos de
              pragas urbanas.
            </p>
            <p>
              O atendimento busca unir avaliação cuidadosa, comunicação clara e
              orientação ao cliente antes e depois da execução.
            </p>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
