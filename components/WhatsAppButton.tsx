import { MessageCircle } from "lucide-react";
import AnalyticsLink from "./AnalyticsLink";

export default function WhatsAppButton() {
  return (
    <AnalyticsLink
      href="https://wa.me/5567981086008"
      className="float-wa"
      aria-label="Falar com a DD Prime pelo WhatsApp"
      eventName="click_whatsapp"
      eventParams={{ location: "floating_button" }}
    >
      <MessageCircle size={29} />
    </AnalyticsLink>
  );
}
