import Image from "next/image";
import { MessageCircle, Phone, ShieldCheck } from "lucide-react";
import AnalyticsLink from "./AnalyticsLink";

const pests = [
  ["🪳", "Baratas"],
  ["🦂", "Escorpiões"],
  ["🐀", "Ratos"],
  ["🐜", "Cupins"],
  ["🐜", "Formigas"],
];

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-grid" />
      <div className="hero-glow" />

      <div className="container hero-inner">
        <div className="hero-copy-column">
          <span className="hero-badge">
            <ShieldCheck size={17} />
            Proteção que você vê. Tranquilidade que você sente.
          </span>

          <h1>
            Proteção completa
            <span>contra pragas urbanas</span>
          </h1>

          <p className="hero-copy">
            Ambientes protegidos, sua família segura. Soluções profissionais
            para residências, empresas e condomínios em Campo Grande-MS.
          </p>

          <div className="hero-actions">
            <AnalyticsLink
              className="btn btn-orange"
              href="https://wa.me/5567981086008?text=Olá%2C%20gostaria%20de%20solicitar%20um%20orçamento."
              eventName="click_whatsapp"
              eventParams={{ location: "hero" }}
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
            </AnalyticsLink>

            <AnalyticsLink
              className="btn btn-outline"
              href="tel:+5567981086008"
              eventName="click_phone"
              eventParams={{ location: "hero" }}
            >
              <Phone size={20} />
              Ligar agora
              <small>(67) 98108-6008</small>
            </AnalyticsLink>
          </div>

          <div className="hero-points">
            <article className="metric">
              <strong>24h</strong>
              <span>Atendimento</span>
            </article>
            <article className="metric">
              <strong>5,0 ★★★★★</strong>
              <span>Avaliação no Google</span>
            </article>
            <article className="metric">
              <strong>Local</strong>
              <span>Campo Grande-MS</span>
            </article>
            <article className="metric">
              <strong>Pet friendly</strong>
              <span>Orientação para famílias com pets</span>
            </article>
          </div>
        </div>

        <div className="hero-stage">
          <div className="shield-stage">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="platform" />

            <Image
              src="/escudo.png"
              alt="Escudo DD Prime Dedetizadora"
              width={720}
              height={660}
              priority
              className="hero-shield"
            />
          </div>

          <aside className="pest-list" aria-label="Principais pragas controladas">
            {pests.map(([icon, label]) => (
              <div className="pest-item" key={label}>
                <span className="pest-icon">{icon}</span>
                <strong>{label}</strong>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
