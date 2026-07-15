import { BadgeCheck, Clock3, MapPin, ShieldCheck } from "lucide-react";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-group">
          <span className="topbar-item"><MapPin size={15} /> Campo Grande-MS e região</span>
        </div>
        <div className="topbar-group topbar-benefits">
          <span className="topbar-item"><BadgeCheck size={15} /> Empresa licenciada</span>
          <span className="topbar-item"><ShieldCheck size={15} /> Produtos registrados</span>
          <span className="topbar-item"><Clock3 size={15} /> Atendimento 24h</span>
        </div>
      </div>
    </div>
  );
}
