import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Serviços de Controle de Pragas em Campo Grande-MS",
  description:
    "Dedetização, descupinização, desratização, controle de escorpiões e planos para empresas e condomínios em Campo Grande-MS.",
  alternates: { canonical: "/servicos" },
  openGraph: {
    title: "Serviços de controle de pragas | DD Prime",
    description: "Soluções profissionais para residências, empresas e condomínios.",
    url: "/servicos",
  },
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
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Serviços de controle de pragas da DD Prime",
    itemListElement: items.map(([name, description], index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name,
        description,
        areaServed: "Campo Grande-MS",
        provider: { "@id": "https://ddprimededetizadora.com.br/#business" },
      },
    })),
  };

  return (
    <main>
      <Header />
      <section className="section bg-[#fff8f2]">
        <div className="container">
          <p className="kicker">Serviços DD Prime</p>
          <h1 className="heading">Controle profissional de pragas em Campo Grande-MS</h1>
          <p className="lead mt-4 max-w-3xl">
            Soluções para residências, empresas, comércios e condomínios, com orientação adequada para cada ambiente.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {items.map(([title, text]) => (
              <article key={title} className="card p-6">
                <h2 className="text-2xl font-black text-[#0f2942]">{title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
                <Link href="/orcamento" className="mt-5 inline-block font-black text-[#c95d19]">Pedir orçamento →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <BreadcrumbSchema items={[
        { name: "Início", url: "https://ddprimededetizadora.com.br/" },
        { name: "Serviços", url: "https://ddprimededetizadora.com.br/servicos" },
      ]} />
      <Script id="services-schema" type="application/ld+json">{JSON.stringify(serviceSchema)}</Script>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
