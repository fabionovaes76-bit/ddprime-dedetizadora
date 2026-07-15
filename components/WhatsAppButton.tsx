import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5567981086008"
      className="float-wa"
      aria-label="Falar com a DD Prime pelo WhatsApp"
    >
      <MessageCircle size={29} />
    </a>
  );
}
