"use client";

import { FormEvent } from "react";

export default function QuoteSimulator() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Olá, gostaria de solicitar um orçamento.",
      "",
      `Nome: ${form.get("nome") || ""}`,
      `Telefone: ${form.get("telefone") || ""}`,
      `Bairro: ${form.get("bairro") || ""}`,
      `Tipo de imóvel: ${form.get("imovel") || ""}`,
      `Serviço: ${form.get("servico") || ""}`,
      `Detalhes: ${form.get("detalhes") || "Não informado"}`,
    ].join("\n");

    window.open(
      `https://wa.me/5567981086008?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }

  const field =
    "rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-orange-500";

  return (
    <form onSubmit={handleSubmit} className="card grid gap-4 p-6 md:grid-cols-2">
      <label className="grid gap-2 font-bold">Nome
        <input name="nome" required className={field} />
      </label>
      <label className="grid gap-2 font-bold">Telefone
        <input name="telefone" required className={field} />
      </label>
      <label className="grid gap-2 font-bold">Bairro
        <input name="bairro" required className={field} />
      </label>
      <label className="grid gap-2 font-bold">Tipo de imóvel
        <select name="imovel" required className={field}>
          <option value="">Selecione</option>
          <option>Residência</option>
          <option>Empresa</option>
          <option>Condomínio</option>
          <option>Restaurante ou comércio</option>
        </select>
      </label>
      <label className="grid gap-2 font-bold md:col-span-2">Serviço
        <select name="servico" required className={field}>
          <option value="">Selecione</option>
          <option>Dedetização</option>
          <option>Descupinização</option>
          <option>Desratização</option>
          <option>Controle de escorpiões</option>
          <option>Plano empresarial</option>
        </select>
      </label>
      <label className="grid gap-2 font-bold md:col-span-2">Detalhes
        <textarea
          name="detalhes"
          rows={4}
          className={field}
          placeholder="Conte onde aparecem as pragas e há quanto tempo."
        />
      </label>
      <button type="submit" className="btn btn-primary md:col-span-2">
        Enviar pelo WhatsApp
      </button>
    </form>
  );
}
