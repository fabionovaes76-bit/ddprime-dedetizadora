import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06172a]/95 text-white backdrop-blur">
      <div className="container flex min-h-24 items-center justify-between gap-5">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-ddprime-definitiva.png"
            alt="DD Prime Dedetizadora"
            width={300}
            height={124}
            priority
            className="h-20 w-auto object-contain"
          />
        </Link>

        <nav className="desktop-nav flex items-center gap-6 text-sm font-black">
          <a href="#inicio" className="text-orange-400">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#diferenciais">Diferenciais</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#avaliacoes">Avaliações</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="tel:+5567981086008"
            className="rounded-xl border border-orange-400 px-4 py-3 text-sm font-black transition hover:bg-orange-500"
          >
            (67) 98108-6008
          </a>
          <a
            href="https://wa.me/5567981086008?text=Olá%2C%20gostaria%20de%20solicitar%20um%20orçamento."
            className="btn btn-green text-sm"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
