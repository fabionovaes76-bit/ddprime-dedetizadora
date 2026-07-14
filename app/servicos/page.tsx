import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Conheça os serviços da DD Prime Dedetizadora.",
};

const items = [
  ["Dedetização", "Controle de baratas, formigas, aranhas e outras pragas urbanas."],
  ["Descupinização", "Tratamento para cupins de madeira seca e subterrâneos."],
  ["Desratização", "Inspeção, controle e monitoramento de roedores."],
  ["Controle de escorpiões", "Ações direcionadas e orientação preventiva."],
  ["Atendimento empresarial", "Planos para comércios, restaurantes e empresas."],
  ["Condomínios", "Controle preventivo em áreas comuns e ambientes coletivos."],
];

export default function ServicosPage() {
  return (
    <main>
      <Header />
      <section className="section bg-[#fff8f2]">
        <div className="container">
          <p className="kicker">Serviços DD Prime</p>
          <h1 className="heading">Controle de pragas para diferentes ambientes</h1>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {items.map(([title, text]) => (
              <article key={title} className="card p-6">
                <h2 className="text-2xl font-black text-[#0f2942]">{title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
                <Link href="/orcamento" className="mt-5 inline-block font-black text-[#c95d19]">
                  Pedir orçamento →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
