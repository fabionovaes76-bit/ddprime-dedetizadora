import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container flex min-h-20 items-center justify-between gap-5">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-ddprime.png"
            alt="DD Prime Dedetizadora"
            width={160}
            height={70}
            priority
            className="h-16 w-auto object-contain"
          />
        </Link>
        <nav className="desktop-nav flex items-center gap-7 text-sm font-black text-slate-700">
          <a href="#servicos">Serviços</a>
          <a href="#diferenciais">Diferenciais</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#contato">Contato</a>
        </nav>
        <Link href="/orcamento" className="btn btn-primary text-sm">
          Solicitar orçamento
        </Link>
      </div>
    </header>
  );
}
