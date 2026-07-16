import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Sobre a DD Prime Dedetizadora em Campo Grande-MS",
  description:
    "Conheça a DD Prime, empresa de controle de pragas urbanas que atende residências, empresas e condomínios em Campo Grande-MS.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    title: "Sobre a DD Prime Dedetizadora",
    description: "Atendimento profissional em controle de pragas urbanas.",
    url: "/sobre",
  },
};

export default function SobrePage() {
  return (
    <main>
      <Header />
      <section className="section">
        <div className="container grid gap-10 md:grid-cols-2">
          <div>
            <p className="kicker">Sobre a DD Prime</p>
            <h1 className="heading">Dedetizadora comprometida com Campo Grande-MS</h1>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>A DD Prime Dedetizadora atende residências, empresas e condomínios em Campo Grande-MS, oferecendo soluções para diferentes tipos de pragas urbanas.</p>
            <p>O atendimento busca unir avaliação cuidadosa, comunicação clara e orientação ao cliente antes e depois da execução.</p>
            <p>Os serviços incluem dedetização, descupinização, desratização e controle direcionado de escorpiões, conforme a necessidade do ambiente.</p>
          </div>
        </div>
      </section>
      <BreadcrumbSchema items={[
        { name: "Início", url: "https://ddprimededetizadora.com.br/" },
        { name: "Sobre", url: "https://ddprimededetizadora.com.br/sobre" },
      ]} />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
