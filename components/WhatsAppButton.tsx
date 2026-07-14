import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5567981086008?text=Olá%2C%20gostaria%20de%20solicitar%20um%20orçamento."
      className="whatsapp"
      aria-label="Solicitar orçamento pelo WhatsApp"
    >
      <MessageCircle size={29} />
    </a>
  );
}
