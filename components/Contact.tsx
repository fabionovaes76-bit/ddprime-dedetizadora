import { MapPin } from "lucide-react";
import QuoteForm from "./QuoteForm";

export default function Contact() {
  return (
    <section className="section bg-[#fff8f2]">
      <div className="container contact-grid">
        <article className="map-card">
          <p className="eyebrow">Área de atendimento</p>
          <h2 className="mt-3 text-4xl font-black">Campo Grande-MS e região</h2>
          <p className="mt-4 leading-7 text-slate-200">
            Atendimento para residências, empresas, condomínios e comércios.
          </p>

          <div className="map-visual">
            <MapPin size={58} className="text-orange-400" />
            <strong>Campo Grande-MS</strong>
          </div>
        </article>

        <article className="form-card">
          <p className="eyebrow">Orçamento rápido</p>
          <h2 className="mt-3 text-4xl font-black text-[#06172a]">
            Conte qual é o problema
          </h2>
          <p className="mt-3 text-slate-600">
            Envie as informações diretamente para o WhatsApp.
          </p>

          <div className="mt-7">
            <QuoteForm />
          </div>
        </article>
      </div>
    </section>
  );
}
