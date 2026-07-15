import Image from "next/image";
import { BadgeCheck, PawPrint, ShieldCheck, Star } from "lucide-react";

const reviews = [
  {
    title: "Atendimento excelente!",
    text: "Equipe atenciosa, comunicação clara e serviço organizado.",
  },
  {
    title: "Empresa séria e comprometida.",
    text: "Contato rápido pelo WhatsApp e boa orientação ao cliente.",
  },
  {
    title: "Recomendo a DD Prime!",
    text: "Atendimento profissional em Campo Grande-MS.",
  },
];

export default function Reviews() {
  return (
    <section id="avaliacoes" className="section reviews-pet-section">
      <div className="container reviews-pet-layout">
        <div className="google-reviews-panel">
          <div className="reviews-heading">
            <div>
              <p className="eyebrow">Presença no Google</p>
              <h2 className="heading">Avaliações 5 estrelas</h2>
            </div>
            <div className="google-mark" aria-hidden="true">G</div>
          </div>

          <div className="review-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.title}>
                <div className="stars">★★★★★</div>
                <h3>{review.title}</h3>
                <p>{review.text}</p>
                <span className="verified-review">
                  Avaliação verificada no Google
                  <BadgeCheck size={15} />
                </span>
              </article>
            ))}
          </div>

          <a
            href="https://g.page/r/CWHLPzas78KlEBM/review"
            className="btn btn-orange review-button"
          >
            <Star size={18} />
            Ver e avaliar no Google
          </a>
        </div>

        <article className="pet-friendly-card">
          <div className="pet-image-wrap">
            <Image
              src="/pet-friendly-dog-cat.webp"
              alt="Cachorro e gato representando o atendimento Pet Friendly"
              fill
              sizes="(max-width: 900px) 100vw, 360px"
              className="pet-image"
            />
          </div>

          <div className="pet-card-copy">
            <div className="pet-card-icon">
              <PawPrint size={30} />
            </div>
            <h2><span>Pet</span> Friendly</h2>
            <p>
              Atendimento com orientação para famílias com animais.
              Siga sempre as recomendações técnicas após a aplicação.
            </p>

            <div className="pet-assurances">
              <span><ShieldCheck size={17} /> Orientação para seus pets</span>
              <span><BadgeCheck size={17} /> Atendimento responsável</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
