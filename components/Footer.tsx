import Image from "next/image";
import { Facebook, Instagram, MessageCircle, Phone } from "lucide-react";

export default function Footer(){
  return(
    <footer id="contato" className="bg-[#06172a] text-white">
      <div className="border-b border-white/10">
        <div className="container flex flex-col items-start justify-between gap-6 py-7 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <Image src="/escudo-ddprime-final.png" alt="DD Prime" width={72} height={72} className="h-16 w-16 object-contain"/>
            <div>
              <div className="text-xl font-black">Está com problemas com pragas?</div>
              <div className="text-xl font-black text-orange-400">Nós temos a solução.</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="btn btn-green" href="https://wa.me/5567981086008"><MessageCircle size={19}/> WhatsApp</a>
            <a className="btn btn-outline" href="tel:+5567981086008"><Phone size={19}/> Ligar agora</a>
            <a className="btn btn-orange" href="/orcamento">Solicitar orçamento</a>
          </div>
        </div>
      </div>

      <div className="container grid gap-10 py-12 md:grid-cols-4">
        <div>
          <Image src="/logo-ddprime-final.png" alt="DD Prime Dedetizadora" width={230} height={100} className="h-24 w-auto object-contain"/>
          <p className="mt-4 text-sm leading-6 text-slate-300">Controle profissional de pragas urbanas em Campo Grande-MS.</p>
        </div>

        <div>
          <h3 className="font-black">Links rápidos</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            <a href="#inicio">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#diferenciais">Diferenciais</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#avaliacoes">Avaliações</a>
          </div>
        </div>

        <div>
          <h3 className="font-black">Serviços</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            <span>Dedetização</span>
            <span>Descupinização</span>
            <span>Desratização</span>
            <span>Controle de escorpiões</span>
            <span>Controle para empresas</span>
          </div>
        </div>

        <div>
          <h3 className="font-black">Contato</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            <span>(67) 98108-6008</span>
            <span className="break-all">ddprimededetizadora@gmail.com</span>
            <span>Atendimento 24 horas</span>
            <span>Campo Grande-MS</span>
          </div>
          <div className="mt-5 flex gap-3">
            <span className="iconbox"><Facebook size={20}/></span>
            <span className="iconbox"><Instagram size={20}/></span>
            <a className="iconbox" href="https://wa.me/5567981086008"><MessageCircle size={20}/></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-6 text-sm text-slate-400">
          © 2026 DD Prime Dedetizadora. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
