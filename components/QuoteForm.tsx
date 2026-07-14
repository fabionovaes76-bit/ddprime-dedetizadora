"use client";

import { FormEvent } from "react";

export default function QuoteForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const nome = String(form.get("nome") || "");
    const telefone = String(form.get("telefone") || "");
    const bairro = String(form.get("bairro") || "");
    const servico = String(form.get("servico") || "");

    const mensagem =
      `Olá, sou ${nome}. Gostaria de solicitar um orçamento para ${servico}. ` +
      `Bairro: ${bairro}. Meu telefone é ${telefone}.`;

    window.open(
      `https://wa.me/5567981086008?text=${encodeURIComponent(mensagem)}`,
      "_blank"
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card grid gap-4 p-6 md:grid-cols-2">
      <label className="grid gap-2 font-bold">
        Nome
        <input
          name="nome"
          required
          className="rounded-xl border border-slate-300 p-3 font-normal outline-none focus:border-orange-500"
        />
      </label>

      <label className="grid gap-2 font-bold">
        Telefone
        <input
          name="telefone"
          required
          className="rounded-xl border border-slate-300 p-3 font-normal outline-none focus:border-orange-500"
        />
      </label>

      <label className="grid gap-2 font-bold">
        Bairro
        <input
          name="bairro"
          required
          className="rounded-xl border border-slate-300 p-3 font-normal outline-none focus:border-orange-500"
        />
      </label>

      <label className="grid gap-2 font-bold">
        Serviço
        <select
          name="servico"
          required
          className="rounded-xl border border-slate-300 bg-white p-3 font-normal outline-none focus:border-orange-500"
        >
          <option value="">Selecione</option>
          <option>Dedetização</option>
          <option>Descupinização</option>
          <option>Desratização</option>
          <option>Controle de escorpiões</option>
          <option>Contrato empresarial</option>
        </select>
      </label>

      <button className="button button-primary md:col-span-2" type="submit">
        Enviar pelo WhatsApp
      </button>
    </form>
  );
}
