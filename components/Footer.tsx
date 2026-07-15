import Image from "next/image";
import { Clock3, MapPin, MessageCircle, Phone, Star } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contato" className="premium-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image src="/logo.png" alt="DD Prime Dedetizadora" width={310} height={110} className="footer-logo" />
          <p>Controle profissional de pragas urbanas para residências, empresas e condomínios em Campo Grande-MS.</p>
          <div className="footer-social">
            <a href="https://wa.me/5567981086008" aria-label="WhatsApp"><MessageCircle size={20} /></a>
            <a href="https://g.page/r/CWHLPzas78KlEBM/review" aria-label="Avaliações da DD Prime no Google"><Star size={20} /></a>
          </div>
        </div>

        <div>
          <h3>Serviços</h3>
          <div className="footer-links">
            <span>Dedetização</span><span>Desratização</span><span>Descupinização</span>
            <span>Controle de escorpiões</span><span>Planos empresariais</span>
          </div>
        </div>

        <div>
          <h3>Links rápidos</h3>
          <div className="footer-links">
            <a href="#inicio">Início</a><a href="#servicos">Serviços</a>
            <a href="#diferenciais">Diferenciais</a><a href="#avaliacoes">Avaliações</a>
            <a href="/orcamento">Solicitar orçamento</a>
          </div>
        </div>

        <div>
          <h3>Atendimento</h3>
          <div className="footer-contact">
            <span><Phone size={17} /> (67) 98108-6008</span>
            <span><MapPin size={17} /> Campo Grande-MS</span>
            <span><Clock3 size={17} /> Atendimento 24 horas</span>
          </div>
          <a className="btn btn-green footer-cta" href="https://wa.me/5567981086008">Falar no WhatsApp</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span>© 2026 DD Prime Dedetizadora.</span>
          <span>Proteção, confiança e atendimento profissional.</span>
        </div>
      </div>
    </footer>
  );
}
