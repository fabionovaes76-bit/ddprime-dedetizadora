import Image from "next/image";
import { BadgeCheck, Building2, ShieldCheck, Zap } from "lucide-react";

export default function Differentials() {
  const items = [
    [Zap, "Contato rápido", "Atendimento direto pelo WhatsApp."],
    [ShieldCheck, "Orientação clara", "Cuidados explicados antes e depois."],
    [BadgeCheck, "Equipe preparada", "Solução indicada conforme o ambiente."],
    [Building2, "Planos personalizados", "Residências, empresas e condomínios."],
  ];

  return (
    <section id="diferenciais" className="section bg-[#fff8f2]">
      <div className="container">
        <div className="dark-panel">
          <div className="dark-grid">
            <div className="brand-panel">
              <div className="brand-ring" />
              <Image
                src="/escudo.png"
                alt="Escudo DD Prime"
                width={520}
                height={480}
              />
            </div>

            <div className="diff-content">
              <p className="eyebrow">Por que escolher a DD Prime?</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Atendimento organizado, moderno e focado em segurança
              </h2>

              <div className="diff-grid">
                {items.map(([IconRef, title, text]) => {
                  const Icon = IconRef as typeof Zap;
                  return (
                    <article className="diff-card" key={String(title)}>
                      <Icon className="text-orange-400" size={28} />
                      <h3>{String(title)}</h3>
                      <p>{String(text)}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
