"use client";
import { FormEvent } from "react";

export default function QuoteForm(){
  function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = [
      "Olá, gostaria de solicitar um orçamento.",
      "",
      `Nome: ${f.get("nome") || ""}`,
      `Telefone: ${f.get("telefone") || ""}`,
      `Bairro: ${f.get("bairro") || ""}`,
      `Serviço: ${f.get("servico") || ""}`,
      `Mensagem: ${f.get("mensagem") || "Não informado"}`
    ].join("\n");
    window.open(`https://wa.me/5567981086008?text=${encodeURIComponent(msg)}`,"_blank");
  }
  const cls="rounded-xl border border-slate-300 bg-white p-3 text-slate-900 outline-none focus:border-orange-500";
  return(
    <form onSubmit={submit} className="grid gap-3">
      <input name="nome" required placeholder="Nome completo" className={cls}/>
      <div className="grid gap-3 md:grid-cols-2">
        <input name="telefone" required placeholder="Telefone / WhatsApp" className={cls}/>
        <input name="bairro" required placeholder="Bairro" className={cls}/>
      </div>
      <select name="servico" required className={cls}>
        <option value="">Selecione o serviço</option>
        <option>Dedetização</option>
        <option>Descupinização</option>
        <option>Desratização</option>
        <option>Controle de escorpiões</option>
        <option>Plano empresarial</option>
      </select>
      <textarea name="mensagem" rows={4} placeholder="Descreva sua necessidade" className={cls}/>
      <button className="btn btn-orange" type="submit">Enviar pelo WhatsApp</button>
    </form>
  )
}
