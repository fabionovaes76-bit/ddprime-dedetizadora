"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import TopBar from "./TopBar";

const links = [
  ["/", "Início"],
  ["/#servicos", "Serviços"],
  ["/#diferenciais", "Diferenciais"],
  ["/#como-funciona", "Como funciona"],
  ["/#avaliacoes", "Avaliações"],
  ["/#contato", "Contato"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TopBar />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06172a]/95 text-white shadow-xl backdrop-blur">
        <div className="mx-auto flex min-h-[92px] w-full max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:min-h-[126px] lg:px-8">
          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label="DD Prime Dedetizadora"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/logo.png"
              alt="DD Prime Dedetizadora"
              width={390}
              height={125}
              priority
              className="h-[64px] w-auto object-contain sm:h-[72px] lg:h-[96px]"
            />
          </Link>

          <nav
            className="hidden items-center gap-5 text-sm font-black xl:flex"
            aria-label="Navegação principal"
          >
            {links.map(([href, label], index) => (
              <a
                key={href}
                href={href}
                className={`border-b-3 py-4 transition ${
                  index === 0
                    ? "border-orange-500"
                    : "border-transparent hover:border-orange-500"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <a
              href="tel:+5567981086008"
              className="rounded-xl border border-orange-500 px-5 py-4 font-black transition hover:bg-orange-500/10"
            >
              (67) 98108-6008
            </a>
            <a
              href="https://wa.me/5567981086008"
              className="rounded-xl bg-[#25d366] px-6 py-4 font-black shadow-[0_14px_35px_rgba(37,211,102,.30)] transition hover:-translate-y-0.5"
            >
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 xl:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className={`xl:hidden ${open ? "block" : "hidden"}`}>
          <div className="border-t border-white/10 bg-[#06172a] px-4 pb-5 pt-2 shadow-2xl sm:px-6">
            <nav className="grid" aria-label="Navegação para celular">
              {links.map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="border-b border-white/10 py-4 text-base font-black"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              ))}
            </nav>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <a
                href="tel:+5567981086008"
                className="flex min-h-13 items-center justify-center gap-2 rounded-xl border border-orange-500 font-black"
                onClick={() => setOpen(false)}
              >
                <Phone size={18} />
                (67) 98108-6008
              </a>

              <a
                href="https://wa.me/5567981086008"
                className="flex min-h-13 items-center justify-center rounded-xl bg-[#25d366] font-black"
                onClick={() => setOpen(false)}
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
