"use client";

import { FormEvent } from "react";

export default function QuoteForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const message = [
      "Olá, gostaria de solicitar um orçamento.",
      "",
      `Nome: ${form.get("nome") || ""}`,
      `Telefone: ${form.get("telefone") || ""}`,
      `Bairro: ${form.get("bairro") || ""}`,
      `Serviço: ${form.get("servico") || ""}`,
      `Detalhes: ${form.get("detalhes") || "Não informado"}`,
    ].join("\n");

    window.gtag?.("event", "generate_lead", {
      method: "whatsapp_form",
      service: String(form.get("servico") || "nao_informado"),
    });

    window.open(
      `https://wa.me/5567981086008?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form-grid">
      <input className="field" name="nome" required placeholder="Nome completo" />

      <div className="form-two">
        <input className="field" name="telefone" required placeholder="WhatsApp" />
        <input className="field" name="bairro" required placeholder="Bairro" />
      </div>

      <select className="field" name="servico" required defaultValue="">
        <option value="" disabled>Selecione o serviço</option>
        <option>Dedetização</option>
        <option>Desratização</option>
        <option>Descupinização</option>
        <option>Controle de escorpiões</option>
        <option>Controle de baratas</option>
        <option>Controle de formigas</option>
        <option>Controle de aranhas</option>
        <option>Plano empresarial</option>
      </select>

      <textarea
        className="field"
        name="detalhes"
        rows={4}
        placeholder="Descreva a situação"
      />

      <button className="btn btn-green" type="submit">
        Enviar pelo WhatsApp
      </button>
    </form>
  );
}
