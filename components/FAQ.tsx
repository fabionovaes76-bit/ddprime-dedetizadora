import Script from "next/script";

const faqs = [
  {
    question: "Quanto custa uma dedetização em Campo Grande-MS?",
    answer:
      "O valor depende do tamanho e das características do imóvel, do tipo de praga e do tratamento indicado. A DD Prime realiza uma avaliação para apresentar um orçamento adequado.",
  },
  {
    question: "A dedetização pode ser feita em casas com crianças e animais?",
    answer:
      "Sim. A equipe orienta sobre a preparação do ambiente, o período de afastamento e o retorno seguro após a aplicação, conforme o produto e o serviço executado.",
  },
  {
    question: "Quais pragas a DD Prime controla?",
    answer:
      "A DD Prime atua no controle de baratas, formigas, aranhas, escorpiões, roedores, cupins e outras pragas urbanas, conforme avaliação técnica do ambiente.",
  },
  {
    question: "A DD Prime atende empresas e condomínios?",
    answer:
      "Sim. O atendimento contempla residências, comércios, empresas e condomínios em Campo Grande-MS e região.",
  },
];

export default function FAQ() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="section bg-white" aria-labelledby="faq-title">
      <div className="container max-w-5xl">
        <p className="eyebrow text-center">Dúvidas frequentes</p>
        <h2 id="faq-title" className="heading mt-3 text-center">
          Perguntas sobre controle de pragas
        </h2>
        <div className="mt-10 grid gap-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="card p-6 open:shadow-lg">
              <summary className="cursor-pointer text-lg font-black text-[#0f2942]">
                {faq.question}
              </summary>
              <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(schema)}
      </Script>
    </section>
  );
}
