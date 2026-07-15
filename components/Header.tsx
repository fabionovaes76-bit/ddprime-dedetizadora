import Image from "next/image";
import Link from "next/link";
import TopBar from "./TopBar";

export default function Header() {
  return (
    <>
      <TopBar />
      <header className="site-header sticky top-0 z-50 border-b border-white/10 bg-[#06172a]/96 text-white backdrop-blur">
        <div className="container header-inner">
          <Link href="/" aria-label="DD Prime Dedetizadora" className="brand-link">
            <Image src="/logo.png" alt="DD Prime Dedetizadora" width={390} height={125} priority className="header-logo" />
          </Link>

          <nav className="desktop-nav main-nav" aria-label="Navegação principal">
            <a href="#inicio" className="active">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#diferenciais">Diferenciais</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#avaliacoes">Avaliações</a>
            <a href="#contato">Contato</a>
          </nav>

          <div className="header-actions hidden lg:flex">
            <a href="tel:+5567981086008" className="phone-button">(67) 98108-6008</a>
            <a href="https://wa.me/5567981086008" className="btn btn-green whatsapp-header">WhatsApp</a>
          </div>
        </div>
      </header>
    </>
  );
}
