import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a DD Prime Dedetizadora.",
};

export default function ContatoPage() {
  return (
    <main>
      <Header />
      <section className="section bg-[#fff8f2]">
        <div className="container">
          <p className="kicker">Contato</p>
          <h1 className="heading">Fale com a DD Prime</h1>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="card p-6">
              <h2 className="font-black text-[#0f2942]">WhatsApp</h2>
              <p className="mt-3">(67) 98108-6008</p>
            </div>
            <div className="card p-6">
              <h2 className="font-black text-[#0f2942]">E-mail</h2>
              <p className="mt-3 break-all">ddprimededetisadora@gmail.com</p>
            </div>
            <div className="card p-6">
              <h2 className="font-black text-[#0f2942]">Endereço</h2>
              <p className="mt-3">
                Rua Marcelino Pires, 237 — Vila Ieda — Campo Grande-MS
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
