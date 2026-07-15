"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import TopBar from "./TopBar";

const links = [
  ["#inicio", "Início"],
  ["#servicos", "Serviços"],
  ["#diferenciais", "Diferenciais"],
  ["#como-funciona", "Como funciona"],
  ["#avaliacoes", "Avaliações"],
  ["#contato", "Contato"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      <TopBar />

      <header className="site-header sticky top-0 z-50 border-b border-white/10 bg-[#06172a]/96 text-white backdrop-blur">
        <div className="container header-inner">
          <Link
            href="/"
            aria-label="DD Prime Dedetizadora"
            className="brand-link"
            onClick={closeMenu}
          >
            <Image
              src="/logo.png"
              alt="DD Prime Dedetizadora"
              width={390}
              height={125}
              priority
              className="header-logo"
            />
          </Link>

          <nav className="desktop-nav main-nav" aria-label="Navegação principal">
            {links.map(([href, label], index) => (
              <a href={href} className={index === 0 ? "active" : ""} key={href}>
                {label}
              </a>
            ))}
          </nav>

          <div className="header-actions hidden lg:flex">
            <a href="tel:+5567981086008" className="phone-button">
              (67) 98108-6008
            </a>
            <a
              href="https://wa.me/5567981086008"
              className="btn btn-green whatsapp-header"
            >
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            className="mobile-menu-button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={29} /> : <Menu size={29} />}
          </button>
        </div>

        <div className={`mobile-menu ${open ? "mobile-menu-open" : ""}`}>
          <nav aria-label="Navegação para celular">
            {links.map(([href, label]) => (
              <a href={href} key={href} onClick={closeMenu}>
                {label}
              </a>
            ))}
          </nav>

          <div className="mobile-menu-actions">
            <a href="tel:+5567981086008" className="mobile-phone" onClick={closeMenu}>
              <Phone size={18} />
              (67) 98108-6008
            </a>
            <a
              href="https://wa.me/5567981086008"
              className="btn btn-green"
              onClick={closeMenu}
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
